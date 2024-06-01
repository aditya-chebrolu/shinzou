import { sectionContainerStyles, subSectionContainerStyles } from "./styles";
import { CheatSheetSectionType } from "../types";
import CodeBlock from "../code-block";

export const Content = ({ data }: { data: CheatSheetSectionType }) => {
  return (
    <div css={sectionContainerStyles}>
      {data.sections.map((section, idx) => (
        <CheatSheetSection {...section} key={idx} />
      ))}
    </div>
  );
};

const CheatSheetSection = ({
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

export default Content;
