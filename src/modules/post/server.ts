import { GetServerSidePropsContext } from "next";
import path from "path";
import fs from "fs";
import { CheatSheetSectionType } from "./types";
import "src/utils/strings";
import { highlightCode } from "src/utils/highlight-code";
// todo: remove this and precalculate stuff.

// const loadData = async (data: CheatSheetSectionType) => {
//   try {
//     for (const section of data.sections) {
//       const snippets = [];
//       for (const snippet of section.snippets) {
//         const obj = {
//           ...snippet,
//           highlightedCode: await highlightCode({
//             code: snippet.code,
//             language: data.language,
//           }),
//         };
//         snippets.push(obj);
//       }
//       section.snippets = snippets;
//     }
//   } catch (error) {
//     console.error("Error loading JSON file:", error);
//   }
// };

const getCheatSheetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { post } = context.query as Record<string, string>;
  const filePath = path.join(process.cwd(), "src", "data", `${post}.json`);
  let data: CheatSheetSectionType | null = null;
  try {
    const fileContents = fs.readFileSync(filePath, "utf8");
    data = JSON.parse(fileContents) as CheatSheetSectionType;
    // await loadData(data);

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
