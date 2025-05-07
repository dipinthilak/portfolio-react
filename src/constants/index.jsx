import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.webp";
import project4 from "../assets/project4.webp";
import project5 from "../assets/project5.webp";
import project6 from "../assets/project6.webp";

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
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Dipin T",
  role: "MERN Stack Developer",
  subheading:
    "With 2 years of full-stack development experience, I build efficient, scalable web applications. Not on the job hunt, but always curious about interesting projects.",
};

export const PROJECTS = [
  {
    id: 1,
    title: "MEDIBUDDY E-commerce Website",
    description:
      "A full-featured e-commerce website built with Node.js and ejs. It includes user authentication, product management, and an integrated payment gateway.",
    techStack: [ "Node.js", "Express", "EJS", "MongoDB"],
    imgSrc: project1,
    link: "#",
  },
  {
    id: 2,
    title: "E-MED - Medical Consultation App",
    description:
      "A real-time medical consultation app with video chat, notifications, and a customizable profile page. Built with React, Firebase, and Redux for state management.",
    techStack: ["React", "Firebase", "Redux", "Node.js", "Epress", "MongoDB","Websocket"],
    imgSrc: project2,
    link: "#",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing projects and skills. Fully responsive and optimized for performance.",
    techStack: ["React.js", "Tailwind CSS"],
    imgSrc: project3,
    link: "#",
  },
  {
    id: 4,
    title: "Blog Platform",
    description:
      "A blogging platform with a content management system, user authentication, and an intuitive editor.",
    techStack: ["Ruby on Rails", "PostgreSQL", "Tailwind CSS"],
    imgSrc: project4,
    link: "https://example-blogplatform.com",
  },
  {
    id: 5,
    title: "Task Management App",
    description:
      "A task management tool with user authentication, reminders, and collaboration features.",
    techStack: ["Angular", "Firebase", "Material UI"],
    imgSrc: project5,
    link: "#",
  },
  {
    id: 6,
    title: "Online Learning Platform",
    description:
      "An e-learning platform offering video courses, quizzes, and progress tracking for students.",
    techStack: ["Vue.js", "Node.js", "MongoDB", "Express"],
    imgSrc: project6,
    link: "https://example-learningplatform.com",
  },
];

export const SKILLS = [
  {
    name: "Node.js",
    icon: <RiNodeTree className="text-green-500" />,
  },
  {
    name: "React",
    icon: <RiReactjsLine className="text-blue-400" />,
  },
  {
    name: "MongoDB",
    icon: <RiDatabaseLine className="text-green-600" />,
  },
  {
    name: "HTML5",
    icon: <RiHtml5Line className="text-orange-600" />,
  },
  {
    name: "CSS3",
    icon: <RiCss3Line className="text-blue-500" />,
  },
  {
    name: "JavaScript",
    icon: <RiJavascriptLine className="text-yellow-500" />,
  },
  {
    name: "Tailwind CSS",
    icon: <RiCodeSSlashLine className="text-teal-400" />,
  },
  {
    name: "GraphQL",
    icon: <RiGitBranchLine className="text-pink-400" />,
  },
];

export const EXPERIENCES = [
  {
    yearRange: "2023 - Present",
    role: "Full Stack Developer",
    company: "Freelancer",
    description:
      " developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.",
    techStack: ["Javascript","Node.Js","React.js", "Next.js","Nest.js","Electron.js","MongoDB","PostGre SQL","AWS", "GCP"],
  },
  {
    yearRange: "2022 - 2023",
    role: "FullStack Developer - Intership",
    company: "Brototype",
    description:
      "Designed and developed user interfaces for web applications using React.js and Express. Worked closely with backend and frontend to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.",
    techStack: ["Node.js", "React.js","Express.js", "MySQL"],
  },
  {
    yearRange: "2017 - 2022",
    role: "System Administrator",
    company: "MLE ",
    description:
      "Maintained Network , Appications , PC's and other devices.",
    techStack: [],
  },
  {
    yearRange: "2017 - 2019",
    role: "PHP developer",
    company: "Freenlacer",
    description:
      "Contributed to the development of web applications using php,JavaScript and html. Managed databases and implemented data storage solutions using MySQL. Worked closely with clients to prioritize features and enhancements.",
    techStack: ["HTML", "JavaScript", "PHP", "MySQL"],
  },
];

export const EDUCATION = [
  {
    id: 1,
    degree: "Higher Secondary",
    institution: "ABVHSS ",
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


