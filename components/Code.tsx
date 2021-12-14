import React, { useState,ReactChildren,useEffect } from 'react'
import MotionBox from './MotionBox';
import sd from '../styles/Code.module.sass'
import CodeCopy from './CodeCopy';
import hljs from 'highlight.js'
import "highlight.js/styles/Shades-of-purple.css";


interface IProps {
  children: ReactChildren | JSX.Element | any;
}
export default function Code(props: IProps) {
  const [lines, setLines] = useState(0);
  const text = props.children.props.children;
  useEffect(() => {
    hljs.highlightAll()
    setLines(text.split('\n').length)
  }, [])
  return (
    <MotionBox className={sd.container}>
      <div className={sd.header}>
        <span>1</span>
        <CodeCopy text={text}/>
      </div>
      <div className={sd.code_area}>
        <div className={sd.line_num}>
          <ul>
          {
            lines > 0 && new Array(lines).fill(0).map((_, i) => {
              return (
                <li key={i}>
                  {i+1}
                </li>
              )
            })
          }
          </ul>
        </div>
    
          <pre className={sd.code}>
          {
            props.children
          }
        </pre>  
       
      </div>
    </MotionBox>
  )
}
