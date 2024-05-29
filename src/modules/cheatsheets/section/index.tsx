import CodeBlock from "../code-block";
import { sectionContainerStyles, subSectionContainerStyles } from "./styles";
import { CheatSheetSectionType } from "../types";

const CheatSheetSection = ({ title, sections }: CheatSheetSectionType) => {
  return (
    <div css={sectionContainerStyles}>
      <div className="title">{title}</div>
      {sections.map((section, idx) => (
        <SubSection {...section} key={idx} />
      ))}
    </div>
  );
};

const SubSection = ({
  subtitle,
  snippets,
}: CheatSheetSectionType["sections"][number]) => {
  return (
    <div css={subSectionContainerStyles}>
      <div className="title">{subtitle}</div>
      {snippets.map((snippet, idx) => (
        <CodeBlock snippet={snippet} key={idx} />
      ))}
    </div>
  );
};

export default CheatSheetSection;
