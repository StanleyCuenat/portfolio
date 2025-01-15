import { PortfolioItem } from "~/.server/portfolio";
import { System } from "..";
import { FONT_WEIGHT } from "../system/Typography";
import { motion } from "framer-motion";
import { Link } from "@remix-run/react";
import { COLORS } from "../system";
import { PortfolioSpecItem } from "./PortfolioSpecItem";

type PortfolioItemProps = {
  portfolio: PortfolioItem;
};

export const PortfolioListItem = (props: PortfolioItemProps) => {
  return (
    <motion.section
      className="flex flex-col  gap-10 max-w-[1000px] mx-auto"
      initial={{ opacity: 0, marginTop: 200 }}
      whileInView={{ opacity: 1, marginTop: 0 }}
      transition={{ duration: 0.5, delay: 0, ease: "easeIn" }}
      viewport={{ once: true }}
    >
      <Link to={`/portfolio/${props.portfolio.id}`} className="w-full flex">
        <img
          src={props.portfolio.imgs[0]}
          className="object-cover rounded-xl max-h-[400px] w-full"
        />
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        <div className="flex flex-col gap-4">
          <System.Typography
            type={System.TYPOGRAPHY.H3}
            color={System.COLORS.BLACK}
            weight={FONT_WEIGHT.REGULAR}
          >
            {props.portfolio.title}
          </System.Typography>
          <System.Typography
            type={System.TYPOGRAPHY.CONTENT}
            color={System.COLORS.GREY}
            weight={FONT_WEIGHT.LIGHT}
          >
            {props.portfolio.intro}
          </System.Typography>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-4">
          <PortfolioSpecItem title="Client" content={props.portfolio.title} />
          <PortfolioSpecItem title="Work type" content={props.portfolio.type} />
          <PortfolioSpecItem title="Dates" content={props.portfolio.date} />
          <div className="flex flex-col gap-2">
            <System.Typography
              type={System.TYPOGRAPHY.CONTENT}
              color={System.COLORS.GREY}
              weight={FONT_WEIGHT.REGULAR}
            >
              Link
            </System.Typography>
            <Link to={props.portfolio.url}>
              <System.Typography
                className="mr-12 hover:text-main-red"
                type={System.TYPOGRAPHY.SUB}
                color={System.COLORS.BLACK}
                weight={FONT_WEIGHT.REGULAR}
              >
                Website
              </System.Typography>
            </Link>
          </div>
        </div>

        <div className="flex flex-row items-center">
          <Link to={`/portfolio/${props.portfolio.id}`}>
            <System.Button color={COLORS.BLACK}>View detail</System.Button>
          </Link>
        </div>
        <div className="flex flex-row flex-wrap gap-2">
          {props.portfolio.technologies.map((tech) => (
            <System.Typography
              key={tech}
              type={System.TYPOGRAPHY.SMALL}
              color={System.COLORS.BLACK}
              weight={FONT_WEIGHT.REGULAR}
              className="flex items-center border border-main-black rounded-full px-3 py-1"
            >
              {tech}
            </System.Typography>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
