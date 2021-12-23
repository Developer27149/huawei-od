import React from "react";
import { useGlobalContext } from "contexts/global";


export const useCustomTheme = () => {
  const {state, dispatch} = useGlobalContext();
  const reverseTheme = (e: React.MouseEvent<HTMLElement>) => {
    dispatch({
      type: "theme",
      payload: !state.darkTheme
    });
    e.stopPropagation();
  };
  return { isDark: state.darkTheme, reverseTheme };
};
