import { css } from "@emotion/react";
import CheatSheets from "@modules/v1/cheatsheets";
import Details from "@modules/v1/details";
import Experience from "@modules/v1/exp";
import Footer from "@modules/v1/footer";
import PortfolioMeta from "@modules/v1/meta";
import Projects from "@modules/v1/projects";
import Skills from "@modules/v1/skills";
import { flex, lgScreen } from "@styles/index";

const styles = css`
  background-image: var(--dotted-bg);
  background-size: 17px 17px;
  > .wrapper {
    ${flex({ column: true, gap: [20, 50] })}
    padding: 15px 15px 0;
    min-height: 100vh;
  }

  ${lgScreen} {
    > .wrapper {
      padding: 70px 0 0;
      margin-inline: 15%;
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
      flex-basis: 65%;
    }
    > .right {
      flex-basis: 35%;
    }
  }
`;

const Page = () => {
  return (
    <>
      <PortfolioMeta />
      <div css={styles}>
        <div className="wrapper">
          <Details />
          <Skills />
          <div css={sectionStyles}>
            <div className="left">
              <Experience />
              <Projects />
            </div>
            <div className="right">
              <CheatSheets />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Page;
