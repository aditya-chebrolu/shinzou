import { useCallback, useEffect, useState } from "react";
import { Content } from "@modules/post/section";
import {
  searchBarStyles,
  searchBarWrapperStyles,
  welcomeTextStyles,
} from "@modules/post/styles";
import { CheatSheetSectionType } from "@modules/post/types";
import getCheatSheetServerSideProps, {
  type CheatSheetServerSideReturnType,
} from "@modules/post/server";
import { useRouter } from "next/router";
import useScrolledBy from "src/hooks/use-scrolled-by";
import PageWrapper from "@components/page-wrapper";

const Post = ({ data: initData }: CheatSheetServerSideReturnType) => {
  const { query } = useRouter();
  const [data, setData] = useState<CheatSheetSectionType | null>(initData);
  const isScrolled = useScrolledBy();

  useEffect(() => {
    setData(initData);
  }, [initData]);

  const onSearch = (e: any) => {
    if (!initData) return;
    const val = e.target.value;
    setData(filterData(val));
  };

  const filterData = useCallback(
    (searchTerm: string) => {
      if (!initData) return null;
      const lowercasedTerm = searchTerm.toLowerCase();
      const filteredSections = [];
      for (const subsection of initData.sections) {
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
      return {
        ...initData,
        sections: filteredSections,
      };
    },
    [initData]
  );

  if (!data) return null;

  return (
    <PageWrapper headerData={{ title: data.title, titleLineColor: "#EF9B0F" }}>
      <div css={searchBarWrapperStyles(isScrolled)}>
        <input
          type="text"
          onChange={onSearch}
          css={searchBarStyles(isScrolled)}
          placeholder={`Search ${data.title}`}
        />
      </div>
      <div className="wrapper">
        <div className="content">
          <Content data={data} />
          <div css={welcomeTextStyles}>{"You're welcome 🤗"}</div>
        </div>
      </div>
    </PageWrapper>
  );
};

export const getServerSideProps = getCheatSheetServerSideProps;
export default Post;
