export type CheatSheetSectionType = {
  title: string;
  sections: {
    subtitle: string;
    snippets: {
      description: string;
      code: string;
      highlightedCode: string;
    }[];
  }[];
};
