import { css, keyframes } from "@emotion/react";
import { flex, lgScreen } from "@styles/index";

export const containerStyles = css`
  height: 100vh;
  ${flex({ column: true, justify: "center" })};
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
  height: 150px;
  aspect-ratio: 1;
  overflow: hidden;
  outline: solid 5px #fff;
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

  margin-bottom:40px;
  align-self: center;

  ${lgScreen} {
    align-self: flex-start;
    margin: 20px 0 40px 5px;
    height: 180px;
  }
`;
