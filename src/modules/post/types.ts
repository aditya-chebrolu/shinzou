export type CheatSheetSectionType = {
  title: string;
  language: string;
  sections: {
    subtitle: string;
    snippets: SnippetType[];
  }[];
};

export type SnippetType = {
  description: string | string[];
  code: string;
  highlightedCode: string;
  codeHtml: string;
  // output: null | string;
};
