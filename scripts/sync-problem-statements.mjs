import fs from "fs";
import path from "path";
import { PDFDocument } from "pdf-lib";
import { PDFParse } from "pdf-parse";

const rootDir = process.cwd();
const publicDir = path.join(rootDir, "public");
const basePsDir = path.join(publicDir, "problem-statements");

const TRACKS = [
  {
    slug: "aiml",
    name: "Artificial Intelligence and Machine Learning (AI/ML)",
    shortName: "AI/ML",
    icon: "🤖",
    defaultIntro:
      "This track invites participants to apply data-driven intelligence to decision-making in agriculture. Solutions should be practical for smallholder and commercial farmers, should explain their outputs in plain language, and should acknowledge the uncertainty that is inherent in any prediction.",
    startPage: 2,
    endPage: 6,
    defaultFilename: "Track_1_Artificial_Intelligence_and_Machine_Learning.pdf",
  },
  {
    slug: "iot",
    name: "Internet of Things (IoT)",
    shortName: "IoT",
    icon: "📡",
    defaultIntro:
      "This track focuses on low-cost sensing, communication, and control systems that bring real-time information and automation to farms and post-harvest operations. Solutions should be rugged, energy-conscious, and simple enough for farmers to install and maintain.",
    startPage: 7,
    endPage: 11,
    defaultFilename: "Track_2_Internet_of_Things.pdf",
  },
  {
    slug: "drones",
    name: "Drones and Unmanned Aerial Vehicle (UAV) Technology",
    shortName: "Drones",
    icon: "🛸",
    defaultIntro:
      "This track explores the use of unmanned aerial vehicles for observing, mapping, and treating farmland. Participants should consider regulatory requirements, flight safety, and the practical limits of aerial observation, and should present aerial findings as indications that support, not replace, ground verification.",
    startPage: 12,
    endPage: 14,
    defaultFilename: "Track_3_Drones_and_UAV_Technology.pdf",
  },
  {
    slug: "renewable-energy",
    name: "Renewable Energy and Green Technology",
    shortName: "Renewable Energy",
    icon: "⚡",
    defaultIntro:
      "This track addresses the energy needs of farms and agricultural enterprises through renewable and sustainable technologies. Participants should consider energy availability, cost, storage, and the environmental benefits of their proposals, and should state their assumptions about energy supply and demand.",
    startPage: 15,
    endPage: 18,
    defaultFilename: "Track_4_Renewable_Energy_and_Green_Technology.pdf",
  },
  {
    slug: "robotics-automation",
    name: "Robotics and Automation",
    shortName: "Robotics and Automation",
    icon: "🦾",
    defaultIntro:
      "This track encourages the design of machines that reduce repetitive, physically demanding, or hazardous agricultural work. Solutions must cope with uneven terrain, unstructured environments, and limited budgets, and should aim for reliability and safety around people.",
    startPage: 19,
    endPage: 22,
    defaultFilename: "Track_5_Robotics_and_Automation.pdf",
  },
  {
    slug: "open-innovation",
    name: "Open Innovation – Agriculture & Rural Development",
    shortName: "Open Innovation",
    icon: "💡",
    defaultIntro:
      "This track provides an open platform to develop simple, low-cost engineering aids, smart tools, or software applications that address practical challenges faced by farmers and rural communities.",
    startPage: 23,
    endPage: 26,
    defaultFilename: "Track_6_Open_Innovation.pdf",
  },
];

async function splitMasterPdfIfPresent() {
  const masterCandidates = [
    path.join(rootDir, "LEAP_AGRITECH_HACKATHON_2026_Final_Problem_Statements.pdf"),
    path.join(basePsDir, "LEAP_AGRITECH_HACKATHON_2026_Final_Problem_Statements.pdf"),
  ];

  const masterPath = masterCandidates.find((p) => fs.existsSync(p));
  if (!masterPath) {
    console.log("No master combined PDF found; skipping split.");
    return;
  }

  console.log(`Found master PDF at ${masterPath}. Checking track PDFs...`);
  const masterBytes = fs.readFileSync(masterPath);
  const srcDoc = await PDFDocument.load(masterBytes);

  for (const track of TRACKS) {
    const trackDir = path.join(basePsDir, track.slug);
    if (!fs.existsSync(trackDir)) fs.mkdirSync(trackDir, { recursive: true });

    const existingPdfs = fs
      .readdirSync(trackDir)
      .filter((f) => f.toLowerCase().endsWith(".pdf"));

    // If already has track pdf, keep it
    if (existingPdfs.length > 0) continue;

    console.log(`Splitting pages ${track.startPage}-${track.endPage} for track: ${track.slug}`);
    const newDoc = await PDFDocument.create();
    const pageIndices = [];
    for (let p = track.startPage; p <= track.endPage; p++) {
      pageIndices.push(p - 1);
    }
    const copiedPages = await newDoc.copyPages(srcDoc, pageIndices);
    copiedPages.forEach((page) => newDoc.addPage(page));
    const pdfBytes = await newDoc.save();

    const outPath = path.join(trackDir, track.defaultFilename);
    fs.writeFileSync(outPath, pdfBytes);
    console.log(`Wrote ${outPath}`);
  }
}

async function extractProblemTitlesFromPdf(filePath) {
  try {
    const buffer = fs.readFileSync(filePath);
    const parser = new PDFParse({ data: new Uint8Array(buffer) });
    await parser.load();
    const textObj = await parser.getText();
    const text = textObj?.text || "";

    const regex = /Problem\s+Title\s+\d+:\s*([^\n\r]+(?:\r?\n(?![A-Z]\.|\r?\n|Problem\s+Title)[^\n\r]+)*)/gi;
    let match;
    const titles = [];

    while ((match = regex.exec(text)) !== null) {
      const clean = match[0].replace(/\r?\n\s*/g, " ").trim();
      titles.push(clean);
    }

    return titles;
  } catch (err) {
    console.error(`Error parsing ${filePath}:`, err.message);
    return [];
  }
}

async function syncAllTracks() {
  await splitMasterPdfIfPresent();

  const manifest = [];

  for (const track of TRACKS) {
    const trackDir = path.join(basePsDir, track.slug);
    let pdfFilename = null;
    let problemTitles = [];

    if (fs.existsSync(trackDir)) {
      const files = fs
        .readdirSync(trackDir)
        .filter((f) => f.toLowerCase().endsWith(".pdf"));

      if (files.length > 0) {
        pdfFilename = files[0];
        const filePath = path.join(trackDir, pdfFilename);
        problemTitles = await extractProblemTitlesFromPdf(filePath);
      }
    }

    const hasPdf = Boolean(pdfFilename);

    manifest.push({
      slug: track.slug,
      name: track.name,
      shortName: track.shortName,
      icon: track.icon,
      intro: track.defaultIntro,
      filename: pdfFilename || undefined,
      viewUrl: pdfFilename
        ? `/problem-statements/${track.slug}/${encodeURIComponent(pdfFilename)}`
        : undefined,
      downloadUrl: pdfFilename
        ? `/problem-statements/${track.slug}/${encodeURIComponent(pdfFilename)}`
        : undefined,
      problemTitles,
      hasPdf,
    });
  }

  const manifestPath = path.join(basePsDir, "manifest.json");
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), "utf8");
  console.log(`Wrote manifest with ${manifest.length} tracks to ${manifestPath}`);
}

syncAllTracks().catch((err) => {
  console.error("Failed to sync problem statements:", err);
  process.exit(1);
});
