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
};
const PORTFOLIO_LIST: PortfolioItem[] = [
  {
    id: "packative",
    title: "Packative",
    imgs: [packativeHome],
    url: "https://www.packative.com",
  },
  {
    id: "nomadher",
    title: "NomadHer",
    imgs: [nomadherHome],
    url: "https://www.nomadher.com",
  },
  {
    id: "innosonian",
    title: "Innosonian",
    imgs: [innosonianHome],
    url: "https://www.innosonian.global",
  },
  {
    id: "jobypepper",
    title: "JobyPepper",
    imgs: [jobypepperHome],
    url: "https://www.jobypepper.com",
  },
];

export const getPortfolioHome = async () => PORTFOLIO_LIST.slice(0, 4);
