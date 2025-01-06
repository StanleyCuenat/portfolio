import {
  deno,
  firebase,
  gcp,
  gleam,
  hono,
  nextjs,
  react,
  reactNative,
  reduxLogo,
  remixLogo,
  typescriptLogo,
} from "~/ui/img";

export type StackLinkItems = {
  name: string;
  img: string;
  href: string;
};
const STACK_LINK: StackLinkItems[] = [
  {
    name: "Typescript",
    img: typescriptLogo,
    href: "https://www.typescriptlang.org/",
  },
  {
    name: "Gleam",
    img: gleam,
    href: "https://gleam.run/",
  },
  {
    name: "Deno",
    img: deno,
    href: "https://deno.com/",
  },
  {
    name: "GCP",
    img: gcp,
    href: "https://cloud.google.com",
  },
  {
    name: "Firebase",
    img: firebase,
    href: "https://firebase.google.com",
  },
  {
    name: "Hono",
    img: hono,
    href: "https://hono.dev/",
  },
  {
    name: "React",
    img: react,
    href: "https://react.dev/",
  },
  {
    name: "Next.JS",
    img: nextjs,
    href: "https://nextjs.org/",
  },
  {
    name: "Redux",
    img: reduxLogo,
    href: "https://redux-toolkit.js.org/",
  },
  {
    name: "Remix",
    img: remixLogo,
    href: "https://remix.run/",
  },
];

export const getStackList = async () => STACK_LINK;
