import { css } from "@emotion/react";
import { minWidth, SvgContainer } from "@styles/index";
import { useTheme } from "src/contexts/theme-provider";
import SunIcon from "@assets/sun.svg";
import MoonIcon from "@assets/moon.svg";

const styles = (rotate = false) => css`
  transition: all 500ms ease-out;
  cursor: pointer;
  ${rotate
    ? css`
        rotate: 360deg;
      `
    : ""}

  margin-left:auto;
  margin-bottom: -10px;

  ${minWidth()} {
    position: fixed;
    right: 50px;
    top: 50px;
  }
`;

const Switch = () => {
  const { toggleMode, isDarkMode } = useTheme();
  return (
    <SvgContainer
      onClick={toggleMode}
      h={{ dweb: 30, mweb: 25 }}
      css={styles(isDarkMode)}
    >
      {isDarkMode ? <SunIcon /> : <MoonIcon />}
    </SvgContainer>
  );
};

export default Switch;
