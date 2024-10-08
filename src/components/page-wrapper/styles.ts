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
  ${flex({ align: "center", gap: [12, 25] })};
  position: sticky;
  top: 0;
  z-index: 1;
  border-bottom: solid 1.5px #1c1c20;
  background-color: #0d0d0f;
  padding-inline: ${inlineSpacing.mweb};
  padding-block: 8px;

  > .link {
    flex-shrink: 0;
    color: #f5f5f5;

    &:hover {
      color: #ffbf00;
    }
  }

  .active {
    color: #ffbf00;
  }

  ${minWidth()} {
    padding-inline: ${inlineSpacing.dweb};
  }
`;

const shine = keyframes`
  0% {
    background-position: 200%;
  }
  100% {
    background-position: -200%;
  }
`;

export const portfolioButton = css`
  flex-shrink: 0;
  margin-left: auto;
  color: white;
  ${flex({ gap: [4], align: "center" })};
  line-height: 16px;
  background: linear-gradient(
    90deg,
    #ffb6c1,
    #ff69b4,
    #c71585,
    #9370db,
    #b19cd9,
    #9370db,
    #c71585,
    #ff69b4,
    #ffb6c1
  );
  background-size: 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${shine} 10s infinite linear;

  &:hover {
    animation-duration: 2s;
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
    margin-block: 20px;

    ${minWidth()} {
      margin-inline: ${inlineSpacing.dweb};
    }
  }
`;
