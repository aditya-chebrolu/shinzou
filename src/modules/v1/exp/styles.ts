import { css } from "@emotion/react";
import { flex, lgScreen } from "@styles/index";

export const experienceStripStyles = css`
  ${flex({ gap: [5], column: true })};

  > .row,
  > .pos {
    ${flex({ justify: "space-between", align: "center" })};
  }

  > .row {
    font-size: 18px;
    font-weight: bold;

    > .duration {
      color: var(--exp-duration);
    }
  }

  > .pos {
    font-size: 14px;
    > .title {
      color: var(--exp-pos-title);
    }
    > .duration {
      color: var(--exp-pos-duration);
    }
  }

  ${lgScreen} {
    > .row {
      font-size: 25px;
    }

    > .pos {
      font-size: 18px;
    }
  }
`;
