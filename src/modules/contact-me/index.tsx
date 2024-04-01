import { socials } from "./data";
import { sectionStyles, socialIconStyles } from "./styles";
import { Card, SvgContainer } from "@styles/index";

const ContactMeSection = () => {
  return (
    <div css={sectionStyles}>
      <div className="title">CONTACT ME</div>
      <div className="content">
        {socials.map(({ href, Icon }, idx) => (
          <a href={href} css={socialIconStyles} key={idx}>
            <SvgContainer h={{ default: 40 }}>
              <Icon />
            </SvgContainer>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactMeSection;
