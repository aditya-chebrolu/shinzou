import { css } from "@emotion/react";
import { flex } from "@styles/index";

export const archiveBlockStyles = (delay = 0) => css`
  ${flex({ column: true, gap: [0] })};
  font-weight: bold;
  color: #f5f5f5;

  > a > h2 {
    all: unset;
    font-size: 24px;
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
    font-size: 18px;
    font-weight: normal;
    color: #ffbf00;

    > div {
      cursor: pointer;
      transition: all 200ms;
      flex-shrink: 0;
      &:hover {
        color: #fbec5d;
      }
    }
  }

  transition: all 500ms;
  transition-delay: ${delay}ms;
  transform-origin: left center;
  @starting-style {
    opacity: 0;
    scale: 0.9;
  }
`;
