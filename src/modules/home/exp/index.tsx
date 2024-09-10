import { experiences } from "@constants/data/experience";
import ExperienceStrip from "./experience-strip";
import { experienceSectionStyles } from "./styles";

type Props = {
  id: string;
};

const ExperienceSection = ({ id }: Props) => {
  return (
    <div css={experienceSectionStyles} id={id}>
      <h2 className="title">WorkEx</h2>
      <div className="content">
        {experiences.map((exp, idx) => (
          <ExperienceStrip key={idx} experience={exp} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
