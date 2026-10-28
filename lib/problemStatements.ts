import fs from "fs";
import path from "path";

export interface ProblemItem {
  id: string;
  track: string;
  trackSlug: string;
  number: number;
  title: string;
  description: string[];
  challenges: string[];
}

export interface TrackGroup {
  slug: string;
  name: string;
  shortName: string;
  icon: string;
  intro: string;
  problems: ProblemItem[];
}

export const TRACK_CONFIGS: {
  slug: string;
  name: string;
  shortName: string;
  icon: string;
  intro: string;
}[] = [
  {
    slug: "aiml",
    name: "Artificial Intelligence and Machine Learning (AI/ML)",
    shortName: "AI/ML",
    icon: "🤖",
    intro:
      "This track invites participants to apply data-driven intelligence to decision-making in agriculture. Solutions should be practical for smallholder and commercial farmers, should explain their outputs in plain language, and should acknowledge the uncertainty that is inherent in any prediction.",
  },
  {
    slug: "iot",
    name: "Internet of Things (IoT)",
    shortName: "IoT",
    icon: "📡",
    intro:
      "This track focuses on low-cost sensing, communication, and control systems that bring real-time information and automation to farms and post-harvest operations. Solutions should be rugged, energy-conscious, and simple enough for farmers to install and maintain.",
  },
  {
    slug: "drones",
    name: "Drones and Unmanned Aerial Vehicle (UAV) Technology",
    shortName: "Drones",
    icon: "🛸",
    intro:
      "This track explores the use of unmanned aerial vehicles for observing, mapping, and treating farmland. Participants should consider regulatory requirements, flight safety, and the practical limits of aerial observation, and should present aerial findings as indications that support, not replace, ground verification.",
  },
  {
    slug: "renewable-energy",
    name: "Renewable Energy and Green Technology",
    shortName: "Renewable Energy",
    icon: "⚡",
    intro:
      "This track addresses the energy needs of farms and agricultural enterprises through renewable and sustainable technologies. Participants should consider energy availability, cost, storage, and the environmental benefits of their proposals, and should state their assumptions about energy supply and demand.",
  },
  {
    slug: "robotics-automation",
    name: "Robotics and Automation",
    shortName: "Robotics and Automation",
    icon: "🦾",
    intro:
      "This track encourages the design of machines that reduce repetitive, physically demanding, or hazardous agricultural work. Solutions must cope with uneven terrain, unstructured environments, and limited budgets, and should aim for reliability and safety around people.",
  },
  {
    slug: "open-innovation",
    name: "Open Innovation – Agriculture & Rural Development",
    shortName: "Open Innovation",
    icon: "💡",
    intro:
      "This track provides an open platform to develop simple, low-cost engineering aids, smart tools, or software applications that address practical challenges faced by farmers and rural communities.",
  },
];

/**
 * Loads problems from lib/problems.json and groups them by track in the canonical order.
 */
export function getTrackGroups(): TrackGroup[] {
  const jsonPath = path.join(process.cwd(), "lib", "problems.json");

  let allProblems: ProblemItem[] = [];
  if (fs.existsSync(jsonPath)) {
    try {
      const raw = fs.readFileSync(jsonPath, "utf8");
      allProblems = JSON.parse(raw);
    } catch (e) {
      console.error("Failed to parse lib/problems.json:", e);
    }
  }

  return TRACK_CONFIGS.map((config) => {
    const trackProblems = allProblems.filter((p) => p.trackSlug === config.slug);
    return {
      slug: config.slug,
      name: config.name,
      shortName: config.shortName,
      icon: config.icon,
      intro: config.intro,
      problems: trackProblems,
    };
  });
}
