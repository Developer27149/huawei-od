import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { IArticleData, INavbar } from "interfaces";
import { convertTextToValidId } from "./index";
import { Octokit } from "@octokit/rest";

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

const repo = process.env.REPO as string;
const owner = process.env.OWNER as string;

const searchIssueNumberByKeyword = async (keyword: string, api: Octokit) => {
  let keep = true;
  let page = 1;
  const per_page = 100;
  let result: { id?: number; number?: number } = {};
  try {
    while (keep) {
      const issues = await api.issues.listForRepo({
        owner,
        repo,
        state: "all",
        page,
        per_page,
      });
      if (issues.data.length === 0) {
        keep = false;
      } else {
        keep = !issues.data.some((issue) => {
          if (issue.title.trim() === keyword.trim()) {
            const { id, number } = issue;
            result.id = id;
            result.number = number;
            return true;
          }
          return false;
        });
        page++;
      }
    }
  } catch (error) {
    console.log(error);
  } finally {
    return result;
  }
};

export const getCommentsById = async (id: string) => {
  const api = new Octokit();
  const result = await searchIssueNumberByKeyword(id, api);
  try {
    if (result.number) {
      const { data } = await api.issues.listComments({
        owner,
        repo,
        page: 1,
        per_page: 100,
        issue_number: result.number,
        since: `${new Date(
          new Date().getTime() - 1000 * 60 * 60 * 24 * 365 * 2
        )}`,
      });
      return data;
    } else {
      return [];
    }
  } catch (error) {
    console.log(error);
    return [];
  }
};

const createALabel = async (name: string) => {
  const api = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  });
  try {
    api.issues.createLabel({
      owner,
      repo,
      name,
    });
  } catch (error) {
    console.log(error);
  }
};
