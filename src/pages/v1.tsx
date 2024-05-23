import { css } from "@emotion/react";
// import Blogs from "@modules/v1/blogs";
import Cheatsheets from "@modules/v1/cheatsheets";
import Details from "@modules/v1/details";
import Experience from "@modules/v1/exp";
import Footer from "@modules/v1/footer";
import Projects from "@modules/v1/projects";
import Skills from "@modules/v1/skills";
import { flex, lgScreen } from "@styles/index";

const styles = css`
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
        <Footer />
      </div>
    </div>
  );
};

export default Page;
