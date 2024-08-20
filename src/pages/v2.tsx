import { css, keyframes } from "@emotion/react";
import DeveloperResourcesCta from "@modules/home/dev-stuff";
import PortfolioMeta from "@modules/home/meta";
import { minWidth } from "@styles/index";
import UnderlinedText from "@components/underlined-text";
import ExperienceSection from "@modules/home/exp";
import SkillsSection from "@modules/home/skills-section";

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
    row-gap: 30px;
    overflow-x: hidden;

    > div {
      grid-column: 2/3;
    }

    #exp {
      grid-row: 2/3;
    }

    #skills {
      grid-row: 3/4;
    }

    .resources {
      grid-column: 1 / -1;
      padding: 25px 20px;
      background: url("pattern.png");
      background-position: center;
      background-repeat: repeat;
      background-size: contain;
      animation: ${anim} 10s linear infinite;

      box-shadow: 0 20px 10px -20px rgba(0, 0, 0, 1) inset,
        0 -20px 10px -20px rgba(0, 0, 0, 1) inset,
        20px 0 10px -20px rgba(0, 0, 0, 1) inset;
    }

    .details {
      grid-column: 2/3;
      grid-row: 1/2;
      font-size: 48px;
      font-weight: bold;
      text-align: center;

      grid-column: 1/-1;
      padding-block: 50px;
      background: url("pattern.png");
      background-position: center;
      background-repeat: repeat;
      background-size: contain;
      animation: ${anim} 10s linear infinite;
      box-shadow: 0 20px 10px -20px rgba(0, 0, 0, 0.7) inset,
        0 -20px 10px -20px rgba(0, 0, 0, 0.7) inset;
      border-radius: 0 0 90% 90%;
      margin-inline: -100px;
    }

    ${minWidth()} {
      grid-template-columns: 27% 1fr 27%;
      row-gap: 50px;
      padding-top: 0px;

      .resources {
        padding: 25px 27%;
      }

      > .content {
        grid-row: 2/3;
        grid-column: 2/4;
        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      .details {
        grid-column: 1/-1;
      }
    }
  }
`;

const Page = () => {
  return (
    <>
      <PortfolioMeta />
      <div css={styles}>
        <div className="wrapper">
          <div className="details">
            <UnderlinedText
              text="Aditya Chebrolu"
              type="h1"
              size="xl"
              color="white"
              showLine={false}
            />
          </div>
          <ExperienceSection id="exp" />
          <SkillsSection id="skills" />
          <div className="resources">
            <DeveloperResourcesCta />
          </div>
          {/* <div className="box"></div> */}
        </div>
      </div>
    </>
  );
};

export default Page;
