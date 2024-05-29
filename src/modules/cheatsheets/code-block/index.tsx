import { useState } from "react";
import { SnippetType } from "../types";
import { codeStyles, containerStyles, descriptionStyles } from "./styles";

type Props = {
  snippet: SnippetType;
};

const CodeBlock = ({ snippet }: Props) => {
  const { highlightedCode, description, code } = snippet;
  // const [showAnim, setShowAnim] = useState(false);

  // const onCodeClick = () => {
  //   navigator.clipboard.writeText(code);
  //   setShowAnim(true);
  //   const to = setTimeout(() => {
  //     setShowAnim(false);
  //     clearTimeout(to);
  //   }, 7000);
  // };

  return (
    <div css={containerStyles}>
      <div css={descriptionStyles}>
        {typeof description === "string" && <div>{description}</div>}
        {typeof description === "object" &&
          description.map((desc, idx) => (
            <div key={idx} dangerouslySetInnerHTML={{ __html: desc }} />
          ))}
      </div>
      <div css={codeStyles(showAnim)}>
        <pre>
          <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;
