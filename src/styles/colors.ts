import { css } from "@emotion/react";

export const colors = {
  orange: "#f87060",
  white: "#E6E6E6",
  brown: "#b3a394",
};

export const black = ["#AFAFAF", "#5B5B62", "#242427", "#18181B", "#19191E"];

export const redGradient = css`
  background: #d31027;
  background: -webkit-linear-gradient(to bottom, #ea384d, #d31027);
  background: linear-gradient(to bottom, #ea384d, #d31027);
`;

export const gradients = {
  none_black: `linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0),
    rgba(0, 0, 0, 1)
  );`,
};
