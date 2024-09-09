import { css } from "@emotion/react";
import { minWidth } from "@styles/index";

export const containerStyles = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
  row-gap: 15px;
  font-size: 16px;

  ${minWidth()} {
    font-size: 18px;
    gap: 15px;
    grid-template-columns: repeat(4, 1fr);
  }

  > .tech {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;
