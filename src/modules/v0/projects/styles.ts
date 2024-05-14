import { css } from "@emotion/react";
import { black, colors, gradients, redGradient } from "@styles/colors";
import { flex, lgScreen } from "@styles/index";

export const containerStyles = css`
  ${flex({ gap: [10], column: true, align: "center", justify: "center" })};
  height: 100%;

  ${lgScreen} {
    flex-direction: row;
  }
`;

export const projectCardStyles = css`
  ${flex({ column: true, gap: [10] })};
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

    > a {
      transition-duration: 300ms;
      cursor: pointer;
      &:hover {
        rotate: z 180deg;
      }
    }
  }

  > .content {
    font-size: 14px;
    line-height: 20px;
    word-wrap: break-word;

    > .chip {
      display: inline-flex;
      line-height: normal;
      gap: 6px;
      margin-right: 5px;
      border: solid 1px ${black[1]};
      background: ${black[2]};
      padding: 3px 6px;
      border-radius: 8px;
      vertical-align: middle;
      > .label {
        font-size: 13px;
        line-height: 13px;
      }

      > div {
        transition-duration: 500ms;
      }

      &:hover {
        > div:not(.label) {
          rotate: 360deg;
        }
      }
    }
  }

  ${lgScreen} {
    width: 350px;
  }
`;
