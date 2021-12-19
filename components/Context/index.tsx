import { createContext, useContext, useReducer, useEffect } from "react";
import { ReactChild } from "react";
import { setDarkMode } from "libs";

interface IShareState {
  darkTheme?: boolean;
  showArticleNav?: boolean;
  showComment?: boolean;
}

const shareState: IShareState = {};

export const reducer = (state: IShareState, payload: IShareState) => {
  Object.keys(payload).forEach((i: any) => {
    localStorage[i] = String(payload[i]);
  });
  setDarkMode(payload?.darkTheme ?? false);
  return {
    ...state,
    ...payload,
  };
};

const AppContext = createContext(shareState);

export function AppWrapper(props: { children: ReactChild }) {
  const [state, dispatch] = useReducer(reducer, shareState);
  useEffect(() => {
    const {darkTheme = false, showArticleNav = true, showComment = true} = localStorage;
    dispatch({
      darkTheme: typeof darkTheme === 'string' ? darkTheme === 'true' : darkTheme,
      showArticleNav: typeof showArticleNav === 'string' ? showArticleNav === 'true' : showArticleNav,
      showComment: typeof showComment === 'string' ? showComment === 'true' : showComment,
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
