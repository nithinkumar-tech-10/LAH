export interface Coordinator {
  name: string;
  role?: string;
  phone: string;
  formattedPhone: string;
}

export interface CommitteeMember {
  name: string;
  designation: string;
  title: string;
  avatarText?: string;
  image?: string;
  designationLines?: string[];
}

export interface TimelineItem {
  time: string;
  title: string;
  description?: string;
  type: "registration" | "ceremony" | "round" | "break" | "review" | "conclude";
}

export interface HackathonRound {
  number: number;
  title: string;
  badge: string;
  description: string;
  highlights: string[];
  duration?: string;
}

export interface RuleItem {
  id: number;
  title: string;
  description: string;
  tag: string;
  severity: "high" | "mandatory" | "critical";
}

// paste Google Form link here
export const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSek-LbVO6BLaAC1uTFma5buuQ-eOHWbA73FPnNUaWR_LSkuDg/viewform?usp=publish-editor";

export const HACKATHON_LOGO = "/logos/leap-agritech-hackathon-logo.jpeg";
export const HACKATHON_OG_IMAGE = "/logos/leap-agritech-hackathon-og.jpeg";

export const HACKATHON_DATA = {
  // Global links & Event Dates
  title: "24 HOURS LEAP AGRITECH HACKATHON 2026",
  googleFormUrl: GOOGLE_FORM_URL,
  importantDates: [
    {
      date: "31 October 2026",
      time: "Release",
      title: "Six Tracks & Problem Statements Released",
      description: "Six tracks and their respective problem statements are released. Each team must carefully review and select ONE problem statement.",
      tag: "Track Release",
    },
    {
      date: "1 November 2026",
      time: "5:00 PM IST",
      title: "PPT Submission Deadline (Pre-Round)",
      description: "Last date to submit the PPT (Pre-Round) through the Google Form. Compulsory for every team. Only official PPT template permitted.",
      tag: "Pre-Round (Compulsory)",
      deadline: true,
    },
    {
      date: "2 November 2026",
      time: "9:30 AM IST",
      title: "Hackathon Begins (24 Hours)",
      description: "24-hour non-stop agritech hackathon begins at Kuvempu Sabhangana, GMIT Mandya. Idea presentation in Round 1, followed by prototype build in Round 2.",
      tag: "24-Hour Sprint",
    },
  ],
  shortTitle: "LEAP Agritech Hackathon 2026",
  tagline: "Innovation Agriculture for a Smarter, Sustainable Future.",
  eventStartISO: "2026-11-02T09:30:00+05:30",
  eventEndISO: "2026-11-03T14:30:00+05:30",
  datesDisplay: "2–3 November 2026",
  duration: "24 Hours Non-Stop",
  prizePool: "₹25,000",
  entryFee: "Free",
  teamSize: "1–3 Members",
  venueName: "Kuvempu Sabhangana, GMIT, Mandya",
  venueAddress: "G. Madegowda Institute of Technology, Bharathinagara, Maddur Taluk, Mandya District, Karnataka - 571422",
  mapsUrl: "https://maps.app.goo.gl/5E1X9sd2sxRrPeYG7?g_st=aw",
  mapsEmbedQuery: "G Madegowda Institute of Technology, Mandya",

  // Official Logos
  logos: {
    hackathon: HACKATHON_LOGO,
    og: HACKATHON_OG_IMAGE,
    college: "/logos/WhatsApp Image 2026-10-23 at 19.53.23.jpeg",
    ktech: "/logos/WhatsApp Image 2026-10-23 at 20.49.34 (1).jpeg",
    itbt: "/logos/WhatsApp Image 2026-10-23 at 20.49.34.jpeg",
  },

  // PPT Template File
  pptTemplate: {
    url: "/downloads/LEAP_Agritech_Hackathon_2026_Round1_PPT_Template_FrontLogos_v3.pptx",
    filename: "LEAP_Agritech_Hackathon_2026_Round1_PPT_Template_FrontLogos_v3.pptx",
  },

  // College & Partner details
  college: {
    name: "G. Madegowda Institute of Technology",
    affiliation: "Affiliated to VTU Belagavi | Approved by AICTE",
    location: "Bharathinagara, Maddur Taluk, Mandya District, Karnataka",
    website: "https://gmitmandya.ac.in",
    logo: "/logos/WhatsApp Image 2026-10-23 at 19.53.23.jpeg",
  },
  association: {
    leadText: "In Association with",
    organization: "Karnataka Innovation and Technology Society (KITS)",
    department: "Department of Electronics, IT & BT, Government of Karnataka",
    kitsLogo: "/logos/WhatsApp Image 2026-10-23 at 20.49.34 (1).jpeg",
    karnatakaLogo: "/logos/WhatsApp Image 2026-10-23 at 20.49.34.jpeg",
  },

  // Chairman photos
  chairmen: {
    left: {
      name: "Sri G. Madegowda",
      title: "Chairman",
      image: "/photos/Sri G.Madegowda.jpg",
    },
    right: {
      name: "Sri Madhu G Madegowda",
      title: "Chairman, BET",
      image: "/images/committee/chief-patron.jpg",
    },
  },

  // Quick stats
  quickStats: [
    { label: "Prize Pool", value: "₹25,000", sub: "Cash rewards & certificates" },
    { label: "Hackathon Duration", value: "24 Hours", sub: "Non-stop innovation sprint" },
    { label: "Entry Fee", value: "Free", sub: "Open to all eligible students" },
    { label: "Team Size", value: "1–3", sub: "Collaborative squads" },
    { label: "Tracks", value: "6", sub: "AI/ML, IoT, Drones & more" },
    { label: "Shortlisted", value: "4 / Track", sub: "Top teams per track advance" },
  ],

  // About Hackathon & Theme
  about: {
    theme: "Agriculture & Smart Farming Technology",
    themeHeading: "Smart Farming Meets Technology",
    paragraphs: [
      "The 24 Hours LEAP Agritech Hackathon 2026 brings together the brightest young engineering minds, developers, and agricultural enthusiasts to architect real-world technological solutions for the farming backbone.",
      "Get ready to turn your innovative ideas into practical solutions and contribute to the future of smart and sustainable agriculture! Join us at the 24 Hours LEAP Agritech Hackathon 2026 to innovate, collaborate, develop impactful solutions, and shape the future of agriculture through technology."
    ],
  },

  // For Participants (Tracks-based system)
  forParticipants: {
    badge: "For Participants",
    heading: "Choose Your Track & Problem Statement",
    intro: "Choose ONE track and ONE problem statement from it, and prepare a solution for it. Submit your PPT in the Pre-Round. Present your idea in Round 1 (no prototype required). Top 4 teams from each track move forward to Round 2 to build their prototype.",
    cards: [
      {
        step: "01",
        title: "Choose Track & Problem",
        desc: "Pick ONE of the 6 tracks and choose ONE problem statement from that track to prepare a solution.",
      },
      {
        step: "02",
        title: "Pre-Round: Submit PPT",
        desc: "Submit your presentation using the official PPT template via the Google Form before 5:00 PM IST on 1 November 2026. Compulsory for all teams.",
      },
      {
        step: "03",
        title: "Present & 24-Hour Build",
        desc: "Present your idea in Round 1 (a working prototype is NOT required for Round 1). Top 4 teams from each track build their prototype in Round 2.",
      },
    ],
    note: "Round 1 is strictly for idea presentation — a working prototype is NOT required for Round 1. The top 4 teams from each track move forward to Round 2 to build their prototype during the hackathon. Pre-built projects are strictly prohibited.",
    pptNotice: {
      mandatory: "Pre-Round Submission: Teams submit their PPT through the Google Form before 5:00 PM IST on 1 November 2026. Submission is compulsory. Only the official LEAP Agritech Hackathon PPT template may be used. Presentations in any other format are not accepted.",
      slides: "7 slides: Title, Chosen Problem Statement (track and title), Existing Solutions, Our Solution, Technical Approach, Impact and Benefits, Thank You",
      downloadUrl: "/downloads/LEAP_Agritech_Hackathon_2026_Round1_PPT_Template_FrontLogos_v3.pptx",
      filename: "LEAP_Agritech_Hackathon_2026_Round1_PPT_Template_FrontLogos_v3.pptx",
    },
  },

  // Organizing Committee
  committee: [
    {
      title: "Chief Patron",
      name: "Sri Madhu G Madegowda",
      designation: "Chairman, BET",
      designationLines: ["Chairman, BET"],
      avatarText: "MM",
      image: "/images/committee/chief-patron.jpg",
    },
    {
      title: "Patron",
      name: "Dr. Chandan B R",
      designation: "Principal, GMIT",
      designationLines: ["Principal, GMIT"],
      avatarText: "CB",
      image: "/images/committee/patron.jpg",
    },
    {
      title: "Convenor",
      name: "Dr. Sumitha C",
      designation: "Professor and Head,\nCoordinator, Agritech Innovation Lab",
      designationLines: [
        "Professor and Head,",
        "Coordinator, Agritech Innovation Lab",
      ],
      avatarText: "SC",
      image: "/images/committee/convenor.jpg",
    },
    {
      title: "Co-Convenor",
      name: "Dr. Nuthan A C",
      designation: "Professor and Head,\nDepartment of ECE",
      designationLines: [
        "Professor and Head,",
        "Department of ECE",
      ],
      avatarText: "NA",
      image: "/images/committee/co-convenor.jpg",
    },
  ],

  // Coordinators
  coordinators: {
    faculty: [
      { name: "Prof. Ravi Kumar K N", phone: "+919164545670", formattedPhone: "91645 45670", role: "Faculty Coordinator" },
      { name: "Prof. Thanuja K", phone: "+918884655002", formattedPhone: "88846 55002", role: "Faculty Coordinator" },
      { name: "Prof. Chethan R", phone: "+919538144021", formattedPhone: "95381 44021", role: "Faculty Coordinator" },
      { name: "Mr. Harshith Kumar T S", phone: "+919916824680", formattedPhone: "99168 24680", role: "Coordinator" },
    ],
    students: [
      { name: "Sinchana H G", phone: "+918088634023", formattedPhone: "80886 34023", role: "Student Coordinator" },
      { name: "Varshashree Reddy K", phone: "+917760742137", formattedPhone: "77607 42137", role: "Student Coordinator" },
      { name: "Nithin Kumar M", phone: "+919148591987", formattedPhone: "91485 91987", role: "Student Coordinator" },
      { name: "Sudarshan DT", phone: "+918296718625", formattedPhone: "82967 18625", role: "Student Coordinator" },
    ],
  },

  // Hackathon Stages: Pre-Round, Round 1, Round 2
  rounds: [
    {
      number: 0,
      stageNumber: "00",
      stageName: "Pre-Round",
      title: "PPT Submission",
      badge: "Pre-Round • All Teams (Compulsory)",
      description: "Teams submit their PPT through the Google Form before 5:00 PM IST on 1 November 2026. PPT submission is compulsory for every team.",
      highlights: [
        "Select ONE track and ONE problem statement from the released list",
        "Strictly use the official LEAP Agritech Hackathon PPT template",
        "Submit through the Google Form before 5:00 PM IST on 1 November 2026",
        "PPT submission is compulsory for every participating team",
      ],
      duration: "Deadline: 1 Nov 2026, 5:00 PM IST",
      isPreRound: true,
    },
    {
      number: 1,
      stageNumber: "01",
      stageName: "Round 1",
      title: "Idea Presentation",
      badge: "Round 1 • All Teams",
      description: "Teams present their idea (the solution they prepared) to the judges. A working prototype is NOT required for Round 1.",
      highlights: [
        "Present your idea and solution for the chosen problem statement",
        "A working prototype is NOT required for Round 1",
        "Evaluation on innovation, practicality, impact & technical approach",
        "Top 4 teams from each track move forward to Round 2",
      ],
      duration: "Day 1: 10:00 AM – 1:30 PM",
    },
    {
      number: 2,
      stageNumber: "02",
      stageName: "Round 2",
      title: "24-Hour Build",
      badge: "Round 2 • Top 4 Teams per Track",
      description: "The top 4 teams from each track build their prototype during the hackathon. 24 hours of non-stop building, coding, and mentoring.",
      highlights: [
        "Top 4 teams from each track build their working prototype",
        "24-Hour intensive sprint begins inside GMIT innovation labs",
        "Continuous mentorship and technical guidance from experts",
        "Final prototype demo evaluation & ₹25,000 prize distribution",
      ],
      duration: "Day 1: 2:30 PM – Day 2: 1:00 PM",
    },
  ],

  // Event Timeline
  timeline: {
    day1: {
      date: "2 November 2026",
      dayName: "Day 1",
      schedule: [
        { time: "8:00 AM – 9:15 AM", title: "Participant Registration", description: "Verification of ID cards & team desk allocation.", type: "registration" },
        { time: "9:30 AM – 10:00 AM", title: "Inauguration Ceremony", description: "Dignitary welcome, lighting of the lamp & keynote addresses by KITS & GMIT leadership.", type: "ceremony" },
        { time: "10:00 AM – 1:30 PM", title: "Round 1: Idea Presentation", description: "All teams pitch their agricultural concept and proposed architecture to the jury.", type: "round" },
        { time: "1:30 PM – 2:30 PM", title: "Lunch Break", description: "Buffet lunch served for all participants & faculty coordinators.", type: "break" },
        { time: "2:30 PM Onwards", title: "Round 2: 24-Hour Build Begins", description: "Shortlisted teams (top 4 from each track) begin their 24-hour sprint to build working prototypes.", type: "round" },
        { time: "4:45 PM – 5:15 PM", title: "Tea & Snacks Break", description: "Refreshment break to recharge your innovative flow.", type: "break" },
        { time: "5:30 PM – 7:30 PM", title: "Project Review", description: "Mentors review sprint progress and provide architectural guidance.", type: "review" },
        { time: "7:30 PM – 8:30 PM", title: "Dinner", description: "Dinner break followed by uninterrupted overnight hackathon coding & prototyping.", type: "break" },
      ],
    },
    day2: {
      date: "3 November 2026",
      dayName: "Day 2",
      schedule: [
        { time: "7:30 AM – 8:30 AM", title: "Breakfast", description: "Energizing morning breakfast before the final sprint wrap-up.", type: "break" },
        { time: "10:00 AM – 1:00 PM", title: "Round 2: Prototype Evaluation & Demo", description: "Grand jury evaluates working prototypes, functionality, and practical agrarian impact.", type: "round" },
        { time: "1:00 PM – 2:00 PM", title: "Lunch Break", description: "Lunch break while the jury tallies final scores across categories.", type: "break" },
        { time: "2:00 PM – 2:30 PM", title: "Hackathon Conclusion & Prize Distribution", description: "Valedictory ceremony, felicitations & awarding ₹25,000 cash prizes & certificates.", type: "conclude" },
      ],
    },
  },

  // Rules and Regulations
  rules: [
    {
      id: 1,
      title: "One Track Selection",
      description: "Each team chooses ONE track only from the six tracks.",
      tag: "Rule 1",
      severity: "mandatory",
    },
    {
      id: 2,
      title: "One Problem Statement",
      description: "Within that track, each team chooses ONE problem statement only.",
      tag: "Rule 2",
      severity: "mandatory",
    },
    {
      id: 3,
      title: "Prepare Solution",
      description: "Prepare a solution for the chosen problem statement. Do not formulate an independent statement; only official track statements are permitted.",
      tag: "Rule 3",
      severity: "mandatory",
    },
    {
      id: 4,
      title: "Official PPT Template",
      description: "Only the official LEAP Agritech Hackathon PPT template may be used. Presentations in any other format are not accepted.",
      tag: "Rule 4",
      severity: "mandatory",
    },
    {
      id: 5,
      title: "Compulsory PPT Submission",
      description: "PPT submission before 5:00 PM IST, 1 November 2026, through the Google Form. Compulsory for every team.",
      tag: "Rule 5",
      severity: "mandatory",
    },
    {
      id: 6,
      title: "No Prototype for Round 1",
      description: "A working prototype is NOT required for Round 1.",
      tag: "Rule 6",
      severity: "mandatory",
    },
    {
      id: 7,
      title: "Round 2 Advancement",
      description: "Top 4 teams from each track move forward to Round 2 (24-hour build).",
      tag: "Rule 7",
      severity: "mandatory",
    },
    {
      id: 8,
      title: "College ID Card",
      description: "Every participant must bring their valid college ID card and present it during the event.",
      tag: "Rule 8",
      severity: "mandatory",
    },
    {
      id: 9,
      title: "Campus Discipline",
      description: "All participants must maintain discipline and follow the rules and regulations of the campus throughout the event.",
      tag: "Rule 9",
      severity: "mandatory",
    },
    {
      id: 10,
      title: "No Pre-Built Projects",
      description: "Pre-built projects are strictly prohibited. All projects must be developed during the hackathon. Any team found using a pre-built project will be disqualified.",
      tag: "Rule 10",
      severity: "critical",
    },
    {
      id: 11,
      title: "Laptop Requirement",
      description: "Every team must bring its laptop for project development.",
      tag: "Rule 11",
      severity: "mandatory",
    },
    {
      id: 12,
      title: "Hardware Components",
      description: "Teams working on hardware-based projects must arrange the necessary components required to develop their projects.",
      tag: "Rule 12",
      severity: "high",
    },
    {
      id: 13,
      title: "Junction Boxes",
      description: "Participants must bring junction boxes, if required for their projects.",
      tag: "Rule 13",
      severity: "high",
    },
  ],

  // Important Accommodation Notice
  accommodationNotice: {
    title: "Important Accommodation Notice",
    message: "Accommodation will not be provided for participants arriving on 1 November 2026, the day before the event. Participants arriving on 1 November 2026 must make their own accommodation arrangements. Please plan your travel and accommodation accordingly to ensure a smooth and comfortable experience during the hackathon.",
  },

  // Venue & Travel
  venue: {
    hall: "Kuvempu Sabhangana",
    institution: "G. Madegowda Institute of Technology (GMIT)",
    area: "Bharathinagara, Maddur Taluk, Mandya District",
    state: "Karnataka - 571422",
    note: "Participants are encouraged to check the location in advance and plan their travel to reach the venue on time.",
    openMapsUrl: "https://maps.app.goo.gl/5E1X9sd2sxRrPeYG7?g_st=aw",
    // Embed iframe url (safe standard open embed for GMIT Mandya)
    embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3893.308732805494!2d77.05436667507085!3d12.627937587653775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf98517228aaab%3A0xe54fb91e0a241e17!2sG%20Madegowda%20Institute%20of%20Technology%2C%20Mandya!5e0!3m2!1sen!2sin!4v1729850000000!5m2!1sen!2sin",
    howToReach: [
      { mode: "By Bus", text: "Regular KSRTC buses run along the Bengaluru - Mysuru highway via Maddur / Malavalli route." },
      { mode: "By Train", text: "Maddur Railway Station is ~18 km away; Mandya Railway Station is ~25 km away with auto/bus connectivity." },
      { mode: "By Air", text: "Kempegowda International Airport Bengaluru (BLR) is ~120 km away with expressway access." },
    ],
  },

  // Navigation Links
  navLinks: [
    { label: "About", href: "#about" },
    { label: "For Participants", href: "#participants" },
    { label: "Committee", href: "#committee" },
    { label: "Coordinators", href: "#coordinators" },
    { label: "Rounds", href: "#rounds" },
    { label: "Timeline", href: "#timeline" },
    { label: "Rules", href: "#rules" },
    { label: "Venue", href: "#venue" },
  ],
};
