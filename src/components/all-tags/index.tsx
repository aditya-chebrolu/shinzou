import { tagsRowStyles } from "@styles/index";
import cn from "classnames";

type Props = {
  tags: { applied: boolean; name: string }[];
  onTagClick: (tag: string) => void;
};

const AllTags = ({ tags, onTagClick }: Props) => {
  return (
    <div css={tagsRowStyles}>
      {tags.map((tag) => (
        <div
          className={cn({ applied: tag.applied })}
          onClick={() => onTagClick(tag.name)}
          key={tag.name}
        >
          #{tag.name}
        </div>
      ))}
    </div>
  );
};

export default AllTags;
