import fs from "fs";
import path from "path";

// Define the paths for the posts and the output JSON files
const dataDirectory = path.join(process.cwd(), "src", "data");
const postsDirectory = path.join(dataDirectory, "posts");
const tagsFilePath = path.join(dataDirectory, "tags.json");
const postsFilePath = path.join(dataDirectory, "posts.json");

const generateMetadata = () => {
  // Read all filenames in the posts directory
  const filenames = fs.readdirSync(postsDirectory);

  // Initialize a set to collect unique tags and an array to collect posts data
  const tagsSet = new Set();
  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const postData = JSON.parse(fileContents);

    // Add tags to the set
    if (postData.tags) {
      postData.tags.forEach((tag) => tagsSet.add(tag));
    }

    // Return the relevant data for each post
    return {
      slug: filename.replace(/\.json$/, ""),
      title: postData.title,
      tags: postData.tags || [],
    };
  });

  // Convert the set of tags to an array
  const tags = Array.from(tagsSet);

  // Write the tags and posts data to their respective JSON files
  fs.writeFileSync(tagsFilePath, JSON.stringify(tags, null, 2));
  fs.writeFileSync(postsFilePath, JSON.stringify(posts, null, 2));
};

generateMetadata();
console.log("Metadata generation completed.");
