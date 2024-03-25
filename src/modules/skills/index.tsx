import { sectionStyles, techSetStyles } from "./styles";
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

const sections = [
  {
    pos: [1, 1, 2, 4],
    icons: [<HTMLIcon />, <CSSIcon />, <TailwindIcon />],
  },
  {
    pos: [1, 4, 2, 5],
    icons: [],
  },
  {
    pos: [2, 1, 5, 2],
    icons: [<JSIcon />, <TSIcon />, <JavaIcon />],
    vertical: true,
  },
  {
    pos: [2, 2, 4, 3],
    icons: [],
  },
  {
    pos: [2, 3, 3, 5],
    icons: [<NextIcon />, <NestIcon />],
  },
  {
    pos: [3, 3, 4, 4],
    icons: [<ReactIcon />],
  },
  {
    pos: [4, 2, 5, 3],
    icons: [<NodeIcon />],
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
    icons: [<MongoIcon />],
  },
];

const SkillsSectionStyles = () => {
  return (
    <div css={sectionStyles}>
      <div className="title">SKILLS</div>
      <div className="content">
        {sections.map((section) => (
          <Card css={techSetStyles(section.pos, section.vertical)}>
            {section.icons.map((e) => e)}
          </Card>
        ))}
        {/* <Card css={techSetStyles()}>
          <NextIcon />
          <NestIcon />
        </Card>
        <Card css={techSetStyles(1, 3, 2, 4)}>
          <ReactIcon />
        </Card>
        <Card css={techSetStyles(2, 1, 3, 4)}>
          <JSIcon />
          <TSIcon />
          <JavaIcon />
        </Card>
        <Card css={techSetStyles(3, 1, 4, 2)}>
          <NodeIcon />
        </Card>
        <Card css={techSetStyles(3, 2, 4, 4)}>
          <HTMLIcon />
          <CSSIcon />
        </Card> */}
      </div>
    </div>
  );
};

export default SkillsSectionStyles;
