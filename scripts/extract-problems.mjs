import fs from "fs";
import path from "path";
import { PDFParse } from "pdf-parse";

const rootDir = process.cwd();
const pdfPath = path.join(rootDir, "LEAP_AGRITECH_HACKATHON_2026_Final_Problem_Statements.pdf");
const outputPath = path.join(rootDir, "lib", "problems.json");

if (!fs.existsSync(pdfPath)) {
  console.error(`Error: Source PDF not found at ${pdfPath}`);
  process.exit(1);
}

const TRACK_DEFS = [
  { prefix: "Track 1:", name: "AI/ML", slug: "aiml" },
  { prefix: "Track 2:", name: "IoT", slug: "iot" },
  { prefix: "Track 3:", name: "Drones", slug: "drones" },
  { prefix: "Track 4:", name: "Renewable Energy", slug: "renewable-energy" },
  { prefix: "Track 5:", name: "Robotics and Automation", slug: "robotics-automation" },
  { prefix: "Track 6:", name: "Open Innovation", slug: "open-innovation" },
];

async function extractProblems() {
  console.log(`Reading ${pdfPath}...`);
  const bytes = fs.readFileSync(pdfPath);
  const parser = new PDFParse({ data: new Uint8Array(bytes) });
  await parser.load();
  const rawText = (await parser.getText()).text;

  // Filter out running headers, footers and page markers
  const lines = rawText.split(/\r?\n/).filter((line) => {
    const trimmed = line.trim();
    if (!trimmed) return false;
    if (trimmed === "LEAP AGRITECH HACKATHON") return false;
    if (/^Page \d+$/i.test(trimmed)) return false;
    if (/^-- \d+ of 27 --$/i.test(trimmed)) return false;
    return true;
  });

  const problems = [];
  let currentTrack = null;
  let currentProblem = null;
  let state = "IDLE"; // 'DESC' | 'CHALLENGES' | 'TRACK' | 'DONE'
  let descLines = [];
  let challengeItems = [];
  let currentChallengeText = "";

  function flushCurrentChallenge() {
    if (currentChallengeText.trim()) {
      challengeItems.push(currentChallengeText.trim());
      currentChallengeText = "";
    }
  }

  function flushProblem() {
    if (currentProblem) {
      flushCurrentChallenge();

      // Group description lines into logical paragraphs
      // When a line ends with a period and is short, or is a paragraph boundary, split into paragraphs
      const paragraphs = [];
      let currentParaLines = [];

      for (let j = 0; j < descLines.length; j++) {
        const l = descLines[j].trim();
        if (!l) continue;
        currentParaLines.push(l);

        // Check for natural paragraph end:
        // 1) line ends with period and next line starts with a new sentence that introduces a solution/tool/proposal
        // or 2) line ends with period and is significantly short (< 55 chars)
        const isLastLine = j === descLines.length - 1;
        const nextLine = !isLastLine ? descLines[j + 1].trim() : "";
        const startsSolution = /^(Develop |Design |A digital |An early|A platform|A data|A load|A robot|An automated|A precise|Renewable |Small processing|Many farmers|Different products|Solar |Biomass )/i.test(
          nextLine
        );

        if (
          !isLastLine &&
          l.endsWith(".") &&
          (l.length < 55 || startsSolution)
        ) {
          paragraphs.push(currentParaLines.join(" "));
          currentParaLines = [];
        }
      }

      if (currentParaLines.length > 0) {
        paragraphs.push(currentParaLines.join(" "));
      }

      currentProblem.description = paragraphs.length > 0 ? paragraphs : [descLines.join(" ")];
      currentProblem.challenges = challengeItems;

      problems.push(currentProblem);
      currentProblem = null;
      descLines = [];
      challengeItems = [];
      currentChallengeText = "";
    }
  }

  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    // Track heading
    const trackFound = TRACK_DEFS.find((t) => trimmed.startsWith(t.prefix));
    if (trackFound) {
      flushProblem();
      currentTrack = trackFound;
      state = "TRACK";
      i++;
      continue;
    }

    // Problem title
    const probMatch = trimmed.match(/^Problem\s+Title\s+(\d+):\s*(.*)/i);
    if (probMatch) {
      flushProblem();
      const num = parseInt(probMatch[1], 10);
      let titleParts = [probMatch[2].trim()];
      i++;

      // Collect multiline title until "A. Problem Description"
      while (i < lines.length && !lines[i].trim().startsWith("A. Problem Description")) {
        const nextTrim = lines[i].trim();
        if (nextTrim) titleParts.push(nextTrim);
        i++;
      }

      const fullTitle = titleParts.filter(Boolean).join(" ").trim();
      currentProblem = {
        id: `${currentTrack.slug}-${num}`,
        track: currentTrack.name,
        trackSlug: currentTrack.slug,
        number: num,
        title: fullTitle,
        description: [],
        challenges: [],
      };
      continue;
    }

    if (trimmed.startsWith("A. Problem Description")) {
      state = "DESC";
      i++;
      continue;
    }

    if (trimmed.startsWith("B. Challenges")) {
      state = "CHALLENGES";
      i++;
      continue;
    }

    if (trimmed.startsWith("Conclusion")) {
      flushProblem();
      state = "DONE";
      break;
    }

    if (state === "DESC") {
      descLines.push(trimmed);
    } else if (state === "CHALLENGES") {
      const numMatch = trimmed.match(/^(\d+)\.\s*(.*)/);
      if (numMatch) {
        flushCurrentChallenge();
        currentChallengeText = numMatch[2].trim();
      } else if (currentChallengeText && trimmed) {
        currentChallengeText += ` ${trimmed}`;
      }
    }

    i++;
  }

  flushProblem();

  console.log(`\nSuccessfully extracted ${problems.length} problems total.`);

  // Validation
  let hasErrors = false;
  const countsByTrack = {};

  // Post-processing & British Spelling Normalisation
  const britishReplacements = [
    [/\banalyze\b/g, "analyse"],
    [/\banalyzes\b/g, "analyses"],
    [/\banalyzed\b/g, "analysed"],
    [/\banalyzing\b/g, "analysing"],
    [/\brecognize\b/g, "recognise"],
    [/\brecognizes\b/g, "recognises"],
    [/\brecognized\b/g, "recognised"],
    [/\brecognizing\b/g, "recognising"],
    [/\bminimizing\b/g, "minimising"],
    [/\bminimize\b/g, "minimise"],
    [/\bminimizes\b/g, "minimises"],
    [/\bminimized\b/g, "minimised"],
    [/\bprioritize\b/g, "prioritise"],
    [/\bprioritizes\b/g, "prioritises"],
    [/\bprioritized\b/g, "prioritised"],
    [/\bprioritizing\b/g, "prioritising"],
    [/\bfertilizer\b/g, "fertiliser"],
    [/\bfertilizers\b/g, "fertilisers"],
    [/\bFertilizer\b/g, "Fertiliser"],
    [/\bFertilizers\b/g, "Fertilisers"],
    [/\borganize\b/g, "organise"],
    [/\borganizes\b/g, "organises"],
    [/\borganized\b/g, "organised"],
    [/\borganizing\b/g, "organising"],
    [/\bOrganizing\b/g, "Organising"],
    [/\boptimization\b/g, "optimisation"],
    [/\bOptimization\b/g, "Optimisation"],
    [/\bbehavior\b/g, "behaviour"],
    [/\bbehaviors\b/g, "behaviours"],
    [/\bcolor\b/g, "colour"],
    [/\bcolors\b/g, "colours"],
    [/\blabor\b/g, "labour"],
    [/\blocalization\b/g, "localisation"],
    [/\bgeneralize\b/g, "generalise"],
    [/\bgeneralizes\b/g, "generalises"],
    [/\bgeneralizing\b/g, "generalising"],
    [/\bgeneralized\b/g, "generalised"],
  ];

  function applySpelling(text) {
    if (!text) return text;
    let res = text;
    for (const [pattern, repl] of britishReplacements) {
      res = res.replace(pattern, repl);
    }
    return res;
  }

  for (const prob of problems) {
    // 1. Overlap lines (Item 6)
    if (prob.id === "iot-1") {
      const line = "Focus: sensors that measure soil moisture and automatic control of valves or pumps.";
      if (!prob.description[0].startsWith(line)) {
        prob.description.unshift(line);
      }
    }
    if (prob.id === "renewable-energy-2") {
      const line = "Focus: powering the pump with solar energy.";
      if (!prob.description[0].startsWith(line)) {
        prob.description.unshift(line);
      }
    }
    if (prob.id === "iot-2") {
      const line = "Focus: a monitored and controlled drying chamber for leaves.";
      if (!prob.description[0].startsWith(line)) {
        prob.description.unshift(line);
      }
    }
    if (prob.id === "renewable-energy-1") {
      const line = "Focus: drying with solar or other renewable heat.";
      if (!prob.description[0].startsWith(line)) {
        prob.description.unshift(line);
      }
    }

    // 2. Renewable Energy Problem 1 replacement in paragraph 3 (Item 3)
    if (prob.id === "renewable-energy-1") {
      for (let idx = 0; idx < prob.description.length; idx++) {
        if (prob.description[idx].startsWith("Different products require different drying conditions")) {
          prob.description[idx] = prob.description[idx].replace(
            "For example, spices, coffee, and grains each have preferred temperature ranges and final moisture levels",
            "For example, drying coffee beans, cumin seeds, pepper and other seeds each needs its own temperature range and final moisture level"
          );
        }
      }
    }

    // 3. Sentence fixes (Item 4)
    if (prob.id === "iot-5") {
      for (let idx = 0; idx < prob.description.length; idx++) {
        prob.description[idx] = prob.description[idx].replace(
          "Develop a low-cost, lightweight, and portable milk-chilling can that helps",
          "Develop a low-cost, lightweight, and portable milk-chilling container (can) that helps"
        );
      }
    }
    if (prob.id === "robotics-automation-4") {
      for (let idx = 0; idx < prob.description.length; idx++) {
        prob.description[idx] = prob.description[idx].replace(
          "This work takes labour from tasks needing greater skill.",
          "This also takes workers away from tasks that need more skill."
        );
      }
      for (let idx = 0; idx < prob.challenges.length; idx++) {
        prob.challenges[idx] = prob.challenges[idx].replace(
          "Localisation without reliable GPS under tree cover.",
          "Knowing the robot's position without reliable GPS under tree cover."
        );
      }
    }

    // 4. Plain language glosses (Item 5)
    if (prob.id === "drones-3") {
      for (let idx = 0; idx < prob.description.length; idx++) {
        prob.description[idx] = prob.description[idx].replace(
          "orthomosaic maps and elevation models",
          "orthomosaic maps (accurate, map-like aerial images) and elevation models (height maps of the land)"
        );
      }
    }
    if (prob.id === "renewable-energy-5") {
      for (let idx = 0; idx < prob.description.length; idx++) {
        prob.description[idx] = prob.description[idx].replace(
          "Motors starting under load create high power peaks",
          "Motors starting under load draw a large surge of power (high power peaks)"
        );
      }
    }
    if (prob.id === "iot-1") {
      for (let idx = 0; idx < prob.challenges.length; idx++) {
        prob.challenges[idx] = prob.challenges[idx].replace(
          "Sensor accuracy, calibration, and drift",
          "Sensor accuracy, calibration (setting sensors so readings are correct), and drift (readings slowly moving away from correct values)"
        );
      }
    }

    // 5. British spelling across all fields (Item 2)
    prob.title = applySpelling(prob.title);
    prob.description = prob.description.map(applySpelling);
    prob.challenges = prob.challenges.map(applySpelling);

    countsByTrack[prob.track] = (countsByTrack[prob.track] || 0) + 1;

    if (!prob.title || prob.title.length < 3) {
      console.error(`Validation Error: Problem ${prob.id} has invalid title: "${prob.title}"`);
      hasErrors = true;
    }
    if (!prob.description || prob.description.length === 0 || prob.description.some((p) => !p.trim())) {
      console.error(`Validation Error: Problem ${prob.id} has empty description`);
      hasErrors = true;
    }
    if (!prob.challenges || prob.challenges.length === 0 || prob.challenges.some((c) => !c.trim())) {
      console.error(`Validation Error: Problem ${prob.id} has empty challenges`);
      hasErrors = true;
    }
  }

  console.log("\nCounts per Track:");
  Object.entries(countsByTrack).forEach(([track, count]) => {
    console.log(`  - ${track}: ${count} problems`);
  });

  if (hasErrors) {
    console.error("\nExtraction completed with errors. Halting.");
    process.exit(1);
  }

  const libDir = path.dirname(outputPath);
  if (!fs.existsSync(libDir)) fs.mkdirSync(libDir, { recursive: true });

  fs.writeFileSync(outputPath, JSON.stringify(problems, null, 2), "utf8");
  console.log(`\nSaved output to ${outputPath}`);
}

extractProblems().catch((err) => {
  console.error("Extraction failed:", err);
  process.exit(1);
});
