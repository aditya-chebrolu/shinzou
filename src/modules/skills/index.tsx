import { contentStyles, techSetStyles } from "./styles";
import NextIcon from "@assets/tech/nextjs2.svg";
import NestIcon from "@assets/tech/nestjs.svg";
import JSIcon from "@assets/tech/js.svg";
import JavaIcon from "@assets/tech/java.svg";
import TSIcon from "@assets/tech/typescript.svg";
import ReactIcon from "@assets/tech/reactjs.svg";
import HTMLIcon from "@assets/tech/html5.svg";
import CSSIcon from "@assets/tech/css3.svg";
import NodeIcon from "@assets/tech/nodejs.svg";
import TailwindIcon from "@assets/tech/tailwindcss.svg";
import MongoIcon from "@assets/tech/mongo.svg";
import { Card } from "@styles/index";
import SectionWrapper from "@components/section-wrapper";

const sections = [
  {
    pos: [1, 1, 2, 4],
    icons: [
      <HTMLIcon key={1} />,
      <CSSIcon key={2} />,
      <TailwindIcon key={3} />,
    ],
  },
  {
    pos: [1, 4, 2, 5],
    icons: [],
  },
  {
    pos: [2, 1, 5, 2],
    icons: [<JSIcon key={1} />, <TSIcon key={2} />, <JavaIcon key={3} />],
    vertical: true,
  },
  {
    pos: [2, 2, 4, 3],
    icons: [],
  },
  {
    pos: [2, 3, 3, 5],
    icons: [<NextIcon key={1} />, <NestIcon key={2} />],
  },
  {
    pos: [3, 3, 4, 4],
    icons: [<ReactIcon key={1} />],
  },
  {
    pos: [4, 2, 5, 3],
    icons: [<NodeIcon key={1} />],
  },
  {
    pos: [3, 4, 4, 5],
    icons: [],
  },
  {
    pos: [4, 3, 5, 4],
    icons: [],
  },
  {
    pos: [4, 4, 5, 5],
    icons: [<MongoIcon key={1} />],
  },
];

const SkillsSectionStyles = () => {
  return (
    <SectionWrapper title="SKILLS">
      <div css={contentStyles}>
        {sections.map((section, idx) => (
          <Card css={techSetStyles(section.pos, section.vertical)} key={idx}>
            {section.icons.map((e) => e)}
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default SkillsSectionStyles;
