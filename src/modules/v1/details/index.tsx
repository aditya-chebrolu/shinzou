import { containerStyles } from "./styles";
import { SvgContainer } from "@styles/index";
import { socials2 } from "@modules/v0/contact-me/data";
import { useTheme } from "src/contexts/theme-provider";
import UnderlinedText from "@components/underlined-text";

const Details = () => {
  const { isDarkMode } = useTheme();
  return (
    <div css={containerStyles}>
      <UnderlinedText
        text="Aditya Chebrolu"
        size="xl"
        color={"var(--name)"}
        lineColor="var(--name-line)"
      />
      <div className="icons">
        {socials2.map(({ href, Icon }, idx) => (
          <a href={href} key={idx}>
            <SvgContainer
              h={{ default: 30 }}
              fill={isDarkMode ? "#EDEDED" : "#505458"}
            >
              <Icon />
            </SvgContainer>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Details;
