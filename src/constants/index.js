import mobile from "../assets/mobile.png"
import backend from "../assets/backend.png"
import creator from "../assets/creator.png"
import web from "../assets/web.png"

import html from "../assets/tech/html.png";
import css from "../assets/tech/css.png";
import javascript from "../assets/tech/javascript.png";
import reactjs from "../assets/tech/reactjs.png";
import nodejs from "../assets/tech/nodejs.png";
import express from "../assets/tech/express.png";
import mongodb from "../assets/tech/mongodb.png";
import bootstrap from "../assets/tech/bootstrap.png";
import mui from "../assets/tech/mui.png";
import redux from "../assets/tech/redux.png";
import tailwind from "../assets/tech/tailwind.png";
import vercel from "../assets/tech/vercel.png";
import git from "../assets/tech/git.png";
import github from "../assets/tech/github.png";
import figma from "../assets/tech/figma.png";
import firebase from "../assets/tech/firebase.png";
import netlify from "../assets/tech/netlify.png"
import rest from "../assets/tech/restAPI.png"
import sass from "../assets/tech/sass.png";
import vscode from "../assets/tech/vscode.png";


import sm from "../assets/company/sm.png"
import loft from "../assets/company/loft.png"
import tech from "../assets/company/tech.png"

import college from "../assets/school/college.jpeg"
import uni from "../assets/school/uni.png"
import school from "../assets/school/school.jpg"

import Pr0 from "../assets/Projects/Project0.png";
import Pr1 from "../assets/Projects/Project1.jpg";
import Pr2 from "../assets/Projects/Project2.png";
import Pr3 from "../assets/Projects/Project3.png";
import Pr4 from "../assets/Projects/Project4.png";
import Pr5 from "../assets/Projects/Project5.png";
import Pr6 from "../assets/Projects/Project6.png";
import Pr7 from "../assets/Projects/Project7.png";
import Pr8 from "../assets/Projects/Project8.png";
import Pr9 from "../assets/Projects/Project9.png";
import Pr10 from "../assets/Projects/Project10.png";
import Pr11 from "../assets/Projects/Project11.png";


const experiences = [
    {
        title: "React JS Developer",
        company_name: "Lofty Logix",
        company_link: "http://loftylogix.com/",
        location:'On-Site',
        icon: loft,
        iconBg: "white",
        date: "July 2023 - March 2024",
        points: [
            "Developing and maintaining web applications using HTML, CSS, JS & React JS",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
        ],
    },
    {
        title: "Remote - Front End Developer",
        company_name: "Tech Cloud",
        location:'On-Site',
        icon: tech,
        iconBg: "white",
        date: "December 2021 - February 2022",
        points: [
            "Freelance project-based development team.",
            "Developing and maintaining web applications using HTML, CSS, JS.",
            "Collaborating remotely with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
        ],
    },
    {
        title: "Front-End Intern",
        company_name: "Stacks Mind",
        location:'On-Site',
        icon: sm,
        iconBg: "white",
        date: "June 2022 - November 2022",
        points: [
            "Assisted in the development of web applications using HTML, CSS, and JavaScript under senior developers' guidance.",
            "Participated in team meetings and collaborated with other interns and developers to solve technical challenges.",
            "Learned and applied responsive design principles to ensure optimal user experience across devices.",
        ],
    },
];

const technologies = [
  {
    category: "Frontend",
    items: [
      { name: "HTML 5", icon: html },
      { name: "CSS 3", icon: css },
      { name: "JavaScript", icon: javascript },
      { name: "React JS", icon: reactjs },
      { name: "Redux Toolkit", icon: redux },
    ],
  },
  {
    category: "CSS Frameworks & Libraries",
    items: [
      { name: "Bootstrap", icon: bootstrap },
      { name: "Material UI", icon: mui },
      { name: "Tailwind CSS", icon: tailwind },
      { name: "Sass", icon: sass }, 
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node JS", icon: nodejs },
      { name: "Express JS", icon: express },
      { name: "RESTful API", icon: rest },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MongoDB", icon: mongodb },
      { name: "Firebase", icon: firebase },
    ],
  },
  {
    category: "Deployment",
    items: [
      { name: "Vercel", icon: vercel },
      { name: "Netlify", icon: netlify },
    ],
  },

  {
    category: "Tools",
    items: [
      { name: "Git", icon: git },
      { name: "GitHub", icon: github },
      { name: "Figma", icon: figma },
      { name: "VS Code", icon: vscode }, // Assuming you have the VS Code icon
    ],
  },
];


const services = [{
        title: "Front End Developer",
        icon: web,
    },
    {
        title: "MERN Stack Developer",
        icon: mobile,
    },
    {
        title: "Web Developer",
        icon: creator,
    },
    {
        title: "Tech Expert",
        icon: backend,
    },
];

const educations = [{
        title: "Bachelors in Computer Science",
        school_name: "PMAS Arid, Lahore",
        icon: uni,
        iconBg: "#383E56",
        date: "2020 - 2024",
        points: [
            "BSC in Computer Science ",
            "Programming",
            "Web Development",
            "Graduation",
        ],
    },
    {
        title: "FSc Pre-Engineering",
        school_name: "Govt.Shalimar College",
        icon: college,
        iconBg: "#E6DEDD",
        date: "2018 - 2020",
        points: [
            "HSC",
            "Science Group",
        ],
    },
    {
        title: "Matric",
        school_name: "Jinnah Educational Complex",
        icon: school,
        iconBg: "#383E56",
        date: "2016 - 2018",
        points: [
            "SSC",
            "Science Group",
        ],
    },

];

