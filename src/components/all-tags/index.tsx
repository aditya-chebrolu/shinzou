import { tagsRowStyles } from "@styles/index";
import React from "react";

type Props = {
  tags: { applied: boolean; name: string }[];
  onTagClick: (tag: string) => void;
};

const AllTags = ({ tags, onTagClick }: Props) => {
  return (
    <div css={tagsRowStyles}>
      {tags.map((tag) => (
        <div
          className={tag.applied ? "applied" : ""}
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
