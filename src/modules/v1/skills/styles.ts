import { css } from "@emotion/react";
import { flex } from "@styles/index";

export const containerStyles = css`
  > .content {
    ${flex({ gap: [15], wrap: "wrap" })};
    margin-top: 20px;
  }
`;

export const rowStyles = css`
  ${flex({ gap: [15] })};
  &:not(:last-of-type) {
    padding-right: 15px;
    border-right: solid 1px #aab9c0;
  }

  .icon {
    filter: drop-shadow(0 0 1.5px #c0c0c0);
  }
`;
