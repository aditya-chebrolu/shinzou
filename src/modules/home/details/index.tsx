import { containerStyles } from "./styles";
import { SvgContainer } from "@styles/index";
import { socials } from "@constants/socials";
import UnderlinedText from "@components/underlined-text";
import { css } from "@emotion/react";
import ResumeButton from "../resume-button";

const Details = () => {
  return (
    <div css={containerStyles}>
      <UnderlinedText text="Aditya Chebrolu" size="xl" type="h1" />
      <div className="icons">
        {socials.map(({ href, Icon }, idx) => (
          <a href={href} key={idx}>
            <SvgContainer h={30} fill="#2A3439">
              <Icon />
            </SvgContainer>
          </a>
        ))}
        <ResumeButton />
      </div>
    </div>
  );
};

export default Details;
