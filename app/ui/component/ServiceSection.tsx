import { useCallback, useEffect, useRef, useState } from "react";
import { System } from "..";
import { FONT_WEIGHT } from "../system/Typography";
import { COLORS } from "../system";
import { nomadherHome } from "../img";
import { Link } from "@remix-run/react";

type ServiceSectionItemProps = {
  title: string;
  content: string;
  img: string;
};
const ServiceSectionItem = (props: ServiceSectionItemProps) => {
  const [bg, setBg] = useState("bg-white");
  const ref = useRef(null);
  const callback = useCallback((entries: IntersectionObserverEntry[]) => {
    if (entries.length < 1) {
      return;
    }
    setBg(entries[0]?.isIntersecting ? "bg-main-yellow" : "bg-white");
  }, []);

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
      className={`flex flex-col gap-2 p-5 ${bg} rounded-xl duration-200`}
      ref={ref}
    >
      <img src={props.img} className="rounded-xl object-fit" />
      <div className="flex flex-col gap-4">
        <System.Typography
          type={System.TYPOGRAPHY.SUB}
          color={System.COLORS.BLACK}
          weight={FONT_WEIGHT.REGULAR}
        >
          {props.title}
        </System.Typography>
        <System.Typography
          type={System.TYPOGRAPHY.CONTENT}
          color={System.COLORS.GREY}
          weight={FONT_WEIGHT.REGULAR}
        >
          {props.content}
        </System.Typography>
      </div>
    </div>
  );
};

export const ServiceSection = () => {
  const [sticky, setSticky] = useState("lg:sticky");
  const ref = useRef(null);
  const callback = useCallback((entries: IntersectionObserverEntry[]) => {
    if (entries.length < 1) {
      return;
    }
    setSticky(entries[0]?.isIntersecting ? "md:sticky" : "");
  }, []);

  useEffect(() => {
    const copyRef = ref.current;
    const observer = new IntersectionObserver(callback, {
      root: null,
      rootMargin: "0% 0% 0% 0%",
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
      <div
        className={`${sticky} flex flex-col h-auto gap-7 w-full shrink self-baseline top-[100px]`}
      >
        <System.Typography
          type={System.TYPOGRAPHY.H2}
          color={System.COLORS.BLACK}
          weight={FONT_WEIGHT.REGULAR}
        >
          Let me assist you in Achieving your goal
        </System.Typography>
        <System.Typography
          type={System.TYPOGRAPHY.SUB}
          color={System.COLORS.GREY}
          weight={FONT_WEIGHT.REGULAR}
        >
          I offer expertise in web, mobile and fullstack development for
          tailored solutions that match your unique needs.
        </System.Typography>
        <Link
          rel="noreferrer"
          target="_blank"
          to="https://linkedin.com/in/stanislas-cuenat-8939b3110"
          className="no-underline"
        >
          <System.Button color={COLORS.BLACK} className="z-20">
            Contact me
          </System.Button>
        </Link>
      </div>
      <div className="flex flex-col gap-16" ref={ref}>
        <ServiceSectionItem
          title="Frontend development"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          img={nomadherHome}
        />
        <ServiceSectionItem
          title="Backend development"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          img={nomadherHome}
        />
        <ServiceSectionItem
          title="Mobile development"
          content="I offer expertise in web development, problem-solving, and strategic
            planning for tailored solutions that match your unique needs."
          img={nomadherHome}
        />
        <ServiceSectionItem
          title="Codebase refactoring"
          content="I offer expertise in web development, problem-solving, and strategic
            planning for tailored solutions that match your unique needs."
          img={nomadherHome}
        />
      </div>
    </div>
  );
};
