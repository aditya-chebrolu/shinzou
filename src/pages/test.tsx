import { css, keyframes } from "@emotion/react";
import DeveloperResourcesCta from "@modules/home/dev-stuff";
import PortfolioMeta from "@modules/home/meta";
import { minWidth, noScrollbar, SvgContainer } from "@styles/index";
import ExperienceSection from "@modules/home/exp";
import SkillsSection from "@modules/home/skills-section";
import { socials } from "@constants/socials";
import ResumeButton from "@modules/home/resume-button";
import Header from "@modules/home/header-copy";
import { forwardRef, useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion";

const anim = keyframes` 
  to {
    background-position: 100% 0;
  }
`;

const styles = css`
  /* min-height: 100dvh; */
  background-image: var(--dotted-bg);
  background-size: 17px 17px;
  overflow: hidden;
  /* overflow-y: scroll; */
  /* height: 100dvh; */

  .wrapper {
    display: grid;
    grid-template-columns: 20px 1fr 20px;
    grid-template-rows: repeat(4, auto);

    grid-template-areas:
      "head head head"
      ". exp ."
      ". skills ."
      "dev dev dev";
    row-gap: 30px;

    overflow-x: hidden;
    height: 100vh;
    ${noScrollbar}

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
      background: url("pattern.png");
      background-position: center;
      background-repeat: repeat;
      background-size: contain;
      animation: ${anim} 10s linear infinite;

      box-shadow: 0 20px 10px -20px rgba(0, 0, 0, 1) inset,
        0 -20px 10px -20px rgba(0, 0, 0, 1) inset,
        20px 0 10px -20px rgba(0, 0, 0, 1) inset;
    }

    > .icons {
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
        /* grid-row: 2/3;
        grid-column: 2/4; */
        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      > .icons {
        gap: 40px;
      }
    }
  }
`;

const Page = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({ container: containerRef });
  console.log(scrollY);
  return (
    <>
      <PortfolioMeta />
      <div css={styles}>
        <div className="wrapper" ref={containerRef}>
          <Header id="header" scrollY={scrollY} />
          <CompX xref={containerRef} />
          <motion.div
            style={{
              height: 200,
              width: scrollY,
              background: "blue",
            }}
          />
          <div style={{ height: 200, background: "blue" }} />
          <div style={{ height: 200, background: "blue" }} />
          <div style={{ height: 200, background: "blue" }} />
          <div style={{ height: 200, background: "blue" }} />
          <div style={{ height: 200, background: "blue" }} />
          <div style={{ height: 200, background: "blue" }} />
        </div>
      </div>
    </>
  );
};

const CompX = (p: any) => {
  const { scrollY } = useScroll({ container: p.xref });
  console.log(p.xref);

  return (
    <motion.div
      style={{ height: 200, width: scrollY.get(), background: "blue" }}
    />
  );
};

export default Page;
