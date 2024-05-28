import { headingStyles, Sizes } from "./styles";

type Props = {
  text: string;
  size?: { mweb: Sizes; dweb: Sizes } | Sizes;
  color?: string | { dweb?: string; mweb?: string };
  lineColor?: string | { dweb?: string; mweb?: string };
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
