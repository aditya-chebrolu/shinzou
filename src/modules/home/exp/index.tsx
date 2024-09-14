import { experiences } from "@constants/data/experience";
import ExperienceStrip from "./experience-strip";
import { experienceSectionStyles } from "./styles";
import UnderlinedText from "@components/underlined-text";

const ExperienceSection = () => {
  return (
    <div css={experienceSectionStyles}>
      <UnderlinedText text="Work Experience" type="h2" size="md" hideLine />
      <div className="content">
        {experiences.map((exp, idx) => (
          <ExperienceStrip key={idx} experience={exp} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
