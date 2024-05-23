import { css } from "@emotion/react";
import { fullBleed } from "@styles/custom/full-bleed";
import { flex } from "@styles/index";

export const containerStyles = css`
  ${flex({ gap: [30], wrap: "wrap", justify: "space-between" })}
  ${fullBleed("var(--skills-bg-color)")};
  background-color: var(--skills-bg-color);
  padding: 15px;
  overflow: hidden;
  flex-shrink: 0;
`;
