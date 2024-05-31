import { css } from "@emotion/react";
import { flex } from "@styles/index";

export const archiveBlockStyles = css`
  ${flex({ column: true, gap: [0] })};
  font-size: 18px;
  font-weight: bold;
  color: #f5f5f5;

  > a > h2 {
    all: unset;
  }

  > .tags {
    display: flex;
    flex-wrap: wrap;
    column-gap: 10px;
    row-gap: 0px;
    font-size: 14px;
    font-weight: normal;
    color: #ffbf00;
    > span {
      flex-shrink: 0;
    }
  }
`;
