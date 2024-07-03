import { ArchiveType } from "@modules/posts/types";
import { archiveBlockStyles } from "./styles";

const PostsList = ({ data }: { data: ArchiveType[] }) => {
  return (
    <>
      {data.map((archive, idx) => (
        <div css={archiveBlockStyles} key={idx}>
          <a
            href={`/posts/${archive.slug}`}
            dangerouslySetInnerHTML={{
              __html: `<h2>${idx + 1}. ${archive.title}</h2>`,
            }}
          />
          <div className="tags">
            {archive.tags.map((tag, idx) => (
              <a href={`/tags/${tag}`} key={idx} className="tag">
                #{tag}
              </a>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default PostsList;
