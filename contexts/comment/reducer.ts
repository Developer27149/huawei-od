import { IInitState } from "./context";
import { IComment } from "interfaces/index";

export type Action = {
  type: 'update_comments' | 'update_token' | 'update_msg' | 'update_issue_number';
  payload: {
    token?: string,
    comments?: IComment[],
    msg?: string,
    issueNumber?: number,
  };
};

export const commentReducer = (state: IInitState, action: Action) => {
  switch (action.type) {
    case "update_comments":
      return {
        ...state,
        comments: action.payload.comments
      };
    case "update_token":
      return {
        ...state,
        identy: {
          ...state.identy,
          token: action.payload.token
        }
      }
    case "update_msg":
      return {
        ...state,
        msg: action.payload.msg      
      }
    case 'update_issue_number':
      return {
        ...state,
        issueNumber: action.payload.issueNumber
      }
    default:
      return state;
  }
};
