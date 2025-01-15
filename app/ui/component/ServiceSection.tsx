import { useCallback, useEffect, useRef, useState } from "react";
import { System } from "..";
import { FONT_WEIGHT } from "../system/Typography";
import { COLORS } from "../system";
import { hetchr, innosonianHome, nomadherHome, packativeHome } from "../img";
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
    setBg(entries[0]?.isIntersecting ? "bg-white " : "bg-main-yellow");
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
      className={`flex flex-col gap-6 p-5 ${bg} rounded-xl duration-200`}
      ref={ref}
    >
      <img src={props.img} className="rounded-xl object-fit" />
      <div className="flex flex-col gap-1">
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
          weight={FONT_WEIGHT.LIGHT}
        >
          {props.content}
        </System.Typography>
      </div>
      <Link to="/portfolio">
        <System.Button color={COLORS.BLACK} className="basis-0">
          See my work
        </System.Button>
      </Link>
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
    setSticky(entries[0]?.isIntersecting ? "md:sticky md:pt-20" : "");
  }, []);

  useEffect(() => {
    const copyRef = ref.current;
    const observer = new IntersectionObserver(callback, {
      root: null,
      rootMargin: "-10% 0% -90% 0%",
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
        className={`${sticky} duration-200 flex flex-col h-auto lg:px-6 gap-7 w-full shrink self-baseline top-[100px]`}
      >
        <System.Typography
          type={System.TYPOGRAPHY.H2}
          color={System.COLORS.BLACK}
          weight={FONT_WEIGHT.REGULAR}
        >
          Let me assist you in achieving your goals
        </System.Typography>
        <System.Typography
          type={System.TYPOGRAPHY.CONTENT}
          color={System.COLORS.GREY}
          weight={FONT_WEIGHT.LIGHT}
        >
          I offer expertise in web and mobile development for tailored solutions
          that match your unique needs.
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
      <div className="flex flex-col gap-6 md:gap-16" ref={ref}>
        <ServiceSectionItem
          title="Frontend development"
          content="Crafting detail-oriented and robust frontends ready to meet your customers' needs. Delivering a fully tested frontend with reusable components and a dedicated design system!"
          img={packativeHome}
        />
        <ServiceSectionItem
          title="Backend development"
          content="Transforming your idea into production-ready software. Using TDD and DDD methodologies, your backend will be prepared for every use case."
          img={hetchr}
        />
        <ServiceSectionItem
          title="Mobile development"
          content="Bringing your ideas to life with production-ready mobile applications. Leveraging robust development practices and scalable architecture, your app will be fully optimized for every use case and platform."
          img={nomadherHome}
        />
        <ServiceSectionItem
          title="Codebase refactoring"
          content="Elevating your existing codebase through efficient and structured refactoring. Improving code readability, reducing technical debt, and enhancing maintainability with unit test. "
          img={innosonianHome}
        />
      </div>
    </div>
  );
};
