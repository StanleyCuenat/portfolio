import { System } from "..";
import { github, linkedin, malt } from "../img";
import { COLORS, Link, TYPOGRAPHY, Typography } from "../system";
import { ALIGNMENT, FONT_WEIGHT } from "../system/Typography";
import { HomeSection } from "./HomeSection";

export const Footer = () => {
  return (
    <>
      <HomeSection className="justify-center">
        <System.Typography
          type={System.TYPOGRAPHY.SUB}
          color={System.COLORS.GREY}
          weight={FONT_WEIGHT.REGULAR}
          alignment={ALIGNMENT.CENTER}
        >
          Have a Project ?
        </System.Typography>
        <System.Typography
          type={System.TYPOGRAPHY.H1}
          color={System.COLORS.BLACK}
          weight={FONT_WEIGHT.REGULAR}
          alignment={ALIGNMENT.CENTER}
        >
          Let's discuss together!
        </System.Typography>
        <Link
          rel="noreferrer"
          target="_blank"
          to="https://linkedin.com/in/stanislas-cuenat-8939b3110"
          className="no-underline flex basis-auto shrink-1 grow-1 items-center justify-center mt-6"
        >
          <System.Button color={COLORS.BLACK} className="z-20">
            Contact me
          </System.Button>
        </Link>
      </HomeSection>

      <section className="flex flex-row items-center pb-2 gap-4 px-4 justify-start">
        <Link
          rel="noreferrer"
          target="_blank"
          to="https://malt.fr/profile/stanislascuenat"
          className="w-8 h-8 md:w-6 md:h-6 rounded-full bg-main-red duration-200 hover:shadow-md cursor-pointer z-10"
        >
          <img
            src={malt}
            className="object-contain rounded-full"
            alt="malt profile page"
          />
        </Link>
        <Link
          rel="noreferrer"
          target="_blank"
          to="https://linkedin.com/in/stanislas-cuenat-8939b3110"
          className="w-8 h-8 md:w-6 md:h-6 duration-200 hover:shadow-md cursor-pointer rounded-full z-10"
        >
          <img
            src={linkedin}
            className="object-fit"
            alt="linkedin profile page"
          />
        </Link>
        <Link
          rel="noreferrer"
          target="_blank"
          to="https://github.com/StanleyCuenat"
          className="w-8 h-8 md:w-6 md:h-6 duration-200 hover:shadow-md cursor-pointer rounded-full z-10"
        >
          <img src={github} className="object-fit" alt="github profile page" />
        </Link>
        <Typography
          type={TYPOGRAPHY.SMALL}
          color={COLORS.GREY}
          weight={FONT_WEIGHT.REGULAR}
          alignment={ALIGNMENT.LEFT}
          className="hidden md:flex ml-auto"
        >
          Stanislas Cuenat - 2025
        </Typography>
      </section>
    </>
  );
};