const projects = [
  {
    name: "Personal Portfolio",
    description: "My personal portfolio built using React.js and Bootstrap, showcasing my skills and projects.",
    tags: [
      { name: "React JS", color: "blue-text-gradient" },
      { name: "Bootstrap", color: "pink-text-gradient" },
    ],
    image: Pr0, 
    source_code_link: "https://github.com/Sananali01",
    live_site_link: "https://sanan-official.vercel.app//"
  },
    {
      name: "Campus Management System",
      description: "A comprehensive system for managing various aspects of campus life, including student information, course registration, and administrative tasks.",
      tags: [
        { name: "React JS", color: "blue-text-gradient" },
        { name: "Node JS", color: "orange-text-gradient" },
        { name: "Express JS", color: "green-text-gradient" },
        { name: "MongoDB", color: "pink-text-gradient" },
      ],
      image: Pr1,
      source_code_link: "https://github.com/Sananali01/Campus-Management-System",
      live_site_link: ""
    },
    {
      name: "Lofty Logix",
      description: "Lofty Logix is a state-of-the-art logistics management system designed to streamline operations and enhance efficiency.",
      tags: [
        { name: "HTML", color: "blue-text-gradient" },
        { name: "CSS", color: "green-text-gradient" },
        { name: "Bootstrap", color: "pink-text-gradient" },
        { name: "JavaScript", color: "orange-text-gradient" },
      ],
      image: Pr2,
      source_code_link: "https://github.com/Sananali01",
      live_site_link: "https://lofty-logix.vercel.app/"
    },
    {
      name: "Game Verse",
      description: "Game Verse is a comprehensive platform for gamers, featuring the latest news, reviews, and community forums.",
      tags: [
        { name: "React JS", color: "blue-text-gradient" },
        { name: "Bootstrap", color: "pink-text-gradient" },
        { name: "Redux", color: "purple-text-gradient" },
      ],
      image: Pr3,
      source_code_link: "https://github.com/Sananali01",
      live_site_link: "https://game-verse-react.vercel.app/"
    },
    {
      name: "POS",
      description: "POS is a modern point-of-sale system tailored for small businesses, offering seamless transactions and inventory management.",
      tags: [
        { name: "React JS", color: "blue-text-gradient" },
        { name: "Bootstrap", color: "pink-text-gradient" },
        { name: "Node JS", color: "orange-text-gradient" },
      ],
      image: Pr4,
      source_code_link: "https://github.com/Sananali01",
      live_site_link: "https://bakery-hazel.vercel.app/"
    },
    {
      name: "Cyber Net",
      description: "CyberNet Security Website provides essential information and resources on cybersecurity, including articles, tips, and best practices.",
      tags: [
        { name: "React JS", color: "blue-text-gradient" },
      ],
      image: Pr11,
      source_code_link: "https://github.com/Sananali01",
      live_site_link: "https://cyber-net-shields.vercel.app/"
    },
    {
      name: "Lofty Logix Portfolio",
      description: "A detailed portfolio showcasing the various projects and achievements of Lofty Logix.",
      tags: [
        { name: "React JS", color: "blue-text-gradient" },
      ],
      image: Pr5,
      source_code_link: "https://github.com/Sananali01",
      live_site_link: "https://loftylogix.com/"
    },
    {
      name: "Anime Fusion",
      description: "Anime Fusion is a platform dedicated to anime enthusiasts, featuring the latest episodes, reviews, and forums.",
      tags: [
        { name: "React JS", color: "blue-text-gradient" },
        { name: "Firebase", color: "pink-text-gradient" },
      ],
      image: Pr6,
      source_code_link: "https://github.com/Sananali01",
      live_site_link: "https://anime-fusion-web.vercel.app/"
    },
    {
      name: "Knowledge Tree",
      description: "Knowledge Tree is an educational platform providing resources and tutorials across various subjects.",
      tags: [
        { name: "React JS", color: "blue-text-gradient" },
        { name: "Bootstrap", color: "pink-text-gradient" },
      ],
      image: Pr7,
      source_code_link: "https://github.com/Sananali01",
      live_site_link: "https://knowledge-tree-web.vercel.app/"
    },
    {
      name: "Clatter Cloud",
      description: "Clatter Cloud is a cloud-based communication tool designed for teams to collaborate efficiently.",
      tags: [
        { name: "HTML", color: "blue-text-gradient" },
        { name: "CSS", color: "green-text-gradient" },
      ],
      image: Pr8,
      source_code_link: "https://github.com/Sananali01",
      live_site_link: "https://clatter-cloud.netlify.app/"
    },
    {
      name: "Ticket Selling",
      description: "A streamlined platform for buying and selling event tickets with ease.",
      tags: [
        { name: "HTML", color: "blue-text-gradient" },
        { name: "CSS", color: "green-text-gradient" },
      ],
      image: Pr9,
      source_code_link: "https://github.com/Sananali01",
      live_site_link: "https://ticket-landing-page.netlify.app/"
    },
    {
      name: "Coin Sensei",
      description: "CoinSensei.co is a cutting-edge cryptocurrency educational platform, offering expert insights and tutorials to empower individuals in the dynamic world of digital assets.",
      tags: [
        { name: "React JS", color: "blue-text-gradient" },
        { name: "Php", color: "pink-text-gradient" },
      ],
      image: Pr10,
      source_code_link: "https://github.com/Sananali01",
      live_site_link: "https://www.coinsensei.co/"
    },
];

  

export { services, technologies, experiences,  projects, educations };