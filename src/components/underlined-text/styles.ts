import { css } from "@emotion/react";
import { lgScreen } from "@styles/index";

export type Sizes = "xs" | "sm" | "md" | "lg" | "xl";

const stylesConfig = {
  dweb: {
    xs: [25, 8, 6],
    sm: [30, 9.5, 7],
    md: [40, 12, 9],
    lg: [50, 15, 11],
    xl: [80, 24, 17.5],
  },
  mweb: {
    xs: [18, 6, 4.5],
    sm: [25, 8, 6],
    md: [30, 9.5, 7],
    lg: [40, 12, 9],
    xl: [40, 12, 9],
  },
};

const sizeStyles = (screen: "dweb" | "mweb", size: Sizes) => {
  const [fontSize, lineThickness, lineOffset] = stylesConfig[screen][size];
  return css`
    font-size: ${fontSize}px;
    line-height: ${fontSize}px;
    text-underline-offset: -${lineOffset}px;
    text-decoration-thickness: ${lineThickness}px;
  `;
};

const getSize = (
  size: Sizes | { mweb: Sizes; dweb: Sizes },
  screen: "mweb" | "dweb"
) => (typeof size === "object" ? size[screen] : size);

const getColor = ({
  color,
  screen,
}: {
  color?: string | { dweb?: string; mweb?: string };
  screen: "mweb" | "dweb";
}) => {
  if (!color) return;
  return typeof color === "object" ? color[screen] : color;
};

export const headingStyles = ({
  size,
  color,
  lineColor,
}: {
  size: Sizes | { mweb: Sizes; dweb: Sizes };
  color?: string | { dweb?: string; mweb?: string };
  lineColor?: string | { dweb?: string; mweb?: string };
}) => css`
  margin: unset;
  padding: unset;
  text-decoration: underline;
  text-decoration-skip-ink: none;

  color: ${getColor({ color, screen: "mweb" }) || "var(--section-title)"};
  text-decoration-color: ${getColor({ color: lineColor, screen: "mweb" }) ||
  "var(--section-title-line)"};

  ${sizeStyles("mweb", getSize(size, "mweb"))}
  ${lgScreen} {
    ${sizeStyles("dweb", getSize(size, "dweb"))};

    color: ${getColor({ color, screen: "dweb" }) || "var(--section-title)"};
    text-decoration-color: ${getColor({ color: lineColor, screen: "dweb" }) ||
    "var(--section-title-line)"};
  }
`;
