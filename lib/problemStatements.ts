import fs from "fs";
import path from "path";

export interface ProblemStatement {
  title: string;
  filename: string;
  viewUrl: string;
  downloadUrl: string;
}

export interface TrackData {
  slug: string;
  name: string;
  shortName: string;
  icon: string;
  problemStatements: ProblemStatement[];
}

const TRACKS: { slug: string; name: string; shortName: string; icon: string }[] = [
  { slug: "aiml", name: "AI and Machine Learning (AIML)", shortName: "AIML", icon: "🤖" },
  { slug: "iot", name: "Internet of Things (IoT)", shortName: "IoT", icon: "📡" },
  { slug: "drones", name: "Drones", shortName: "Drones", icon: "🛸" },
  { slug: "renewable-energy", name: "Renewable Energy", shortName: "Energy", icon: "⚡" },
  { slug: "robotics-automation", name: "Robotics and Automation", shortName: "Robotics", icon: "🦾" },
  { slug: "open-innovation", name: "Open Innovation", shortName: "Open", icon: "💡" },
];

/**
 * Cleans a PDF filename into a human-readable title.
 * Strips ".pdf", replaces underscores/hyphens with spaces, converts to title case.
 */
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
 * Reads problem statement PDFs from the file system at build time.
 * Scans /public/problem-statements/<track-slug>/ for PDF files.
 */
export function getProblemStatements(): TrackData[] {
  const baseDir = path.join(process.cwd(), "public", "problem-statements");

  return TRACKS.map((track) => {
    const trackDir = path.join(baseDir, track.slug);
    let problemStatements: ProblemStatement[] = [];

    if (fs.existsSync(trackDir)) {
      const files = fs.readdirSync(trackDir).filter((f) => f.toLowerCase().endsWith(".pdf"));

      problemStatements = files.map((filename) => ({
        title: cleanFilename(filename),
        filename,
        viewUrl: `/problem-statements/${track.slug}/${encodeURIComponent(filename)}`,
        downloadUrl: `/problem-statements/${track.slug}/${encodeURIComponent(filename)}`,
      }));
    }

    return {
      ...track,
      problemStatements,
    };
  });
}
