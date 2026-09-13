/**
 * Single source of truth for all portfolio content.
 * Adding a project or certificate later = editing this file only.
 * Nothing here is invented: only data provided/confirmed for this portfolio.
 */

export const site = {
  name: "Abhinav Kumar",
  shortName: "Abhinav",
  monogram: "AK",
  // Confident, first-person tagline consistent with the About voice.
  tagline:
    "Diploma CSE student exploring software, hardware, and security.",
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Learning", href: "#learning" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
] as const;

export type NavItem = (typeof navItems)[number];

export const about = {
  // Original personal statement, written in the confirmed voice:
  // confident, curious, growth-focused, root-cause driven. No invented facts.
  paragraphs: [
    "I'm Abhinav — a final-year diploma student in Computer Science & Engineering with a Cyber Security pathway at M.S. Ramaiah Polytechnic. My interest spans AI, web development, software, hardware, and ethical hacking, and I treat my curiosity not as a list of topics but as a way of approaching anything technical.",
    "When something new lands in front of me, I want to know why it works the way it does — the history, the trade-offs, the design decisions. That habit of digging to the root cause shapes how I approach almost every problem.",
    "I'm in a deliberate growth phase: learning deeply, building steadily, and taking on hard problems because they're worth attempting. This site is part of that process.",
  ],
  // Honest, confirmed framing — not a headline, just a description.
  focusAreas: [
    {
      title: "Where my curiosity runs",
      items: [
        "Web development & how the internet works",
        "AI and machine-learning fundamentals",
        "Software under the hood, down to the hardware",
        "Cybersecurity and ethical-hacking principles",
      ],
    },
  ],
};

export type SkillLevel = "studying";

export interface SkillGroup {
  label: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    label: "Languages",
    items: ["Python", "JavaScript", "Shell", "SQL"],
  },
  {
    label: "Web",
    items: ["HTML", "CSS", "Node.js", "Tailwind CSS"],
  },
  {
    label: "Security Tools",
    items: ["Burp Suite", "Metasploit", "Kali Linux"],
  },
  {
    // Theoretical/studied areas — named honestly, not as "proficient".
    label: "Security Concepts (Studying)",
    items: ["Nmap", "TCP/IP", "OWASP Top 10", "SQL Injection", "XSS"],
  },
  {
    label: "OS & Systems",
    items: ["Windows", "Linux", "Ubuntu", "Dual-boot setup", "Virtual Machines"],
  },
  {
    label: "Databases",
    items: ["MySQL", "MongoDB"],
  },
  {
    label: "Hardware",
    items: ["Arduino", "ESP32", "Raspberry Pi"],
  },
  {
    label: "Dev Tools",
    items: ["Git", "GitHub", "VS Code", "Terminal/CLI"],
  },
];

export const learningJourney = {
  // General, honest framing of ongoing self-directed learning. No invented courses/milestones.
  intro:
    "Most of my learning happens outside the classroom — courses, labs, reading, tinkering, and breaking things on purpose. It's a mix, and that's the point.",
  threads: [
    "AI & machine learning",
    "Web development & APIs",
    "Security fundamentals",
    "Linux & system administration",
    "Hardware projects with Arduino, ESP32 & Raspberry Pi",
  ],
};

export interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
}

// No projects exist yet — intentionally empty. The Projects section renders a
// designed "coming soon" state and this array simply becomes the grid later.
export const projects: Project[] = [];

export interface Certificate {
  title: string;
  issuer: string;
  image: string;
}

// Real, verified certificates only — added as they are earned.
export const certificates: Certificate[] = [
  {
    title: "Cyber Security and Applied Ethical Hacking",
    issuer: "Infosys Springboard",
    image: "/certificates/cyber-security-and-applied-ethical-hacking.png",
  },
  {
    title: "AI & Robotics Workshop",
    issuer: "Reboot Robotics Academy",
    image: "/certificates/ai-and-robotics-workshop.png",
  },
  {
    title: "Talent Test",
    issuer: "Vidya Soudha PU College",
    image: "/certificates/talent-test.png",
  },
  {
    title: "ASSET (Assessment of Scholastic Skills through Educational Testing)",
    issuer: "Mother Teresa Composite PU College",
    image: "/certificates/asset-scholastic-skills.png",
  },
  {
    title: "Cyber Security Awareness and Attacks Workshop",
    issuer: "Ramaiah Institute of Technology",
    image: "/certificates/cyber-security-awareness-and-attacks-workshop.png",
  },
  {
    title: "International Tech Fest - InnovateX 4.0",
    issuer: "Precidency University",
    image: "/certificates/international-tech-fest-innovatex-4-0.png",
  },
];

export const resume = {
  available: false, // no real resume file provided yet — keeps the UI honest
};

export const education = {
  degree: "Diploma in Computer Science & Engineering — Cyber Security Pathway",
  institution: "M.S. Ramaiah Polytechnic",
  period: "2024 – 2027 (in progress)",
  // Intentionally no CGPA/grade — none confirmed to display.
  points: [
    "Focused on the fundamentals: programming, web tech, networks, and security concepts.",
    "Working hands-on with Linux, dual-boot setups, virtual machines, and low-level hardware.",
    "Learning security tooling and concepts alongside core computer-science subjects.",
  ],
};

export const links = {
  email: "abhinav.cse17@gmail.com",
  github: "https://github.com/AbhinavOG",
  githubLabel: "github.com/AbhinavOG",
  linkedin: "https://linkedin.com/in/abhinavog/",
  linkedinLabel: "linkedin.com/in/abhinavog",
};

export const contactBlurb =
  "If you're working on something interesting, or just want to talk tech, security, or hardware — I'm always happy to connect.";

export const footerSignature = "Built and maintained by Abhinav Kumar.";