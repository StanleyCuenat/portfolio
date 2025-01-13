import {
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
  content: string;
};
const PORTFOLIO_LIST: PortfolioItem[] = [
  {
    id: "packative",
    title: "Packative",
    imgs: [packativeHome],
    date: "June 2024 - November 2024",
    description: "Ecommerce for packaging",
    url: "https://www.packative.com",
    content:
      "Packative is a young startup striving to revolutionize the packaging industry in South Korea. Through their applications, they aim to help small and medium-sized businesses easily create and order custom-designed packaging.",
  },
  {
    id: "nomadher",
    title: "NomadHer",
    date: "April 2022 - November 2023",
    description: "Mobile appplication for women traveling alone",
    imgs: [nomadherHome],
    url: "https://www.nomadher.com",
    content:
      "NomadHer is the first mobile application designed for solo women travelers. As the Head of Tech, I managed the entire application independently, ensuring the platform's scalability. Growing the user base from 500 to over 200,000 was an incredible experience.",
  },
  {
    id: "innosonian",
    title: "Innosonian",
    imgs: [innosonianHome],
    date: "September 2020 - April 2022",
    description: "Web and mobile application for connected cpr manikins",
    url: "https://www.innosonian.global",
    content:
      "Innosonian is a leading provider of connected CPR manikins in Asia. Developing their web and mobile applications for use with these manikins, as well as their online class training system, presented significant challenges as a developer.",
  },
  {
    id: "jobypepper",
    title: "JobyPepper",
    date: "January 2018 - June 2018",
    description: "SAAS for short term student job",
    imgs: [jobypepperHome],
    url: "https://www.jobypepper.com",
    content:
      "JobyPepper is the leading SaaS platform for student jobs in France. The company provides all the tools students and companies need to find jobs and manage billing. As a developer during the company's early stages, it was an incredible experience to work on a variety of topics.",
  },
];

export const getPortfolioHome = async () => PORTFOLIO_LIST.slice(0, 4);
