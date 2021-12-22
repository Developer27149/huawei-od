import React, { ReactChildren, useEffect } from "react";
import hljs from "highlight.js";

interface IProps {
  children: ReactChildren | JSX.Element | any;
}
export default function Code(props: IProps) {
  useEffect(() => {
    hljs.highlightAll();
  }, []);
  return (
    <pre>{props.children}</pre>
  );
}
