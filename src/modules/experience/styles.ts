import { css, keyframes } from "@emotion/react";
import { minWidth } from "@styles/index";

export const sectionContainerStyles = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const headerStyles = css`
  padding: 20px;
  background-color: #003262;
  color: var(--white);

  display: flex;
  gap: 10px;
  align-items: center;

  > .company,
  > .title {
    font-weight: bold;
    font-size: 20px;
    line-height: 20px;
  }

  > .title {
    color: var(--yellow);
  }

  > a {
    transition: all 200ms;

    &:hover {
      rotate: 180deg;
    }
  }

  ${minWidth()} {
    padding: 20px 27%;

    > .company,
    > .title {
      font-size: 30px;
      line-height: 30px;
    }
  }
`;

export const technologiesContainer = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
  row-gap: 15px;
  font-size: 16px;

  ${minWidth()} {
    font-size: 18px;
    gap: 15px;
    grid-template-columns: repeat(4, 1fr);
  }

  > .tech {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;

const anim = keyframes`
to {
width:100%
}
`;

export const pointStyles = css`
  font-size: 18px;
  > .highlight {
    position: relative;

    &:first-child {
      padding-left: 0px;
    }

    z-index: 1;

    &:after {
      content: "";
      height: 6px;
      width: 0%;
      position: absolute;
      display: inline-block;
      left: 0;
      bottom: 3px;
      background-color: #ffdb58;
      z-index: -1;
      transition: all 500ms;
      animation: ${anim} forwards ease-in-out;
      animation-timeline: view();
      animation-range: 0px 150px; //  start when top is 100px from bottom
    }

    &:hover {
      &:after {
        width: 100%;
      }
    }
  }

  &:hover {
    > .highlight {
      &:after {
        width: 100%;
      }
    }
  }

  > .yellow {
    /* background-color: #fcf18a; */
    /* background: linear-gradient(to left, #fcf18a, #ffdb58); */
    /* text-decoration-color: #ffdb58; */

    &:after {
      background-color: #ffdf80;
    }
  }

  > .pink {
    /* background-color: #ffcfdc; */
    /* background: linear-gradient(to left, #ffcfdc, #ff8fb7); */
    text-decoration-color: #ff8fb7;
    &:after {
      background-color: #fdbbc8;
    }
  }

  > .blue {
    /* background-color: #c2e6fc; */
    /* background: linear-gradient(to left, #c2e6fc, #6ac2f9); */
    text-decoration-color: #c2e6fc;

    &:after {
      background-color: #c2e6fc;
    }
  }

  > .code {
    background-color: #e5e4e2;
    border: solid 1px #d5d3d1;
    position: relative;
    font-size: 14px;
    border-radius: 6px;
    z-index: 1;
    vertical-align: 1px;
    padding: 2px 4px;
  }
`;

export const pointsContainerStyles = css`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 10px;

  ${pointStyles};
`;

const imageAnim = keyframes`
to {
  translate: 0 0;
}
`;

export const imageContainerStyles = css`
  font-size: 0;
  margin-inline: auto;
  animation: ${imageAnim} forwards ease-in-out;
  animation-timeline: view();

  filter: drop-shadow(0 0 5px #00000050);
  translate: 0 40px;
  animation-range: 0px 50px; //  start when top is 100px from bottom

  position: relative;
  height: 80px;
  width: 100px;

  ${minWidth()} {
    animation-range: 0px 100px; //  start when top is 100px from bottom
    height: 100px;
  }
`;
