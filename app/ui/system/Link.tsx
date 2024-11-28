import { Link as RLink } from "@remix-run/react";
import { PropsWithChildren } from "react";

interface LinkProps extends PropsWithChildren {
  className?: string;
  to: string;
  target: React.HTMLAttributeAnchorTarget;
  rel?: string;
}

export const Link = (props: LinkProps) => {
  const style = [
    "underline text-main-black hover:text-main-red duration-200 text-lg flex flex-row items-center group",
    props.className ?? "",
  ].join(" ");
  return (
    <RLink
      to={props.to}
      className={style}
      target={props.target}
      rel={props.rel ?? ""}
    >
      {props.children}
    </RLink>
  );
};
