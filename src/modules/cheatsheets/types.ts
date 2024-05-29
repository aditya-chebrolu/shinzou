export type CheatSheetSectionType = {
  title: string;
  sections: {
    subtitle: string;
    snippets: [];
  }[];
};

export type SnippetType = {
  description: string;
  code: string;
  highlightedCode: string;
  // output: null | string;
};
