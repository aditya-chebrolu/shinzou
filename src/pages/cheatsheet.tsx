import Prism from "@configs/prism.config";
import { useCallback, useEffect, useRef, useState } from "react";
import CheatSheetSection from "@modules/cheatsheets/section";
import {
  headerStyles,
  pageStyles,
  searchbarStyles,
} from "@modules/cheatsheets/styles";
import { CheatSheetSectionType } from "@modules/cheatsheets/types";
import { SvgContainer } from "@styles/index";
import { pickIcons } from "@constants/icons";

const CheatSheet = () => {
  const [language, setLanguage] = useState<{
    value: string | null;
    options: { Icon: any; text: string }[];
  }>({ value: null, options: pickIcons(["java", "swift"]) });
  const staticData = useRef<CheatSheetSectionType[]>([]);
  const [data, setData] = useState<CheatSheetSectionType[]>([]);

  const onSearch = (e: any) => {
    const val = e.target.value;
    setData(filterData(val));
  };

  const filterData = useCallback(
    (searchTerm: string) => {
      const lowercasedTerm = searchTerm.toLowerCase();
      const result = [];

      for (const section of staticData.current) {
        const filteredSections = [];
        for (const subsection of section.sections) {
          const filteredSnippets = [];
          for (const snippet of subsection.snippets) {
            if (
              snippet.description.toLowerCase().includes(lowercasedTerm) ||
              snippet.code.toLowerCase().includes(lowercasedTerm)
            ) {
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
    [staticData]
  );

  const onLanguageClick = (val: string) => () => {
    const inp = val.toLowerCase();
    if (language.options.length > 1) {
      setLanguage({
        value: inp,
        options: pickIcons([inp as any]),
      });
    } else {
      setLanguage({
        value: inp,
        options: pickIcons(["java", "swift"]),
      });
    }
  };
  useEffect(() => {
    if (!language.value) return;
    const loadData = async () => {
      try {
        const file = await import(`../data/${language.value}.json`);
        const sections = file.data as CheatSheetSectionType[];
        for (const section of sections) {
          for (const subSection of section.sections) {
            subSection.snippets = subSection.snippets.map((snippet) => ({
              ...snippet,
              highlightedCode: Prism.highlight(
                snippet.code,
                Prism.languages[language.value!],
                language.value!
              ),
            }));
          }
        }
        staticData.current = sections;
        setData(sections);
      } catch (error) {
        console.error("Error loading JSON file:", error);
      }
    };
    loadData();
  }, [language]);

  return (
    <div css={pageStyles}>
      <div className="wrapper">
        <div css={headerStyles}>
          <div css={searchbarStyles}>
            <input type="text" onChange={onSearch} />
            <div className="langs">
              {language.options.map(({ Icon, text }, idx) => (
                <div
                  key={idx}
                  className={
                    language.value === text.toLowerCase() ? "checked" : ""
                  }
                  onClick={onLanguageClick(text)}
                >
                  <SvgContainer h={{ default: 30 }}>
                    <Icon />
                  </SvgContainer>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="content">
          {data.map((section, idx) => (
            <CheatSheetSection
              title={section.title}
              sections={section.sections}
              key={idx}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CheatSheet;
