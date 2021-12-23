import React from "react";
import sd from "styles/ThemeBtn.module.sass";
import { useAppContext } from "contexts/global";
import MotionShareBox from 'components/Menu/MotionShareBox';

export default function ArticleNavBtn() {
  const {state, dispatch} = useAppContext();

  const handleReverseShowArticleNav = (e: React.MouseEvent<HTMLElement>) => {
    dispatch({
      ...state,
      showArticleNav: !state.showArticleNav
    })
    e.stopPropagation();
  }
  return (
    <div className={sd.container} onClick={handleReverseShowArticleNav}>
      <MotionShareBox />
      <div className={sd.icon}>
        <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="15" height="15"><path d="M0 3.5h15m-15 8h9m-9-4h6" stroke="currentColor"></path></svg>
      </div>
    </div>
  );
}
