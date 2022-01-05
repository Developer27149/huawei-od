import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { IArticleData, INavbar } from "interfaces";
import { convertTextToValidId } from "./index";
import { Octokit } from "@octokit/rest";
import { owner, repo } from "./public";

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

export async function getAllTags() {
  const articlePaths = await fsPromise.readdir(articleDir);

  const tasks = articlePaths
    .filter((i) => i.endsWith(".md"))
    .map((i) => fsPromise.readFile(join(articleDir, i), "utf-8"));
  
  const contents = await Promise.all(tasks);

  
  const tagsRecord: { [tag: string]: string[] } = {};
  contents.forEach((i) => {
    const { data } = matter(i);
    const title: string = data.title;
    const tags: string[] = data.tags;    
    tags.forEach((tag) => {
      if (tagsRecord[tag]) {
        tagsRecord[tag].push(title);
      } else {
        tagsRecord[tag] = [title];
      }
    });
  });
  return tagsRecord;
}

const createArticleNavbarTree = (content: string) => {
  const result: INavbar[] = [];
  content
    .split("\n")
    .filter((i) => /^\#.*$/.test(i.trim()))
    .forEach((i: string) => {
      const text = i.replace(/#/g, "").trim();
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

const searchIssueNumberByKeyword = async (keyword: string, api: Octokit) => {
  let keep = true;
  let page = 1;
  const per_page = 30;
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

export const getCommentsByIdAndIssueNumber = async (id: string) => {
  const api = new Octokit({ auth: process.env.GITHUB_TOKEN });
  const result = await searchIssueNumberByKeyword(id, api);
  try {
    if (result.number) {
      const resp = await api.issues.listComments({
        owner,
        repo,
        page: 1,
        per_page: 60,
        issue_number: result.number,
        since: `${new Date(
          new Date().getTime() - 1000 * 60 * 60 * 24 * 365 * 2
        )}`,
      });
      const data = resp.data;
      const _res = data.map((i) => {
        return {
          username: i.user?.login ?? "神秘人",
          avatarUrl: i.user?.avatar_url ?? "",
          content: i.body ?? "",
          datetime: i.created_at ?? "",
          reactions: i.reactions,
          id: i.id ?? 0,
        };
      });
      const _result = _res
        .filter((i) => !Object.values(i).some((i) => i === ""))
        .reverse();
      _result.sort((prev, next) => {
        const a = next.reactions?.total_count ?? 0;
        const b = prev.reactions?.total_count ?? 0;
        return a === b
          ? new Date(next.datetime).getTime() -
              new Date(prev.datetime).getTime()
          : a - b;
      });
      return {
        comments: _result,
        issueNumber: result.number,
      };
    } else {
      return { comments: [] };
    }
  } catch (error) {
    console.log(error);
    return { comments: [] };
  }
};
