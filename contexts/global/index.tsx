import { createContext, useContext, useReducer, useEffect } from "react";
import { ReactChild } from "react";
import { setDarkMode } from "libs";

interface IGlobalState {
  darkTheme: boolean;
  showArticleNav: boolean;
  showComment: boolean;
}

const initState: IGlobalState = {
  darkTheme: false,
  showArticleNav: true,
  showComment: true,
};
interface IAction {
  type: "theme" | "navbar" | "comment";
  payload: boolean;
}

export const globalReducer = (state: IGlobalState, action: IAction) => {
  const { type, payload } = action;
  switch (type) {
    case "theme":
      setDarkMode(payload);
      localStorage.darkTheme = payload;
      return {
        ...state,
        darkTheme: payload,
      };
    case "navbar":
      localStorage.showArticleNav = payload;
      return {
        ...state,
        showArticleNav: payload,
      };

    case "comment":
      localStorage.showComment = payload;
      return {
        ...state,
        showComment: payload,
      };

    default:
      return state;
  }
};

export const AppGlobalContext = createContext<{
  state: IGlobalState;
  dispatch: React.Dispatch<IAction>;
}>({
  state: initState,
  dispatch: () => {},
});

export function GlobalContextProvider(props: { children: ReactChild }) {
  const [state, dispatch] = useReducer(globalReducer, initState);
  useEffect(() => {
    const { darkTheme, showArticleNav, showComment } = localStorage;
    dispatch({ type: "theme", payload: darkTheme === "true" });
    dispatch({ type: "navbar", payload: showArticleNav !== "false" });
    dispatch({ type: "comment", payload: showComment !== "false" });
  }, []);
  return (
    <AppGlobalContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AppGlobalContext.Provider>
  );
}

export function useGlobalContext(): any {
  return useContext(AppGlobalContext);
}
