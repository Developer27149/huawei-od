import React, { createContext } from "react";
import { IComment } from "interfaces/index";

type IdentyType = {
  repo: string;
  owner: string;
  token: string;
};

export type InitStateType = {
  identy?: IdentyType;
  comments?: IComment[];
};

const CommentContext = createContext<{
  state: InitStateType;
  dispatch: React.Dispatch<any>;
}>({
  state: {},
  dispatch: () => null,
});

export { CommentContext };
