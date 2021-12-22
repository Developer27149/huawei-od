import { InitStateType } from "./context";
import { IComment } from "interfaces/index";
type Action = {
  type: string;
  payload: IComment;
};
export const commentReducer = (state: InitStateType, action: Action) => {
  switch (action.type) {
    case "update":
      return {
        ...state,
        comments: state.comments?.map((comment) => {
          if (comment.id === action.payload.id) {
            return action.payload;
          }
          return comment;
        }),
      };

    default:
      return state;
  }
};
