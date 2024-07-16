import { containerStyles } from "./styles";
import { SvgContainer } from "@styles/index";
import { socials } from "@constants/socials";
import UnderlinedText from "@components/underlined-text";
import { css } from "@emotion/react";

const Details = () => {
  return (
    <div css={containerStyles}>
      <UnderlinedText
        text="Aditya Chebrolu"
        size="xl"
        type="h1"
        color={{ mweb: "white" }}
        lineColor={{ mweb: "transparent" }}
      />
      <div className="icons">
        {socials.map(({ href, Icon }, idx) => (
          <a href={href} key={idx}>
            <SvgContainer
              h={{ default: 30 }}
              fill={{ dweb: "#2A3439", mweb: "#00416A" }}
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
