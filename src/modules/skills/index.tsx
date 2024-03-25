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
import { Card } from "@styles/index";

const SkillsSectionStyles = () => {
  return (
    <div css={sectionStyles}>
      <div className="title">SKILLS</div>
      <div className="content">
        <Card css={techSetStyles(1, 1, 2, 3)}>
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
        </Card>
      </div>
    </div>
  );
};

export default SkillsSectionStyles;
