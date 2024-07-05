import { useState, useEffect } from "react";
import { useRouter } from "next/router";

type PostWithTags = {
  tags: string[];
};

const useFilteredPosts = <T extends PostWithTags>(
  posts: T[],
  allTags: string[]
) => {
  const { query, pathname, push } = useRouter();

  const getTagsFromURL = () => {
    const tagsParam = query.tags as string;
    return tagsParam ? new Set(tagsParam.split(",")) : new Set();
  };

  const [tags, setTags] = useState(getTagsFromURL());
  const [filteredPosts, setFilteredPosts] = useState(posts);

  useEffect(() => {
    const selectedTags = getTagsFromURL();
    setTags(selectedTags);

    if (selectedTags.size === 0) {
      setFilteredPosts(posts);
    } else {
      const filtered = posts.filter((post) =>
        post.tags.some((tag) => selectedTags.has(tag))
      );
      setFilteredPosts(filtered);
    }
  }, [query.tags, posts]);

  const onTagClick = (tag: string) => {
    const currentTags = new Set(tags);
    if (currentTags.has(tag)) {
      currentTags.delete(tag);
    } else {
      currentTags.add(tag);
    }

    setTags(currentTags);

    const newTagsArray = Array.from(currentTags);

    const updatedQuery = { ...query };
    if (newTagsArray.length > 0) {
      updatedQuery.tags = newTagsArray.join(",");
    } else {
      delete updatedQuery.tags;
    }

    push({
      pathname: pathname,
      query: updatedQuery,
    });
  };

  const processedTags = allTags.map((tag) => ({
    name: tag,
    applied: tags.has(tag),
  }));

  return { onTagClick, tags: processedTags, posts: filteredPosts };
};

export default useFilteredPosts;
