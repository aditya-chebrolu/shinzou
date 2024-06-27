import { icons, type SkillsType } from "@constants/icons";
import { SvgContainer } from "@styles/index";
import { containerStyles, rowStyles } from "./styles";
import UnderlinedText from "@components/underlined-text";

const Skills = () => {
  const rows: SkillsType[][] = [
    ["java", "javascript", "ts", "bash"],
    ["html", "css", "tailwind"],
    ["react", "next", "webpack", "reactQuery"],
    ["node", "nest", "ec2", "redis"],
    ["docker", "kubernetes", "azure"],
  ];

  return (
    <div css={containerStyles}>
      <UnderlinedText text="Skills" type="h2" />
      <div className="content">
        {rows.map((row, idx) => (
          <Row row={row} key={idx} />
        ))}
      </div>
    </div>
  );
};

const Row = ({ row }: { row: SkillsType[] }) => {
  return (
    <div css={rowStyles}>
      {row.map((skill) => (
        <Skill key={skill} skill={skill} />
      ))}
    </div>
  );
};

const Skill = ({ skill }: { skill: SkillsType }) => {
  const Icon = icons[skill].Icon;
  return (
    <SvgContainer h={{ mweb: 25, default: 35 }}>
      <Icon />
    </SvgContainer>
  );
};

export default Skills;
