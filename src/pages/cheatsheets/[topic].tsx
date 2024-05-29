import { useCallback, useEffect, useState } from "react";
import CheatSheetSection from "@modules/cheatsheets/section";
import {
  pageStyles,
  searchbarStyles,
  welcomeTextStyles,
} from "@modules/cheatsheets/styles";
import { CheatSheetSectionType } from "@modules/cheatsheets/types";
import getCheatSheetServerSideProps, {
  type CheatSheetServerSideReturnType,
} from "@modules/cheatsheets/server";
import CheatSheetHeader from "@modules/cheatsheets/header";
import { capitalize } from "lodash-es";
import { useRouter } from "next/router";

const CheatSheet = ({ data: initData }: CheatSheetServerSideReturnType) => {
  const { query } = useRouter();
  const [data, setData] = useState<CheatSheetSectionType[]>(initData);

  useEffect(() => {
    setData(initData);
  }, [initData]);

  const onSearch = (e: any) => {
    const val = e.target.value;
    setData(filterData(val));
  };

  const filterData = useCallback(
    (searchTerm: string) => {
      const lowercasedTerm = searchTerm.toLowerCase();
      const result = [];

      for (const section of initData) {
        const filteredSections = [];
        for (const subsection of section.sections) {
          const filteredSnippets = [];
          for (const snippet of subsection.snippets) {
            if (
              typeof snippet.description === "string" &&
              snippet.description.toLowerCase().includes(lowercasedTerm)
            ) {
              filteredSnippets.push(snippet);
            } else if (
              typeof snippet.description === "object" &&
              snippet.description.some((desc) => desc.includes(lowercasedTerm))
            ) {
              filteredSnippets.push(snippet);
            } else if (snippet.code.toLowerCase().includes(lowercasedTerm)) {
              filteredSnippets.push(snippet);
            }
          }
          if (filteredSnippets.length > 0) {
            filteredSections.push({
              ...subsection,
              snippets: filteredSnippets,
            });
          }
        }

        if (filteredSections.length > 0) {
          result.push({
            ...section,
            sections: filteredSections,
          });
        }
      }
      return result;
    },
    [initData]
  );

  return (
    <div css={pageStyles}>
      <CheatSheetHeader />
      <div className="wrapper">
        <div css={searchbarStyles}>
          <input
            type="text"
            onChange={onSearch}
            placeholder={`Search ${capitalize(query.topic as string)} topics`}
          />
        </div>
        <div className="content">
          {data.map((section, idx) => (
            <CheatSheetSection
              title={section.title}
              sections={section.sections}
              key={idx}
            />
          ))}
          {data.length > 0 && (
            <div css={welcomeTextStyles}>{"You're welcome 🤗"}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = getCheatSheetServerSideProps;
export default CheatSheet;
