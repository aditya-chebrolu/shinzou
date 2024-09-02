import { css } from "@emotion/react";
import { minWidth } from "@styles/index";

export const experienceSectionStyles = css`
  display: flex;
  flex-direction: column;
  gap: 10px;

  > .title {
    all: unset;
    font-size: 55px;
    line-height: 55px;
    font-weight: lighter;
    font-family: var(--play-font);
    color: var(--gunmetal);
    filter: drop-shadow(-2.5px 2.5px 0px #ffbf00);
    user-select: none;
  }

  > .content {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  ${minWidth()} {
    > .title {
      font-size: 70px;
      line-height: 70px;
    }
  }
`;
