import { System } from "..";
import { TypingAnimation } from "../animation";
import { FONT_WEIGHT } from "../system/Typography";
import { motion } from "framer-motion";

type QualityCharterItemProps = {
  title: string;
  content: string;
  icon: JSX.Element;
};

export const QualityCharterItem = (props: QualityCharterItemProps) => {
  return (
    <motion.div
      className="flex flex-row gap-4 group"
      initial={{ opacity: 0, marginTop: 100 }}
      whileInView={{ opacity: 1, marginTop: 0 }}
      transition={{ duration: 0.5, delay: 0, ease: "easeIn" }}
      viewport={{ once: true }}
    >
      <div className="relative bg-main-yellow w-[40px] h-[40px] min-w-[40px] z-20 inline-flex justify-center items-center rounded">
        {props.icon}
      </div>
      <div className="flex flex-col max-w-[470px] shrink">
        <TypingAnimation
          text={props.title}
          withParent={(children) => (
            <System.Typography
              type={System.TYPOGRAPHY.SUB}
              color={System.COLORS.BLACK}
              weight={FONT_WEIGHT.REGULAR}
            >
              {children}
            </System.Typography>
          )}
        />

        <System.Typography
          type={System.TYPOGRAPHY.CONTENT}
          color={System.COLORS.GREY}
          weight={FONT_WEIGHT.REGULAR}
        >
          {props.content}
        </System.Typography>
      </div>
    </motion.div>
  );
};
