import { css } from "@emotion/react";
import { darkBackgroundStyles, flex, minWidth } from "@styles/index";

const inlineSpacing = { dweb: "20%", mweb: "20px" };

export const headerStyles = css`
  border-bottom: solid 1.5px #1c1c20;
  background-color: #0d0d0f;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: sticky;
  top: 0;

  padding-inline: ${inlineSpacing.mweb};
  padding-block: 20px;
  ${minWidth()} {
    padding-inline: ${inlineSpacing.dweb};
    padding-block: 15px;
  }
`;

export const menuStyles = css`
  border-bottom: solid 1.5px #1c1c20;
  background-color: #0d0d0f;
  padding-inline: ${inlineSpacing.mweb};
  padding-block: 8px;
  display: flex;
  gap: 25px;
  line-height: 16px;

  > a {
    color: #f5f5f5;
    &:hover {
      color: #ffbf00;
    }
  }

  ${minWidth()} {
    padding-inline: ${inlineSpacing.dweb};
  }

  /* ${flex({ gap: [10] })};
  font-size: 16px;
  font-weight: normal;
  color: white;

  ${minWidth()} {
    > a:hover {
      color: #fbec5d;
    }

    > a:has(~ a:hover),
    > a:hover ~ a {
      opacity: 0.5;
    }
  }

  &:empty {
    display: none;
  } */
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
