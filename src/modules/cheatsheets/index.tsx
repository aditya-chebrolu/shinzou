import SectionWrapper from "@components/section-wrapper";
import { cheatSheetStripStyles, containerStyles } from "./styles";

const data = [
  {
    tags: ["css"],
    title: "CSS code snippets",
  },
];

const CheatSheets = () => {
  return (
    <SectionWrapper title="CHEATSHEETS">
      <div css={containerStyles}>
        {data.map((obj) => (
          <div css={cheatSheetStripStyles}>
            <div>{obj.tags[0]}</div>
            <div>{obj.title}</div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default CheatSheets;
