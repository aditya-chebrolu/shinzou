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
  const filePath = path.join(
    process.cwd(),
    "src",
    "constants/data/cheatsheets",
    `archives.json`
  );
  try {
    const fileContents = fs.readFileSync(filePath, "utf8");
    const data = JSON.parse(fileContents) as ArchiveType[];
    const tags = data.flatMap((d) => d.tags);

    return {
      props: { tags: Array.from(new Set(tags)) },
    };
  } catch {
    return {
      props: { tags: ["ok"] },
    };
  }
};

export default Tags;
