import * as React from "react";
import { motion, useInView } from "framer-motion";

type TypingAnimationProps = {
  text: string;
  withParent: (child: JSX.Element) => JSX.Element;
};

export const TypingAnimation = ({ text, withParent }: TypingAnimationProps) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  return withParent(
    <div ref={ref} className="inline">
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.2, delay: index * 0.1 }}
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
};
