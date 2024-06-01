import { css } from "@emotion/react";
import { darkBackgroundStyles, flex, lgScreen } from "@styles/index";

const inlineSpacing = { dweb: "20%", mweb: "20px" };

export const headerStyles = css`
  padding-inline: ${inlineSpacing.mweb};
  padding-block: 10px;
  border-bottom: solid 1.5px #1c1c20;
  background-color: #0d0d0f;

  display: flex;
  flex-direction: column;
  gap: 10px;

  ${lgScreen} {
    padding-inline: ${inlineSpacing.dweb};
    padding-block: 15px;
    gap: 15px;
  }
`;

export const menuStyles = css`
  ${flex({ gap: [10] })};
  font-size: 16px;
  font-weight: normal;
  color: white;

  ${lgScreen} {
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

    ${lgScreen} {
      margin-inline: ${inlineSpacing.dweb};
    }
  }
`;
