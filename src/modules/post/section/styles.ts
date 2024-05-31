import { css } from "@emotion/react";
import { flex } from "@styles/index";

export const sectionContainerStyles = css`
  ${flex({ column: true, gap: [15] })};
  > .title {
    color: #6cb4ee;
    font-size: 26px;
    font-weight: bold;
  }
`;

export const subSectionContainerStyles = css`
  ${flex({ column: true, gap: [15] })};
  > .title {
    color: #fada5e;
    font-size: 18px;
  }

  &:not(:last-of-type) {
    border-bottom: solid 1px #232323;
    padding-bottom: 25px;
  }
`;
