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
  overflow: hidden;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.24);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
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
