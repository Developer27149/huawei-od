import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { IArticleData } from "../interfaces";

const fsPromise = fs.promises;
const articleDir = join(process.cwd(), "articles");

export const getAllArticleIdArr = async (): Promise<string[]> => {
  const allFiles = await fsPromise.readdir(articleDir);
  return allFiles
    .filter((i) => i.endsWith(".md"))
    .map((i) => i.replace(/\.md$/, ""));
};

export async function getArticleById(id: string): Promise<IArticleData> {
  const fullPath = join(articleDir, `${id}.md`);
  const fileContent = fs.readFileSync(fullPath, "utf8");
  // Use gray-matter to parse the post metadata section
  const {
    content,
    data: { title, tags, language },
  } = matter(fileContent);
  // Use remark to convert markdown into HTML string
  return {
    content,
    title,
    tags,
  };
}
