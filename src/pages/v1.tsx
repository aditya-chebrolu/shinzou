import { css } from "@emotion/react";
import Blogs from "@modules/v1/blogs";
import Cheatsheets from "@modules/v1/cheatsheets";
import Details from "@modules/v1/details";
import Experience from "@modules/v1/exp";
import Projects from "@modules/v1/projects";
import Skills from "@modules/v1/skills";
import Switch from "@modules/v1/switch";
import { flex, lgScreen } from "@styles/index";

const styles = css`
  position: relative;

  > .wrapper {
    margin: 15px;
    ${flex({ column: true, gap: [20, 50] })};
  }

  ${lgScreen} {
    > .wrapper {
      margin: 70px 15%;
    }
  }
`;

const sectionStyles = css`
  ${flex({ gap: [20, 50], column: true })};

  > .left,
  > .right {
    ${flex({ column: true, gap: [20, 50] })};
    flex-basis: auto;
  }
  ${lgScreen} {
    flex-direction: row;
    > .left {
      flex-basis: 70%;
    }
    > .right {
      flex-basis: 30%;
    }
  }
`;

const Page = () => {
  return (
    <div css={styles}>
      <div className="wrapper">
        <Switch />
        <Details />
        <Skills />
        <div css={sectionStyles}>
          <div className="left">
            <Experience />
            <Projects />
          </div>
          <div className="right">
            <Cheatsheets />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
