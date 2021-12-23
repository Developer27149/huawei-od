import React, { createContext } from "react";
import { IComment } from "interfaces/index";
import { Action } from "./reducer";
import { repo, owner } from "libs/public";

interface IIdenty {
  repo: string;
  owner: string;
  token: string;
}

export interface IInitState {
  identy: IIdenty;
  comments: IComment[];
  pathId: string;
  msg: string;
  issueNumber: number;
}

export interface ICommentContextProps {
  state: IInitState;
  dispatch: React.Dispatch<Action>;
}

export const initState: IInitState = {
  identy: {
    repo,
    owner,
    token: "",
  },
  comments: [],
  pathId: "0",
  msg: "",
  issueNumber: 0
}

export const CommentContext = createContext<ICommentContextProps>({
  state: initState,
  dispatch: () => {}
});
export const CommentProvider = CommentContext.Provider;
