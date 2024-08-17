import { css } from "@emotion/react";
import { flex } from "@styles/index";

export const containerStyles = css`
  ${flex({ column: true, gap: [10] })};
  cursor: pointer;
  transition: all 150ms;
  &:hover {
    scale: 0.99;
  }
`;
