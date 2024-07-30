import { css, keyframes } from "@emotion/react";
import {
  containerStyles,
  experienceSectionStyles,
  nameStyles,
  pageStyles,
  projectsSectionStyles,
  skillsSectionStyles,
} from "@modules/v1/styles";

const v2 = () => {
  return (
    <div css={pageStyles}>
      <div css={containerStyles}>
        <div css={nameStyles}>Aditya Chebrolu</div>
        <div css={experienceSectionStyles}>
          <div className="title">Skills</div>
        </div>
        <div css={skillsSectionStyles}>
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
