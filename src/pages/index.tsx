import GradientDivider from "@components/gradient-divider";
import Sign from "@components/sign";
import ContactMeSection from "@modules/contact-me";
import ExperienceSection from "@modules/experience";
import IntroSection from "@modules/intro";
import ProjectsSection from "@modules/projects";
import SkillsSectionStyles from "@modules/skills";
import { bgStyles, pageStyles, Spacer } from "@styles/index";

const index = () => {
  return (
    <>
      <div css={bgStyles}>
        <div className="mask" />
      </div>
      <div css={pageStyles}>
        <IntroSection />
        <GradientDivider fullBleed />
        <ExperienceSection />
        <GradientDivider fullBleed />
        <ProjectsSection />
        <GradientDivider fullBleed />
        <SkillsSectionStyles />
        <GradientDivider fullBleed />
        <ContactMeSection />
        <Spacer gap={10} />
        <Sign />
        <Spacer gap={10} />
      </div>
    </>
  );
};

export default index;
