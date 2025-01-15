import { PropsWithChildren } from "react";
import { COLORS } from "./Colors";

export enum TYPOGRAPHY {
  H1,
  H2,
  H3,
  SUB,
  CONTENT,
  SMALL,
  EMPHASE,
}

export enum FONT_WEIGHT {
  EXTRA_BOLD,
  BOLD,
  LIGHT,
  REGULAR,
}

export enum ALIGNMENT {
  LEFT,
  RIGHT,
  CENTER,
}

const BASE_FONT = "font-roboto";

interface TypographyProps extends PropsWithChildren {
  type: TYPOGRAPHY;
  weight: FONT_WEIGHT;
  color: COLORS;
  className?: string;
  alignment?: ALIGNMENT;
  ref?: React.MutableRefObject<JSX.Element>;
}

const handleFontWeight = (weight: FONT_WEIGHT) => {
  switch (weight) {
    case FONT_WEIGHT.EXTRA_BOLD:
      return "font-extrabold";
    case FONT_WEIGHT.BOLD:
      return "font-bold";
    case FONT_WEIGHT.REGULAR:
      return "font-normal";
    default:
      return "font-light";
  }
};

const handleAlignment = (align = ALIGNMENT.LEFT) => {
  switch (align) {
    case ALIGNMENT.CENTER:
      return "text-center";
    case ALIGNMENT.RIGHT:
      return "text-right";
    default:
      return "text-left";
  }
};

const handleColors = (color: COLORS) => {
  switch (color) {
    case COLORS.RED:
      return "text-main-red";
    case COLORS.GREY:
      return "text-main-grey";
    case COLORS.BLACK:
      return "text-main-black";
    case COLORS.WHITE:
      return "text-white";
    default:
      return "text-main-black";
  }
};

const handleFontSize = (type: TYPOGRAPHY) => {
  switch (type) {
    case TYPOGRAPHY.H1:
      return "text-5xl lg:text-6xl";
    case TYPOGRAPHY.H2:
      return "text-4xl lg:text-5xl";
    case TYPOGRAPHY.H3:
      return "text-2xl lg:text-4xl";
    case TYPOGRAPHY.SUB:
      return "text-xl lg:text-xl";
    case TYPOGRAPHY.SMALL:
      return "text-sm";
    default:
      return "text-base lg:text-lg";
  }
};

const getBaseStyle = (props: TypographyProps) =>
  [
    BASE_FONT,
    handleFontWeight(props.weight),
    handleAlignment(props.alignment),
    handleColors(props.color),
    handleFontSize(props.type),
    "inline",
  ].join(" ");

const H1 = ({
  className,
  children,
}: PropsWithChildren<{ className: string }>) => (
  <h1 className={className}>{children}</h1>
);

const H2 = ({
  className,
  children,
}: PropsWithChildren<{ className: string }>) => (
  <h2 className={className}>{children}</h2>
);

const H3 = ({
  className,
  children,
}: PropsWithChildren<{ className: string }>) => (
  <h3 className={className}>{children}</h3>
);

const Sub = ({
  className,
  children,
}: PropsWithChildren<{ className: string }>) => (
  <h4 className={className}>{children}</h4>
);

const P = ({
  className,
  children,
}: PropsWithChildren<{ className: string }>) => (
  <p className={className}>{children}</p>
);

const Span = ({
  className,
  children,
}: PropsWithChildren<{ className: string }>) => (
  <span className={className}>{children}</span>
);

export const Typography = (props: TypographyProps) => {
  const style = `${getBaseStyle(props)} ${props.className ?? ""}`;
  switch (props.type) {
    case TYPOGRAPHY.H1:
      return <H1 className={style}>{props.children}</H1>;
    case TYPOGRAPHY.H2:
      return <H2 className={style}>{props.children}</H2>;
    case TYPOGRAPHY.H3:
      return <H3 className={style}>{props.children}</H3>;
    case TYPOGRAPHY.SUB:
      return <Sub className={style}>{props.children}</Sub>;
    case TYPOGRAPHY.SMALL:
      return <Span className={style}>{props.children}</Span>;
    case TYPOGRAPHY.EMPHASE: {
      const emphaseStyle = `${handleFontWeight(props.weight)} ${handleColors(
        props.color
      )} ${props.className ?? ""}`;
      return <Span className={emphaseStyle}>{props.children}</Span>;
    }
    default:
      return <P className={style}>{props.children}</P>;
  }
};
