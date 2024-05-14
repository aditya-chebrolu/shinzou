import { css } from "@emotion/react";
import { flex } from "@styles/index";

export const containerStyles = css`
  ${flex({ column: true, gap: [20] })}
`;

export const contentStyles = css`
  ${flex({ column: true, gap: [10] })};
  font-size: 22px;
  font-weight: bold;
  color: var(--name);
  cursor: pointer;

  > .row {
    ${flex({ gap: [10], align: "center" })};

    > .icon {
      transition: all 200ms;
    }

    &:hover {
      > .icon {
        rotate: 180deg;
      }
    }
  }
`;
