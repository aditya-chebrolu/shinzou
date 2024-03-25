import { sectionStyles } from "./styles";
import { Card, SvgContainer } from "@styles/index";
import GithubIcon from "@assets/socials/git.svg";
import LinkedinIcon from "@assets/socials/linkedin.svg";
import InstaIcon from "@assets/socials/insta.svg";
import MailIcon from "@assets/socials/gmail.svg";

const ContactMeSection = () => {
  return (
    <div css={sectionStyles}>
      <div className="title">CONTACT ME</div>
      <div className="content">
        <SvgContainer h={{ default: 40 }}>
          <LinkedinIcon />
        </SvgContainer>
        <SvgContainer h={{ default: 40 }}>
          <GithubIcon />
        </SvgContainer>
        <SvgContainer h={{ default: 40 }}>
          <InstaIcon />
        </SvgContainer>
        <SvgContainer h={{ default: 40 }}>
          <MailIcon />
        </SvgContainer>
      </div>
    </div>
  );
};

export default ContactMeSection;
