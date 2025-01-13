import {
  deescut,
  hetchrLogo,
  innosonianHome,
  jobypepperHome,
  nomadherHome,
  packativeHome,
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
  result: string;
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
    type: "Web development",
    challenge: "",
    result: "",
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
    challenge: "",
    result: "",
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
    type: "Web development",
    challenge: "",
    result: "",
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
    type: "Web development",
    challenge: "",
    result: "",
  },
  {
    id: "Marreli",
    title: "Smart me up",
    date: "July 2020 - September 2020",
    description: "Private dashboard for autopiloted car fleet",
    imgs: [jobypepperHome],
    url: "https://www.marelli.com/",
    intro:
      "JobyPepper is the leading SaaS platform for student jobs in France. The company provides all the tools students and companies need to find jobs and manage billing. As a developer during the company's early stages, it was an incredible experience to work on a variety of topics.",
    type: "Web development",
    challenge: "",
    result: "",
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
    type: "Web development",
    challenge: "",
    result: "",
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
    type: "Frontend development",
    challenge: "",
    result: "",
  },
];

export const getPortfolioHome = async () => PORTFOLIO_LIST.slice(0, 4);
export const getPortfolioList = async () => PORTFOLIO_LIST;
