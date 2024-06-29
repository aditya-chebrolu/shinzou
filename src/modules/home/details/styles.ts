import { css } from "@emotion/react";
import { fullBleed } from "@styles/custom/full-bleed";
import { flex, minWidth, maxWidth } from "@styles/index";

export const containerStyles = css`
  ${flex({ column: true, gap: [20] })};
  > .icons {
    ${flex({ gap: [20] })}
  }
`;
