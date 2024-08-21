import { css, keyframes } from "@emotion/react";
import DeveloperResourcesCta from "@modules/home/dev-stuff";
import Details from "@modules/home/details";
import Experience from "@modules/home/exp";
import PortfolioMeta from "@modules/home/meta";
import Skills from "@modules/home/skills";
import { minWidth } from "@styles/index";
import { ReactNode } from "react";

const anim = keyframes` 
  to {
    background-position: 100% 0;
  }
`;

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
      padding: 25px 20px;
      background: url("pattern.png");
      background-position: center;
      background-repeat: repeat;
      background-size: contain;
      animation: ${anim} 10s linear infinite;
    }

    ${minWidth()} {
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
  const sections: any = {
    details: Details,
    skills: Skills,
    experience: Experience,
    resources: DeveloperResourcesCta,
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
