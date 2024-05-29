import { SnippetType } from "../types";
import { containerStyles } from "./styles";

type Props = {
  snippet: SnippetType;
};

const CodeBlock = ({ snippet }: Props) => {
  const { highlightedCode, description } = snippet;
  return (
    <div css={containerStyles}>
      <div className="desc">{description}</div>
      <div className="code">
        <pre>
          <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;
