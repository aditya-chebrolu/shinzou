import { ArchiveType } from "@modules/posts/types";
import path from "path";
import fs from "fs";
import { GetServerSidePropsContext } from "next";
import PostsList from "@components/posts-list";
import { useRouter } from "next/router";
import { capitalize } from "src/utils/strings";
import PageWrapper from "@components/page-wrapper";

const Tag = ({ posts }: ReturnType<typeof getServerSideProps>["props"]) => {
  const { query } = useRouter();

  return (
    <PageWrapper
      headerData={{
        titleLineColor: "#318CE7",
        title: `#${capitalize(query.tag as string)}`,
        allPosts: true,
        allTags: true,
      }}
    >
      <PostsList data={posts} />
    </PageWrapper>
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
