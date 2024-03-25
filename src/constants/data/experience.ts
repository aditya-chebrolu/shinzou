import BajajIcon from "@assets/bajaj.svg";
import NextIcon from "@assets/tech/nextjs2.svg";
import NestIcon from "@assets/tech/nestjs.svg";
import JSIcon from "@assets/tech/js.svg";
import TSIcon from "@assets/tech/typescript.svg";
import ReactIcon from "@assets/tech/reactjs.svg";
import HTMLIcon from "@assets/tech/html5.svg";
import CSSIcon from "@assets/tech/css3.svg";
import NodeIcon from "@assets/tech/nodejs.svg";

export const experience = [
  {
    summary: {
      designation: "SOFTWARE ENGINEER II",
      duration: "Jan 2022 - Present",
      Icon: BajajIcon,
    },
    techStack: [
      { Icon: JSIcon, text: "JS" },
      { Icon: TSIcon, text: "TS" },
      { Icon: ReactIcon, text: "React" },
      { Icon: NextIcon, text: "Next.js" },
      { Icon: NestIcon, text: "NestJS" },
      { Icon: NodeIcon, text: "Node.js" },
      { Icon: HTMLIcon, text: "HTML" },
      { Icon: CSSIcon, text: "CSS" },
    ],
    positions: [
      {
        designation: "SOFTWARE ENGINEER II",
        duration: "Oct 23 - Present",
        points: [
          "Led the seamless migration of our module from a mono repo architecture to a micro frontend architecture, liberating development releases from dependencies on other modules.",
          "Implemented branch validation, SonarQube integration, and tailored development pipelines, enhancing efficiency across UAT, Beta, and Production stages using YAML files.",
          "Reduced bugs through the creation of ELK dashboards, streamlining the identification of API failures for swift and efficient resolution.",
          "Mentored junior team members,providing guidance on development,fostering a collaborative and knowledge-sharing environment within the team.",
        ],
      },
      {
        designation: "SOFTWARE ENGINEER I",
        duration: "July 22 - Oct 23",
        points: [
          "Proficiently worked with React and Next.js frameworks to enhance website functionality and performance.",
          "Achieved a 45% reduction in Lines of Code by creating reusable components and logic, while significantly improving cognitive complexity and adhering to coding standards.",
          "Optimized UI/UX design, overhauled web pages, and enhanced overall accessibility for a more user-friendly online experience.",
          "Significantly enhanced SEO, propelling the website to a prominent position on the first page of Google search results.",
          "Developed multiple API endpoints, implementing robust business logic to enhance functionality and efficiency.",
          "Authored comprehensive test cases for each component, ensuring thorough evaluation and validation of system functionality.",
        ],
      },
    ],
  },
];
