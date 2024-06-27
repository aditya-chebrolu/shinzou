import { css } from "@emotion/react";
import { flex } from "@styles/index";

export const containerStyles = css`
  > .content {
    margin-top: 20px;
    ${flex({ gap: [15], wrap: "wrap" })}
  }
`;

export const rowStyles = css`
  ${flex({ gap: [15] })};
  &:not(:last-of-type) {
    padding-right: 15px;
    border-right: solid 1px #aab9c0;
  }
`;
