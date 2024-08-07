import { css } from "@emotion/react";
import { minWidth } from "@styles/index";

export const searchBarWrapperStyles = (scrolled = false) => css`
  background: linear-gradient(to top, rgba(255, 255, 255, 0), rgba(0, 0, 0, 1));
  position: sticky;
  top: 40.5px;
  z-index: 2;
  transition: all 200ms;
  ${scrolled ? "padding-top: 20px" : ""};
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
  font-weight: bold;
  border: solid 1.5px #1c1c20;
  ${scrolled ? "width: calc(100% + 20px)" : ""};

  &:focus {
    border-color: #494954;
  }

  height: 45px;
  padding: 4px 8px;
  font-size: 18px;
  ${minWidth()} {
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
