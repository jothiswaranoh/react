import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Ruby on Rails",
    type: "Full stack",
  },
  {
    imageUrl: react,
    name: "php",
    type: "Full stack",
  },
  {
    imageUrl: react,
    name: "php",
    type: "Full stack",
  },
  {
    imageUrl: react,
    name: "php",
    type: "Full stack",
  },

];

export const experiences = [
    {
        title: "Full Stack Developer",
        company_name: "Stanger Corps",
        icon: "starbucks", // Assuming starbucks is the variable holding the icon URL
        iconBg: "#accbe1",
        date: "March 2020 - April 2021",
        points: [
            "Developed and maintained web applications using PHP and other related technologies.",
            "Collaborated with cross-functional teams, including designers, product managers, and fellow developers, to create high-quality products.",
            "Implemented responsive design and ensured cross-browser compatibility.",
            "Participated in code reviews and provided constructive feedback to other developers."
        ],
    },
    {

        title: "VAPT tester",
        company_name: "Hack Over Security",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Conducted Vulnerability Assessment and Penetration Testing (VAPT) on web applications.",
            "Collaborated with cross-functional teams to identify and address security vulnerabilities in web applications.",
            "Implemented security best practices to enhance the overall security posture of the applications.",
            "Provided detailed reports and recommendations based on security assessments.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/jothiswaranoh",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/jothiswaran-r-01a873239/",
  },
];
export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Amazon Clone",
    description:
      "Developed a web application that monitors and notifies users of price changes for products on Amazon, facilitating users in finding the best deals.",
    link: "https://github.com/jothiswaranoh/",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Food Order Website (using PHP)",
    description:
      'Created a full-stack replica of the popular discussion platform "Threads" using PHP. This platform allows users to post and engage in threaded conversations.',
    link: "https://github.com/jothiswaranoh/",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "College Laboratory Maintaining System",
    description: "Developed a mobile app for efficiently managing college laboratory resources. This application streamlines the process of maintaining and organizing laboratory equipment, providing a user-friendly interface for administrators and users.",
    link: "https://github.com/jothiswaranoh/",
},

  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Social Media App with  (using Flutter)",
    description:
      "Developed a unique social media app with a built-in WiFi jammer feature using Node MCU. This application allows users to share photos and connect with friends in a familiar social media environment while incorporating an innovative WiFi jamming capability.",
    link: "https://github.com/jothiswaranoh/media_app",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Multi Form Handling App",
    description: "Built a dynamic web app with three levels of forms using Rails. Seamless navigation, secure authentication, and Solr integration for efficient data search.",
    link: "https://github.com/jothiswaranoh/",
},
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "Shopping App UI (using Flutter)",
    description:
      "Developed a visually appealing and user-friendly shopping app UI using Flutter. The app provides an immersive experience for users to explore and interact with a wide range of products.",
    link: "https://github.com/jothiswaranoh/",
  },
];
