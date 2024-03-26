import GradientDivider from "@components/gradient-divider";
import Sign from "@components/sign";
import ContactMeSection from "@modules/contact-me";
import ExperienceSection from "@modules/experience";
import IntroSection from "@modules/intro";
import ProjectsSection from "@modules/projects";
import SkillsSectionStyles from "@modules/skills";
import { pageStyles, Spacer } from "@styles/index";

const index = () => {
  return (
    <>
      <title>Aditya Chebrolu | Portfolio</title>
      <meta name="description" content="Full stack developer" />
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
