import {
  RiHtml5Line,
  RiCss3Line,
  RiJavascriptLine,
  RiReactjsLine,
  RiNodeTree,
} from "@remixicon/react";


import {
  RiDatabaseLine,
  RiCodeSSlashLine,
  RiGitBranchLine,
} from "@remixicon/react";

export const NAVIGATION_LINKS = [
  { label: "Work", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Dipin T",
  role: "MERN Stack Developer",
  subheading:
    "With 4 years of full-stack experience, I build efficient, scalable web applications. I'm not actively looking for a new role, but I'm always open to interesting projects.",
};

export const PROJECTS = [
  {
    id: 1,
    title: "MEDIBUDDY E-commerce Website",
    description:
      "A full-featured e-commerce website built with Node.js and ejs. It includes user authentication, product management, and an integrated payment gateway.",
    techStack: [ "Node.js", "Express", "EJS", "MongoDB"],
    link: "#",
  },
  {
    id: 2,
    title: "E-MED - Medical Consultation App",
    description:
      "A real-time medical consultation app with video chat, notifications, and a customizable profile page. Built with React, Firebase, and Redux for state management.",
    techStack: ["React", "Firebase", "Redux", "Node.js", "Express", "MongoDB", "WebSockets"],
    link: "#",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing projects and skills. Fully responsive and optimized for performance.",
    techStack: ["React.js", "Tailwind CSS"],
    link: "#",
  },
  {
    id: 4,
    title: "Blog Platform",
    description:
      "A blogging platform with a content management system, user authentication, and an intuitive editor.",
    techStack: ["Ruby on Rails", "PostgreSQL", "Tailwind CSS"],
    link: "https://example-blogplatform.com",
  },
  {
    id: 5,
    title: "Task Management App",
    description:
      "A task management tool with user authentication, reminders, and collaboration features.",
    techStack: ["Angular", "Firebase", "Material UI"],
    link: "#",
  },
  {
    id: 6,
    title: "Online Learning Platform",
    description:
      "An e-learning platform offering video courses, quizzes, and progress tracking for students.",
    techStack: ["Vue.js", "Node.js", "MongoDB", "Express"],
    link: "https://example-learningplatform.com",
  },
];

export const SKILLS = [
  {
    name: "Node.js",
    icon: <RiNodeTree className="skill-icon-glyph" />,
  },
  {
    name: "React",
    icon: <RiReactjsLine className="skill-icon-glyph" />,
  },
  {
    name: "MongoDB",
    icon: <RiDatabaseLine className="skill-icon-glyph" />,
  },
  {
    name: "HTML5",
    icon: <RiHtml5Line className="skill-icon-glyph" />,
  },
  {
    name: "CSS3",
    icon: <RiCss3Line className="skill-icon-glyph" />,
  },
  {
    name: "JavaScript",
    icon: <RiJavascriptLine className="skill-icon-glyph" />,
  },
  {
    name: "Tailwind CSS",
    icon: <RiCodeSSlashLine className="skill-icon-glyph" />,
  },
  {
    name: "GraphQL",
    icon: <RiGitBranchLine className="skill-icon-glyph" />,
  },
];

export const EXPERIENCES = [
  {
    yearRange: "2023 - Present",
    role: "Full Stack Developer",
    company: "Reflex Systems",
    description:
      "Develop and maintain web applications with JavaScript, React, and Node.js. Build RESTful APIs, integrate MongoDB databases, and collaborate with stakeholders to define project requirements and delivery timelines.",
    techStack: ["Javascript","Node.Js","React.js", "Next.js","Nest.js","Electron.js","MongoDB","PostGre SQL","AWS", "GCP"],
  },
  {
    yearRange: "2022 - 2023",
    role: "Full-stack Developer Intern",
    company: "Reflex Systems",
    description:
      "Designed and developed web interfaces with React and Express. Collaborated across frontend and backend work to integrate components with Node.js APIs, build responsive layouts, and improve frontend performance.",
    techStack: ["Node.js", "React.js","Express.js","MongoDb","PostGreSQl","AWS","GCP"],
  },
  {
    yearRange: "2017 - 2022",
    role: "System Administrator",
    company: "MLE ",
    description:
      "Maintained networks, applications, computers, and other IT equipment.",
    techStack: [],
  },
  {
    yearRange: "2017 - 2019",
    role: "PHP Developer",
    company: "Freelance",
    description:
      "Built web applications with PHP, JavaScript, and HTML. Managed MySQL databases and worked with clients to prioritize features and improvements.",
    techStack: ["HTML", "JavaScript", "PHP", "MySQL"],
  },
];

export const EDUCATION = [
  {
    id: 1,
    degree: "Higher Secondary",
    institution: "ABVHSS",
    duration: "2008 - 2010",
    description:""  },
  {
    id: 2,
    degree: "Engineering Diploma",
    institution: "GPTC",
    duration: "2010 - 2013",
    description:
""  },
  {
    id: 3,
    degree: "Bachelor of Technology in Computer Science",
    institution: "MG UCE",
    duration: "2014 - 2017",
    description:
""  },
];


