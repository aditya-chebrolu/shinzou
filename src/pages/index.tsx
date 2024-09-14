import { css } from "@emotion/react";
import DeveloperResourcesCta from "@modules/home/dev-stuff";
import PortfolioMeta from "@modules/home/meta";
import { minWidth } from "@styles/index";
import ExperienceSection from "@modules/home/exp";
import SkillsSection from "@modules/home/skills-section";
import Header from "@modules/home/header";
import { useRef } from "react";
import { useScroll } from "framer-motion";
import Art from "@modules/home/art";
import { Spacer } from "@styles/spacer";
import { PageWrapper } from "@styles/layout-styles";
import cx from "classnames";
import Contact from "@modules/home/contact";
import Quote from "@modules/home/quote";

const styles = css`
  background: var(--dotted-bg);
  background-size: 17px 17px;
  min-height: 100dvh;
  contain: paint;

  display: grid;
  grid-template-columns: 20px 1fr 20px;
  grid-template-areas:
    "head head head"
    ". exp ."
    ". skills ."
    "dev dev dev"
    ". icons ."
    "x x x"
    "q q q";
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

  #dev {
    grid-area: dev;
  }

  #art {
    grid-area: art;
  }

  #icons {
    grid-area: icons;
    display: flex;
    margin-bottom: 30px;
    gap: 30px;
    align-items: center;
  }

  #q {
    grid-area: q;
  }

  ${minWidth()} {
    grid-template-columns: 27% 1fr 27%;
    row-gap: 50px;
    padding-top: 0px;

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

const stickyStyles = css`
  position: sticky;
  top: 0;
  z-index: 100;
`;

const components = [
  { Component: Header, isFull: true, unWrap: true, id: "header" },
  { Component: ExperienceSection },
  { Component: SkillsSection },
  { Component: DeveloperResourcesCta, isFull: true },
  { Component: Contact },
  { Component: () => <Spacer h="100px" /> },
  { Component: Art },
];

const Page = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  return (
    <>
      <PortfolioMeta />
      <PageWrapper ref={containerRef}>
        <div css={stickyStyles} className="full">
          <Header scrollY={scrollY} />
        </div>
        <ExperienceSection />
        <SkillsSection />
        <DeveloperResourcesCta />
        <Contact />
        <Spacer h="100px" />
        <Quote />
        <Art />
      </PageWrapper>
    </>
  );
};

export default Page;
