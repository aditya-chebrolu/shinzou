import { socials } from "@constants/socials";
import { css } from "@emotion/react";
import ResumeButton from "@modules/home/resume-button";
import { SvgContainer } from "@styles/index";

const styles = css`
  display: flex;
  gap: 30px;
  align-items: center;
`;

const Contact = () => {
  return (
    <div css={styles}>
      {socials.map(({ href, Icon }, idx) => (
        <a href={href} key={idx}>
          <SvgContainer h={30} fill="#2A3439">
            <Icon />
          </SvgContainer>
        </a>
      ))}
      <ResumeButton />
    </div>
  );
};

export default Contact;
