import cn from "classnames";
import { css } from "@emotion/react";
import { headingStyles, Sizes, underlineStyles } from "./styles";

type Props = {
  text: string;
  size?: { mweb: Sizes; dweb: Sizes } | Sizes;
  color?: string | { dweb?: string; mweb?: string };
  lineColor?: string | { dweb?: string; mweb?: string };
  customStyles?: any;
  type: "h1" | "h2" | "h3" | "h4";
  showLine?: boolean;
};

const UnderlinedText = ({
  text,
  type,
  color,
  size = "lg",
  lineColor,
  showLine = true,
}: Props) => {
  const Tag = type;
  return (
    <Tag css={headingStyles({ size, color, lineColor, showLine })}>{text}</Tag>
  );
};

export default UnderlinedText;
