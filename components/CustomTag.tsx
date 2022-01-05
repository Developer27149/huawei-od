import React from "react";
import MotionBox from "./MotionBox";
import { Tag, Avatar } from "@arco-design/web-react";
import Link from "next/link";

export default function CustomTag({
  tag,
  color,
  delay,
  count,
}: {
  tag: string;
  color: string;
  delay: number;
  count?: number;
}) {
  return (
    <MotionBox
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.4,
        delay,
      }}
      style={{
        opacity: 0.1,
        scale: 0,
        cursor: "pointer",
        margin: "2px 4px",
      }}
    >
      <Link href={`/tags/${tag}`}>
        <Tag
          style={{
            padding: '0 10px'
          }}
          icon={
            count ? <Avatar
            style={{
              backgroundColor: "#e5b3b3",
              width: "12px",
              height: "12px",
              fontSize: "14px",
              position: 'relative',
              bottom: '2px',
              opacity: '0.5'
            }}
          >
            {count}
          </Avatar> : null
          }
          color={color}
        >
          {tag}
        </Tag>
      </Link>
    </MotionBox>
  );
}
