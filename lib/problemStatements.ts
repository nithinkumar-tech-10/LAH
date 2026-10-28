import fs from "fs";
import path from "path";

export interface TrackData {
  slug: string;
  name: string;
  shortName: string;
  icon: string;
  intro: string;
  filename?: string;
  viewUrl?: string;
  downloadUrl?: string;
  problemTitles: string[];
  hasPdf: boolean;
}

export const TRACK_CONFIGS: {
  slug: string;
  name: string;
  shortName: string;
  icon: string;
  defaultIntro: string;
}[] = [
  {
    slug: "aiml",
    name: "Artificial Intelligence and Machine Learning (AI/ML)",
    shortName: "AI/ML",
    icon: "🤖",
    defaultIntro:
      "This track invites participants to apply data-driven intelligence to decision-making in agriculture. Solutions should be practical for smallholder and commercial farmers, should explain their outputs in plain language, and should acknowledge the uncertainty that is inherent in any prediction.",
  },
  {
    slug: "iot",
    name: "Internet of Things (IoT)",
    shortName: "IoT",
    icon: "📡",
    defaultIntro:
      "This track focuses on low-cost sensing, communication, and control systems that bring real-time information and automation to farms and post-harvest operations. Solutions should be rugged, energy-conscious, and simple enough for farmers to install and maintain.",
  },
  {
    slug: "drones",
    name: "Drones and Unmanned Aerial Vehicle (UAV) Technology",
    shortName: "Drones",
    icon: "🛸",
    defaultIntro:
      "This track explores the use of unmanned aerial vehicles for observing, mapping, and treating farmland. Participants should consider regulatory requirements, flight safety, and the practical limits of aerial observation, and should present aerial findings as indications that support, not replace, ground verification.",
  },
  {
    slug: "renewable-energy",
    name: "Renewable Energy and Green Technology",
    shortName: "Renewable Energy",
    icon: "⚡",
    defaultIntro:
      "This track addresses the energy needs of farms and agricultural enterprises through renewable and sustainable technologies. Participants should consider energy availability, cost, storage, and the environmental benefits of their proposals, and should state their assumptions about energy supply and demand.",
  },
  {
    slug: "robotics-automation",
    name: "Robotics and Automation",
    shortName: "Robotics and Automation",
    icon: "🦾",
    defaultIntro:
      "This track encourages the design of machines that reduce repetitive, physically demanding, or hazardous agricultural work. Solutions must cope with uneven terrain, unstructured environments, and limited budgets, and should aim for reliability and safety around people.",
  },
  {
    slug: "open-innovation",
    name: "Open Innovation – Agriculture & Rural Development",
    shortName: "Open Innovation",
    icon: "💡",
    defaultIntro:
      "This track provides an open platform to develop simple, low-cost engineering aids, smart tools, or software applications that address practical challenges faced by farmers and rural communities.",
  },
];

function cleanFilename(filename: string): string {
  const name = filename.replace(/\.pdf$/i, "");
  const spaced = name.replace(/[_-]+/g, " ").trim();
  const acronyms: Record<string, string> = {
    leap: "LEAP",
    ai: "AI",
    aiml: "AIML",
    iot: "IoT",
    ml: "ML",
    pdf: "PDF",
    ps: "PS",
  };
  return spaced
    .split(/\s+/)
    .map((word) => {
      const lower = word.toLowerCase();
      if (acronyms[lower]) return acronyms[lower];
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
}

/**
 * Reads problem statement data from the file system at build time.
 * Syncs with public/problem-statements/<track-slug>/ and manifest.json.
 * If a new PDF is dropped into any track folder and the project is rebuilt, it automatically updates.
 */
export async function getProblemStatements(): Promise<TrackData[]> {
  const baseDir = path.join(process.cwd(), "public", "problem-statements");
  const manifestPath = path.join(baseDir, "manifest.json");

  let manifestMap: Record<string, TrackData> = {};
  if (fs.existsSync(manifestPath)) {
    try {
      const raw = fs.readFileSync(manifestPath, "utf8");
      const list: TrackData[] = JSON.parse(raw);
      manifestMap = Object.fromEntries(list.map((item) => [item.slug, item]));
    } catch (e) {
      console.warn("Could not read problem-statements manifest:", e);
    }
  }

  const results: TrackData[] = [];

  for (const track of TRACK_CONFIGS) {
    const trackDir = path.join(baseDir, track.slug);
    let pdfFile: string | null = null;

    if (fs.existsSync(trackDir)) {
      const files = fs
        .readdirSync(trackDir)
        .filter((f) => f.toLowerCase().endsWith(".pdf"));

      if (files.length > 0) {
        pdfFile = files[0];
      }
    }

    const hasPdf = Boolean(pdfFile);
    const cached = manifestMap[track.slug];

    let problemTitles: string[] = [];
    if (hasPdf) {
      if (cached && cached.filename === pdfFile && cached.problemTitles?.length > 0) {
        problemTitles = cached.problemTitles;
      } else if (pdfFile) {
        problemTitles = [`Problem Statement: ${cleanFilename(pdfFile)}`];
      }
    }

    results.push({
      slug: track.slug,
      name: track.name,
      shortName: track.shortName,
      icon: track.icon,
      intro: track.defaultIntro,
      filename: pdfFile || undefined,
      viewUrl: pdfFile
        ? `/problem-statements/${track.slug}/${encodeURIComponent(pdfFile)}`
        : undefined,
      downloadUrl: pdfFile
        ? `/problem-statements/${track.slug}/${encodeURIComponent(pdfFile)}`
        : undefined,
      problemTitles,
      hasPdf,
    });
  }

  return results;
}
