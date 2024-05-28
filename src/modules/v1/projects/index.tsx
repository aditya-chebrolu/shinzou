import UnderlinedText from "@components/underlined-text";
import { flex, SvgContainer } from "@styles/index";
import LinkIcon from "@assets/link.svg";
import { titleStyles } from "./styles";
import { projects } from "@modules/v0/projects/data";

const Projects = () => {
  return (
    <div css={flex({ gap: [10, 20], column: true })}>
      <UnderlinedText text="Projects" type="h2" />
      <div css={flex({ gap: [10, 20], column: true })}>
        {projects.map((project) => (
          <a css={titleStyles} href={project.url} key={project.title}>
            <UnderlinedText
              text={project.title}
              color="var(--title)"
              lineColor="var(--title-line)"
              size="xs"
              type="h4"
            />
            <SvgContainer
              h={{ dweb: 20, mweb: 18 }}
              stroke="var(--title)"
              className="icon"
            >
              <LinkIcon />
            </SvgContainer>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
