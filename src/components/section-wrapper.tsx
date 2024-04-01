import { css, SerializedStyles } from "@emotion/react";
import { flex } from "@styles/index";
import { ReactNode } from "react";
import cn from "classnames";
const styles = css`
  ${flex({ column: true, gap: 20, align: "center" })};
  padding-inline: 10px;

  > .title {
    font-weight: bold;
    font-size: 24px;
    line-height: 24px;
    letter-spacing: 1px;
  }
`;

const x = css`
  min-height: 50vh;
`;

const SectionWrapper = ({
  title,
  children,
  customCss,
}: {
  title: string;
  children: ReactNode;
  customCss?: SerializedStyles;
}) => {
  return (
    <div css={[styles, customCss]}>
      <div className="title">{title}</div>
      {children}
    </div>
  );
};

export default SectionWrapper;
