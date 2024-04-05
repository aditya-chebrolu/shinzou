import { css } from "@emotion/react";
import { colors } from "@styles/colors";
import { flex } from "@styles/index";

export const contentStyles = css`
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);

  svg {
    height: 40px;
    aspect-ratio: 1;
  }
`;

export const techSetStyles = (res: number[], column = false) => css`
  grid-area: ${res.join("/")};
  ${flex({ gap: 10, align: "center", justify: "space-around", column })};

  &:empty {
    border-color: ${colors.brown};
    background-color: ${colors.brown}20;
    transition-duration: 200ms;
    &:hover {
      scale: 0.95;
    }
  }
`;
