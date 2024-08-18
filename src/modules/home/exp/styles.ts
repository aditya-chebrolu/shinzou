import { css } from "@emotion/react";
import { flex, minWidth } from "@styles/index";

export const experienceStyles = css`
  ${flex({ column: true, gap: [5], align: "center", justify: "center" })};
  border: 1px solid #e5e4e2;
  aspect-ratio: 1;
  width: 150px;
  padding: 10px;
  background-color: #fff;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  font-size: 14px;

  > .name {
    text-align: center;
    user-select: none;
  }

  > .role {
    background-color: #ffbf00;
    color: #000;
    border: solid 1px black;
    padding-inline: 10px;
  }
`;
