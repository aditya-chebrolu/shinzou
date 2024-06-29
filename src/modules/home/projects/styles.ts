import { css } from "@emotion/react";
import { flex } from "@styles/index";

export const titleStyles = css`
  ${flex({ gap: [10], align: "center" })};

  > .icon {
    transition: all 200ms;
  }

  &:hover {
    > .icon {
      rotate: 180deg;
    }
  }
`;
