import { css } from "@emotion/react";

export const skillsSectionStyles = css`
  display: flex;
  flex-direction: column;
  gap: 10px;

  > .title {
    all: unset;
    font-weight: bold;
    font-size: 40px;
    line-height: 40px;
    color: var(--gunmetal);
  }

  > .content {
    display: flex;
    flex-direction: column;
    gap: 15px;
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
