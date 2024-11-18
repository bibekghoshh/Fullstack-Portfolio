import { FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandTailwind } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { MdOutlineCatchingPokemon } from "react-icons/md";
import { RiNpmjsFill } from "react-icons/ri";

export const timeline = [
  {
    title: "Ineuron.ai",
    description: "JavaScript Fullstack Bootcamp",
    startdate: "2023-08-20T00:00:00.000+00:00",
    enddate: "2024-03-15T00:00:00.000+00:00",
  },
  {
    title: "Chandigarh University",
    description: "MCA (Master's of Computer Application)",
    startdate: "2021-08-20T00:00:00.000+00:00",
    enddate: "2023-06-15T00:00:00.000+00:00",
  },
  {
    title: "ABS Academy of Science Technology and Management",
    description: "BCA (Bachelor's in Computer Application)",
    startdate: "2018-08-08T00:00:00.000+00:00",
    enddate: "2021-07-14T00:00:00.000+00:00",
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


export const skillsWithIcons = [
  { title: "ReactJs", icons: <FaReact /> },
  {title:"Javascript",icons:<IoLogoJavascript />},
  { title: "Html", icons:<FaHtml5 /> },
  { title: "Css", icons: <FaCss3Alt />},
  { title: "Tailwind", icons: <TbBrandTailwind /> },
  { title: "Git", icons: <FaGitAlt /> },
  { title: "Github", icons: <FaGithub /> },
  { title: "MongoDB", icons: <SiMongodb /> },
  { title: "Npm", icons:<RiNpmjsFill />},
  { title: "NodeJs", icons: <FaNodeJs /> },
  { title: "Dev tool", icons: <MdOutlineCatchingPokemon /> },
];
