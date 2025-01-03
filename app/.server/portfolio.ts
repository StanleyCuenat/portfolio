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
};
const PORTFOLIO_LIST: PortfolioItem[] = [
  {
    id: "packative",
    title: "Packative",
    imgs: [packativeHome],
  },
  {
    id: "nomadher",
    title: "NomadHer",
    imgs: [nomadherHome],
  },
  { id: "innosonian", title: "Innosonian", imgs: [innosonianHome] },
  { id: "jobypepper", title: "JobyPepper", imgs: [jobypepperHome] },
];

export const getPortfolioHome = async () => PORTFOLIO_LIST.slice(0, 4);
