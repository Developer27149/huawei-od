import React from "react";
import { useAppContext } from "components/Context";


export const useCustomTheme = () => {
  const {state, dispatch} = useAppContext();
  const reverseTheme = (e: React.MouseEvent<HTMLElement>) => {
    dispatch({
      ...state,
      darkTheme: !state.darkTheme
    });
    e.stopPropagation();
  };
  return { isDark: state.darkTheme, reverseTheme };
};
