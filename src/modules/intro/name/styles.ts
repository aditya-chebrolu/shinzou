import { css, keyframes } from "@emotion/react";
import { black, colors } from "@styles/colors";
import { flex, lgScreen, smScreen } from "@styles/index";

export const containerStyles = css`
  user-select: none;
  overflow: hidden;

  ${smScreen} {
    ${flex({ column: true, align: "center" })};
  }
`;

export const introContainerStyles = css`
  ${flex({ gap: 4, align: "center" })};
  font-size: 30px;
  font-weight: bold;

  ${lgScreen} {
    gap: 15px;
    font-size: 60px;
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
    color: #FFFACD;

  }

  100% {
    color:#89CFF0;

    opacity: 100%;
    rotate: 0deg;
    scale: 1;
  }
`;

export const letterStyle1 = (duration: number, delay: number) => css`
  animation: ${letterAnim} ${duration}s forwards;
  animation-delay: ${delay}s;
  display: inline-block;
  font-weight: bold;
  opacity: 0%;
  scale: 0;
  rotate: 45deg;
  transform-origin: bottom left;
`;

const dotAnim = keyframes`
  50% {
    background-color: #FFFACD;
    rotate: -25deg;
    translate: 0;
  }
  to {
    translate: 0;
    background-color: #89cff0;
  }
`;

export const dotStyles = (delay: number) => css`
  display: inline-block;
  color: ${colors.orange};
  animation: ${dotAnim} 1500ms forwards;
  animation-delay: ${delay}s;
  transform-origin: bottom left;
  margin-left: 2px;
  height: 5px;
  aspect-ratio: 1;
  background-color: #fffacd;

  translate: 5rem 0;

  border-radius: 1px;
  ${lgScreen} {
    border-radius: 1.5px;
    translate: 15rem 0;
    height: 10px;
  }
`;

// line 2

const desAnim = keyframes`
  50% {
    scale:1.2;
    color:#89CFF0;
  }
  to {
    color: #FFFACD;
    opacity: 1;
    scale:1;
  }
`;

export const designationContainerStyles = css`
  ${flex({ gap: 4 })}
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0.8px;

  ${lgScreen} {
    gap: 10px;
    font-size: 35px;
  }
`;

export const letterStyle2 = (duration: number, delay: number) => css`
  display: inline-block;
  opacity: 0;
  scale: 0;
  animation: ${desAnim} ${duration}s forwards;
  animation-delay: ${delay}s;

  &:empty {
    min-width: 10px;
  }
`;

// description

const descAnimation = keyframes`
from{
  color: #89CFF0;
}

50%{
  color:#FFFACD;

}
to {
  color:white;
  opacity: 1;
}
`;

export const descriptionStyles = css`
  margin-top: 20px;
  font-size: 14px;
  text-align: justify;
  opacity: 0;
  animation: ${descAnimation} 1s forwards;
  animation-delay: 4s;
  padding-inline: 28px;
  ${lgScreen} {
    padding: 0;
    margin-top: 40px;
    width: 80%;
    font-size: 18px;
  }
`;
