import { github, linkedin, malt } from "../img";
import { COLORS, Link, TYPOGRAPHY, Typography } from "../system";
import { ALIGNMENT, FONT_WEIGHT } from "../system/Typography";

export const Footer = () => {
  return (
    <section className="flex flex-row items-center mt-7 pb-2 gap-4 px-4 justify-end">
      <Typography
        type={TYPOGRAPHY.SMALL}
        color={COLORS.GREY}
        weight={FONT_WEIGHT.BOLD}
        alignment={ALIGNMENT.LEFT}
        className="uppercase hidden md:block"
      >
        Contact Me
      </Typography>
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
    </section>
  );
};
