import { css } from "@emotion/react";
import { minWidth } from "@styles/index";

export const experienceSectionStyles = css`
  display: flex;
  flex-direction: column;
  gap: 20px;

  > .content {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  ${minWidth()} {
    > .title {
      font-size: 0px;
      line-height: 70px;
    }
  }
`;
