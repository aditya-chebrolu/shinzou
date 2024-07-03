import path from "path";
import fs from "fs";
import { CheatSheetSectionType } from "./types";
import "src/utils/strings";
import { highlightCode } from "src/utils/highlight-code";
import { GetStaticPropsContext, GetStaticPaths } from "next";

// Utility function to load and process data
const loadData = async (data: CheatSheetSectionType) => {
  try {
    for (const section of data.sections) {
      for (const snippet of section.snippets) {
        snippet.codeHtml = await highlightCode({
          code: snippet.code,
          language: data.language,
        });
      }
    }
  } catch (error) {
    console.error("Error loading JSON file:", error);
  }
};

export const getPostPageStaticPaths: GetStaticPaths = async () => {
  const dataDirectory = path.join(process.cwd(), "src", "data", "posts");
  const filenames = fs.readdirSync(dataDirectory);

  const paths = filenames.map((filename) => ({
    params: {
      post: filename.replace(/\.json$/, ""), // Assuming filenames are post slugs
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getPostPageStaticProps = async (
  context: GetStaticPropsContext
) => {
  const { post } = context.params as { post: string };
  const filePath = path.join(
    process.cwd(),
    "src",
    "data",
    "posts",
    `${post}.json`
  );
  let data: CheatSheetSectionType | null = null;

  try {
    const fileContents = fs.readFileSync(filePath, "utf8");
    data = JSON.parse(fileContents) as CheatSheetSectionType;
    await loadData(data);

    return {
      props: {
        data,
      },
    };
  } catch (e) {
    console.error("Error reading JSON file:", e);
    return {
      props: {
        data: null,
      },
    };
  }
};

export type CheatSheetServerSideReturnType = Awaited<
  ReturnType<typeof getPostPageStaticProps>
>["props"];
