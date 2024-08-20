import { css } from "@emotion/react";
import { minWidth } from "@styles/index";

const GAP = "10px";

export const experienceStripStyles = css`
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12);
  background: white;
`;

export const titleRowStyles = css`
  display: flex;
  align-items: center;
  gap: ${GAP};
  padding: 10px;
  border: solid 1px #e5e4e2;

  > .icon {
    flex-shrink: 0;
  }

  > h2 {
    all: unset;
    font-weight: bold;
    font-size: 20px;
    line-height: 20px;
    color: var(--gunmetal);
    margin-top: 1.5px;
  }

  ${minWidth()} {
    > h2 {
      font-size: 25px;
      line-height: 25px;
    }
  }
`;

export const positionsStyles = css`
  padding: 10px;
  border: solid 1px #e5e4e2;
  border-top: none;
  display: flex;
  flex-direction: column;
  gap: 5px;

  > .pos {
    display: flex;
    gap: 10px;

    > .role {
      font-style: italic;
    }
  }
`;
