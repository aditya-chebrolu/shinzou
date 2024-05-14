import { css } from "@emotion/react";
import { lgScreen } from "@styles/index";

export const styles = ({
  size,
  color = "",
  lineColor = "",
}: {
  size: {
    dweb: number[];
    mweb: number[];
  };
  color?: string;
  lineColor?: string;
}) => css`
  isolation: isolate;
  position: relative;
  width: fit-content;
  height: fit-content;
  font-weight: 900;
  font-size: ${size.mweb[0]}px;
  user-select: none;
  color: ${color || "var(--section-title)"};

  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    height: ${size.mweb[1]}px;
    background-color: ${lineColor || "var(--section-title-line)"};
    top: ${`calc(${size.dweb[2]}%)`};
    width: 100%;
    vertical-align: baseline;
    bottom: 0;
  }

  ${lgScreen} {
    margin: unset;
    font-size: ${size.dweb[0]}px;
    line-height: ${size.dweb[0]}px;

    &::before {
      height: ${size.dweb[1]}px;
    }
  }
`;

type Props = {
  text: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  color?: string;
  lineColor?: string;
  customStyles?: any;
};

const UnderlinedText = ({
  text,
  size = "lg",
  color,
  lineColor,
  customStyles,
}: Props) => {
  const config: Record<string, { dweb: number[]; mweb: number[] }> = {
    xs: {
      dweb: [25, 6, 62],
      mweb: [18, 5, 62],
    },
    sm: {
      dweb: [30, 7.5, 62],
      mweb: [25, 6, 62],
    },
    md: {
      dweb: [40, 10, 62],
      mweb: [30, 7.5, 62],
    },
    lg: {
      dweb: [50, 13, 62],
      mweb: [40, 10, 62],
    },
    xl: {
      dweb: [80, 21, 62],
      mweb: [40, 10, 62],
    },
  };
  return (
    <div css={[styles({ size: config[size], color, lineColor }), customStyles]}>
      {text}
    </div>
  );
};

export default UnderlinedText;
