import DottedCard from "@components/dotted-card";
import { css } from "@emotion/react";
import CompactExperience from "@modules/v0/experience/compact";
import CompactIntro from "@modules/intro/compact";
import CompactSkills from "@modules/v0/skills/compact";
import { black, colors } from "@styles/colors";
import { Divider, flex, lgScreen } from "@styles/index";

const styles = css`
  display: grid;
  place-items: center;
  overflow: hidden;
  height: 100dvh;
  padding: 20px;

  > .content {
    ${flex({ gap: [15], column: true })};
    width: min(100%, 600px);
  }

  ${lgScreen} {
    padding: 0;
    height: 100vh;
  }
`;

const CompactView = () => {
  return (
    <div css={styles}>
      <div className="content">
        <CompactIntro />
        <Divider />
        <CompactExperience />
        <Divider />
        <CompactSkills />
        <Divider />
      </div>
    </div>
  );
};

const Name = () => {
  return;
};

export default CompactView;
