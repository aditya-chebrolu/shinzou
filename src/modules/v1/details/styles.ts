import { css } from "@emotion/react";
import { flex, lgScreen } from "@styles/index";

export const containerStyles = css`
  ${flex({ column: true, align: "center", gap: [20] })};
  top: 0;
  z-index: 1;
  text-align: center;
  transition: all 200ms;
  > .icons {
    ${flex({ gap: [20] })}
    svg {
      transition-duration: 200ms;
    }
  }

  ${lgScreen} {
    align-items: flex-start;
  }
`;
