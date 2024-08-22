import { css, keyframes } from "@emotion/react";
import { minWidth } from "@styles/index";

const anim = keyframes` 
  to {
    background-position: 100% 0;
  }
`;

export const containerStyles = css`
  position: sticky;
  top: 0;
  z-index: 100;
  background: url("pattern.png");
  animation: ${anim} 10s linear infinite;
  box-shadow: 0 20px 10px -20px rgba(0, 0, 0, 0.7) inset,
    0 -20px 10px -20px rgba(0, 0, 0, 0.7) inset;
  margin-inline: -100px;
  background-position: center;
  background-repeat: repeat;
  background-size: contain;
  /* padding-block: 50px; */
  /* border-radius: 0 0 90% 90%; */
`;

export const h1Styles = css`
  color: #fff;
  text-align: center;
`;
