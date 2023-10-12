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
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
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
    company_name: "Tech Solutions Inc",
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
    company_name: "Data Insights Co",
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
    company_name: "YourTech Startup",
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
    name: "Car Rent",
    description: "Web-based platform for car rentals.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/your-username/car-rent", // Replace with your GitHub project link
  },
  {
    name: "Job IT",
    description: "Web application for job search and salary estimates.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/your-username/job-it", // Replace with your GitHub project link
  },
  {
    name: "Trip Guide",
    description: "Travel booking platform with recommendations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/your-username/trip-guide", // Replace with your GitHub project link
  },
];



export { services, technologies, experiences, testimonials, projects };