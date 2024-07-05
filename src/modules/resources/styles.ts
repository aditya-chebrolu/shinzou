import { css } from "@emotion/react";
import { flex } from "@styles/index";

export const containerStyles = css`
  ${flex({ column: true, gap: [20] })}
`;

export const stripStyles = (delay: number) => css`
  ${flex({ gap: [10], align: "start" })};
  > .info {
    ${flex({ column: true, gap: [8] })};

    > .name {
      cursor: pointer;
      > h2 {
        margin: unset;
        font-size: 24px;
        line-height: 24px;
        font-weight: bold;
        color: white;
      }
    }

    > .desc {
      color: #c0c0c0;
    }

    > .tags {
      ${flex({ gap: [10] })};
      font-size: 18px;
      line-height: 18px;
      color: #ffbf00;
      > .tag {
        cursor: pointer;
      }
    }
  }
  &:not(:last-of-type) {
    border-bottom: solid 1px #232323;
    padding-bottom: 20px;
  }
  transition: all 500ms;
  transition-delay: ${delay}ms;
  @starting-style {
    opacity: 0;
    scale: 0.9;
  }
`;
