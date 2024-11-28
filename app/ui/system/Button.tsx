import { PropsWithChildren } from "react";
import { COLORS } from "./Colors";

interface ButtonProps extends PropsWithChildren {
  color: COLORS;
  className?: string;
}

const handleBgColor = (color: COLORS) => {
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

const handleTextColor = (color: COLORS) => {
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

const handleHoverColor = (color: COLORS) => {
  switch (color) {
    default:
      return "hover:bg-sub-black";
  }
};

export const Button = (props: ButtonProps) => {
  const style = [
    handleTextColor(props.color),
    handleBgColor(props.color),
    handleHoverColor(props.color),
    "rounded-full py-1.5 px-4 font-bold cursor-pointer relative duration-200",
    props.className ?? "",
  ].join(" ");
  return <button className={style}>{props.children}</button>;
};
