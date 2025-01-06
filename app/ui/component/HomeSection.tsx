import { PropsWithChildren } from "react";

export const HomeSection = (
  props: PropsWithChildren<{ className?: string }>
) => {
  return (
    <section
      className={`flex flex-col gap-7 px-4 lg:px-40 py-12 md:py-24 ${props.className}`}
    >
      {props.children}
    </section>
  );
};
