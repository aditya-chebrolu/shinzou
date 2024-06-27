import { css } from "@emotion/react";
import { darkBackgroundStyles, minWidth } from "@styles/index";

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

    > .tags {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      column-gap: 10px;

      &:has(> a:hover) > a:not(:hover) {
        opacity: 0.2;
      }

      > a {
        transition: all 200ms;
        &:hover {
          color: #fbec5d;
          scale: 1.5;
        }
      }

      ${minWidth()} {
        max-width: 300px;
      }
    }

    ${minWidth()} {
      margin-inline: 20%;
    }
  }

  .tag {
    color: #ffcc33;
  }
`;

export const tagsContainerStyles = css`
  color: #ffcc33;
  align-self: center;
  margin-block: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  row-gap: 5px;
  ${minWidth()} {
    max-width: 400px;

    &:has(> a:hover) > a:not(:hover) {
      opacity: 0.2;
    }

    > a {
      transition: all 200ms;
      &:hover {
        color: #fbec5d;
        scale: 1.5;
      }
    }
  }
`;
