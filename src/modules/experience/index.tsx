import { experience } from "@constants/data/experience";
import ExperienceSummaryStrip from "./components/experience-summary-strip";
import {
  dialogStyles,
  positionsContainerStyles,
  positionSectionStyles,
  techStackRowStyles,
} from "./components/experience-summary-strip/styles";
import { useState } from "react";
import { Dialog } from "@mui/material";
import { Card, SvgContainer } from "@styles/index";
import PlanetIcon from "@assets/planet.svg";
import { sectionStyles } from "./styles";

const ExperienceSection = () => {
  const [idx, setIdx] = useState<number>(-1);
  const isDialogOpen = idx >= 0;
  return (
    <>
      <div css={sectionStyles}>
        <div className="title">EXPERIENCE</div>
        <div className="content">
          {experience.map((exp, idx) => (
            <ExperienceSummaryStrip
              summary={exp.summary}
              onClick={() => setIdx(idx)}
            />
          ))}
        </div>
      </div>
      <Dialog open={isDialogOpen} css={dialogStyles} onClose={() => setIdx(-1)}>
        <Content exp={experience[idx]} />
      </Dialog>
    </>
  );
};

const Content = ({ exp }: { exp: (typeof experience)[number] }) => {
  if (!exp) return null;
  const { techStack, summary, positions } = exp;

  return (
    <>
      <ExperienceSummaryStrip summary={summary} />
      <Card css={techStackRowStyles}>
        <div className="title">Tech stack</div>
        <div className="content">
          {techStack.map(({ text, Icon }, idx) => (
            <div className="capsule">
              <SvgContainer h={{ dweb: 12, mweb: 15 }}>
                <Icon />
              </SvgContainer>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </Card>
      <Card css={positionsContainerStyles}>
        {positions.map((pos, idx) => (
          <div css={positionSectionStyles} key={idx}>
            <div className="header">
              <span className="left">{pos.designation}</span>
              <span className="right">{pos.duration}</span>
            </div>
            {pos.points.map((point, idx) => (
              <div className="point">
                <div className="left">
                  <SvgContainer
                    h={{ dweb: 14, mweb: 12 }}
                    className="icon"
                    style={{ animationDelay: `${idx * 2000}ms` }}
                  >
                    <PlanetIcon />
                  </SvgContainer>
                  <div className="line" />
                </div>
                <div className="right">{point}</div>
              </div>
            ))}
          </div>
        ))}
      </Card>
    </>
  );
};

export default ExperienceSection;
