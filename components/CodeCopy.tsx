import React, { useState } from "react";
import MotionBox from "./MotionBox";
import { copyText } from "../libs/copy";
import sd from "../styles/CopyCode.module.sass";

interface IProps {
  text: string;
}
export default function CodeCopy(props: IProps) {
  const [isCopy, setIsCopy] = useState(false);
  const handleCopyAction = async () => {
    const { success } = await copyText(props.text);
    setIsCopy(success);
  };
  return (
    <div className={isCopy ? sd.ok : sd.normal}>
      {isCopy ? (
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
        >
          <svg
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
          >
            <path
              d="M4.9 8.7l-.3-.4-.8.6.3.4.8-.6zm6 .6l.3-.4-.8-.6-.3.4.8.6zM7.5 14A6.5 6.5 0 011 7.5H0A7.5 7.5 0 007.5 15v-1zM14 7.5A6.5 6.5 0 017.5 14v1A7.5 7.5 0 0015 7.5h-1zM7.5 1A6.5 6.5 0 0114 7.5h1A7.5 7.5 0 007.5 0v1zm0-1A7.5 7.5 0 000 7.5h1A6.5 6.5 0 017.5 1V0zM4 6h1V5H4v1zm6 0h1V5h-1v1zm.1 2.7a3.25 3.25 0 01-5.2 0l-.8.6c1.7 2.267 5.1 2.267 6.8 0l-.8-.6z"
              fill="currentColor"
            ></path>
          </svg>
        </MotionBox>
      ) : (
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
          onClick={handleCopyAction}
        >
          <svg
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
          >
            <path
              d="M11 1.5h2.5v12a1 1 0 01-1 1h-10a1 1 0 01-1-1v-12H4m.5-1h6v2a1 1 0 01-1 1h-4a1 1 0 01-1-1v-2z"
              stroke="currentColor"
            ></path>
          </svg>
        </MotionBox>
      )}
    </div>
  );
}
