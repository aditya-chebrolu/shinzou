import { ReactNode } from "react";
import { containerStyles, headerStyles, menuStyles } from "./styles";
import UnderlinedText from "@components/underlined-text";
import Link from "next/link";
import { Sizes } from "@components/underlined-text/styles";

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
      <div>
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
          <Link href="/tags" className="links tags">
            All Tags
          </Link>
          <Link href="/posts" className="links posts">
            All Posts
          </Link>
        </div>
      </div>
      <div className="content">{children}</div>
    </div>
  );
};

export default PageWrapper;
