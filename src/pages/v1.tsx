import { css } from "@emotion/react";
import CheatSheets from "@modules/v1/cheatsheets";
import Details from "@modules/v1/details";
import Experience from "@modules/v1/exp";
import ResumeButton from "@modules/v1/resume-button";
import PortfolioMeta from "@modules/v1/meta";
import Projects from "@modules/v1/projects";
import Skills from "@modules/v1/skills";
import { flex, minWidth, maxWidth } from "@styles/index";

const styles = css`
  background-image: var(--dotted-bg);
  background-size: 17px 17px;
  > .wrapper {
    ${flex({ column: true })}
    min-height: 100dvh;

    > .row2 {
      margin-top: 50px;
      flex: 1;
      ${flex({ column: true, gap: [50] })}
    }
  }

  > .wrapper {
    ${maxWidth()} {
      > .row1 {
        position: sticky;
        top: 0;
        padding: 20px;
        background-color: #ffbf00;
      }

      > .row2 {
        margin-top: 0px;
        padding: 20px;
        isolation: isolate;
        z-index: 1;
        box-shadow: 0 0 6px;
        background-image: var(--dotted-bg);
        background-size: 17px 17px;
      }
    }
  }

  ${minWidth()} {
    > .wrapper {
      padding-block: 50px;
      margin-inline: 22%;
    }
  }
`;

const Page = () => {
  return (
    <>
      <PortfolioMeta />
      <div css={styles}>
        <div className="wrapper">
          <div className="row1">
            <Details />
          </div>
          <div className="row2">
            <Skills />
            <Experience />
            <CheatSheets />
            <Projects />
            <ResumeButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
