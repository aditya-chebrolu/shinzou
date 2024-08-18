import { css } from "@emotion/react";
import DeveloperResourcesCta from "@modules/home/dev-stuff";
import Details from "@modules/home/details";
import Experience from "@modules/home/exp";
import ResumeButton from "@modules/home/resume-button";
import PortfolioMeta from "@modules/home/meta";
// import Projects from "@modules/home/projects";
import Skills from "@modules/home/skills";
import { flex, minWidth, maxWidth } from "@styles/index";
import { ReactNode } from "react";

const styles = css`
  min-height: 100dvh;
  background-image: var(--dotted-bg);
  background-size: 17px 17px;

  .wrapper {
    display: grid;
    grid-template-columns: 20px 1fr 20px;
    padding-block: 20px;
    row-gap: 40px;

    > div {
      grid-column: 2;
    }

    .resources {
      grid-column: 1 / -1;
      background: #003262;
      padding: 25px 20px;
    }

    ${minWidth()} {
      /* grid-template-columns: 1fr 50% 1fr; */
      grid-template-columns: 27% 1fr 27%;
      padding-block: 50px;
      row-gap: 50px;

      .resources {
        padding: 25px 27%;
      }
    }
  }
`;

const Page = () => {
  const sections: { [key: string]: () => ReactNode } = {
    details: Details,
    skills: Skills,
    experience: Experience,
    resources: DeveloperResourcesCta,
    resume: ResumeButton,
  };
  return (
    <>
      <PortfolioMeta />
      <div css={styles}>
        <div className="wrapper">
          {Object.keys(sections).map((section) => {
            const Section = sections[section];
            return (
              <div className={section} key={section}>
                <Section />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Page;
