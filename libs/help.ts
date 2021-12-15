import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { IArticleData, INavbar } from "interfaces";
import { convertTextToValidId } from "./index";

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
    data: { title, tags },
  } = matter(fileContent);
  // Use remark to convert markdown into HTML string
  return {
    content,
    title,
    tags,
    navArr: createArticleNavbarTree(content),
  };
}

const createArticleNavbarTree = (content: string) => {
  const result: INavbar[] = [];
  const map = new Map<string, number>();
  content
    .split("\n")
    .filter((i) => /^\#.*$/.test(i.trim()))
    .forEach((i: string) => {
      const text = i.replaceAll("#", "").trim();
      const targetId = convertTextToValidId(text);
      result.push({ text, level: getLevel(i), targetId });
    });
  return result;
};

const getLevel = (str: string) => {
  let record = 0;
  for (const i of str) {
    if (i !== "#") return record;
    record += i === "#" ? 1 : 0;
  }
  return record;
};
