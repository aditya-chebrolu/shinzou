import { css } from "@emotion/react";
import { flex, lgScreen } from "@styles/index";

export const containerStyles = css`
  ${flex({ column: true, gap: [5] })};

  ${lgScreen} {
    background-color: #fff;
    border: solid 1.5px #e5e4e2;
    padding: 15px;
    box-shadow: 2px 2px 7px -1px rgba(0, 0, 0, 0.15);
    transition-duration: 200ms;
    &:hover {
      scale: 1.05;
    }
  }
`;

export const contentStyles = css`
  ${flex({ gap: [5], column: true })};

  > a {
    position: relative;
    color: #007fff;

    &:hover {
      color: #ef9b0f;
    }

    > .txt,
    .name {
      text-decoration: underline;
    }

    > .num {
      margin-right: 3px;
      color: black;
    }
  }
`;
