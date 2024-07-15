import path from "path";
import fs from "fs";
import { ArchiveType } from "@modules/posts/types";
import PostsList from "@components/posts-list";
import PageWrapper from "@components/page-wrapper";
import useFilteredPosts from "src/hooks/use-filtered-posts";
import AllTags from "@components/all-tags";

const Archives = ({
  posts: postsFromProps,
  allTags,
}: ReturnType<typeof getServerSideProps>["props"]) => {
  const { posts, tags, onTagClick } = useFilteredPosts(postsFromProps, allTags);
  return (
    <PageWrapper headerData={{ title: "Posts", allTags: true }}>
      <AllTags tags={tags} onTagClick={onTagClick} />
      <PostsList data={posts} onTagClick={onTagClick} />
    </PageWrapper>
  );
};

export const getServerSideProps = () => {
  const dataPath = path.join(process.cwd(), "src/data");
  let posts: ArchiveType[] = [],
    allTags: string[] = [];
  try {
    const postsFileContents = fs.readFileSync(`${dataPath}/posts.json`, "utf8");
    const tagsFileContents = fs.readFileSync(`${dataPath}/tags.json`, "utf8");
    posts = JSON.parse(postsFileContents);
    allTags = JSON.parse(tagsFileContents);
    return {
      props: { posts, allTags },
    };
  } catch {
    return {
      props: { posts, allTags },
    };
  }
};

export default Archives;
