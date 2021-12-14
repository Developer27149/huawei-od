import React, { ReactChild } from "react";
import MotionBox from "./MotionBox";
interface IProps {
  href: string;
  children: ReactChild;
}
export default function OutLink(props: IProps) {
  return (
    <MotionBox
      className="outlink"
      whileHover={{
        scale: 1.3,       
      }}
      transition={{
        duration: 0.4,
      }}
    >
      <a target="_blank" href={props.href}>
        {props.children}
      </a>
    </MotionBox>
  );
}
