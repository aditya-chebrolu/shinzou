import { containerStyles, resumeButtonStyles } from "./styles";
import { SvgContainer } from "@styles/index";
import { socials2 } from "@modules/contact-me/data";
import { useTheme } from "src/contexts/theme-provider";

const Details = () => {
  const { isDarkMode, toggleMode } = useTheme();
  return (
    <div css={containerStyles}>
      <div className="name">Aditya Chebrolu</div>
      <div className="icons">
        {socials2.map(({ href, Icon }, idx) => (
          <a href={href} key={idx}>
            <SvgContainer
              h={{ default: 40 }}
              fill={isDarkMode ? "#EDEDED" : "#505458"}
            >
              <Icon />
            </SvgContainer>
          </a>
        ))}
      </div>
      <div css={resumeButtonStyles}>Resume</div>
      <button onClick={toggleMode}>toggle mode</button>
    </div>
  );
};

export default Details;
