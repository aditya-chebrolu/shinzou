import { css, keyframes } from "@emotion/react";
import { darkBackgroundStyles, flex, minWidth } from "@styles/index";

const inlineSpacing = { dweb: "20%", mweb: "20px" };

export const headerStyles = css`
  border-bottom: solid 1.5px #1c1c20;
  background-color: #0d0d0f;
  display: flex;
  flex-direction: column;
  gap: 10px;

  padding-inline: ${inlineSpacing.mweb};
  padding-block: 20px;
  ${minWidth()} {
    padding-inline: ${inlineSpacing.dweb};
    padding-block: 15px;
  }
`;

export const menuStyles = css`
  ${flex({ gap: [25], align: "center" })};
  position: sticky;
  top: 0;
  z-index: 1;
  border-bottom: solid 1.5px #1c1c20;
  background-color: #0d0d0f;
  padding-inline: ${inlineSpacing.mweb};
  padding-block: 8px;

  > .link {
    color: #f5f5f5;
    &:hover {
      color: #ffbf00;
    }
  }

  ${minWidth()} {
    padding-inline: ${inlineSpacing.dweb};
  }
`;

const poke = (flag = false) => keyframes`
  50% {
    scale: 0.9;
    translate: ${flag ? "-" : ""}4px;
  }
  100% {
    translate: ${flag ? "-" : ""}0px;
  }
`;

const shine = keyframes`
  0% {
    background-position: -200%;
  }
  100% {
    background-position: 200%;
  }
`;

export const portfolioButton = css`
  margin-left: auto;
  color: white;
  ${flex({ gap: [4], align: "center" })};
  .text {
    line-height: 16px;
    background: linear-gradient(
      90deg,
      #ffb6c1,
      #ffdab9,
      #98fb98,
      #e6e6fa,
      #ffb6c1
    );
    background-size: 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shine 3s linear infinite;
    animation: ${shine} 2s infinite linear;

    &:hover {
      animation-duration: 500ms;
    }
  }
  .icon > svg {
    animation: ${poke()} 1s infinite linear;
  }

  .icon.right > svg {
    rotate: -180deg;
    animation: ${poke(true)} 1s infinite linear;
  }
`;

export const containerStyles = css`
  ${darkBackgroundStyles};
  min-height: 100dvh;
  ${flex({ column: true })}

  > .content {
    ${flex({ gap: [20], column: true })};
    flex: 1;
    margin-inline: ${inlineSpacing.mweb};
    margin-bottom: 20px;

    ${minWidth()} {
      margin-inline: ${inlineSpacing.dweb};
    }
  }
`;
