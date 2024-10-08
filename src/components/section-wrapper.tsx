import { css, SerializedStyles } from "@emotion/react";
import { colors } from "@styles/colors";
import { flex, minWidth } from "@styles/index";
import { ReactNode } from "react";

const styles = css`
  ${flex({ column: true, gap: [20], align: "center" })};
  padding-inline: 10px;
  > .title {
    font-weight: bold;
    font-size: 44px;
    letter-spacing: 1px;
    color: ${colors.yellow};

    &::first-letter {
      color: ${colors.blue};
    }

    &::selection {
      color: ${colors.blue};
    }
  }

  ${minWidth()} {
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
