import { PropsWithChildren } from "react";

interface HomeSectionProps extends PropsWithChildren {
  direction?: "col" | "row";
  className?: string;
}

export const HomeSection = ({
  direction = "col",
  className,
  children,
}: HomeSectionProps) => {
  const dir = direction === "col" ? "flex-col" : "flex-col lg:flex-row";
  return (
    <section
      className={`flex ${dir} gap-10 px-4 md:px-6 xl:px-52 2xl:px-96 py-12 md:py-24 ${className}`}
    >
      {children}
    </section>
  );
};
