import { FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiDocker, SiElectron, SiExpress, SiKubernetes, SiMongodb, SiTailwindcss } from "react-icons/si";
import { MdOutlineCatchingPokemon } from "react-icons/md";

export const timeline = [
  {
    role: "Full Stack Developer",
    company: "Leaprobots LLP",
    type: "Full-time",
    startdate: "02-12-2024",
    enddate: "Present",
    description:
      "Developing LeapCodex, a desktop platform that teaches robotics programming using Blockly and Arduino.",

    achievements: [
      "Built cross-platform desktop app using Electron.js",
      "🚀 Built desktop robotics IDE used for STEM education",
      "Implemented Blockly-based visual programming for Arduino robots",
      "Designed modular robot control modes (line follow, obstacle avoid)"
    ],

    tech: ["React", "Electron.js", "Node.js", "Blockly", "JavaScript"]
  },
  {
    role: "Full Stack JavaScript Bootcamp",
    company: "iNeuron.ai",
    type: "Training Program",
    startdate: "20-08-2023",
    enddate: "15-03-2024",
    description:
    "Completed an intensive full-stack JavaScript program focused on modern web development and production-ready applications.",

    achievements: [
      "Built multiple full-stack projects using the MERN stack",
      "Developed REST APIs using Node.js and Express",
      "Implemented authentication systems and responsive UI components",
      "Strengthened core JavaScript, React, and backend architecture skills"
    ],

    tech: ["JavaScript", "React", "Node.js", "Express", "MongoDB", "HTML", "CSS"]
  },
  {
    role: "Master of Computer Applications (MCA)",
    company: "Chandigarh University",
    type: "Education",
    startdate: "20-08-2021",
    enddate: "15-06-2023",
    description:
    "Focused on software engineering, system design, and advanced programming concepts.",

    achievements: [
      "Studied advanced data structures, algorithms, and software engineering",
      "Built academic software projects and web applications",
      "Developed strong foundations in database management and system architecture"
    ],

    tech: ["Java", "Data Structures", "Algorithms", "DBMS", "Software Engineering"]
  },
  {
    role: "Bachelor of Computer Applications (BCA)",
    company: "ABS Academy of Science Technology and Management",
    type: "Education",
    startdate: "20-08-2018",
    enddate: "14-07-2021",
    description:
    "Built strong programming fundamentals and gained exposure to web development and computer science principles.",

    achievements: [
      "Learned programming fundamentals and computer science concepts",
      "Built early web development projects using HTML, CSS, and JavaScript",
      "Studied operating systems, networking, and database fundamentals"
    ],

    tech: ["C", "Java", "HTML", "CSS", "JavaScript", "SQL"]
  },
];

export const projects = [
  {
    image: {
      public_id: "portfolio/mpmfo4hp9wbhhv72gpvy",
      url: "https://res.cloudinary.com/dq2yspfur/image/upload/v1701182989/portfolio/mpmfo4hp9wbhhv72gpvy.jpg",
    },
    title: "Fullstack Portfolio",
    startdate: "2023-07-20T00:00:00.000+00:00",
    enddate: "2024-11-30T00:00:00.000+00:00",
    description:
      "Welcome to my Fullstack Portfolio Web App! This project showcases my skills in full-stack development.",
    techStack:
      "ReactJs, MongoDB, ExpressJS, NodeJS, Webpack, REST APIs, Mongoose ODM, Tailwind CSS",
    liveUrl: "https://www.bibekghosh.live",
    githubUrl: "https://github.com/bibekghoshh/Fullstack-Portfolio",
    _id: "6565fe0e8ca228131a85ac07",
    detailsDescription:
      "Elevate user experience with lazy loading, seamless login authentication, and responsive design.",
  },
  {
    image: {
      public_id: "portfolio/llum48os4uae4avzig2a",
      url: "https://res.cloudinary.com/dq2yspfur/image/upload/v1687867744/portfolio/llum48os4uae4avzig2a.jpg",
    },
    title: "ApnaKart e-commerce",
    startdate: "2023-09-20T00:00:00.000+00:00",
    enddate: "2023-11-30T00:00:00.000+00:00",
    description:
      "ApnaKart is an e-commerce application where people can buy or sell their products.",
    techStack: "React, NodeJS, Express, MongoDB, Material UI",
    liveUrl: "https://apnakart.vercel.app/",
    githubUrl: "https://github.com/bibekghoshh/Apnakart-frontend",
    _id: "649ad161977fe06ee87ea7e4",
  },
  {
    image: {
      public_id: "portfolio/pc5yy0hf99ybuys7piuv",
      url: "https://res.cloudinary.com/dq2yspfur/image/upload/v1687506407/portfolio/pc5yy0hf99ybuys7piuv.jpg",
    },
    title: "Weather App",
    startdate: "2023-07-20T00:00:00.000+00:00",
    enddate: "2023-08-30T00:00:00.000+00:00",
    description:
      "Created a Weather App using WeatherAPI. In this project, I learned to handle API requests and display weather information.",
    techStack: "HTML, CSS, JavaScript",
    liveUrl: "https://weatheraap.netlify.app/",
    githubUrl: "https://github.com/bibekghoshh/Weather-App",
    _id: "64954de8a6fc5d3d3eac0573",
  },
  {
    image: {
      public_id: "portfolio/uy4nsxdqueyxduwqqqsi",
      url: "https://res.cloudinary.com/dq2yspfur/image/upload/v1687429248/portfolio/uy4nsxdqueyxduwqqqsi.jpg",
    },
    title: "WeChat App",
    startdate: "2023-05-20T00:00:00.000+00:00",
    enddate: "2023-07-30T00:00:00.000+00:00",
    description:
      "It's an Android-based Chatting Application where people can chat anonymously using Firebase Realtime Database.",
    techStack: "Android Studio, Java, XML, Firebase-Realtime DB",
    liveUrl:
      "https://drive.google.com/file/d/1K1nCAXAoXrpguyctmJ0M_-dKLHZ4dZls/view?usp=sharing",
    githubUrl: "https://github.com/bibekghoshh/WeChat",
    _id: "6494208067a278997320b2a7",
  },
];



export const skillGroups = [
{
title: "Frontend",
skills: [
{ name: "React", icon: <FaReact /> },
{ name: "JavaScript", icon: <IoLogoJavascript /> },
{ name: "Tailwind", icon: <SiTailwindcss /> },
{ name: "HTML5", icon: <FaHtml5 /> },
{ name: "CSS3", icon: <FaCss3Alt /> }
]
},
{
title: "Backend",
skills: [
{ name: "Node.js", icon: <FaNodeJs /> },
{ name: "Express", icon: <SiExpress /> },
{ name: "MongoDB", icon: <SiMongodb /> },
{ name: "Mongoose", icon: <SiMongodb /> }
]
},
{
title: "Tools & Platforms",
skills: [
{ name: "Electron", icon: <SiElectron /> },
{ name: "Git", icon: <FaGitAlt /> },
{ name: "Github", icon: <FaGithub /> },
{ name: "Dev Tools", icon: <MdOutlineCatchingPokemon /> },
{ name: "Docker", icon: <SiDocker /> },
{ name: "Kubernetes", icon: <SiKubernetes /> }
]
}
];
