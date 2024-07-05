import PageWrapper from "@components/page-wrapper";
import { SvgContainer, tagsRowStyles } from "@styles/index";
import { containerStyles, stripStyles } from "@modules/resources/styles";
import path from "path";
import fs from "fs";
import { socialIcons } from "@assets/socials";
import useFilteredPosts from "src/hooks/use-filtered-posts";
import { useState } from "react";
import { useRouter } from "next/router";

type Resource = {
  name: string;
  url: string;
  description: string;
  type: "yt" | "linkedin" | "website";
  tags: string[];
};

const Resources = ({
  resources,
}: Awaited<ReturnType<typeof getStaticProps>>["props"]) => {
  const { query } = useRouter();
  const {
    posts,
    tags,
    onTagClick: handleTagClick,
  } = useFilteredPosts(resources, ["yt", "linkedin", "website", "css"]);

  const onTagClick = (tag: string) => () => {
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
          />
        ))}
      </div>
    </PageWrapper>
  );
};

const ResourceStrip = ({
  resource,
  delay,
}: {
  resource: Resource;
  delay: number;
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
            <div key={idx}>#{tag}</div>
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

  return {
    props: {
      resources: data,
    },
  };
}

export default Resources;
