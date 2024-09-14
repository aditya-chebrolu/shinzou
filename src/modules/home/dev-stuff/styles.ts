import { css, keyframes } from "@emotion/react";
import { flex, minWidth } from "@styles/index";

const anim = keyframes` 
  to {
    background-position: 100% 0;
  }
`;

export const containerStyles = css`
  padding: 25px 20px;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  border: solid 2px var(--white);
  box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.3);
  transition: all 400ms;
  &:hover {
    scale: 0.99;
    > .bg {
      height: 250px;
      animation-play-state: paused;
    }
  }

  > .bg {
    transition: all 400ms;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 200px;
    background: url("pattern.png");
    background-position: center;
    background-repeat: repeat;
    background-size: contain;
    animation: ${anim} 10s linear infinite;
  }

  > .bg + div {
    isolation: isolate;
  }

  ${minWidth()} {
    /* padding: 25px 27%; */
  }
`;

export const ctaStyles = css`
  ${flex({ column: true, gap: [10] })};
  cursor: pointer;
  color: white;
  transition: all 150ms;
  isolation: isolate;
  z-index: 1;

  .desc > span {
    color: #ffbf00;
  }
`;
