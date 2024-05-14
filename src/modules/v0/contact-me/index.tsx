import SectionWrapper from "@components/section-wrapper";
import { socials } from "./data";
import { socialIconStyles } from "./styles";
import { flex, SvgContainer } from "@styles/index";

const ContactMeSection = () => {
  return (
    <SectionWrapper title="CONTACT ME">
      <div css={flex({ gap: [20] })}>
        {socials.map(({ href, Icon }, idx) => (
          <a href={href} css={socialIconStyles} key={idx}>
            <SvgContainer h={{ default: 40 }}>
              <Icon />
            </SvgContainer>
          </a>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ContactMeSection;
