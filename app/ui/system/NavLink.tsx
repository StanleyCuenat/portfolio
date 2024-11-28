import { PropsWithChildren, useCallback } from "react";
import { COLORS } from "./Colors";
import { NavLink as RNavLink } from "@remix-run/react";

export enum NAV_LINK_VARIANT {
  BUTTON = "button",
  LINK = "link",
}

interface NavLinkProps extends PropsWithChildren {
  color: COLORS;
  href: string;
  target: React.HTMLAttributeAnchorTarget;
  variant: NAV_LINK_VARIANT;
  active?: boolean;
  className?: string;
}

const handleButtonBgColor = (color: COLORS) => {
  switch (color) {
    case COLORS.BLACK:
      return "bg-main-black";
    case COLORS.WHITE:
      return "bg-white";
    case COLORS.RED:
      return "bg-main-red";
    case COLORS.GREY:
      return "bg-main-grey";
  }
};

const handleButtonHover = (color: COLORS) => {
  switch (color) {
    case COLORS.BLACK:
      return "hover:bg-sub-black";
    case COLORS.WHITE:
      return "hover:bg-white";
    case COLORS.RED:
      return "hover:bg-sub-red";
    case COLORS.GREY:
      return "hover:bg-main-grey";
  }
};

const handleButtonTextColor = (color: COLORS) => {
  switch (color) {
    case COLORS.BLACK:
      return "text-white";
    case COLORS.WHITE:
      return "text-main-black";
    case COLORS.RED:
      return "text-white";
    case COLORS.GREY:
      return "text-main-black";
  }
};

const NavLinkButton = (props: NavLinkProps) => {
  const BASE_STYLE =
    "rounded-full py-1.5 px-4 font-bold cursor-pointer relative duration-200";
  const handleStyles = useCallback(
    (isActive: boolean) => {
      const style = isActive
        ? [
            handleButtonBgColor(COLORS.RED),
            handleButtonTextColor(COLORS.RED),
            handleButtonHover(COLORS.RED),
            BASE_STYLE,
            props.className ?? "",
          ]
        : [
            handleButtonBgColor(props.color),
            handleButtonTextColor(props.color),
            handleButtonHover(props.color),
            BASE_STYLE,
            props.className ?? "",
          ];
      return style.join(" ");
    },
    [props.className, props.color]
  );

  return (
    <RNavLink
      to={props.href}
      target={props.target}
      className={({ isActive }) => handleStyles(isActive)}
    >
      {props.children}
    </RNavLink>
  );
};

const BaseNavLink = (props: NavLinkProps) => {
  return (
    <RNavLink to={props.href} target={props.target} className="underline">
      {props.children}
    </RNavLink>
  );
};

export const NavLink = (props: NavLinkProps) => {
  switch (props.variant) {
    case NAV_LINK_VARIANT.BUTTON:
      return <NavLinkButton {...props}></NavLinkButton>;
    default:
      return <BaseNavLink {...props}></BaseNavLink>;
  }
};
