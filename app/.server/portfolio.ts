import {
  deescut,
  hetchrLogo,
  innosonianHome,
  jobypepperHome,
  nomadherHome,
  packativeHome,
  sicpama,
  smartMeUpLogo,
} from "~/ui/img";

export type PortfolioItem = {
  id: string;
  title: string;
  imgs: string[];
  url: string;
  date: string;
  description: string;
  intro: string;
  type: string;
  challenge: string;
  result: string[];
  sector: string;
  technologies: string[];
};
const PORTFOLIO_LIST: PortfolioItem[] = [
  {
    id: "packative",
    title: "Packative",
    imgs: [packativeHome],
    date: "June 2024 - November 2024",
    description: "Ecommerce for packaging",
    url: "https://www.packative.com",
    intro:
      "Packative is a young startup striving to revolutionize the packaging industry in South Korea. Through their applications, they aim to help small and medium-sized businesses easily create and order custom-designed packaging.",
    type: "Frontend & Backend",
    challenge:
      "As a web developer, I played a key role in developing their innovative e-commerce platform using Next.js and Medusa.js.\nMy responsibilities included designing and implementing the core platform, creating and enhancing the admin dashboard, integrating a sleek new design, and building a custom size system tailored to packaging needs.\nI also worked on their sophisticated 3D editor to provide users with an interactive customization experience.\nThroughout the project, I adhered to rigorous Test-Driven Development (TDD) practices, leveraging Zustand to ensure robust state management and maintainability.",
    result: [""],
    technologies: [
      "Next.JS",
      "Zustand",
      "Medusa.JS",
      "AWS",
      "Typescript",
      "PostgreSQL",
    ],
    sector: "E-commerce application",
  },

  {
    id: "nomadher",
    title: "NomadHer",
    date: "April 2022 - November 2023",
    description: "Mobile appplication for women traveling alone",
    imgs: [nomadherHome],
    url: "https://www.nomadher.com",
    intro:
      "NomadHer is the first mobile application designed for solo women travelers. As the Head of Tech, I managed the entire application independently, ensuring the platform's scalability. Growing the user base from 500 to over 200,000 was an incredible experience.",
    type: "Head of tech",
    challenge:
      "As a web developer, I played a key role in developing their innovative e-commerce platform using Next.js and Medusa.js.\nMy responsibilities included designing and implementing the core platform, creating and enhancing the admin dashboard, integrating a sleek new design, and building a custom size system tailored to packaging needs.\n\nI also worked on their sophisticated 3D editor to provide users with an interactive customization experience.\n\nThroughout the project, I adhered to rigorous Test-Driven Development (TDD) practices, leveraging Zustand to ensure robust state management and maintainability.",
    result: [""],
    technologies: [
      "React Native",
      "Redux",
      "GCP",
      "Firebase",
      "Typescript",
      "Firestore",
      "ElasticSearch",
      "React",
      "Nest.JS",
    ],
    sector: "Social network - Mobile application",
  },
  {
    id: "innosonian",
    title: "Innosonian",
    imgs: [innosonianHome],
    date: "September 2020 - April 2022",
    description: "Web and mobile application for connected cpr manikins",
    url: "https://www.innosonian.global",
    intro:
      "Innosonian is a leading provider of connected CPR manikins in Asia. Developing their web and mobile applications for use with these manikins, as well as their online class training system, presented significant challenges as a developer.",
    type: "Frontend & Backend",
    challenge:
      "As a web developer, I played a key role in developing their innovative e-commerce platform using Next.js and Medusa.js.\nMy responsibilities included designing and implementing the core platform, creating and enhancing the admin dashboard, integrating a sleek new design, and building a custom size system tailored to packaging needs.\n\nI also worked on their sophisticated 3D editor to provide users with an interactive customization experience.\n\nThroughout the project, I adhered to rigorous Test-Driven Development (TDD) practices, leveraging Zustand to ensure robust state management and maintainability.",
    result: [""],
    technologies: [
      "React",
      "Redux",
      "AWS",
      "Typescript",
      "PostgreSQL",
      "WebRTC",
      "Web bluetooth",
    ],
    sector: "Healthcare & embedded software",
  },
  {
    id: "jobypepper",
    title: "JobyPepper",
    date: "January 2018 - June 2018",
    description: "SAAS for short term student job",
    imgs: [jobypepperHome],
    url: "https://www.jobypepper.com",
    intro:
      "JobyPepper is the leading SaaS platform for student jobs in France. The company provides all the tools students and companies need to find jobs and manage billing. As a developer during the company's early stages, it was an incredible experience to work on a variety of topics.",
    type: "Frontend & Backend",
    challenge:
      "As a web developer, I played a key role in developing their innovative e-commerce platform using Next.js and Medusa.js.\nMy responsibilities included designing and implementing the core platform, creating and enhancing the admin dashboard, integrating a sleek new design, and building a custom size system tailored to packaging needs.\nI also worked on their sophisticated 3D editor to provide users with an interactive customization experience.\nThroughout the project, I adhered to rigorous Test-Driven Development (TDD) practices, leveraging Zustand to ensure robust state management and maintainability.",
    result: [""],
    technologies: ["React", "Redux", "MongoDB"],
    sector: "SaaS - Student jobs",
  },
  {
    id: "Marreli",
    title: "Smart me up - Marreli",
    date: "July 2020 - September 2020",
    description: "Private dashboard for autopiloted car fleet",
    imgs: [smartMeUpLogo],
    url: "https://www.marelli.com/",
    intro:
      "SmartMeUp, founded in 2012 and based in Meylan, France, specialized in developing perception software for autonomous driving, focusing on low-power object detection and 3D environment modeling. With my help we created an admin dashboard and reviewed their anotation plateform and system",
    type: "Frontend & Backend",
    challenge:
      "As a web developer, I played a key role in developing their innovative e-commerce platform using Next.js and Medusa.js.\nMy responsibilities included designing and implementing the core platform, creating and enhancing the admin dashboard, integrating a sleek new design, and building a custom size system tailored to packaging needs.\n\nI also worked on their sophisticated 3D editor to provide users with an interactive customization experience.\n\nThroughout the project, I adhered to rigorous Test-Driven Development (TDD) practices, leveraging Zustand to ensure robust state management and maintainability.",
    result: [""],
    technologies: ["Vue.JS", "Python", "MongoDB", "Typescript", "Jango"],
    sector: "Computer vision - autopilot cars",
  },
  {
    id: "Hetchr",
    title: "Hetchr",
    date: "September 2019 - June 2020",
    description: "SaaS for developer's team management",
    imgs: [hetchrLogo],
    url: "https://www.marelli.com/",
    intro:
      "JobyPepper is the leading SaaS platform for student jobs in France. The company provides all the tools students and companies need to find jobs and manage billing. As a developer during the company's early stages, it was an incredible experience to work on a variety of topics.",
    type: "Frontend & Backend",
    challenge:
      "As a web developer, I played a key role in developing their innovative e-commerce platform using Next.js and Medusa.js.\nMy responsibilities included designing and implementing the core platform, creating and enhancing the admin dashboard, integrating a sleek new design, and building a custom size system tailored to packaging needs.\n\nI also worked on their sophisticated 3D editor to provide users with an interactive customization experience.\n\nThroughout the project, I adhered to rigorous Test-Driven Development (TDD) practices, leveraging Zustand to ensure robust state management and maintainability.",
    result: [""],
    technologies: [
      "React",
      "Redux",
      "Webhook",
      "AWS",
      "Typescript",
      "PostgreSQL",
    ],
    sector: "SaaS - HR - project management",
  },
  {
    id: "sicpama",
    title: "SicPama",
    imgs: [sicpama],
    date: "November 2023 - June 2024",
    description: "Order solution for F&B",
    url: "https://www.sicpama.com/",
    type: "Frontend & Backend",
    intro:
      "SicPama is a South Korean startup founded in 2021, specializing in QR code-based ordering and payment systems for the restaurant industry. Their platform enables customers to place joint orders and choose payment options without the need for additional hardware, enhancing operational efficiency for restaurant owners",
    challenge:
      "As a web developer, I played a key role in developing their innovative e-commerce platform using Next.js and Medusa.js.\nMy responsibilities included designing and implementing the core platform, creating and enhancing the admin dashboard, integrating a sleek new design, and building a custom size system tailored to packaging needs.\n\nI also worked on their sophisticated 3D editor to provide users with an interactive customization experience.\n\nThroughout the project, I adhered to rigorous Test-Driven Development (TDD) practices, leveraging Zustand to ensure robust state management and maintainability.",
    result: [""],
    technologies: [
      "Next.JS",
      "React",
      "Zustand",
      "AWS",
      "Typescript",
      "PostgreSQL",
      "Express",
    ],
    sector: "Food & Beverage - Point Of Sale",
  },
  {
    id: "Deescut",
    title: "Deescut",
    date: "January 2019 - April 2019",
    description: "SaaS for developer's team management",
    imgs: [deescut],
    url: "https://fr.linkedin.com/company/deescut",
    intro:
      "JobyPepper is the leading SaaS platform for student jobs in France. The company provides all the tools students and companies need to find jobs and manage billing. As a developer during the company's early stages, it was an incredible experience to work on a variety of topics.",
    type: "Frontend",
    challenge:
      "As a web developer, I played a key role in developing their innovative e-commerce platform using Next.js and Medusa.js.\nMy responsibilities included designing and implementing the core platform, creating and enhancing the admin dashboard, integrating a sleek new design, and building a custom size system tailored to packaging needs.\n\nI also worked on their sophisticated 3D editor to provide users with an interactive customization experience.\n\nThroughout the project, I adhered to rigorous Test-Driven Development (TDD) practices, leveraging Zustand to ensure robust state management and maintainability.",
    result: [""],
    technologies: ["React", "Redux", "Typescript"],
    sector: "Social network - Debate plateform",
  },
];

export const getPortfolioHome = async () => PORTFOLIO_LIST.slice(0, 4);
export const getPortfolioList = async () => PORTFOLIO_LIST;
export const getPortfolioById = async (id: string) =>
  PORTFOLIO_LIST.find((p) => p.id === id);
