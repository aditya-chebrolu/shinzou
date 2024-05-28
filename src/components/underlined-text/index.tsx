import { headingStyles } from "./styles";

type Props = {
  text: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  color?: string;
  lineColor?: string;
  customStyles?: any;
  type: "h1" | "h2" | "h3" | "h4";
};

const UnderlinedText = ({
  text,
  type,
  color,
  size = "lg",
  lineColor,
}: Props) => {
  const Tag = type;
  return <Tag css={headingStyles({ size, color, lineColor })}>{text}</Tag>;
};

export default UnderlinedText;
