import project1 from '../assets/images/kanban.webp'
import project2 from '../assets/images/nusic-app.webp'
import project3 from '../assets/images/nft-landing.webp'
import project4 from '../assets/images/project4.webp'
import project5 from '../assets/images/project5.webp'
import project6 from '../assets/images/project6.webp'

export const projects = [
  {
    title: "Kanban",
    description:
      "A responsive and interactive Kanban-style to-do list app that allows users to manage their tasks with different statuses. Built using React, TypeScript, Vite, React Hook Form, Styled Components, and Context API.",
    image: project1,
    type: "react",
    deploy: "https://skypro-kanban-pearl.vercel.app",
    href: 'https://github.com/tanya-kostecki/skypro-kanban',
    id: 1
  },
  {
    title: "Music App",
    description:
      "A music streaming app built with Next.js, TypeScript, and Redux Toolkit. Users can sign up, log in, like tracks, and create a favorites track-list. The app features track filtering by author, year, and genre, as well as a search function to find tracks quickly.",
    image: project2,
    type: "react",
    deploy: "https://github.com/tanya-kostecki/skypro-music-app",
    href: "https://github.com/tanya-kostecki/skypro-music-app",
    id: 2
  },
  {
    title: "NFT Landing",
    description:
      "A fully responsive NFT Landing Page built with React and TypeScript. This static landing page provides a sleek and visually appealing interface for showcasing NFTs, featuring smooth animations and a clean, minimalist design.",
    image: project3,
    type: "landing",
    deploy: "https://tanya-kostecki.github.io/nft-landing/",
    href: "https://github.com/tanya-kostecki/nft-landing",
    id: 3
  },
  {
    title: "Social Network",
    description:
      "A social network built with CRA with Typescript and Redux Toolkit. Users can login using a free account, follow and unfollow other users ",
    image: project4,
    type: "react",
    deploy: "https://github.com/tanya-kostecki/samurai-network",
    href: "https://github.com/tanya-kostecki/samurai-network",
    id: 4
  },
  {
    title: "The Project Title",
    description:
      "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    image: project5,
    type: "react",
    deploy: "https://github.com/tanya-kostecki",
    href: "https://github.com/tanya-kostecki",
    id: 5
  },
  {
    title: "The Project Title",
    description:
      "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    image: project6,
    type: "spa",
    deploy: "https://github.com/tanya-kostecki",
    href: "https://github.com/tanya-kostecki",
    id: 6
  },
];