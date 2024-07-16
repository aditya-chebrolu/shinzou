import { ArchiveType } from "@modules/posts/types";
import { archiveBlockStyles } from "./styles";

const PostsList = ({
  data,
  onTagClick,
}: {
  data: ArchiveType[];
  onTagClick: (inp: string) => void;
}) => {
  return (
    <>
      {data.map((archive, idx) => (
        <div css={archiveBlockStyles(idx * 50)} key={`${idx}-${archive.slug}`}>
          <a
            href={`/posts/${archive.slug}`}
            dangerouslySetInnerHTML={{
              __html: `<h2>${idx + 1}. ${archive.title}</h2>`,
            }}
          />
          <div className="tags">
            {archive.tags.map((tag, idx) => (
              <div onClick={() => onTagClick(tag)} key={idx} className="tag">
                #{tag}
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default PostsList;
