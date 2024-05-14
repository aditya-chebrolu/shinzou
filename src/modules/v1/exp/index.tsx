import UnderlinedText from "@components/underlined-text";
import { experiences } from "@constants/data/experience";
import { flex } from "@styles/index";
import { experienceStripStyles } from "./styles";

const Experience = () => {
  return (
    <div css={flex({ column: true, gap: [10, 20] })}>
      <UnderlinedText text="Experience" />
      <div css={flex({ column: true, gap: [5, 10] })}>
        {experiences.map((exp) => (
          <div css={experienceStripStyles}>
            <div className="row">
              <UnderlinedText
                text={exp.company}
                size="xs"
                color="var(--title)"
                lineColor="var(--title-line)"
              />
              <div className="duration">{exp.duration}</div>
            </div>
            {exp.positions.map((pos) => (
              <div className="pos">
                <div className="title">{pos.designation}</div>
                <div className="duration">{pos.duration}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
