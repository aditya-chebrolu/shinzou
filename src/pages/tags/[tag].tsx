import { ArchiveType } from "@modules/posts/types";
import path from "path";
import fs from "fs";
import { GetServerSidePropsContext } from "next";
import PostsList from "@components/posts-list";
import UnderlinedText from "@components/underlined-text";
import { containerStyles, headerStyles } from "@modules/posts/styles";
import { useRouter } from "next/router";
import { capitalize } from "src/utils/strings";
import Link from "next/link";

const Tag = ({ posts }: ReturnType<typeof getServerSideProps>["props"]) => {
  const { query } = useRouter();
  return (
    <div css={containerStyles}>
      <div css={headerStyles}>
        <UnderlinedText
          text={`#${capitalize(query.tag as string)}`}
          type="h1"
          size="md"
          color="#FFFFFF"
          lineColor="#318CE7"
        />
        <Link href="/tags" className="links tags">
          All Tags
        </Link>
        <Link href="/posts" className="links posts">
          All Posts
        </Link>
      </div>
      <div className="content">
        <PostsList data={posts} />
      </div>
    </div>
  );
};

export const getServerSideProps = (context: GetServerSidePropsContext) => {
  const { tag } = context.query as Record<string, string>;
  const filePath = path.join(
    process.cwd(),
    "src",
    "constants/data/cheatsheets",
    `archives.json`
  );
  try {
    const fileContents = fs.readFileSync(filePath, "utf8");
    const data = JSON.parse(fileContents) as ArchiveType[];

    const res = data.filter((post) => post.tags.includes(tag));

    return {
      props: { posts: res },
    };
  } catch {
    return {
      props: { posts: [] },
    };
  }
};

export default Tag;
