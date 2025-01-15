import { System } from "..";
import { FONT_WEIGHT } from "../system/Typography";

export const PortfolioSpecItem = (props: {
  title: string;
  content: string;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <System.Typography
        type={System.TYPOGRAPHY.CONTENT}
        color={System.COLORS.GREY}
        weight={FONT_WEIGHT.REGULAR}
      >
        {props.title}
      </System.Typography>
      <System.Typography
        type={System.TYPOGRAPHY.SUB}
        color={System.COLORS.BLACK}
        weight={FONT_WEIGHT.REGULAR}
      >
        {props.content}
      </System.Typography>
    </div>
  );
};
