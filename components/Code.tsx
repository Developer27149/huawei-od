import React, { useState, ReactChildren, useEffect } from "react";
import MotionBox from "./MotionBox";
import sd from "styles/Code.module.sass";
import CodeCopy from "./CodeCopy";
import hljs from "highlight.js";
import "highlight.js/styles/Shades-of-purple.css";

interface IProps {
  children: ReactChildren | JSX.Element | any;
}
export default function Code(props: IProps) {
  const [lines, setLines] = useState(0);
  const [minShow, setMinShow] = useState(false);
  const text = props.children.props.children;
  const switchMinShow = () => {
    setMinShow((prev) => !prev);
  };
  useEffect(() => {
    hljs.highlightAll();
    setLines(text.split("\n").length);
  }, []);
  return (
    <MotionBox
      className={sd.container}
      style={{
        maxHeight: minShow ? 50 : "unset",
      }}
    >
      <div className={sd.header}>
        <span onClick={switchMinShow}>
          {!minShow ? (
            <MotionBox
              animate={{
                opacity: 1,
              }}
              style={{
                opacity: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              whileHover={{
                scale: 1.2,
                color: "tomato"
              }}
            >
              <svg
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
              >
                <path
                  d="M13 5.5H9.5m0 0V2m0 3.5l4-4M5.5 13V9.5m0 0H2m3.5 0l-4 4"
                  stroke="currentColor"
                ></path>
              </svg>
            </MotionBox>
          ) : (
            <svg
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
            >
              <path
                d="M9.5 9.5H13m-3.5 0V13m0-3.5l4 4m-.5-8H9.5m0 0V2m0 3.5l4-4M2 5.5h3.5m0 0V2m0 3.5l-4-4m4 11.5V9.5m0 0H2m3.5 0l-4 4"
                stroke="currentColor"
              ></path>
            </svg>
          )}
        </span>
        <CodeCopy text={text} />
      </div>
      <div className={sd.code_area}>
        <div className={sd.line_num}>
          <ul>
            {lines > 0 &&
              new Array(lines).fill(0).map((_, i) => {
                return <li key={i}>{i + 1}</li>;
              })}
          </ul>
        </div>

        <pre className={sd.code}>{props.children}</pre>
      </div>
    </MotionBox>
  );
}
