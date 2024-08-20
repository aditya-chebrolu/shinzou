import { skillsSectionStyles } from "./styles";
type Props = {
  id: string;
};

const SkillsSection = ({ id }: Props) => {
  return (
    <div css={skillsSectionStyles} id={id}>
      <h2 className="title">Skills</h2>
      <div className="content"></div>
    </div>
  );
};

export default SkillsSection;
