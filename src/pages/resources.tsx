import PageWrapper from "@components/page-wrapper";
import { SvgContainer, tagsRowStyles } from "@styles/index";
import { containerStyles, stripStyles } from "@modules/resources/styles";
import path from "path";
import fs from "fs";
import { socialIcons } from "@assets/socials";
import useFilteredPosts from "src/hooks/use-filtered-posts";
import AllTags from "@components/all-tags";
import ResourcesMeta from "@modules/resources/meta";

type Resource = {
  name: string;
  url: string;
  description: string;
  type: "yt" | "linkedin" | "website";
  tags: string[];
  linkTitle: string;
};

const Resources = ({
  resources,
  allTags,
}: Awaited<ReturnType<typeof getStaticProps>>["props"]) => {
  const { posts, tags, onTagClick, tagSet } = useFilteredPosts(
    resources,
    allTags
  );

  return (
    <>
      <ResourcesMeta />
      <PageWrapper
        headerData={{ titleLineColor: "#0D98BA", title: "Resources" }}
      >
        <div css={containerStyles}>
          <AllTags tags={tags} onTagClick={onTagClick} />
          {posts.map((resource, idx) => (
            <ResourceStrip
              key={idx + resource.name}
              resource={resource}
              delay={idx * 100}
              onTagClick={onTagClick}
              tagSet={tagSet}
            />
          ))}
          <div className="welcome">You're Welcome 🙂</div>
        </div>
      </PageWrapper>
    </>
  );
};

const ResourceStrip = ({
  resource,
  delay,
  onTagClick,
  tagSet,
}: {
  resource: Resource;
  delay: number;
  tagSet: Set<string>;
  onTagClick: (v: string) => void;
}) => {
  const isWebsite = resource.type === "website";
  const Icon = socialIcons[resource.type].Icon;

  const handleTagClick = (tag: string) => () => {
    if (tagSet.has(tag)) return;
    onTagClick(tag);
  };

  return (
    <div css={stripStyles(delay)}>
      <SvgContainer h={{ default: 24 }} stroke={isWebsite ? "white" : ""}>
        <Icon />
      </SvgContainer>
      <div className="info">
        <a className="name" href={resource.url} title={resource.linkTitle}>
          <h2>{resource.name}</h2>
        </a>
        <p className="desc">{resource.description}</p>
        <div className="tags">
          {resource.tags.map((tag, idx) => (
            <div className="tag" key={idx} onClick={handleTagClick(tag)}>
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
