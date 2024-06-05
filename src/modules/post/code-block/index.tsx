import { SnippetType } from "../types";
import { codeStyles, containerStyles, descriptionStyles } from "./styles";

type Props = {
  snippet: SnippetType;
};

const CodeBlock = ({ snippet }: Props) => {
  const { highlightedCode, description } = snippet;

  return (
    <div css={containerStyles}>
      <div css={descriptionStyles}>
        {typeof description === "string" && <div>{description}</div>}
        {typeof description === "object" &&
          description.map((desc, idx) => (
            <div key={idx} dangerouslySetInnerHTML={{ __html: desc }} />
          ))}
      </div>
      <div css={codeStyles}>
        <pre>
          <code
            dangerouslySetInnerHTML={{
              __html: highlightedCode,
            }}
          />
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;
