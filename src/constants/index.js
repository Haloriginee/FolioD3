// Navbar

export const NavLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

// img

import {
  water,
  fire,
  thunder,
  earth,
  javascript,
  ruby,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  threejs,
  foliov2,
  movie2,
  musics2,
  hulk,
  bpanthere,
  hawkeye,
  panda,
  car,
  carrent,
  game1,
} from "../assets";

// About

export const services = [
  {
    title: "Web Developer",
    icon: fire,
  },
  {
    title: "MERN Developer",
    icon: earth,
  },
  {
    title: "Nextjs Developer",
    icon: thunder,
  },
  {
    title: "Threejs Developer",
    icon: water,
  },
];

// Tech

 export const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Ruby",
    icon: ruby,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

// Work

export const projects = [
  {
    name: "NhaQueMovie",
    description:
      "Get ready to binge-watch your heart out with our Netflix clone! It's like having a never-ending buffet of movies and TV shows at your fingertips. With personalized recommendations, multi-user profiles, and a massive library of titles, you'll never run out of options.",
    tags: [
      {
        name: "react",
        color: "red-text-gradient",
      },
      {
        name: "restapi",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "yellow-text-gradient",
      },
    ],
    image: movie2,
    source_code: "https://github.com/Haloriginee/NhaQueMovieV2",
    link: "https://nhaquemoviev2.netlify.app/"
  },
  {
    name: "NhaQueMusic",
    description:
      "Get ready to jam out with our Spotify clone! It's like having a personal DJ in your pocket. With millions of songs at your fingertips, you can listen to all your favorites and discover new music to love. Our playlists are so good, you'll wonder how you ever lived without them.",
    tags: [
      {
        name: "tailwind",
        color: "red-text-gradient",
      },
      {
        name: "redux",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "yellow-text-gradient",
      },
    ],
    image: musics2,
    source_code: "https://github.com/Haloriginee/NhaQueMusicsV2",
    link: "https://nhaquemusics-v2.netlify.app/"
  },
  {
    name: "IMGen",
    description:
    "Unleash your imagination with our AI image generator! From surreal landscapes to funky patterns, our app generates unique and vibrant images that will blow your mind. Get ready to explore a world of endless possibilities and let our AI take your creativity to the next level.",
    tags: [
      {
        name: "express",
        color: "red-text-gradient",
      },
      {
        name: "mongoDB",
        color: "blue-text-gradient",
      },
      {
        name: "cloudinary",
        color: "yellow-text-gradient",
      },
    ],
    image: panda,
    source_code: "https://github.com/Haloriginee/IMGen",
    link: "https://imgene.netlify.app/"
  },
  {
    name: "Vroom-Vroom",
    description:
    "Get ready to take your car customization game to the next level with our cutting-edge AI-powered web-app!  With just a few clicks, you can transform your ride from a plain jane to a head-turning masterpiece. Let our AI be your co-pilot as you transform your car into a work of art.",
    tags: [
      {
        name: "nodejs",
        color: "red-text-gradient",
      },
      {
        name: "openai api",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "yellow-text-gradient",
      },
    ],
    image: car,
    source_code: "https://github.com/Haloriginee/Vroom-Vroom",
    link: "https://cusawroad.netlify.app/"
  },
  {
    name: "HypeWheels",
    description:
    "Rev up your adventure with our car renting app! Buckle up and choose from a fleet of wheels that'll make your heart race. Whether you're cruising for a day or embarking on a road trip, we've got the keys to your dream ride. Hit the road to experience the thrill of ultimate freedom on four wheels!",
    tags: [
      {
        name: "nextjs",
        color: "red-text-gradient",
      },
      {
        name: "typescrypt",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "yellow-text-gradient",
      },
    ],
    image: carrent,
    source_code: "https://github.com/Haloriginee/HypeWheels",
    link: "https://hypewheels.netlify.app/"
  },
  {
    name: "Fake & Famous",
    description:
    "Prepare to unleash your inner speed demon! Step into the driver's seat of sleek, futuristic cars and race in a neon-infused world. Feel the rush as you navigate gravity-defying loops, blazing straightaways, and treacherous twists, all while leaving a trail of dazzling light in your wake.",
    tags: [
      {
        name: "reactjs",
        color: "red-text-gradient",
      },
      {
        name: "threejs",
        color: "blue-text-gradient",
      },
      {
        name: "game",
        color: "yellow-text-gradient",
      },
    ],
    image: game1,
    source_code: "https://github.com/Haloriginee/3D-Game",
    link: "https://gamepholife.netlify.app/"
  },
];

// Feedbacks

export const nofriends = [
  {
    nofriend:
    "Listen up, puny human! You are stronger than you think. Don't give up now, keep fighting! Embrace your inner Hulk and smash through any obstacle in your way!",
    name: "Hulk",
    designation: "Strongest Avenger",
    company: "Avenger",
    image: hulk,
  },
  {
    nofriend:
    "Be strong, be brave, and be true to yourself. You have the heart of a warrior, and the spirit of a panther. Let nothing stand in your way, and let your light shine bright for all to see.",
    name: "Black Panthere",
    designation: "King of Wakanda",
    company: "Avenger",
    image: bpanthere,
  },
  {
    nofriend:
    "Alright, listen up. It's time to focus, aim true, and hit your mark. You're capable of more than you realize, so let's show 'em what we're made of. And remember, there's always another shot.",
    name: "Hawkeye",
    designation: "Real Avenger",
    company: "Avenger",
    image: hawkeye,
  },
];
