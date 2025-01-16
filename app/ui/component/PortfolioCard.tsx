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
  id: string;
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
      <div
        className={`p-6 bg-white rounded-lg flex flex-col h-full  grow gap-4 group ${
          props.className ?? ""
        }`}
      >
        <div className="flex flex-col rounded-lg relative duration-200 overflow-hidden border-main-gray">
          <img
            src={props.img}
            className="flex w-full h-full object-contain group-hover:scale-105 duration-200 rounded-t-lg shrink"
          />
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
            weight={FONT_WEIGHT.LIGHT}
          >
            {props.content}
          </System.Typography>
        </div>
        <div className="flex flex-col-reverse md:flex-row basis-auto mt-auto gap-4">
          <Link
            to={`/portfolio/${props.id}`}
            className="bg-main-black justify-between px-4 py-2 text-white rounded-md hover:bg-black flex flex-row items-center"
          >
            <System.Typography
              type={System.TYPOGRAPHY.CONTENT}
              color={System.COLORS.WHITE}
              weight={FONT_WEIGHT.REGULAR}
            >
              See details
            </System.Typography>
            <ArrowRightCircleIcon className="h-6 w-6 ml-2" />
          </Link>
          <Link
            target="_blank"
            to={props.url}
            className="border border-main-black justify-between px-4 py-2 rounded-md hover:border-black flex flex-row items-center"
          >
            <System.Typography
              type={System.TYPOGRAPHY.CONTENT}
              color={System.COLORS.BLACK}
              weight={FONT_WEIGHT.REGULAR}
            >
              Website
            </System.Typography>
            <ArrowRightCircleIcon className="h-6 w-6 ml-2 duration-200" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
