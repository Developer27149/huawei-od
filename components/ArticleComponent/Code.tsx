import React, { useState, ReactChildren, useEffect } from "react";
import sd from "styles/Code.module.sass";
import CodeCopy from "./CodeCopy";
import hljs from "highlight.js";

interface IProps {
  children: ReactChildren | JSX.Element | any;
}
export default function Code(props: IProps) {
  const [lines, setLines] = useState(0);
  const [isJsCode, setIsJsCode] = useState(false);
  const text = props.children.props.children;

  useEffect(() => {
    hljs.highlightAll();
    setLines(text.split("\n").length);
    const classNameStr = props.children.props.className || ""
    if(classNameStr === 'lang-js') {
      setIsJsCode(true);
    }
  }, []);
  return (
    <details open>
      <summary className={sd.summary}>
        Details
      </summary>
        <div
          className={sd.container}          
        > 
          <div className={sd.header}>
            <CodeCopy text={text} />
            {
              isJsCode && <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="15" height="15"><path d="M12.5 8v-.167c0-.736-.597-1.333-1.333-1.333H10a1.5 1.5 0 100 3h1a1.5 1.5 0 010 3h-1A1.5 1.5 0 018.5 11m-2-5v5a1.5 1.5 0 01-3 0M.5.5h14v14H.5V.5z" stroke="currentColor"></path></svg>
            }            
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
        </div>
    </details>
  );
}
