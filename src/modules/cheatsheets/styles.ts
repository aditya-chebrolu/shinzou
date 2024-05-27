import { css } from "@emotion/react";
import { flex, lgScreen } from "@styles/index";

export const pageStyles = css`
  background-image: var(--dotted-dark-bg);
  background-size: 17px 17px;
  min-height: 100dvh;
  padding: 0 0 50px;

  > .wrapper {
    > .content {
      padding: 20px;
      ${flex({ gap: [50], column: true })}
    }
  }

  ${lgScreen} {
    .wrapper {
      margin-inline: 20%;
      > .content {
        padding: 0;
      }
    }
  }
`;

export const headerStyles = css`
  ${flex({ column: true, gap: [20] })}
  position: sticky;
  top: 0;
  z-index: 2;
  background: linear-gradient(to top, rgba(255, 255, 255, 0), rgba(0, 0, 0, 1));
  padding: 20px;

  ${lgScreen} {
    padding: 30px 0;
  }
`;

export const searchbarStyles = css`
  ${flex({ align: "center", gap: [10] })};
  height: 50px;

  > input {
    border: none;
    border-radius: 0;
    background-color: black;
    color: white;
    padding: 10px;
    outline: none;
    width: 100%;
    font-size: 22px;
    font-weight: bold;
    border: solid 1.5px #1c1c20;
    height: 100%;

    &:focus {
      border-color: #494954;
    }
  }

  > .langs {
    ${flex({ gap: [10], align: "center" })}
    align-self: stretch;
    flex-shrink: 0;
    > div {
      height: 100%;
      aspect-ratio: 1;
      display: grid;
      place-items: center;
      background-color: #0d0d0f;
      border: solid 1.5px #1c1c20;
    }
  }
`;
