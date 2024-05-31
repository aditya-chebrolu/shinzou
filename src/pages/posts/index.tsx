import UnderlinedText from "@components/underlined-text";
import { containerStyles, headerStyles } from "@modules/posts/styles";
import path from "path";
import fs from "fs";
import { ArchiveType } from "@modules/posts/types";
import PostsList from "@components/posts-list";
import Link from "next/link";

const Archives = ({ data }: ReturnType<typeof getServerSideProps>["props"]) => {
  return (
    <div css={containerStyles}>
      <div css={headerStyles}>
        <UnderlinedText
          text="Posts"
          type="h1"
          size="md"
          color="#FFFFFF"
          lineColor="#FB607F"
        />
        <Link href="/tags" className="links tags">
          All Tags
        </Link>
      </div>
      <div className="content">
        <PostsList data={data} />
      </div>
    </div>
  );
};

export const getServerSideProps = () => {
  const filePath = path.join(
    process.cwd(),
    "src",
    "constants",
    "data",
    "cheatsheets",
    `archives.json`
  );
  let data: ArchiveType[] = [];
  try {
    const fileContents = fs.readFileSync(filePath, "utf8");
    data = JSON.parse(fileContents);
    return {
      props: { data },
    };
  } catch {
    return {
      props: { data },
    };
  }
};

export default Archives;
