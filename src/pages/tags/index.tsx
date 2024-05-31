import { ArchiveType } from "@modules/posts/types";
import path from "path";
import fs from "fs";
import { containerStyles } from "@modules/tags/styles";
import { headerStyles } from "@modules/posts/styles";
import UnderlinedText from "@components/underlined-text";
import Link from "next/link";

const Tags = ({ tags }: ReturnType<typeof getServerSideProps>["props"]) => {
  return (
    <div css={containerStyles}>
      <div css={headerStyles}>
        <UnderlinedText
          text={`All Tags`}
          type="h1"
          size="md"
          color="#FFFFFF"
          lineColor="#50C878"
        />

        <Link href="/posts" className="links posts">
          All Posts
        </Link>
      </div>
      <div className="wrapper">
        <div>
          {tags.map((tag, idx) => (
            <a href={`/tags/${tag}`} key={idx} className="tag">
              #{tag}
            </a>
          ))}
        </div>
      </div>
    </div>
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
