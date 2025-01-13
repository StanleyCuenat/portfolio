import { useCallback } from "react";
import { COLORS, TYPOGRAPHY, Typography } from "../system";
import { ALIGNMENT, FONT_WEIGHT } from "../system/Typography";
import { ArrowUpRightIcon } from "../icons";
import { motion } from "framer-motion";
type ExperienceCard = {
  title: string;
  dateStart: string;
  dateEnd: string;
  competences: string[];
  link: string;
  location: string;
};
export const ExperienceCard = (props: ExperienceCard) => {
  const handleClick = useCallback(() => {
    window.open(props.link, "_blanck");
  }, [props.link]);

  return (
    <motion.div
      initial={{ opacity: 0, marginTop: 100 }}
      whileInView={{ opacity: 1, marginTop: 0 }}
      transition={{ duration: 0.5, delay: 0, ease: "easeIn" }}
      viewport={{ once: true }}
      onClick={handleClick}
      className={` group relative flex flex-col gap-2 group pb-6 duration-200 z-20  cursor-pointer max-w-[600px]`}
    >
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <div className="flex flex-row justify-between">
            <Typography
              color={COLORS.BLACK}
              type={TYPOGRAPHY.SUB}
              weight={FONT_WEIGHT.REGULAR}
            >
              {props.title}
            </Typography>
            <ArrowUpRightIcon className="w-6 h-6 rotate-45 mr-0 group-hover:-mr-4 duration-200" />
          </div>
          <Typography
            color={COLORS.GREY}
            type={TYPOGRAPHY.CONTENT}
            weight={FONT_WEIGHT.LIGHT}
          >
            {props.dateStart} - {props.dateEnd}
          </Typography>
          <Typography
            color={COLORS.BLACK}
            type={TYPOGRAPHY.SMALL}
            weight={FONT_WEIGHT.LIGHT}
          >
            {props.location}
          </Typography>
        </div>
      </div>
      <div className="flex flex-row flex-wrap gap-2">
        {props.competences.map((comp) => (
          <Typography
            key={comp}
            color={COLORS.BLACK}
            weight={FONT_WEIGHT.REGULAR}
            alignment={ALIGNMENT.CENTER}
            type={TYPOGRAPHY.SMALL}
            className="border border-main-black rounded-full px-2 py-1"
          >
            {comp}
          </Typography>
        ))}
      </div>
    </motion.div>
  );
};
