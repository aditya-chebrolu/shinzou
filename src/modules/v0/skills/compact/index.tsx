import { icons } from "@constants/icons";
import { css } from "@emotion/react";
import { colors } from "@styles/colors";
import { flex, lgScreen, SvgContainer } from "@styles/index";

const styles = css`
  ${flex({ gap: [15], column: true })};

  > .title {
    color: ${colors.brown};
    font-family: var(--oswald-font);
    letter-spacing: 1px;
    line-height: 18px;
    font-size: 18px;
  }

  > .content {
    ${flex({ wrap: "wrap", gap: [10] })}
  }
`;

const CompactSkills = () => {
  return (
    <div css={styles}>
      <div className="title">SKILLS</div>
      <div className="content">
        {Object.values(icons).map(({ Icon, text }: any) => (
          <SvgContainer w={{ dweb: 30, mweb: 25 }} key={text}>
            <Icon />
          </SvgContainer>
        ))}
      </div>
    </div>
  );
};

export default CompactSkills;
