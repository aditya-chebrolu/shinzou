import { type ExperienceType } from "@constants/data/experience";
import { SvgContainer } from "@styles/index";
import {
  experienceStripStyles,
  positionsStyles,
  titleRowStyles,
} from "./styles";

type Props = {
  experience: ExperienceType;
};

const ExperienceStrip = ({ experience }: Props) => {
  const Icon = experience.Icon;
  return (
    <div css={experienceStripStyles}>
      <div css={titleRowStyles}>
        <SvgContainer h={{ dweb: 30, mweb: 25 }} className="icon">
          <Icon />
        </SvgContainer>
        <h2>{experience.company}</h2>
      </div>
      <div css={positionsStyles}>
        {experience.positions.map((position, idx) => (
          <div key={idx} className="pos">
            <div className="date">{position.designation.startDate}</div>
            <div className="role">{position.designation.long}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceStrip;
