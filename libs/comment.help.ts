import { Octokit } from '@octokit/rest';
import { reactionsOptions } from 'interfaces';
import { owner,repo } from "./public";

export const setReactionForComment = async (id: number, action: reactionsOptions, token?: string, callback?: Function) => {
  console.log(token)
  if(token === undefined && callback !== undefined) {
    callback();
  } else {
    const api = new Octokit({auth: token});
    try {
      const res = await api.reactions.createForIssueComment({
        owner, repo, comment_id: id, content: action
      })
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
}

export const getReactionEmojiByName = (name: reactionsOptions) => {
  return {
    '+1': '👍🏻',
    '-1': '👎🏻',
    'confused': '😕',
    'heart': '❤️',
    'hooray': '🎉',
    'laugh': '😄',
    'eyes': '👀',
    'rocket': '🚀'
  }[name]
}

