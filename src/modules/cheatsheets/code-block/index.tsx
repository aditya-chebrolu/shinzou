import { containerStyles } from "./styles";

type Props = {
  codeString: string;
  description: string;
};

const CodeBlock = ({ codeString, description }: Props) => {
  return (
    <div css={containerStyles}>
      <div className="desc">{description}</div>
      <div className="code">
        <pre>
          <code dangerouslySetInnerHTML={{ __html: codeString }} />
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;
