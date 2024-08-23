import { css } from "@emotion/react";
import { minWidth } from "@styles/index";

export const skillsSectionStyles = css`
  display: flex;
  flex-direction: column;
  gap: 10px;

  > .title {
    all: unset;
    font-weight: bold;
    font-size: 55px;
    line-height: 55px;
    font-family: var(--play-font);
    color: var(--gunmetal);
    filter: drop-shadow(-2.5px 2.5px 0px #6cb4ee);
  }

  > .content {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  ${minWidth()} {
    > .title {
      font-size: 70px;
      line-height: 70px;
    }
  }
`;

export const rowStyles = css`
  display: flex;
  flex-direction: column;
  gap: 8px;

  background-color: white;
  padding: 10px;
  box-shadow: var(--card-shadow);
  border: solid 1px var(--border-color);

  > .title {
    color: var(--gunmetal);
    font-style: italic;
  }

  > .skills {
    display: flex;
    gap: 10px;
  }
`;
