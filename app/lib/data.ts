// ============================================================
//  VUCORE TECH — Site Data
//  Edit this file to update all portfolio content
// ============================================================

export const siteConfig = {
  name: "Vucore Tech",
  role: "Full-Stack Web Developer",
  tagline: "Building modern web applications and business systems.",
  email: "vukoedmund670@gmail.com",
  phone: "+254708201839",
  whatsapp: "https://wa.me/254708201839?text=Hi%20Vucore%20Tech%2C%20I%27d%20like%20to%20discuss%20a%20project.",
  location: "Kenya, East Africa",
  cv: "/assets/cv.pdf",
  socials: {
    github: "https://github.com/Grndson",       // ← replace
    linkedin: "", // ← replace
    instagram: "https://instagram.com/YOUR_USERNAME",  // ← replace
  },
};

export const heroRoles = [
  "Full-Stack Web Developer",
  "React & PHP Engineer",
  "MySQL Database Designer",
  "Freelance Web Consultant",
];

export const skills = [
  {
    category: "Frontend",
    icon: "Monitor",
    items: [
      { name: "React / Next.js", level: 75 },
      { name: "JavaScript (ES6+)", level: 80 },
      { name: "HTML5 & CSS3", level: 90 },
      { name: "Tailwind CSS", level: 72 },
      { name: "Responsive Design", level: 88 },
    ],
  },
  {
    category: "Backend",
    icon: "Server",
    items: [
      { name: "PHP", level: 80 },
      { name: "Node.js", level: 60 },
      { name: "REST API Design", level: 73 },
      { name: "Authentication / Auth", level: 70 },
    ],
  },
  {
    category: "Database",
    icon: "Database",
    items: [
      { name: "MySQL", level: 80 },
      { name: "Database Design", level: 75 },
      { name: "SQL Queries", level: 78 },
      { name: "Data Modeling", level: 68 },
    ],
  },
  {
    category: "Tools & DevOps",
    icon: "Wrench",
    items: [
      { name: "Git & GitHub", level: 82 },
      { name: "VS Code", level: 92 },
      { name: "Linux / CLI", level: 65 },
      { name: "WordPress / CMS", level: 70 },
    ],
  },
];

export const projects = [
  {
    id: "transocean",
    title: "Transocean Marine Surveyors",
    subtitle: "Company website with headless CMS",
    category: "frontend",
    featured: true,
    problem: "A certified marine electronics firm in Kenya had no online presence and was managing client inquiries manually.",
    solution: "Built a production company website with Sanity headless CMS, allowing the admin to manage all content and images without touching code.",
    image: "/images/project-marine.jpg",
    tech: ["Next.js", "TypeScript", "Sanity CMS", "Tailwind CSS", "Vercel"],
    features: [
      "Headless CMS for content management",
      "Dynamic blog with rich text editor",
      "Fully editable hero sections per page",
      "WhatsApp integration and contact form",
      "SEO optimized with dynamic metadata",
      "Responsive design across all devices",
    ],
    liveUrl: "https://transocean-website.vercel.app/",
    githubUrl: "https://github.com/Grndson/Transocean-Website",
  },
  {
    id: "jobtrack",
    title: "Job Tracking System",
    subtitle: "Career management dashboard",
    category: "fullstack",
    featured: false,
    problem: "Job seekers struggled to manage multiple applications, losing track of stages and deadlines across different companies.",
    solution: "Built a centralized dashboard with a visual pipeline, status tracking, reminders, and analytics for job applications.",
    image: "/images/project-jobtrack.jpg", 
    tech: ["PHP", "MySQL", "React", "CSS3"],
    features: ["Application pipeline", "Interview stage tracking", "Status analytics", "User authentication"],
    liveUrl: "https://job-tracker-frontend-xi-two.vercel.app/", 
    githubUrl: "https://github.com/Grndson/job-tracker-frontend", 
  },
  {
    id: "wellness",
    title: "Wellness Platform",
    subtitle: "Digital health & community app",
    category: "fullstack",
    featured: true,
    problem: "The owner wanted a to improve on their existing wellness platform with better health tracking, resources, and community features to engage users more effectively.",
    solution: "Designed and built a full-stack platform with a React frontend consuming a PHP REST API — including doula services, resource library, and community features.",
    image: "/images/project-wellness.jpg",
    tech: ["React", "PHP", "MySQL", "REST API"],
    features: ["Health metric tracking", "Community feed", "Resource library", "Secure auth"],
    liveUrl: "https://hoa-wellness-frontend.vercel.app/",
    githubUrl: "https://github.com/Grndson/HOA-Wellness-Frontend",
  },
  {
    id: "realestate",
    title: "Property Hub",
    subtitle: "Real estate listings website",
    category: "frontend",
    featured: false,
    problem: "Property agents had no digital system to list properties or receive enquiries from potential buyers and tenants.",
    solution: "Created a listings site with advanced search, price and location filters, a contact/enquiry system, and map integration.",
    image: "/images/project-realestate.jpg",
    tech: ["React", "PHP", "MySQL", "Maps API"],
    features: ["Property search & filter", "Agent enquiry system", "Map integration", "Mobile responsive"],
    liveUrl: "https://gleeful-crepe-ff52ab.netlify.app/",
    githubUrl: "https://github.com/Grndson/sevenflags-frontend",
  },
  {
    id: "freelance",
    title: "Freelance Project",
    subtitle: "Custom website for videographer",
    category: "freelance",
    featured: false,
    problem: "A client needed a custom website to establish their online presence and manage content without technical expertise.",
    solution: "Delivered tailored web solution for a videographer where he will be showcasing his work and sharing his contact information.",
    image: "/images/project-freelance.jpg",
    tech: ["React", "CSS3", "JavaScript"],
    features: ["Custom design", "CMS integration", "SEO optimized", "Fast delivery"],
    liveUrl: "https://rio-portfolio-gold.vercel.app/",
    githubUrl: "https://github.com/Grndson/RIO-Portfolio",
  },
];

export const experience = [
  {
    period: "2024 — Present",
    role: "IT Professional & Freelance Developer",
    company: "Self-Employed / Various Clients",
    description:
      "Working in IT support while actively building and shipping freelance web development projects. Delivering full-stack applications for clients in real estate, health, marine, and business sectors.",
    tags: ["React", "PHP", "MySQL", "Client Work", "Freelance"],
  },
  {
    period: "2020 — 2024",
    role: "BBIT Graduate",
    company: "University — Business Information Technology",
    description:
      "Completed a Bachelor's in Business Information Technology. Developed strong foundations in software development, database systems, networking, and business analysis. Built multiple academic and personal projects during this period.",
    tags: ["Web Dev", "Databases", "Networking", "IT Systems", "Business Analysis"],
  },
];
