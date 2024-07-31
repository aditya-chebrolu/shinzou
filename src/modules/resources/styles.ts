import { css } from "@emotion/react";
import { flex } from "@styles/index";

export const containerStyles = css`
  ${flex({ column: true, gap: [20] })}

  >.welcome {
    color: white;
    padding-block: 40px;
    text-align: center;
  }
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
      ${flex({ gap: [10], wrap: "wrap" })};
      font-size: 18px;
      line-height: 18px;
      color: #ffbf00;
      > .tag {
        cursor: pointer;
        &.applied {
          color: #318ce7;
        }
      }
    }
  }
  &:not(:nth-last-of-type(2)) {
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
