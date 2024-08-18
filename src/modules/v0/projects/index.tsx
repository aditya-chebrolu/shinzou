import SectionWrapper from "@components/section-wrapper";
import { containerStyles, projectCardStyles } from "./styles";
import { Card, SvgContainer } from "@styles/index";
import { projects } from "./data";
import LinkIcon from "@assets/link.svg";
import { colors } from "@styles/colors";

const ProjectsSection = () => {
  return (
    <SectionWrapper title="PROJECTS">
      <div css={containerStyles}>
        {projects.map((project, idx) => (
          <ProjectCard project={project} key={idx} />
        ))}
      </div>
    </SectionWrapper>
  );
};

const ProjectCard = ({ project }: { project: (typeof projects)[number] }) => {
  const { title, url, description } = project;
  return (
    <Card css={projectCardStyles}>
      <div className="header">
        <div className="title">{title}</div>
        <a href={url}>
          <SvgContainer h={18} stroke={colors.brown}>
            <LinkIcon />
          </SvgContainer>
        </a>
      </div>
      <div className="content">
        {description[0].map((e, idx) => {
          if (typeof e === "string") return e;
          return (
            <div key={idx} className="chip">
              <SvgContainer h={13} stroke={colors.brown}>
                <e.Icon />
              </SvgContainer>
              <div className="label">{e.text}</div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default ProjectsSection;
