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
import cn from "classnames";
import { useRouter } from "next/router";
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
  const { pathname } = useRouter();
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
        {/* <Link
          href="/posts"
          className={cn(["link", pathname === "/posts" && "active"])}
        >
          All Posts
        </Link> */}
        {/* <Link
          href="/resources"
          className={cn(["link", pathname === "/resources" && "active"])}
        >
          Resources
        </Link> */}
        <Link href="/" className="text" css={portfolioButton}>
          Portfolio
        </Link>
      </div>
      <div className="content">{children}</div>
    </div>
  );
};

export default PageWrapper;
