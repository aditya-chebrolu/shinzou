import { css, keyframes } from '@emotion/css';

export const containerStyles = css`
  font-family: 'ARS', sans-serif;
  /* position: absolute; */
  /* left: 5%; */
  /* top: 10%; */
  border: solid 1px white;
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
  display: flex;
  align-items: center;
  gap: 1.5rem;
  font-size: 4rem;

  .letter {
    display: inline-block;
    font-weight: bold;
    line-height: 5rem;
    color: var(--primary);
    opacity: 0%;
    animation: ${letterAnim} 1500ms forwards;
    scale: 0;
    rotate: 45deg;
    transform-origin: bottom left;
  }

  .intro {
    display: block;
    color: white;
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
  color: var(--primary);
  animation: ${dotAnim} 1500ms forwards;
  translate: 40rem 0;
  transform-origin: bottom left;
  margin-left: 2px;
`;

const desAnim = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
    translate: 0;
  }
`;

const lineAnim = keyframes`

  to {
    width:100%
  }
`;

export const designationContainerStyles = css`
  font-size: 4.35rem;
  color: white;
  opacity: 0;
  translate: 0 50px;
  animation: ${desAnim} 1000ms forwards;
  position: relative;

  /* > span:nth-child(odd) {
    position: relative;
    z-index: 2;
  }
  > span:nth-child(even) {
    color: #b2b2b2;
  } */

  /* &::before {
    content: '';
    top: 50%;
    position: absolute;
    height: 12px;
    background-color: var(--primary);
    display: block;
    width: 0;
    animation: ${lineAnim} 2s forwards ease-out;
    animation-delay: 4.5s;
  } */
`;
