import { experiences } from "@constants/data/experience";
import { css } from "@emotion/react";
import { black, colors } from "@styles/colors";
import { flex, lgScreen, SvgContainer } from "@styles/index";

const styles = css`
  ${flex({ gap: [15], column: true })}
  > .title {
    color: ${colors.brown};
    font-family: var(--oswald-font);
    letter-spacing: 1px;
    line-height: 18px;
    font-size: 18px;
  }
`;

const sectionStyles = css`
  ${flex({ gap: [10], column: true })}
  >.name {
    color: ${black[0]};
  }
`;

const CompactExperience = () => {
  return (
    <div css={styles}>
      <div className="title">EXPERIENCE</div>
      {experiences.map((exp) => (
        <div css={sectionStyles}>
          <div className="name">
            <span>{exp.company}</span>
            <SvgContainer></SvgContainer>
          </div>
          {exp.positions.map((pos) => (
            <PositionsRow position={pos} />
          ))}
        </div>
      ))}
    </div>
  );
};

const expRowStyles = css`
  ${flex({ gap: [10] })}
  color: ${black[1]};
  font-size: 12px;

  > .time {
    margin-left: auto;
  }

  ${lgScreen} {
    font-size: 14px;
  }
`;

const PositionsRow = ({
  position,
}: {
  position: (typeof experiences)[number]["positions"][number];
}) => {
  return (
    <div css={expRowStyles}>
      <div>-</div>
      <div>{position.designation}</div>
      <div className="time">{position.duration}</div>
    </div>
  );
};

export default CompactExperience;
