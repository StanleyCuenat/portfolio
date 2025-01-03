import { useCallback, useEffect, useRef, useState } from "react";
import { COLORS, TYPOGRAPHY, Typography } from "../system";
import { ALIGNMENT, FONT_WEIGHT } from "../system/Typography";

type ExperienceCard = {
  title: string;
  dateStart: string;
  dateEnd: string;
  content: string;
  competences: string[];
  link: string;
};
export const ExperienceCard = (props: ExperienceCard) => {
  const [margin, setMargin] = useState("lg:ml-0");
  const ref = useRef(null);
  const callback = useCallback((entries: IntersectionObserverEntry[]) => {
    if (entries.length < 1) {
      return;
    }
    setMargin(entries[0]?.isIntersecting ? "lg:ml-4 shadow-card" : "lg:ml-0");
  }, []);

  const handleClick = useCallback(() => {
    window.open(props.link, "_blanck");
  }, [props.link]);

  useEffect(() => {
    const copyRef = ref.current;
    const observer = new IntersectionObserver(callback, {
      root: null,
      rootMargin: "-50% 0% -50% 0%",
    });
    if (copyRef) {
      observer.observe(copyRef);
    }
    return () => {
      if (copyRef) {
        observer.unobserve(copyRef);
      }
    };
  }, [callback]);

  return (
    <div
      onClick={handleClick}
      className={`relative flex flex-col gap-4 rounded-md  group p-6  bg-white duration-200 z-20 max-w-[900px] ${margin} cursor-pointer  max-w-[750px]`}
      ref={ref}
    >
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <Typography
            color={COLORS.BLACK}
            type={TYPOGRAPHY.SUB}
            weight={FONT_WEIGHT.BOLD}
            className="group-hover:text-main-red duration-200"
          >
            {props.title}
          </Typography>
          <Typography
            color={COLORS.GREY}
            type={TYPOGRAPHY.CONTENT}
            weight={FONT_WEIGHT.LIGHT}
          >
            {props.dateStart} - {props.dateEnd}
          </Typography>
        </div>
        <Typography
          color={COLORS.BLACK}
          type={TYPOGRAPHY.CONTENT}
          weight={FONT_WEIGHT.REGULAR}
          className="whitespace-pre-line"
        >
          {props.content}
        </Typography>
      </div>
      <div className="flex flex-row flex-wrap gap-2">
        {props.competences.map((comp) => (
          <div
            key={comp}
            className="rounded-full bg-main-black  px-4 py-1 duration-200"
          >
            <Typography
              color={COLORS.WHITE}
              weight={FONT_WEIGHT.BOLD}
              alignment={ALIGNMENT.CENTER}
              type={TYPOGRAPHY.SMALL}
            >
              {comp}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};
