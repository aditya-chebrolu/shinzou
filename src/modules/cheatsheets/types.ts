export type CheatSheetSectionType = {
  title: string;
  sections: {
    subtitle: string;
    snippets: SnippetType[];
  }[];
};

export type SnippetType = {
  description: string | string[];
  code: string;
  highlightedCode: string;
  // output: null | string;
};
