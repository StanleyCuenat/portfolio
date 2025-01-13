import { Link } from "@remix-run/react";
import { System } from "..";
import { FONT_WEIGHT } from "../system/Typography";
import { ArrowRightCircleIcon } from "../icons";
import { motion } from "framer-motion";

type PortfolioCardProps = {
  title: string;
  img: string;
  url: string;
  date: string;
  description: string;
  content: string;
  className?: string;
};

export const PortfolioCard = (props: PortfolioCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, marginTop: 200 }}
      whileInView={{ opacity: 1, marginTop: 0 }}
      transition={{ duration: 0.5, delay: 0, ease: "easeIn" }}
      viewport={{ once: true }}
    >
      <Link
        target="_blank"
        to={props.url}
        className={`p-6 bg-white rounded-lg flex flex-col h-full  grow gap-4 group ${
          props.className ?? ""
        }`}
      >
        <div className="bg-main-red  flex flex-col rounded-lg  relative cursor-pointer duration-200 overflow-hidden border-main-gray">
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
              Go to website
            </System.Typography>
            <ArrowRightCircleIcon className="h-6 w-6 ml-2" />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <System.Typography
            type={System.TYPOGRAPHY.H3}
            color={System.COLORS.BLACK}
            weight={FONT_WEIGHT.REGULAR}
          >
            {props.title}
          </System.Typography>
          <div className="flex flex-col gap-1">
            <System.Typography
              type={System.TYPOGRAPHY.SUB}
              color={System.COLORS.BLACK}
              weight={FONT_WEIGHT.REGULAR}
            >
              {props.description}
            </System.Typography>
            <System.Typography
              type={System.TYPOGRAPHY.CONTENT}
              color={System.COLORS.GREY}
              weight={FONT_WEIGHT.REGULAR}
            >
              {props.date}
            </System.Typography>
          </div>
          <System.Typography
            type={System.TYPOGRAPHY.CONTENT}
            color={System.COLORS.GREY}
            weight={FONT_WEIGHT.REGULAR}
          >
            {props.content}
          </System.Typography>
        </div>
      </Link>
    </motion.div>
  );
};
