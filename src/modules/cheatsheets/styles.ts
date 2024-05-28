import { css } from "@emotion/react";
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

export const headerStyles = css`
  ${flex({ column: true, gap: [20] })}
  position: sticky;
  top: 0;
  z-index: 2;
  background: linear-gradient(to top, rgba(255, 255, 255, 0), rgba(0, 0, 0, 1));
  padding: 20px 0;

  ${lgScreen} {
    padding: 30px 0;
  }
`;

export const searchbarStyles = css`
  ${flex({ align: "center", gap: [10] })};
  height: 40px;
  margin-inline: -5px;

  ${lgScreen} {
    height: 50px;
    margin-inline: -10px;
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
    height: 100%;

    &:focus {
      border-color: #494954;
    }

    padding: 4px 8px;
    font-size: 18px;

    ${lgScreen} {
      font-size: 22px;
      padding: 10px;
    }
  }

  > .langs {
    ${flex({ gap: [10], align: "center" })}
    align-self: stretch;
    flex-shrink: 0;

    > div {
      cursor: pointer;
      height: 100%;
      display: grid;
      place-items: center;
      background-color: #0d0d0f;
      border: solid 1.5px #1c1c20;
      transition: all 200ms;

      &.checked {
        border-color: #494954;
      }
      width: 40px;

      ${lgScreen} {
        width: 50px;

        &:hover {
          scale: 1.01;
          border-color: #494954;
        }

        &:has(~ div:hover),
        &:hover ~ div {
          filter: grayscale(5);
          scale: 0.9;
          border-color: #1c1c20;
        }
      }
    }
  }
`;

export const welcomeTextStyles = css`
  color: #ffe4e1;
  text-align: center;
`;
