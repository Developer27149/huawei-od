import { useCustomTheme } from "../../hooks/useCustomTheme";
import React from "react";
import MotionBox from "../MotionBox";
import sd from "styles/ThemeBtn.module.sass";
import { useAppContext } from "components/Context";

export default function ArticleNavBtn() {
  const context = useAppContext()
  const handleReverseShowArticleNav = () => {
    console.log(context)
    context.dispatch({type: 'theme'})
  }
  return (
    <div className={sd.container} onClick={handleReverseShowArticleNav}>
      <MotionBox
        style={{
          width: 36,
          height: 36,
          background: "#99aabb",
          borderRadius: "50%",
          opacity: 0.2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        transition={{
          duration: 3.2,
          repeat: Infinity,
          ease: [0.17, 0.67, 0.83, 0.67],
        }}
        animate={{
          opacity: [0.2, 0.8, 0.2],
          scale: [0.9, 1.1, 0.9],
        }}
      >
        <MotionBox
          style={{
            width: 28,
            height: 28,
            background: "#eee",
            borderRadius: "50%",
            opacity: 0.2,
          }}
          transition={{
            duration: 3.2,
            repeat: Infinity,
            ease: [0.17, 0.67, 0.83, 0.67],
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [0.9, 1.1, 0.9],
          }}
        ></MotionBox>
      </MotionBox>
      <div className={sd.icon}>
        <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="15" height="15"><path d="M0 3.5h15m-15 8h9m-9-4h6" stroke="currentColor"></path></svg>
      </div>
    </div>
  );
}
