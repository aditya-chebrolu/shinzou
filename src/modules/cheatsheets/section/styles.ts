import { css } from "@emotion/react";
import { flex } from "@styles/index";

export const sectionContainerStyles = css`
  ${flex({ column: true, gap: [15] })};
  > .title {
    color: #f653a6;
    font-size: 26px;
    font-weight: bold;
  }
`;

export const subSectionContainerStyles = css`
  ${flex({ column: true, gap: [15] })};
  /* margin-left: 20px; */
  > .title {
    color: #ffdb58;
    font-size: 18px;
    /* font-weight: bold; */
  }

  &:not(:last-of-type) {
    border-bottom: solid 1px #232323;
    padding-bottom: 25px;
  }
`;
