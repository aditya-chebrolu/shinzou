import { css } from "@emotion/react";
import { minWidth } from "@styles/index";

export const modalStyles = css`
  .content {
    padding: 15px;
  }

  ${minWidth()} {
    .content {
      width: 700px;
      padding: 20px;
    }
  }
`;
