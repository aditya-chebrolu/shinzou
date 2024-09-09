import { skillsSectionStyles } from "./styles";
import Skills from "@components/skills";
type Props = {
  id: string;
};

const SkillsSection = ({ id }: Props) => {
  return (
    <div css={skillsSectionStyles} id={id}>
      <h2 className="title">Skills</h2>
      <Skills id="skills" />
    </div>
  );
};

export default SkillsSection;
