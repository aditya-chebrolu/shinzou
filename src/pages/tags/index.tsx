import { ArchiveType } from "@modules/posts/types";
import path from "path";
import fs from "fs";
import PageWrapper from "@components/page-wrapper";
import { tagsContainerStyles } from "@modules/tags/styles";

const Tags = ({ tags }: ReturnType<typeof getServerSideProps>["props"]) => {
  return (
    <PageWrapper
      headerData={{
        titleLineColor: "#0D98BA",
        title: "All Tags",
        allPosts: true,
      }}
    >
      <div css={tagsContainerStyles}>
        {tags.map((tag, idx) => (
          <a href={`/tags/${tag}`} key={idx} className="tag">
            #{tag}
          </a>
        ))}
      </div>
    </PageWrapper>
  );
};

export const getServerSideProps = () => {
  const filePath = path.join(process.cwd(), "src", "data", `tags.json`);
  try {
    const fileContents = fs.readFileSync(filePath, "utf8");
    const tags = JSON.parse(fileContents) as string[];
    return {
      props: { tags },
    };
  } catch {
    return {
      props: { tags: [] },
    };
  }
};

export default Tags;
