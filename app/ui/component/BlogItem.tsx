import { NavLink } from "@remix-run/react";
import { COLORS, TYPOGRAPHY, Typography } from "../system";
import { FONT_WEIGHT } from "../system/Typography";
type BlogItemProps = {
  img: string;
  title: string;
  preview: string;
  href: string;
};

export const BlogItem = (props: BlogItemProps) => {
  return (
    <div className="flex flex-col bg-white z-20 rounded-2xl hover:shadow-card grow duration-200">
      <NavLink to={props.href} className="flex flex-col h-full grow">
        <img
          src={props.img}
          alt="logo"
          className="h-[200px] w-full object-cover rounded-t-2xl"
        />
        <div className="flex flex-col p-4">
          <Typography
            type={TYPOGRAPHY.SUB}
            color={COLORS.BLACK}
            weight={FONT_WEIGHT.BOLD}
          >
            {props.title}
          </Typography>
          <Typography
            type={TYPOGRAPHY.CONTENT}
            color={COLORS.GREY}
            weight={FONT_WEIGHT.REGULAR}
          >
            {props.preview}
          </Typography>
        </div>
      </NavLink>
    </div>
  );
};
