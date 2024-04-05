import { css, SerializedStyles } from "@emotion/react";
import { flex, lgScreen } from "@styles/index";
import { ReactNode } from "react";

const styles = css`
  ${flex({ column: true, gap: 20, align: "center" })};
  padding-inline: 10px;

  > .title {
    font-weight: bold;
    font-size: 44px;
    letter-spacing: 1px;
    font-family: var(--oswald-font);
  }

  ${lgScreen} {
    align-items: start;
    padding: 0;
  }
`;

const SectionWrapper = ({
  title,
  children,
  customCss,
}: {
  title?: string;
  children: ReactNode;
  customCss?: SerializedStyles;
}) => {
  return (
    <div css={[styles, customCss]}>
      {title && <div className="title">{title}</div>}
      {children}
    </div>
  );
};

export default SectionWrapper;
