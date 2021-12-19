
import React from "react";
import MotionBox from "./MotionBox";
import { Tag } from "@arco-design/web-react";


export default function CustomTag({ tag, color, delay }: { tag: string, color: string, delay: number }) {
  return (
    <MotionBox animate={{
      opacity: 1,
      scale: 1
    }}
    transition={{
      duration: 0.4,
      delay,
    }}
    style={{
      opacity: 0.1,
      scale: 0
    }}
    ><Tag color={color}>{tag}</Tag></MotionBox>
  );
}
