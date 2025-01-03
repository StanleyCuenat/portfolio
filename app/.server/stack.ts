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
    name: "typescriptlang",
    img: typescriptLogo,
    href: "https://www.typescriptlang.org/",
  },
  {
    name: "gleam",
    img: gleam,
    href: "https://gleam.run/",
  },
  {
    name: "deno",
    img: deno,
    href: "https://deno.com/",
  },
  {
    name: "gcp",
    img: gcp,
    href: "https://cloud.google.com",
  },
  {
    name: "firebase",
    img: firebase,
    href: "https://firebase.google.com",
  },
  {
    name: "hono",
    img: hono,
    href: "https://hono.dev/",
  },
  {
    name: "react",
    img: react,
    href: "https://react.dev/",
  },
  {
    name: "react native",
    img: reactNative,
    href: "https://expo.dev/",
  },
  {
    name: "next.JS",
    img: nextjs,
    href: "https://nextjs.org/",
  },
  {
    name: "redux",
    img: reduxLogo,
    href: "https://redux-toolkit.js.org/",
  },
  {
    name: "remix",
    img: remixLogo,
    href: "https://remix.run/",
  },
];

export const getStackList = async () => STACK_LINK;
