import {
  mobile,
  backend,
  creator,
  web,
  javascript,
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
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
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

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
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
  {
    name: "docker",
    icon: docker,
  },
];



const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rohith proved me wrong.",
    name: "",
    designation: "",
    company: "",
    image: "",
  },
 
];


const experiences = [
  {
    title: "Machine Learning Researcher",
    company_name: "ABC Research Labs",
   // icon: abcIcon, // Replace with your company's icon image
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Conducted research in machine learning algorithms and techniques.",
      "Collaborated with a team of data scientists to develop predictive models.",
      "Published research papers and presented findings at conferences.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "",
    //icon: 
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Designed and developed web applications using React, Node.js, and other technologies.",
      "Worked closely with clients to gather requirements and deliver solutions.",
      "Participated in code reviews and mentored junior developers.",
    ],
  },
  {
    title: "Data Scientist",
    company_name: "",
    // icon : 
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Applied data analysis and machine learning to extract insights from data.",
      "Collaborated with clients to identify business problems and provide data-driven solutions.",
      "Developed data visualization dashboards to communicate results.",
    ],
  },
  {
    title: "Full Stack JavaScript Developer",
    company_name: "",
  //icon : 
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Leading the development of web applications using a modern tech stack.",
      "Working on both front-end and back-end development to create scalable solutions.",
      "Collaborating with cross-functional teams to deliver high-quality software.",
    ],
  },
];

const projects = [
  {
    name: "Spotify UI Clone",
    description: "A responsive web application that mimics the user interface of the Spotify music streaming platform. It's built using HTML, CSS, and JavaScript to replicate the look and feel of the Spotify application, allowing users to browse and play music.",
    tags: [
      { name: "HTML", color: "orange" },
      { name: "CSS", color: "blue" },
      { name: "JavaScript", color: "yellow" },
    ],
    image: "image-link-for-spotify-ui",
    source_code_link: "https://github.com/rohithIlluri/spotify-UI",
  },
  {
    name: "Crypto Price Tracker",
    description: "A cryptocurrency price tracking web application that provides real-time data on various cryptocurrencies. Users can monitor cryptocurrency prices, view historical data, and stay informed about the latest trends in the crypto market.",
    tags: [
      { name: "React", color: "blue" },
      { name: "Node.js", color: "green" },
      { name: "CryptoAPI", color: "yellow" },
    ],
    image: "image-link-for-cryptoapp",
    source_code_link: "https://github.com/rohithIlluri/cryptoapp",
  },
  // Add more projects as needed
];





export { services, technologies, experiences,testimonials, projects };