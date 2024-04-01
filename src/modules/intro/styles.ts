import { css, keyframes } from "@emotion/react";
import { flex } from "@styles/index";

export const sectionStyles = css`
  ${flex({ align: "center", justify: "center", column: true })};
  gap: 40px;
  min-height: 100dvh;
  position: relative;
  overflow: hidden;
`;

export const bgStyles = css`
  top: 0;
  left: 0;
  height: 400px;
  width: 100%;
  position: absolute;
  overflow: hidden;
  background-image: url("bg2.png");
  background-repeat: repeat;
  background-size: contain;

  .mask {
    z-index: 1;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0),
      rgba(0, 0, 0, 1)
    );
    position: absolute;
    top: 0;
  }
`;

const kf = keyframes`
50% {
    scale:1.1;
    outline-width: 20px;
    outline-offset: 10px;
    rotate: -20deg;
}

70% {
    rotate:20deg;
}

75%{
    scale: 0.8;
}

90% {
    rotate: -10deg;
}

to {
    scale:1;
}
`;

export const imageStyles = (animationCompleted = false) => css`
  position: relative;
  z-index: 1;
  border-radius: 50%;
  height: 180px;
  aspect-ratio: 1;
  overflow: hidden;
  outline: solid 5px white;
  box-shadow: 0px -10px 10px 2px rgba(0, 0, 0, 0.75);
  ${animationCompleted
    ? css`
        transition: outline-offset 400ms;
        &:hover {
          outline-offset: 10px;
        }
      `
    : css`
        scale: 0;
        rotate: 0;
        animation: ${kf} 1.5s forwards ease-in-out;
      `}
`;
