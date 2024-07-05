import PageWrapper from "@components/page-wrapper";
import { SvgContainer, tagsRowStyles } from "@styles/index";
import { containerStyles, stripStyles } from "@modules/resources/styles";
import path from "path";
import fs from "fs";
import { socialIcons } from "@assets/socials";
import useFilteredPosts from "src/hooks/use-filtered-posts";

type Resource = {
  name: string;
  url: string;
  description: string;
  type: "yt" | "linkedin" | "website";
  tags: string[];
};

const Resources = ({
  resources,
  allTags,
}: Awaited<ReturnType<typeof getStaticProps>>["props"]) => {
  const {
    posts,
    tags,
    onTagClick: handleTagClick,
    tagSet,
  } = useFilteredPosts(resources, allTags);

  const onTagClick =
    (tag: string, unselect = true) =>
    () => {
      if (tagSet.has(tag) && !unselect) return;
      handleTagClick(tag);
    };

  return (
    <PageWrapper headerData={{ titleLineColor: "#FB607F", title: "Resources" }}>
      <div css={containerStyles}>
        <div css={tagsRowStyles}>
          {tags.map((tag) => (
            <div
              className={tag.applied ? "applied" : ""}
              onClick={onTagClick(tag.name)}
              key={tag.name}
            >
              #{tag.name}
            </div>
          ))}
        </div>
        {posts.map((resource, idx) => (
          <ResourceStrip
            key={idx + resource.name}
            resource={resource}
            delay={idx * 100}
            onTagClick={onTagClick}
          />
        ))}
      </div>
    </PageWrapper>
  );
};

const ResourceStrip = ({
  resource,
  delay,
  onTagClick,
}: {
  resource: Resource;
  delay: number;
  onTagClick: (v: string, unselect?: boolean) => () => void;
}) => {
  const isWebsite = resource.type === "website";
  const Icon = socialIcons[resource.type].Icon;
  return (
    <div css={stripStyles(delay)}>
      <SvgContainer h={{ default: 24 }} stroke={isWebsite ? "white" : ""}>
        <Icon />
      </SvgContainer>
      <div className="info">
        <a className="name" href={resource.url}>
          <h2>{resource.name}</h2>
        </a>
        <div className="desc">{resource.description}</div>
        <div className="tags">
          {resource.tags.map((tag, idx) => (
            <div className="tag" key={idx} onClick={onTagClick(tag, false)}>
              #{tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "src/data/resources.json");
  const jsonData = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(jsonData) as Resource[];
  const allTags = Array.from(
    new Set(data.map((obj) => obj.tags).flatMap((arr) => arr))
  );

  return {
    props: {
      resources: data,
      allTags,
    },
  };
}

export default Resources;
