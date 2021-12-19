import { createContext, useContext, useReducer, useEffect } from "react";
import { ReactChild } from "react";

interface IShareState {
  darkTheme?: boolean;
  showArticleNav?: boolean;
  showComment?: boolean;
}

const shareState: IShareState = {};

export const reducer = (
  state: IShareState,
  action: {
    type: string;
    upload?: IShareState;
  }
) => {
  switch (action.type) {
    case "theme":
      localStorage.dark = String(!state.darkTheme);
      return { ...state, darkTheme: !state.darkTheme };
    case "article":
      localStorage.showArticleNav = String(!state.showArticleNav);
      return { ...state, showArticleNav: !state.showArticleNav };
    case "comment":
      localStorage.showComment = String(!state.showComment);
      return { ...state, showComment: !state.showComment };
    case "init":
      const {
        darkTheme = "false",
        showArticleNav = "true",
        showComment = "true",
      } = action?.upload || shareState;

      localStorage.darkTheme = darkTheme;
      localStorage.showArticleNav = showArticleNav;
      localStorage.showComment = showComment;
      return { ...state, ...action.upload };
    default:
      console.error("无效的 dispatch");
      return state;
  }
};

const AppContext = createContext(shareState);

export function AppWrapper(props: { children: ReactChild }) {
  const [state, dispatch] = useReducer(reducer, shareState);
  useEffect(() => {
    dispatch({
      type: "init",
      upload: {
        darkTheme: localStorage.darkTheme ?? 'false',
        showArticleNav: localStorage.showArticleNav ?? 'true',
        showComment: localStorage.showComment ?? "true",
      },
    });
  }, []);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AppContext.Provider>
  );
}

export function useAppContext(): any {
  return useContext(AppContext);
}
