import { css } from "@emotion/react";
import { flex } from "@styles/index";

export const containerStyles = css`
  ${flex({ column: true, gap: [10] })};
  cursor: pointer;
  color: white;
  transition: all 150ms;
`;
