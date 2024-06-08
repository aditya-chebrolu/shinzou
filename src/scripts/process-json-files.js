// const fs = require("fs");
// const path = require("path");

// const config = {
//   dir: "src/data", // Update this to your actual JSON directory
//   rehypeOptions: {
//     theme: "nord",
//     grid: false,
//     keepBackground: false,
//   },
// };

// // Function to dynamically load ES modules
// async function loadModules() {
//   const [
//     { unified },
//     remarkParse,
//     remarkRehype,
//     rehypeStringify,
//     rehypePrettyCode,
//   ] = await Promise.all([
//     import("unified"),
//     import("remark-parse"),
//     import("remark-rehype"),
//     import("rehype-stringify"),
//     import("rehype-pretty-code"),
//   ]);

//   return {
//     unified,
//     remarkParse,
//     remarkRehype,
//     rehypeStringify,
//     rehypePrettyCode,
//   };
// }

// // Function to highlight code snippets
// const highlightCode = async (code, language) => {
//   const {
//     unified,
//     remarkParse,
//     remarkRehype,
//     rehypeStringify,
//     rehypePrettyCode,
//   } = await loadModules();

//   const input = `\`\`\`${language}\n${code}\n\`\`\``;
//   const file = await unified()
//     .use(remarkParse.default)
//     .use(remarkRehype.default)
//     .use(rehypePrettyCode.default, config.rehypeOptions)
//     .use(rehypeStringify.default)
//     .process(input);

//   return String(file);
// };

// // Function to update JSON data with highlighted code
// const updateJSON = async (data) => {
//   for (const section of data.sections) {
//     for (const snippet of section.snippets) {
//       snippet.codeHtml = await highlightCode(snippet.code, data.language);
//     }
//   }
// };

// // Function to process all JSON files in the specified directory
// async function processJsonFiles() {
//   const files = fs.readdirSync(config.dir);

//   for (const file of files) {
//     const filePath = path.join(config.dir, file);
//     // const fileSizeInBytes = getFileSizeInBytes(filePath);
//     // if (path.extname(file) === ".json") {
//     const jsonData = JSON.parse(fs.readFileSync(filePath, "utf8"));
//     await updateJSON(jsonData);
//     fs.writeFileSync(filePath, JSON.stringify(jsonData));
//     console.log(`Processed and updated: ${file}`);
//     // }
//   }
// }

// // Run the script
// processJsonFiles().then(() => {
//   console.log("All JSON files processed.");
// });
