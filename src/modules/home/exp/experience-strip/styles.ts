import { css } from "@emotion/react";
import { minWidth } from "@styles/index";

const GAP = "10px";

export const experienceStripStyles = css`
  background: white;
  border: solid 1px #e5e4e2;
  border-radius: 8px;
  padding: 10px;

  display: flex;
  align-items: center;
  gap: ${GAP};
  cursor: pointer;

  &:hover {
    .divider {
      rotate: 1 0 0 180deg;
    }

    .icon {
    }
  }

  > .icon {
    flex-shrink: 0;
  }
`;

export const titleStyles = css`
  all: unset;
  display: flex;
  gap: 10px;
  font-weight: bold;

  color: var(--black);
  margin-right: auto;

  > * {
    flex-shrink: 0;
  }

  > .divider {
    width: 4px;
    background: #c0c0c0;
    border-radius: 7px 10px 7px 10px;
    transform: skewX(-15deg);
    transition: all 300ms;
  }

  font-size: 18px;
  line-height: 18px;

  ${minWidth()} {
    font-size: 20px;
    line-height: 20px;
  }
`;
