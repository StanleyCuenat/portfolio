import { motion, useTime, useTransform } from "motion/react";
import { PropsWithChildren } from "react";

interface GradientBackgroundProps extends PropsWithChildren {
  colors: string[];
  className?: string;
}

export const GradientBackground = (props: GradientBackgroundProps) => {
  const time = useTime();
  const rotate = useTransform(time, [0, 3000], [0, 360], {
    clamp: false,
  });
  const rotatingBg = useTransform(rotate, (r) => {
    return `conic-gradient(from ${r / 4}deg, ${props.colors.join(", ")})`;
  });

  console.log('reset??')
  return (
    <div className={`relative self-start ${props.className ?? ""}`}>
      <motion.div
        className={`absolute opacity-50 z-10 ${props.className ?? ""}`}
        style={{
          background: rotatingBg,
        }}
      />
      <div className="z-20">{props.children}</div>
    </div>
  );
};
