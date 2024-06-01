import { css } from "@emotion/react";
import { flex } from "@styles/index";

export const archiveBlockStyles = css`
  ${flex({ column: true, gap: [0] })};
  font-size: 18px;
  font-weight: bold;
  color: #f5f5f5;

  > a > h2 {
    all: unset;
    transition: all 200ms;
    &:hover {
      color: #318ce7;
    }
  }

  > .tags {
    display: flex;
    flex-wrap: wrap;
    column-gap: 10px;
    row-gap: 0px;
    font-size: 14px;
    font-weight: normal;
    color: #ffbf00;

    > a {
      transition: all 200ms;
      flex-shrink: 0;
      &:hover {
        color: #fbec5d;
      }
    }
  }
`;
