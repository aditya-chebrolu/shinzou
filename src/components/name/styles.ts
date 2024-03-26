import { css, keyframes } from "@emotion/react";
import { black, colors } from "@styles/colors";
import { flex, lgScreen } from "@styles/index";

export const containerStyles = css`
  user-select: none;
  overflow: hidden;
  ${lgScreen} {
    padding-inline: 100px;
  }
`;

const letterAnim = keyframes`
  0% {
    opacity: 0%;
  }

  50% {
    scale: 1.1;
    rotate: -10deg;
    color: var(--secondary);
  }

  100% {
    opacity: 100%;
    rotate: 0deg;
    scale: 1;
  }
`;

export const introContainerStyles = css`
  ${flex({ align: "center", gap: 15 })};
  font-size: 30px;

  .letter {
    display: inline-block;
    font-weight: bold;
    color: ${colors.orange};
    opacity: 0%;
    animation: ${letterAnim} 1500ms forwards;
    scale: 0;
    rotate: 45deg;
    transform-origin: bottom left;
  }

  .intro {
    font-weight: bold;
  }
  ${lgScreen} {
    font-size: 60px;
  }
`;

const desAnim = keyframes`
50% {
  scale:1.1;
}
  to {
    opacity: 1;
    translate: 0;
    scale:1;
  }
`;

export const designationContainerStyles = css`
  color: ${black[0]};
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 0.8px;

  > span {
    display: inline-block;
    opacity: 0;
    scale: 0;
    animation: ${desAnim} 2000ms forwards;
    &:empty {
      min-width: 10px;
    }
  }

  ${lgScreen} {
    font-size: 45px;
  }
`;

const dotAnim = keyframes`
 25% {
    border-radius: 0;
  }
  50% {
    translate: -1px 0;
    rotate: -20deg;
  }
  100% {
    translate: 0;
  }
`;

export const dotStyles = css`
  display: inline-block;
  color: ${colors.orange};
  animation: ${dotAnim} 1500ms forwards;
  transform-origin: bottom left;
  margin-left: 2px;
  height: 5px;
  background-color: ${colors.orange};
  aspect-ratio: 1;
  translate: 10rem 0;

  ${lgScreen} {
    translate: 10rem 0;
    height: 10px;
  }
`;
