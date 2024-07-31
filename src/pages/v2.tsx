import { socials } from "@constants/socials";
import { css, keyframes } from "@emotion/react";
import {
  containerStyles,
  experienceSectionStyles,
  nameStyles,
  pageStyles,
  projectsSectionStyles,
  skillsSectionStyles,
  socialsStyles,
} from "@modules/v1/styles";
import { SvgContainer } from "@styles/index";

const v2 = () => {
  return (
    <div css={pageStyles}>
      <div css={containerStyles}>
        <div css={nameStyles}>Aditya Chebrolu</div>
        <div css={socialsStyles}>
          {socials.map(({ href, Icon }, idx) => (
            <a href={href} key={idx}>
              <SvgContainer h={{ default: 40 }} fill="white">
                <Icon />
              </SvgContainer>
            </a>
          ))}
        </div>
        <div css={skillsSectionStyles}>
          <div className="title">Skills</div>
        </div>
        <div css={experienceSectionStyles}>
          <div className="title">Experience</div>
        </div>
        <div css={projectsSectionStyles}>
          <div className="title">Projects</div>
        </div>
      </div>
    </div>
  );
};

export default v2;
