import project1 from '../assets/images/kanban.webp'
import project2 from '../assets/images/nusic-app.webp'
import project3 from '../assets/images/nft-landing.webp'
import project4 from '../assets/images/project4.webp'
import inctagram from '../assets/images/inctagram.webp'
import sdo from '../assets/images/sdo.webp'
import admin from '../assets/images/admin.webp'

export const projects = [
  {
    title: "Kanban",
    stack: "React, TypeScript, Vite, React Hook Form, Styled Components, and Context API",
    description:
        "A responsive and interactive Kanban-style to-do list app that allows users to manage their tasks with different statuses. Built using React, TypeScript, Vite, React Hook Form, Styled Components, and Context API.",
    image: project1,
    type: "personal",
    deploy: "https://skypro-kanban-pearl.vercel.app",
    href: 'https://github.com/tanya-kostecki/skypro-kanban',
    id: 1
  },
  {
    title: "Music App",
    stack: "Next.js, TypeScript, and Redux Toolkit",
    description:
        "A music streaming app built with Next.js, TypeScript, and Redux Toolkit. Users can sign up, log in, like tracks, and create a favorites track-list. The app features track filtering by author, year, and genre, as well as a search function to find tracks quickly.",
    image: project2,
    type: "personal",
    /*deploy: "https://github.com/tanya-kostecki/skypro-music-app",*/
    href: "https://github.com/tanya-kostecki/skypro-music-app",
    id: 2
  },
  {
    title: "NFT Landing",
    stack: "React, TypeScript, Styled Components",
    description:
        "A fully responsive NFT Landing Page built with React and TypeScript. This static landing page provides a sleek and visually appealing interface for showcasing NFTs, featuring smooth animations and a clean, minimalist design.",
    image: project3,
    type: "personal",
    deploy: "https://tanya-kostecki.github.io/nft-landing/",
    href: "https://github.com/tanya-kostecki/nft-landing",
    id: 3
  },
  {
    title: "Social Network",
    stack: "React, Typescript and Redux Toolkit",
    description:
        "A social network built with CRA with Typescript and Redux Toolkit. Users can login using a free account, follow and unfollow other users ",
    image: project4,
    type: "personal",
   /* deploy: "https://github.com/tanya-kostecki/samurai-network",*/
    href: "https://github.com/tanya-kostecki/samurai-network",
    id: 4
  },
  {
    title: "Inctagram",
    stack: "Next.js, TypeScript, Tailwind CSS, and MobX",
    description:
        "An Instagram clone offering a complete social media experience. Users can sign up or log in via email, Google, or GitHub, manage personal profiles, share images, follow others, like posts, and leave comments.",
    image: inctagram,
    type: "team",
    deploy: "https://car-robot.ru/en",
    href: "https://github.com/Mechanics-cloud/OurProject",
    id: 5
  },
  {
    title: "Inctagram SuperAdmin",
    stack: "Next.js, TypeScript, Tailwind CSS, GraphQL and Apollo Client",
    description:
        "Admin for Inctagram",
    image: admin,
    type: "team",
    deploy: "https://admin.car-robot.ru/en",
    href: "https://github.com/Mechanics-cloud/admin-net",
    id: 6
  },
  {
    title: "SDO Metro",
    stack: "React with Vite, TypeScript, Redux Toolkit",
    description:
        "An MVP of an online employee training platform developed for the Moscow Metro. The platform features secure authentication for both regular employees and methodologists. Regular users can browse available courses and take lessons, while methodologists have access to a course builder that allows them to create new courses and edit existing ones.",
    image: sdo,
    type: "team",
    deploy: "https://edu.sdo-metro.ru",
    href: "https://github.com/aheadsps/sdo_mm",
    id: 7
  },
];