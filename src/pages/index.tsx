import { css, keyframes } from "@emotion/react";
import DeveloperResourcesCta from "@modules/home/dev-stuff";
import PortfolioMeta from "@modules/home/meta";
import { minWidth, SvgContainer } from "@styles/index";
import ExperienceSection from "@modules/home/exp";
import SkillsSection from "@modules/home/skills-section";
import { socials } from "@constants/socials";
import ResumeButton from "@modules/home/resume-button";
import Header from "@modules/home/header";
import { useRef } from "react";
import { useScroll } from "framer-motion";

const anim = keyframes` 
  to {
    background-position: 100% 0;
  }
`;

const styles = css`
  background: var(--dotted-bg);
  background-size: 17px 17px;
  min-height: 100dvh;
  contain: paint;

  display: grid;
  grid-template-columns: 20px 1fr 20px;
  grid-template-rows: repeat(4, max-content);
  grid-template-areas:
    "head head head"
    ". exp ."
    ". skills ."
    "dev dev dev"
    ". icons .";
  row-gap: 30px;

  > div {
    grid-column: 2/3;
  }

  #header {
    grid-area: head;
  }

  #exp {
    grid-area: exp;
  }

  #skills {
    grid-area: skills;
  }

  .resources {
    grid-area: dev;
    padding: 25px 20px;
    position: relative;
    overflow: hidden;

    > .bg {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 200px;
      background: url("pattern.png");
      background-position: center;
      background-repeat: repeat;
      background-size: contain;
      animation: ${anim} 10s linear infinite;

      box-shadow: 0 20px 10px -20px rgba(0, 0, 0, 1) inset,
        0 -20px 10px -20px rgba(0, 0, 0, 1) inset,
        20px 0 10px -20px rgba(0, 0, 0, 1) inset;
    }

    > .bg + div {
      isolation: isolate;
    }
  }

  #icons {
    display: flex;
    margin-bottom: 30px;
    gap: 30px;
  }

  ${minWidth()} {
    grid-template-columns: 27% 1fr 27%;
    row-gap: 50px;
    padding-top: 0px;

    .resources {
      padding: 25px 27%;
    }

    > .content {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    > .icons {
      gap: 40px;
    }
  }
`;

const Page = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  return (
    <>
      <PortfolioMeta />
      <div css={styles} ref={containerRef}>
        <Header id="header" scrollY={scrollY} />
        <ExperienceSection id="exp" />
        <SkillsSection id="skills" />
        <div className="resources">
          <div className="bg" />
          <DeveloperResourcesCta />
        </div>
        <div id="icons">
          {socials.map(({ href, Icon }, idx) => (
            <a href={href} key={idx}>
              <SvgContainer h={30} fill="#2A3439">
                <Icon />
              </SvgContainer>
            </a>
          ))}
          <ResumeButton />
        </div>
      </div>
    </>
  );
};

export default Page;
