import { ReactNode } from "react";
import {
  containerStyles,
  headerStyles,
  menuStyles,
  portfolioButton,
} from "./styles";
import UnderlinedText from "@components/underlined-text";
import Link from "next/link";
import { Sizes } from "@components/underlined-text/styles";
import { SvgContainer } from "@styles/index";
import Icon from "@assets/chevron-right-duo.svg";
const PageWrapper = ({
  headerData,
  children,
}: {
  headerData: {
    title: string;
    allTags?: boolean;
    allPosts?: boolean;
    titleLineColor?: string;
    size?: Sizes;
  };
  children: ReactNode;
}) => {
  return (
    <div css={containerStyles}>
      <div css={headerStyles}>
        <UnderlinedText
          text={headerData.title}
          type="h1"
          size={headerData.size || "md"}
          color="#FFFFFF"
          lineColor={headerData.titleLineColor || "#FB607F"}
        />
      </div>
      <div css={menuStyles}>
        <Link href="/posts" className="link">
          All Posts
        </Link>
        <Link href="/resources" className="link">
          Resources
        </Link>
        <Link href="/tags" className="link">
          All Tags
        </Link>
        <Link href="/" className="text" css={portfolioButton}>
          Aditya Chebrolu
        </Link>
      </div>
      <div className="content">{children}</div>
    </div>
  );
};

export default PageWrapper;
