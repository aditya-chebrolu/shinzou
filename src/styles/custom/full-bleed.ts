import { css } from "@emotion/react";

export const fullBleed = (color: string) => css`
  box-shadow: 0 0 0 1000vmax ${color || "black"};
  clip-path: inset(0 -100vmax);
`;
