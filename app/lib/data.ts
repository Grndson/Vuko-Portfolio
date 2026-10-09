// ============================================================
//  VUCORE TECH — Site Data
//  Edit this file to update all portfolio content
// ============================================================

export const siteConfig = {
  name: "Vucore Tech",
  role: "Full-Stack Web Developer",
  tagline: "Websites and digital tools that help businesses serve customers and get work done.",
  email: "vukoedmund670@gmail.com",
  phone: "+254708201839",
  whatsapp: "https://wa.me/254708201839?text=Hi%20Vucore%20Tech%2C%20I%27d%20like%20to%20discuss%20a%20project.",
  location: "Kenya, East Africa",
  cv: "/assets/cv.pdf",
  socials: {
    github: "https://github.com/Grndson",
    linkedin: "https://www.linkedin.com/in/edmundvuko/",
    instagram: "",
  },
};

export const heroRoles = [
  "Full-Stack Web Developer",
  "Business Systems Developer",
  "Digital Product Builder",
  "Founder of Vucore Tech",
];

export const skills = [
  {
    category: "Frontend",
    description: "The pages and features people see and use.",
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
    description: "The behind-the-scenes logic that makes an app work.",
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
    description: "How an app stores and organizes information.",
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
    description: "Tools I use to build, collaborate, and launch projects.",
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
  id: "realestate",
  title: "Opal & Gold Properties",
  subtitle: "Property website and management tools",
  category: "fullstack",
  featured: true,
  problem: "A real estate agency needed an easy way to showcase properties and respond to interested buyers and renters.",
  solution: "Built a property website with searchable listings, simple content updates, and tools to manage customer enquiries.",
  image: "/images/project-realestate.jpg",
  tech: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
  features: [
  "Search and filter property listings",
  "Simple property management dashboard",
  "Update listings, articles, and testimonials",
  "Keep track of customer enquiries",
  "Works on phones and computers",
  "Property photo galleries",
  "Maps and property locations",
  "Secure customer enquiry forms"
  ],
  liveUrl: "https://opalandgoldproperties.com/",
  githubUrl: "https://github.com/Grndson/opal-gold",
  },
    {
    id: "transocean",
    title: "Transocean Marine Surveyors",
    subtitle: "Company website with easy content updates",
    category: "frontend",
    featured: true,
    problem: "A certified marine electronics firm in Kenya had no online presence and was managing client inquiries manually.",
    solution: "Built a company website that lets the team update pages, images, and articles without needing to write code.",
    image: "/images/project-marine.jpg",
    tech: ["Next.js", "TypeScript", "Sanity CMS", "Tailwind CSS", "Vercel"],
    features: [
      "Update website content without coding",
      "Publish news and articles",
      "Edit content across every page",
      "WhatsApp and contact form",
      "Pages designed to be easy to find online",
      "Works on phones, tablets, and computers",
    ],
    liveUrl: "https://www.transoceansurveyors.com/",
    githubUrl: "https://github.com/Grndson/Transocean-Website",
  },
  {
    id: "wellness",
    title: "Wellness Platform",
    subtitle: "Digital health & community app",
    category: "fullstack",
    featured: true,
    problem: "The owner wanted to improve their wellness platform with better ways for people to track progress, find resources, and connect with others.",
    solution: "Built a web app where people can track health progress, find wellness resources, access doula services, and connect with a community.",
    image: "/images/project-wellness.jpg",
    tech: ["React", "PHP", "MySQL", "REST API"],
    features: ["Track health progress", "Connect with a community", "Find helpful resources", "Private user accounts"],
    liveUrl: "https://hoa-wellness-frontend.vercel.app/",
    githubUrl: "https://github.com/Grndson/HOA-Wellness-Frontend",
  },
  {
    id: "freelance",
    title: "Freelance Project",
    subtitle: "Custom website for videographer",
    category: "freelance",
    featured: false,
    problem: "A videographer needed a simple way to showcase their work and help potential clients get in touch.",
    solution: "Built a custom portfolio website where visitors can explore video work and find contact information.",
    image: "/images/project-freelance.jpg",
    tech: ["React", "CSS3", "JavaScript"],
    features: ["Designed for the videographer", "Easy content updates", "Easy to find online", "Built for mobile and desktop"],
    liveUrl: "https://rio-portfolio-gold.vercel.app/",
    githubUrl: "https://github.com/Grndson/RIO-Portfolio",
  },
];

export const experience = [
  {
    period: "2024 — Present",
    role: "IT Professional & Freelance Developer",
    company: "Vucore Tech",
    description:
      "Supporting IT operations while building websites and web applications for clients in real estate, health, marine, and other business sectors.",
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
