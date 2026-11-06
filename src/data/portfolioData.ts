export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  liveUrl: string;
  githubUrl?: string;
  tags: string[];
  description: string;
  fullDescription: string;
  previewImage: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: { name: string; level?: string; icon?: string }[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  duration?: string;
  status: 'Completed' | 'In Progress';
  certificateId?: string;
  certificatePdf?: string;
  certificateImage?: string;
  certificates?: {
    title: string;
    id: string;
    image: string;
    pdfUrl: string;
  }[];
  description: string[];
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  status: string;
  grade?: string;
  focus?: string;
  highlights: string[];
}

export const PERSONAL_INFO = {
  fullName: "P. Jahnavi",
  formalName: "Putta Jahnavi",
  title: "Full Stack Developer | AI Enthusiast",
  headlineEyebrow: "FULL STACK DEVELOPER | AI ENTHUSIAST",
  heroBio: "B.Tech Information Technology student (graduating 2028) building responsive full-stack applications, AI-oriented tools, and database-backed user experiences with modern web technologies.",
  aboutIntro: "Curiosity driven, practical engineering focused.",
  aboutStory: "I am a B.Tech Information Technology student at NRI Institute of Technology (graduating 2028) building responsive full-stack applications, AI-oriented tools, and database-backed user experiences. With hands-on experience across React, TypeScript, Vite, Supabase, and Firebase, I focus on building practical, user-focused digital products and continuously strengthening software development craftsmanship.",
  ambition: "Developing practical, user-focused digital products and engineering robust full-stack software solutions.",
  email: "puttajahnavijanu@gmail.com",
  phone: "+91 63026 10535",
  location: "Vijayawada, Andhra Pradesh, India",
  github: "https://github.com/puttajahnavijanu-lab",
  linkedin: "",
  resumePdf: "/assets/resume/P_Jahnavi_Resume.pdf",
  heroPortrait: "/assets/portraits/hero/jahnavi_hero_seated.jpg",
  aboutPortrait: "/assets/portraits/supporting/jahnavi_standing_portrait.jpg"
};

export const PROJECTS: ProjectItem[] = [
  {
    id: "solara",
    number: "01",
    title: "SOLARA",
    liveUrl: "https://nanii-solara.vercel.app/",
    githubUrl: "https://github.com/puttajahnavijanu-lab",
    tags: ["React.js", "Tailwind CSS", "Wearable Tech", "Solar Energy"],
    description: "Designed a responsive wearable-technology showcase highlighting solar-charging hardware, battery-optimization metrics, and product features.",
    fullDescription: "High-end product showcase for solar-powered wearable technology, featuring dynamic battery optimization analytics, telemetry views, and solar charging efficiency models.",
    previewImage: "/assets/projects/solara_cinematic.jpg"
  },
  {
    id: "heliowatch",
    number: "02",
    title: "HelioWatch",
    liveUrl: "https://nanii-heliowatch.vercel.app/",
    githubUrl: "https://github.com/puttajahnavijanu-lab",
    tags: ["React.js", "TypeScript", "E-Commerce", "Responsive UI"],
    description: "Built a modern smartwatch showcase with dynamic product specifications, pricing tiers, and mobile-first shopping interactions.",
    fullDescription: "E-commerce and interactive showcase for advanced smartwatches, blending technical telemetry with fluid shopping workflows, specifications comparison, and responsive design.",
    previewImage: "/assets/projects/heliowatch_cinematic.jpg"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Languages & Web",
    description: "Foundational & systems web languages",
    skills: [
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "C" },
      { name: "Python (basics)" }
    ]
  },
  {
    category: "Frontend",
    description: "Modern UI architecture and reactive engineering",
    skills: [
      { name: "React.js" },
      { name: "Vite" },
      { name: "Tailwind CSS" },
      { name: "Responsive Design" },
      { name: "DOM Manipulation" }
    ]
  },
  {
    category: "Backend & Data",
    description: "Database systems, CRUD APIs and authentication",
    skills: [
      { name: "Supabase" },
      { name: "Firebase" },
      { name: "PostgreSQL" },
      { name: "Authentication" },
      { name: "CRUD Fundamentals" }
    ]
  },
  {
    category: "Tools & Platforms",
    description: "Version control, design and production deployment",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "VS Code" },
      { name: "Vercel" },
      { name: "Figma" },
      { name: "Debugging" },
      { name: "API Integration" },
      { name: "Prompt Engineering" }
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "codsoft",
    company: "CODSOFT",
    role: "Web Development Intern",
    period: "Jun 2026 – Jul 2026",
    duration: "4-week virtual internship",
    status: "Completed",
    certificateId: "ac97b84",
    certificatePdf: "/assets/certificates/CodeSoft.pdf",
    certificateImage: "/assets/certificates/CodeSoft.pdf.png",
    description: [
      "4-week virtual internship | Certificate ID: ac97b84",
      "Developed modern frontend components and responsive web interfaces using HTML5, CSS3, and JavaScript best practices."
    ],
    skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design"]
  },
  {
    id: "istudio",
    company: "INTERNSHIP STUDIO (iStudio)",
    role: "Website Design & Development",
    period: "Completed Jun 2026",
    duration: "Intensive training & practical project",
    status: "Completed",
    certificateId: "ISWDT3223674",
    certificatePdf: "/assets/certificates/internship_studio_training.pdf",
    certificateImage: "/assets/certificates/internship_studio_training.png",
    description: [
      "Certificate Number: ISWDT3223674",
      "Completed hands-on website design and development training focused on frontend UI architecture and web usability."
    ],
    skills: ["Website Design", "Frontend UI Architecture", "Web Usability", "HTML5", "CSS3"]
  },
  {
    id: "flyrank",
    company: "FLYRANK AI",
    role: "Technical Contributor",
    period: "Ongoing",
    status: "In Progress",
    description: [
      "In-progress technical and development engagement.",
      "Contributing to ongoing technical and development work."
    ],
    skills: ["Technical Development", "Web Technologies", "AI Integration"]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "Bachelor of Technology — Information Technology",
    institution: "NRI Institute of Technology, Vijayawada, Andhra Pradesh",
    period: "2024–2028",
    status: "Pursuing",
    grade: "CGPA: 8.20 / 10.0",
    highlights: [
      "Pursuing B.Tech in Information Technology with consistent academic distinction.",
      "Focus on responsive web applications, database-backed architectures, and software engineering principles."
    ]
  },
  {
    degree: "Intermediate — MPC",
    institution: "Board of Intermediate Education, Andhra Pradesh",
    period: "2022–2024",
    status: "Completed",
    focus: "Mathematics, Physics & Chemistry",
    highlights: [
      "Rigorous pre-engineering foundation in analytical mathematics, physics, and chemistry."
    ]
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Board of Secondary Education, Andhra Pradesh",
    period: "2022",
    status: "Completed",
    highlights: [
      "Graduated with fundamental academic excellence across sciences and mathematics."
    ]
  }
];
