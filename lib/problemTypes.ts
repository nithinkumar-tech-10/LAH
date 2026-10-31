export type ProblemType = "Software" | "Hardware" | "Hardware + Software";

export const PROBLEM_TYPES: Record<string, ProblemType> = {
  // AI/ML: 6 Software
  "aiml-1": "Software",
  "aiml-2": "Software",
  "aiml-3": "Software",
  "aiml-4": "Software",
  "aiml-5": "Software",
  "aiml-6": "Software",

  // IoT: 6 Hardware
  "iot-1": "Hardware",
  "iot-2": "Hardware",
  "iot-3": "Hardware",
  "iot-4": "Hardware",
  "iot-5": "Hardware",
  "iot-6": "Hardware",

  // Drones: 4 Hardware + Software
  "drones-1": "Hardware + Software",
  "drones-2": "Hardware + Software",
  "drones-3": "Hardware + Software",
  "drones-4": "Hardware + Software",

  // Renewable Energy: 5 Hardware
  "renewable-energy-1": "Hardware",
  "renewable-energy-2": "Hardware",
  "renewable-energy-3": "Hardware",
  "renewable-energy-4": "Hardware",
  "renewable-energy-5": "Hardware",

  // Robotics and Automation: 6 Hardware
  "robotics-automation-1": "Hardware",
  "robotics-automation-2": "Hardware",
  "robotics-automation-3": "Hardware",
  "robotics-automation-4": "Hardware",
  "robotics-automation-5": "Hardware",
  "robotics-automation-6": "Hardware",

  // Open Innovation: 2 Hardware, 3 Software
  "open-innovation-1": "Hardware",
  "open-innovation-2": "Hardware",
  "open-innovation-3": "Software",
  "open-innovation-4": "Software",
  "open-innovation-5": "Software",
};

