import { css } from "@emotion/react";
import { flex } from "@styles/index";

export const sectionStyles = css`
  ${flex({ column: true, gap: 20, align: "center" })};
  padding-inline: 10px;

  > .title {
    /* align-self: flex-start; */
    font-weight: bold;
    font-size: 24px;
    line-height: 24px;
    letter-spacing: 1px;
  }

  > .content {
    gap: 10px;
    width: min(100%, 500px);
  }
`;
