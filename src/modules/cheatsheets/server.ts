import { GetServerSidePropsContext } from "next";
import path from "path";
import fs from "fs";
import Prism from "@configs/prism.config";
import { CheatSheetSectionType } from "./types";

const loadData = async (
  sections: CheatSheetSectionType[],
  language: string
) => {
  try {
    for (const section of sections) {
      for (const subSection of section.sections) {
        subSection.snippets = subSection.snippets.map((snippet) => ({
          ...snippet,
          highlightedCode: Prism.highlight(
            snippet.code,
            Prism.languages[language],
            language!
          ),
        }));
      }
    }
  } catch (error) {
    console.error("Error loading JSON file:", error);
  }
};

const getCheatSheetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { topic } = context.query as Record<string, string>;
  const filePath = path.join(
    process.cwd(),
    "src",
    "constants",
    "data",
    "cheatsheets",
    `${topic}.json`
  );
  let data: CheatSheetSectionType[] = [];
  try {
    const fileContents = fs.readFileSync(filePath, "utf8");
    data = JSON.parse(fileContents) as CheatSheetSectionType[];
    loadData(data, topic);
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
