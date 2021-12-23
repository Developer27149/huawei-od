import React from "react";
import sd from "styles/ThemeBtn.module.sass";
import MotionShareBox from "components/Menu/MotionShareBox";
import { useGlobalContext } from "contexts/global";

export default function CommentBtn() {
  const { state, dispatch } = useGlobalContext();
  const handleSwitchShowComment = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    dispatch({
      type: "comment",
      payload: !state.showComment,
    });
  };
  return (
    <div className={sd.container} onClick={handleSwitchShowComment}>
      <MotionShareBox />
      <div className={sd.icon}>
        <svg
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
        >
          <path
            d="M7 7.5h1m-4 0h1m5 0h1m3.5 7h-7a7 7 0 117-7v7z"
            stroke="currentColor"
          ></path>
        </svg>
      </div>
    </div>
  );
}
