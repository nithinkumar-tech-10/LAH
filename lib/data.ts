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

export const HACKATHON_DATA = {
  // Global links & Event Dates
  title: "24 HOURS LEAP AGRITECH HACKATHON 2026",
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
    hackathon: "/logos/logo.png",
    college: "/logos/WhatsApp Image 2026-10-23 at 19.53.23.jpeg",
    ktech: "/logos/WhatsApp Image 2026-10-23 at 20.49.34 (1).jpeg",
    itbt: "/logos/WhatsApp Image 2026-10-23 at 20.49.34.jpeg",
  },

  // PPT Template File
  pptTemplate: {
    url: "/downloads/LEAP_Agritech_Hackathon_2026_Round1_PPT_Template.pptx",
    filename: "LEAP_Agritech_Hackathon_2026_Round1_PPT_Template.pptx",
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
      title: "Founder",
      image: "/photos/sri-g-madegowda.jpg",
    },
    right: {
      name: "Sri Madhu G Madegowda",
      title: "Chairman, BET",
      image: "/photos/sri-madhu-g-madegowda.jpg",
    },
  },

  // Quick stats
  quickStats: [
    { label: "Prize Pool", value: "₹25,000", sub: "Cash rewards & certificates" },
    { label: "Hackathon Duration", value: "24 Hours", sub: "Non-stop innovation sprint" },
    { label: "Entry Fee", value: "Free", sub: "Open to all eligible students" },
    { label: "Team Size", value: "1–3", sub: "Collaborative squads" },
    { label: "Tracks", value: "6", sub: "AIML, IoT, Drones & more" },
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
    intro: "Teams choose ONE problem statement from ONE track only. Problem statements are released by the organisers in PDF form. Browse the tracks below to find your challenge.",
    cards: [
      {
        step: "01",
        title: "Choose Your Track",
        desc: "Pick one of the 6 tracks: AIML, IoT, Drones, Renewable Energy, Robotics & Automation, or Open Innovation.",
      },
      {
        step: "02",
        title: "Select a Problem Statement",
        desc: "Choose one problem statement from your selected track and prepare your idea around it.",
      },
      {
        step: "03",
        title: "Present & Build",
        desc: "Present your idea in Round 1. Top 4 teams from each track are shortlisted to build their prototype.",
      },
    ],
    note: "Only the idea is presented in Round 1. The prototype must be developed during the hackathon. Pre-built projects are not allowed.",
    pptNotice: {
      mandatory: "Mandatory for Round 1: All teams must use the official LEAP Agritech Hackathon PPT template for the idea presentation. Presentations in any other format will not be accepted.",
      slides: "7 slides: Title, Chosen Problem Statement (track and title), Existing Solutions, Our Solution, Technical Approach, Impact and Benefits, Thank You",
      downloadUrl: "/downloads/LEAP_Agritech_Hackathon_2026_Round1_PPT_Template.pptx",
      filename: "LEAP_Agritech_Hackathon_2026_Round1_PPT_Template.pptx",
    },
  },

  // Organizing Committee
  committee: [
    {
      title: "Chief Patron",
      name: "Sri Madhu G Madegowda",
      designation: "Chairman, Bharati Education Trust (BET)",
      avatarText: "MM",
      image: "",
    },
    {
      title: "Patron",
      name: "Dr. Chandan B R",
      designation: "Principal, GMIT",
      avatarText: "CB",
      image: "",
    },
    {
      title: "Convenor",
      name: "Dr. Sumitha C",
      designation: "Professor and Head, Coordinator, Agritech Innovation Lab",
      avatarText: "SC",
      image: "",
    },
    {
      title: "Co-Convenor",
      name: "Dr. Nuthan A C",
      designation: "Professor and Head, Department of ECE",
      avatarText: "NA",
      image: "",
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

  // Hackathon 3 Rounds
  rounds: [
    {
      number: 1,
      title: "Idea Presentation",
      badge: "Stage 01 • All Teams",
      description: "All participating teams present their innovative ideas for their chosen problem statement to the evaluation panel. Only the idea needs to be presented; a prototype is not required.",
      highlights: [
        "Present your idea for the chosen problem statement from your track",
        "Slide deck / presentation to academic & industry jurors",
        "No prototype required for Round 1",
        "Top 4 teams from each track will be shortlisted for Round 2"
      ],
      duration: "Day 1: 10:00 AM – 1:30 PM",
    },
    {
      number: 2,
      title: "Project Development",
      badge: "Stage 02 • Shortlisted Teams",
      description: "Based on idea presentations, the top 4 teams from each track are shortlisted. Selected teams develop their projects and build working prototypes during the hackathon.",
      highlights: [
        "24-Hour intensive sprint begins inside GMIT innovation labs",
        "Build functional code, models, or hardware setups",
        "Continuous mentorship and technical guidance",
        "Mid-sprint project review at 5:30 PM"
      ],
      duration: "Day 1: 2:30 PM Onwards into the Night",
    },
    {
      number: 3,
      title: "Final Evaluation",
      badge: "Stage 03 • Grand Finale",
      description: "The jury evaluates the projects and prototypes of shortlisted teams on innovation, functionality, practicality, and overall performance.",
      highlights: [
        "Live demonstration of working prototype to expert jury",
        "Evaluation criteria: Innovation, Functionality, Practicality & Impact",
        "Q&A session with KITS & GMIT evaluation panel",
        "Winner declaration & ₹25,000 prize distribution ceremony"
      ],
      duration: "Day 2: 10:00 AM – 1:00 PM",
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
        { time: "2:30 PM Onwards", title: "Round 2: Project Development", description: "Shortlisted teams (top 4 from each track) begin hands-on sprint and prototype implementation.", type: "round" },
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
        { time: "10:00 AM – 1:00 PM", title: "Round 3: Final Evaluation", description: "Grand jury evaluates working prototypes, code quality, and farmer practicality.", type: "round" },
        { time: "1:00 PM – 2:00 PM", title: "Lunch Break", description: "Lunch break while the jury tallies final scores across categories.", type: "break" },
        { time: "2:00 PM – 2:30 PM", title: "Hackathon Conclusion & Prize Distribution", description: "Valedictory ceremony, felicitations & awarding ₹25,000 cash prizes & certificates.", type: "conclude" },
      ],
    },
  },

  // Rules and Regulations
  rules: [
    {
      id: 1,
      title: "College ID Card",
      description: "Every participant must bring their valid college ID card and present it during the event.",
      tag: "Verification",
      severity: "mandatory",
    },
    {
      id: 2,
      title: "Campus Discipline",
      description: "All participants must maintain discipline and follow the rules and regulations of the campus throughout the event.",
      tag: "Conduct",
      severity: "mandatory",
    },
    {
      id: 3,
      title: "No Pre-Built Projects",
      description: "Pre-built projects are strictly prohibited. All projects must be developed during the hackathon. Any team found using a pre-built project will be disqualified.",
      tag: "Integrity",
      severity: "critical",
    },
    {
      id: 4,
      title: "Bring Your Own Laptop",
      description: "Every team must bring its own laptop for project development.",
      tag: "Hardware",
      severity: "mandatory",
    },
    {
      id: 5,
      title: "Hardware Components",
      description: "Teams working on hardware-based projects must arrange the necessary components required to develop their projects.",
      tag: "IoT & Hardware",
      severity: "high",
    },
    {
      id: 6,
      title: "Junction Boxes",
      description: "Participants must bring their own junction boxes, if required for their projects.",
      tag: "Power & Cables",
      severity: "high",
    },
    {
      id: 7,
      title: "PPT Template",
      description: "Round 1 presentations must be made using the official PPT template provided on this website.",
      tag: "Round 1",
      severity: "mandatory",
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
