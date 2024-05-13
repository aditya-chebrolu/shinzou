import { css } from "@emotion/react";
import { flex, lgScreen } from "@styles/index";

export const containerStyles = css`
  ${flex({ column: true, align: "center", gap: 20 })}
  font-family: var(--source-sans-pro-font);
  text-align: center;

  > .name {
    color: var(--primary);
    font-weight: 900;
    /* color: #de3163; */
    font-size: 46px;
  }

  > .icons {
    ${flex({ gap: 20 })}
  }

  ${lgScreen} {
    /* font-size: 160px; */
  }
`;

export const resumeButtonStyles = css`
  padding: 10px 40px;
  background-color: var(--primary);
  font-size: large;
  color: white;
`;
