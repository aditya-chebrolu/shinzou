import { css } from "@emotion/react";
import { black, colors } from "@styles/colors";
import { flex, lgScreen } from "@styles/index";

export const containerStyles = css`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(2, min(100%, 400px));
  &:has(> *:only-child) {
    align-self: stretch;
    justify-items: center;
    grid-template-columns: 1fr;
  }

  ${lgScreen} {
    padding: 0;
  }
`;

export const projectCardStyles = css`
  ${flex({ column: true, gap: 10 })};
  width: min(100%, 350px);
  overflow: hidden;

  > div:not(:last-of-type) {
    border-bottom: dashed 1px ${black[1]};
    padding-bottom: 10px;
  }

  > .header {
    ${flex({ justify: "space-between", align: "center" })}
    > .title {
      color: ${colors.orange};
      font-weight: bold;
    }
  }

  > .content {
    color: ${colors.white};
    font-size: 14px;
    text-align: justify;
  }
`;
