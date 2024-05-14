import GradientDivider from "@components/gradient-divider";
import Sign from "@components/sign";
import ContactMeSection from "@modules/v0/contact-me";
import ExperienceSection from "@modules/v0/experience";
import IntroSection from "@modules/v0/intro";
import ProjectsSection from "@modules/v0/projects";
import SkillsSectionStyles from "@modules/v0/skills";
import { bgStyles, pageStyles, Spacer } from "@styles/index";

const index = () => {
  return (
    <div css={bgStyles}>
      <div css={pageStyles}>
        <IntroSection />
        <GradientDivider />
        <ExperienceSection />
        <GradientDivider />
        <ProjectsSection />
        <GradientDivider />
        <SkillsSectionStyles />
        <GradientDivider />
        {/* <CheatSheets /> */}
        {/* <GradientDivider /> */}
        <ContactMeSection />
        <Spacer gap={10} />
        <Sign />
        <Spacer gap={10} />
      </div>
    </div>
  );
};

export default index;
