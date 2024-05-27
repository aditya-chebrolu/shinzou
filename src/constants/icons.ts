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
import Ec2Icon from "@assets/tech/ec2.svg";
import SwiftIcon from "@assets/tech/swift.svg";

export const icons = {
  next: { Icon: NextIcon, text: "Next JS" },
  nest: { Icon: NestIcon, text: "Nest" },
  javascript: { Icon: JSIcon, text: "JavaScript" },
  ts: { Icon: TSIcon, text: "TypeScript" },
  java: { Icon: JavaIcon, text: "Java" },
  react: { Icon: ReactIcon, text: "React" },
  html: { Icon: HTMLIcon, text: "HTML" },
  css: { Icon: CSSIcon, text: "CSS" },
  node: { Icon: NodeIcon, text: "Node.js" },
  tailwind: { Icon: TailwindIcon, text: "Tailwind CSS" },
  mongo: { Icon: MongoIcon, text: "MongoDB" },
  ec2: { Icon: Ec2Icon, text: "Amazon EC2" },
  swift: { Icon: SwiftIcon, text: "Swift" },
};

export const pickIcons = (languages: (keyof typeof icons)[]) => {
  return languages.map((lang) => icons[lang]);
};
