import { motion } from "framer-motion";

type GradientBgProps = {
  position: string;
};
export const GradientBg = (props: GradientBgProps) => {
  return (
    <motion.div
      animate={{ scale: [1, 1.5, 1] }}
      transition={{ repeat: Infinity, duration: 15 }}
      className={`hidden md:block blur-3xl z-0 absolute ${props.position} left-o bg-custom-radial w-[887px] h-[827px] rounded-fullbackdrop-blur-3xl`}
    ></motion.div>
  );
};
