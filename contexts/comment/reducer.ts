import { IInitState } from "./context";
import { IComment } from "interfaces/index";

export interface Action {
  type: 'update_comments' | 'update_token' | 'update_msg' | 'update_issue_number';
  payload: {
    token?: string,
    comments?: IComment[],
    msg?: string,
    issueNumber?: number,
  };
};

export const commentReducer = (state: IInitState, action: Action):IInitState => {
  switch (action.type) {
    case "update_comments":
      return {
        ...state,
        comments: action.payload.comments as IComment[],
      };
    case "update_token":
      return {
        ...state,
        identy: {
          ...state.identy,
          token: action.payload.token as string
        }
      }
    case "update_msg":
      return {
        ...state,
        msg: action.payload.msg as string
      }
    case 'update_issue_number':
      return {
        ...state,
        issueNumber: action.payload.issueNumber as number
      }
    default:
      return state;
  }
};
