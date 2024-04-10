import GradientDivider from "@components/gradient-divider";
import Sign from "@components/sign";
import CheatSheets from "@modules/cheatsheets";
import ContactMeSection from "@modules/contact-me";
import ExperienceSection from "@modules/experience";
import IntroSection from "@modules/intro";
import ProjectsSection from "@modules/projects";
import SkillsSectionStyles from "@modules/skills";
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
