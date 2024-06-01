import { css } from "@emotion/react";
import { lgScreen } from "@styles/index";

export const searchBarWrapperStyles = (scrolled = false) => css`
  background: linear-gradient(to top, rgba(255, 255, 255, 0), rgba(0, 0, 0, 1));
  position: sticky;
  top: 0;
  z-index: 2;
  transition: all 300ms;

  margin-top: -15px;
  padding-top: 15px;

  ${lgScreen} {
    margin-top: -20px;
    padding-top: 20px;
  }
  display: grid;
  place-items: center;
`;

export const searchBarStyles = (scrolled = false) => css`
  border: none;
  border-radius: 0;
  background-color: black;
  color: white;
  outline: none;
  transition: all 300ms;
  width: 100%;
  ${scrolled ? "width: calc(100% + 20px)" : "calc(100% - 0px)"};
  font-weight: bold;
  border: solid 1.5px #1c1c20;

  &:focus {
    border-color: #494954;
  }

  height: 45px;
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
`;

export const welcomeTextStyles = css`
  color: #ffe4e1;
  text-align: center;
  margin-block: 50px;
`;
