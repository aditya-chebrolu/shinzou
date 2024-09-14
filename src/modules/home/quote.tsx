import { css } from "@emotion/react";
import { minWidth } from "@styles/index";
import React from "react";

const styles = css`
  display: flex;
  justify-self: center;
  gap: 10px;
  justify-content: center;
  color: var(--black);

  > .text {
    font-size: 26px;
    line-height: 26px;
    font-family: var(--caveat-font);
  }

  > .ai {
    font-weight: bolder;
    font-family: var(--source-sans-font);
    font-size: 30px;
    line-height: 30px;
  }

  position: relative;
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 50px;
    height: 1px;
    background: #00000040;
    top: 50%;
    transform: 0 -50%;
  }

  &::after {
    right: 104%;
  }

  &::before {
    left: 104%;
  }

  ${minWidth()} {
    &::after,
    &::before {
      width: 100px;
    }
  }
`;

const Quote = () => {
  return (
    <div css={styles}>
      <span className="text">Dont be a caveman, use</span>
      <span className="ai">AI</span>
    </div>
  );
};

export default Quote;
