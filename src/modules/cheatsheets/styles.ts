import { css } from "@emotion/react";
import { fullBleed } from "@styles/custom/full-bleed";
import { flex, lgScreen } from "@styles/index";

export const pageStyles = css`
  background-image: var(--dotted-dark-bg);
  background-size: 17px 17px;
  min-height: 100dvh;

  > .wrapper {
    margin-inline: 20px;
    > .content {
      ${flex({ gap: [50], column: true })}
      padding: 0 0 50px;
    }
  }

  ${lgScreen} {
    .wrapper {
      margin-inline: 20%;
    }
  }
`;

export const searchbarStyles = css`
  background: linear-gradient(to top, rgba(255, 255, 255, 0), rgba(0, 0, 0, 1));
  position: sticky;
  top: 0;
  z-index: 2;

  margin-inline: -5px;
  padding: 10px 0;
  ${lgScreen} {
    margin-inline: -10px;
    padding: 15px 0;
  }

  > input {
    border: none;
    border-radius: 0;
    background-color: black;
    color: white;
    outline: none;
    width: 100%;
    font-weight: bold;
    border: solid 1.5px #1c1c20;

    &:focus {
      border-color: #494954;
    }

    height: 40px;
    padding: 4px 8px;
    font-size: 18px;
    ${lgScreen} {
      font-size: 22px;
      padding: 10px;
      height: 50px;
    }

    &::placeholder {
      color: #494954;
    }
  }
`;

export const welcomeTextStyles = css`
  color: #ffe4e1;
  text-align: center;
`;
