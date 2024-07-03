import path from "path";
import fs from "fs";
import { ArchiveType } from "@modules/posts/types";
import PostsList from "@components/posts-list";
import PageWrapper from "@components/page-wrapper";

const Archives = ({ data }: ReturnType<typeof getServerSideProps>["props"]) => {
  return (
    <PageWrapper headerData={{ title: "Posts", allTags: true }}>
      <PostsList data={data} />
    </PageWrapper>
  );
};

export const getServerSideProps = () => {
  const filePath = path.join(process.cwd(), "src", "data", `posts.json`);
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
