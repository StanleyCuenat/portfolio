import { PropsWithChildren, useEffect } from "react";
import { motion, useSpring, useTime, useTransform } from "framer-motion";

interface PulseBorderProps extends PropsWithChildren {
  colors: string[];
  className?: string;
}

export const PulseBorder = (props: PulseBorderProps) => {
  const time = useTime();
  const rotate = useTransform(time, [0, 3000], [0, 360], {
    clamp: false,
  });
  const rotatingBg = useTransform(rotate, (r) => {
    return `conic-gradient(from ${r}deg, ${props.colors.join(", ")})`;
  });
  const pulse = useSpring(0, { damping: 0, mass: 5, stiffness: 10 });
  const pulsingBg = useTransform(pulse, (r) => {
    return `blur(${r}px)`;
  });

  useEffect(() => {
    pulse.set(2);
  }, [pulse]);

  return (
    <div className="relative self-start">
      <motion.div
        className={`absolute -inset-[2px] opacity-50 ${props.className ?? ""}`}
        style={{
          background: rotatingBg,
          filter: pulsingBg,
        }}
      />
      {props.children}
    </div>
  );
};
