import { css } from "@emotion/react";
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

  > .content {
    color: red;
  }
`;

const SectionWrapper = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <div css={styles}>
      <div className="title">{title}</div>
      {children}
    </div>
  );
};

export default SectionWrapper;
