import { css, keyframes } from "@emotion/react";
import { black, colors } from "@styles/colors";
import { center, flex, lgScreen, noScrollbar } from "@styles/index";

export const containerStyles = css`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 10px;

  > .logo {
    grid-area: 1/1/3/2;
    padding: 5px;
    ${center};
    background-color: ${colors.white};
    align-self: center;
  }

  > .title {
    grid-area: 1/2/2/3;
    font-size: 14px;
    letter-spacing: 1px;
    color: ${colors.white};
  }

  > .date {
    grid-area: 2/2/3/3;
    font-size: 12px;
    color: ${black[0]};
  }

  @media (min-width: 500px) {
    row-gap: 5px;
    > .title {
      font-size: 16px;
      line-height: 16px;
    }

    > .date {
      font-size: 14px;
    }
  }
`;

export const dialogStyles = css`
  .MuiDialog-paper {
    ${flex({ column: true, gap: [5] })};
    max-width: unset;
    margin: 10px;
    width: min(100%, 650px);
    border-radius: 0;
    background: none;
  }

  .MuiBackdrop-root {
    backdrop-filter: blur(10px);
  }
`;

export const techStackRowStyles = css`
  > .title {
    color: ${colors.brown};
    font-weight: bold;
    font-size: 14px;
    ${lgScreen} {
      font-size: 16px;
    }
  }
  > .content {
    margin-top: 10px;
    ${flex({ gap: [5], wrap: "wrap", align: "center" })};
    > .capsule {
      font-size: 12px;
      ${flex({ gap: [5], align: "center" })};
      color: ${black[0]};
      border: solid 1px ${black[1]};
      background-color: ${black[2]};
      padding: 3px 6px;
      /* border-radius: 8px; */

      ${lgScreen} {
        /* border-radius: 8px; */
      }
    }
  }
`;

const anim = keyframes`
to {
  rotate: z 360deg;
}
`;

export const positionsContainerStyles = css`
  ${flex({ gap: [15], column: true })}
  height: 400px;
  overflow: scroll;
  ${noScrollbar};

  &::after {
    content: "";
    height: 40px;
    width: calc(100% - 2px);
    position: absolute;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0),
      rgba(0, 0, 0, 1)
    );
    backdrop-filter: blur(0.5px);
    bottom: 1px;
    left: 1px;
  }
`;

export const positionSectionStyles = css`
  ${flex({ column: true })};
  color: ${colors.white};

  &:not(:last-child) {
    border-bottom: dashed 1px ${black[1]};
    padding-bottom: 15px;
  }

  &:last-child {
    padding-bottom: 30px;
  }

  > .header {
    ${flex({ align: "center", justify: "space-between" })};
    margin-bottom: 10px;
    color: ${colors.white};
    font-size: 14px;

    > .left {
      font-weight: bold;
      color: ${colors.orange};
    }

    > .right {
      color: ${colors.brown};
    }

    ${lgScreen} {
      font-size: 16px;
    }
  }

  > .point {
    ${flex({ gap: [10] })};
    &:not(:last-of-type) {
      > .left > .line {
        flex: 1;
        border-right: dashed 1px ${colors.brown};
      }
      > .right {
        padding-bottom: 15px;
      }
    }

    > .left {
      padding-top: 2px;
      ${flex({ column: true, align: "center", gap: [5] })};
      > .icon {
        margin-top: 1px;
        animation: ${anim} 2s infinite;
        > svg {
          stroke: ${colors.brown};
        }
      }
    }

    > .right {
      font-size: 14px;
      text-align: justify;
    }
  }
`;
