import UnderlinedText from "@components/underlined-text";
import { skillsSectionStyles } from "./styles";
import Skills from "@components/skills";

const SkillsSection = () => {
  return (
    <div css={skillsSectionStyles}>
      {/* <h2 className="title">Skills</h2> */}
      <UnderlinedText text="Skills" type="h2" size="md" hideLine />
      <Skills id="skills" />
    </div>
  );
};

export default SkillsSection;
