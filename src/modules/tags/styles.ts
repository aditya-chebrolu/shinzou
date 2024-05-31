import { css } from "@emotion/react";
import { darkBackgroundStyles, lgScreen } from "@styles/index";

export const containerStyles = css`
  ${darkBackgroundStyles}
  display: flex;
  flex-direction: column;
  min-height: 100dvh;

  > .wrapper {
    flex: 1;
    display: grid;
    place-items: center;
    margin-inline: 20px;

    > div {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      column-gap: 10px;

      ${lgScreen} {
        max-width: 300px;
      }
    }

    ${lgScreen} {
      margin-inline: 20%;
    }
  }

  .tag {
    color: #ffcc33;
  }
`;
