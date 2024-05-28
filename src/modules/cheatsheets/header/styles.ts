import { css, keyframes } from "@emotion/react";
import { fullBleed } from "@styles/custom/full-bleed";
import { flex, lgScreen } from "@styles/index";

export const containerStyles = css`
  ${fullBleed("#0d0d0f")};
  color: white;
  background: #0d0d0f;
  border-bottom: solid 1.5px #1c1c20;
  padding: 8px 0;
  > .content {
    ${flex({ gap: [15] })};
    margin-inline: 20px;

    ${lgScreen} {
      margin-inline: 20%;
    }
  }
`;

const anim = keyframes`
  50% {
    scale:0.9;
  }

  75% {
    scale:1.05;
  }

  to {
    scale:1;
  }
`;

export const languageOptionStyles = (checked = false) => css`
  ${flex({ column: true, align: "center", gap: [5] })};

  div:first-of-type {
    ${checked
      ? css`
          animation: ${anim} 200ms;
        `
      : ""}
  }

  > div {
    font-size: 12px;
    line-height: 12px;
    ${checked
      ? css`
          color: #ffd700;
        `
      : ""}
  }
`;
