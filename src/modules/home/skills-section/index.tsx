import { icons, SkillsType } from "@constants/icons";
import { rowStyles, skillsSectionStyles } from "./styles";
import { SvgContainer } from "@styles/index";
type Props = {
  id: string;
};

const SkillsSection = ({ id }: Props) => {
  const data: { title: string; skills: SkillsType[] }[] = [
    {
      title: "Languages",
      skills: ["javascript", "typescript", "java"],
    },
    { title: "Frameworks", skills: ["next", "nest", "springBoot", "astro"] },
    { title: "Storage", skills: ["redis", "mongo"] },
    { title: "Devops", skills: ["azure", "kubernetes", "docker"] },
  ];

  return (
    <div css={skillsSectionStyles} id={id}>
      <h2 className="title">Skills</h2>
      <div className="content">
        {data.map((e, idx) => (
          <IconsRow {...e} key={idx} />
        ))}
      </div>
    </div>
  );
};

const IconsRow = ({
  skills,
  title,
}: {
  skills: SkillsType[];
  title: string;
}) => {
  return (
    <div css={rowStyles}>
      <div className="title">{title}</div>
      <div className="skills">
        {skills.map((skill) => (
          <Skill key={skill} skill={skill} />
        ))}
      </div>
    </div>
  );
};

const Skill = ({ skill }: { skill: SkillsType }) => {
  const Icon = icons[skill].Icon;
  return (
    <SvgContainer h={{ mweb: 25, dweb: 30 }} className="icon">
      <Icon />
    </SvgContainer>
  );
};

export default SkillsSection;
