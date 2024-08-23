import { css, keyframes } from "@emotion/react";

const anim = keyframes` 
  to {
    background-position: 100% 0;
  }
`;

export const containerStyles = css`
  position: sticky;
  top: 0px;
  z-index: 100;
  margin-inline: -100px;
  background-color: #003262;
  overflow: hidden;
`;

export const bgStyles = css`
  position: absolute;
  top: 0;
  left: 0px;
  width: 100%;
  height: 200px;
  background: url("pattern.png");
  animation: ${anim} 10s linear infinite;
  background-position: center;
  background-repeat: repeat;
  background-size: contain;
`;

export const h1Styles = css`
  color: #fff;
  text-align: center;
  isolation: isolate;
`;
