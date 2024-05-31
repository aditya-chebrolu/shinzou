import { css } from "@emotion/react";
import { fullBleed } from "@styles/custom/full-bleed";

export const containerStyles = css`
  ${fullBleed("var(--primary)")};
  background-color: var(--primary);
  color: white;
  padding: 15px 0;
  font-size: 22px;
  height: 200px;
  margin-top: auto;
`;

export const resumeButton = css`
  font-size: 16px;
  padding: 6px 15px;
  transition: all 300ms;
  border: solid 1px;

  &:hover {
    background-color: var(--secondary);
    border-color: var(--secondary);
    box-shadow: 0.5px 1.4px 2.7px rgba(0, 0, 0, 0.035),
      1.3px 3.8px 7.5px rgba(0, 0, 0, 0.05), 3px 9px 18.1px rgba(0, 0, 0, 0.065),
      10px 30px 60px rgba(0, 0, 0, 0.1);
  }
`;
