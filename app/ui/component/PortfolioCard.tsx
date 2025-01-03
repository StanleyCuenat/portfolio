import { Link } from "@remix-run/react";
import { System } from "..";
import { FONT_WEIGHT } from "../system/Typography";
import { ArrowRightCircleIcon } from "../icons";

type PortfolioCardProps = {
  title: string;
  img: string;
  url: string;
};

export const PortfolioCard = (props: PortfolioCardProps) => {
  return (
    <Link to={props.url}>
      <div className="bg-main-red group flex flex-col rounded-lg  relative cursor-pointer duration-200 overflow-hidden hover:shadow-card">
        <img
          src={props.img}
          className="flex w-full h-full object-contain group-hover:scale-105 duration-200 rounded-t-lg shrink"
        />
        <div className="absolute opacity-0 flex w-full h-full bg-main-black rounded-lg group-hover:opacity-40 duration-200"></div>
        <div className="ml-4 mb-4 py-2 px-4 flex flex-row absolute opacity-0 group-hover:opacity-100 bg-white bottom-0 duration-200 z-40 rounded-full">
          <System.Typography
            type={System.TYPOGRAPHY.CONTENT}
            color={System.COLORS.BLACK}
            weight={FONT_WEIGHT.BOLD}
          >
            {props.title}
          </System.Typography>
          <ArrowRightCircleIcon className="h-6 w-6 ml-2" />
        </div>
      </div>
    </Link>
  );
};
