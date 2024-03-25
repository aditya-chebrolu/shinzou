import GradientDivider from "@components/gradient-divider";
import ContactMeSection from "@modules/contact-me";
import ExperienceSection from "@modules/experience";
import IntroSection from "@modules/intro";
import SkillsSectionStyles from "@modules/skills";
import { Divider, pageStyles, Spacer } from "@styles/index";

const index = () => {
  return (
    <div css={pageStyles}>
      <IntroSection />
      <GradientDivider fullBleed />
      <ExperienceSection />
      <GradientDivider fullBleed />
      <SkillsSectionStyles />
      <GradientDivider fullBleed />
      <ContactMeSection />
      <Spacer gap={120} />
    </div>
  );
};

export default index;
