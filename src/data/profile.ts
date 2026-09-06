export const profile = {
  name: "Ashwini Shenoy",
  headline: "Computer Science Undergraduate · Aspiring Software Developer",
  location: "Mangalore, Karnataka, India",
  email: "ashwinishenoy709@gmail.com",
  phone: "+91 9886106589",
  linkedin: "https://www.linkedin.com/in/ashwinishenoy09",
  github: "https://github.com/ashwinishenoy709-cloud",
};

export const skillGroups = [
  {
    label: "Languages",
    items: ["C", "Python", "C++", "Java", "JavaScript"],
  },
  {
    label: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript", "Responsive Web Design"],
  },
  {
    label: "Frameworks & Libraries",
    items: ["React", "Node.js"],
  },
  {
    label: "Databases & Backend Services",
    items: ["MongoDB", "MySQL", "Supabase"],
  },
  {
    label: "Developer Tools",
    items: ["VS Code", "Git", "GitHub", "Eclipse", "Jupyter Notebook", "IntelliJ IDEA"],
  },
];

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  stack: string[];
  highlights: string[];
  link: string;
};

export const projects: Project[] = [
  {
    slug: "clickdefender",
    title: "ClickDefender",
    tagline: "Chrome extension that flags phishing websites before you click through.",
    stack: ["HTML", "CSS", "JavaScript", "Chrome Extension APIs", "Google Safe Browsing API"],
    highlights: [
      "Developed a Chrome extension that detects phishing websites using blacklist/whitelist verification and heuristic analysis.",
      "Designed an explainable risk-scoring mechanism analysing SSL certificates, URL patterns and domain characteristics for transparent detection.",
      "Integrated the Google Safe Browsing API to strengthen threat detection while keeping browsing latency low.",
    ],
    link: "https://github.com/ashwinishenoy709-cloud",
  },
  {
    slug: "netflix-clone",
    title: "Netflix Clone",
    tagline: "Responsive streaming interface with search, filtering and a persistent watchlist.",
    stack: ["HTML5", "CSS3", "JavaScript", "DOM APIs", "Local Storage"],
    highlights: [
      "Built a responsive Netflix-inspired streaming app with authentication UI, profile selection, dynamic content rows and an auto-rotating hero banner.",
      'Implemented live search, genre filtering, title detail modals and a persistent "My List" watchlist using DOM manipulation, event handling and Local Storage.',
      "Optimised for cross-browser compatibility and responsive layouts across desktop and mobile.",
    ],
    link: "https://github.com/ashwinishenoy709-cloud",
  },
];

export const education = [
  {
    school: "Canara Engineering College, Mangalore, Karnataka",
    degree: "Bachelor of Engineering in Computer Science and Engineering",
    period: "2023 – Present",
    detail: "CGPA: 8.89",
  },
];

export const certifications = [
  {
    title: "Python Programming",
    issuer: "Turbosoft Computer Academy",
    year: "2023",
    image: "/certificates/python-programming.png",
  },
  {
    title: "C Programming",
    issuer: "Turbosoft Computer Academy",
    year: "2024",
    image: "/certificates/c-programming.png",
  },
];

export const achievements = [
  "Participated in Hackotsava 2025, a national-level hackathon, co-developing the Karmic Canteen System.",
  "Completed a MERN Stack Development workshop with hands-on exposure to MongoDB, Express.js, React and Node.js.",
];

export const resumeUrl = "/ashwini-shenoy-resume.pdf";
