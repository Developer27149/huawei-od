import { Octokit } from "@octokit/rest";
import { ok } from "assert";
import { reactionsOptions } from "interfaces";

interface IArgus {
  id: number;
  action: reactionsOptions;
  identy: {
    repo: string;
    owner: string;
    token: string;
  };
  callback: Function;
}

export const setReactionForComment = async (args: IArgus) => {
  const { id, action, identy, callback } = args;
  const { token, repo, owner } = identy;
  if (token === undefined && callback !== undefined) {
    callback();
  } else {
    const api = new Octokit({ auth: token });
    try {
      const res = await api.reactions.createForIssueComment({
        owner,
        repo,
        comment_id: id,
        content: action,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
};

export const createCommentForArticle = async (
  issue_number: number,
  identy: {
    repo: string;
    owner: string;
    token: string;
  },
  body: string
) => {
  const {token, repo, owner} = identy;
  const api = new Octokit({ auth: token });
  try {
    const res = await api.issues.createComment({
      owner, repo, issue_number, body
    })
    console.log(res);
    return true;
  } catch (error) {
    console.log(error)
    return false;
  }
};

export const getReactionEmojiByName = (name: reactionsOptions) => {
  return {
    "+1": "👍🏻",
    "-1": "👎🏻",
    confused: "😕",
    heart: "❤️",
    hooray: "🎉",
    laugh: "😄",
    eyes: "👀",
    rocket: "🚀",
  }[name];
};
