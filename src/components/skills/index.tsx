import { IconKeys, icons, technologies as techList } from "@constants/icons";
import { SvgContainer } from "@styles/index";
import { containerStyles } from "./styles";

const Skills = ({
  technologies = techList,
  id,
}: {
  technologies?: IconKeys[];
  id: string;
}) => {
  return (
    <div css={containerStyles} id={id}>
      {technologies.map((tech, idx) => {
        const { Icon, text } = icons[tech];
        return (
          <div key={idx} className="tech">
            <SvgContainer h={20}>
              <Icon />
            </SvgContainer>
            <div>{text}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
