import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypePrettyCode from "rehype-pretty-code";

export const highlightCode = async ({
  code,
  language,
}: {
  code: string;
  language: string;
}) => {
  const input = `\`\`\`${language}\n${code}\n\`\`\``;
  const file = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      theme: "nord",
      keepBackground: false,
      grid: true,
    })
    .use(rehypeStringify)
    .process(input);

  return String(file);
};
