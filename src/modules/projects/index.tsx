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
  return (
    <Card css={projectCardStyles}>
      <div className="header">
        <div className="title">{project.title}</div>
        <SvgContainer h={{ default: 18 }} stroke={colors.brown}>
          <LinkIcon />
        </SvgContainer>
      </div>
      <div className="content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nulla
        commodi ipsa nihil tempore. Fugiat, pariatur cum. Nam exercitationem at
        corrupti error voluptates modi officia accusamus rem unde ullam.
        Asperiores.
      </div>
    </Card>
  );
};

export default ProjectsSection;
