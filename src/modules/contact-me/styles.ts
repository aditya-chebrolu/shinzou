import { css } from "@emotion/react";
import { flex } from "@styles/index";

export const socialIconStyles = css`
  transition-duration: 200ms;
  cursor: pointer;
  background: none;
  font-size: 0;
  cursor: pointer;

  &:hover {
    scale: 1.2;
  }

  &:has(~ a:hover) {
    scale: 0.8;
    filter: blur(1px);
  }

  &:hover ~ a {
    scale: 0.8;
    filter: blur(1px);
  }
`;
