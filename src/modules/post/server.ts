import { GetServerSidePropsContext } from "next";
import path from "path";
import fs from "fs";
import Prism from "@configs/prism.config";
import { CheatSheetSectionType } from "./types";

const loadData = async (data: CheatSheetSectionType) => {
  try {
    for (const section of data.sections) {
      section.snippets = section.snippets.map((snippet) => ({
        ...snippet,
        highlightedCode: Prism.highlight(
          snippet.code,
          Prism.languages[data.language],
          data.language
        ),
      }));
    }
  } catch (error) {
    console.error("Error loading JSON file:", error);
  }
};

const getCheatSheetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { post } = context.query as Record<string, string>;
  const filePath = path.join(process.cwd(), "src", "data", `${post}.json`);
  let data: CheatSheetSectionType | null = null;
  try {
    const fileContents = fs.readFileSync(filePath, "utf8");
    data = JSON.parse(fileContents) as CheatSheetSectionType;
    loadData(data);
    return {
      props: {
        data,
      },
    };
  } catch (e) {
    return {
      props: {
        data,
      },
    };
  }
};

export type CheatSheetServerSideReturnType = Awaited<
  ReturnType<typeof getCheatSheetServerSideProps>
>["props"];

export default getCheatSheetServerSideProps;
