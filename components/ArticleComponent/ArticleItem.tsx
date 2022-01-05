import Link from 'next/link'
import React from 'react'
import { Divider, Tag } from '@arco-design/web-react';
import { IconCode } from '@arco-design/web-react/icon';
import MotionBox from "components/MotionBox";
import {randomColorByIdx} from "libs"

export default function ArticleItem({title,idx}: {title: string, idx: number}) {
  const [id, subTitle] = title.split(' ').map(i => i.replace('.', ''))
  return (
    <MotionBox style={{
      opacity: 0,
      position: "relative",
      left: "-3rem",
      cursor: "pointer"
    }} animate={{
      opacity: 1,
      left: 0
    }}
    transition={{
      duration: 0.3,
      delay: idx / 10
    }}    
    >
      <Divider style={{ borderBottomWidth: 2, borderBottomStyle: 'dotted' }} />
      <Link href={`/post/${id}`}>
        <div>
        <Tag color={randomColorByIdx(idx)} icon={<IconCode />} style={{
          minWidth: "3.5rem",
          textAlign: "center"
        }}>
          {id}
          </Tag>
          <span style={{marginLeft: "2rem"}}>
          {subTitle}
          </span>
        </div>
      </Link>      
    </MotionBox>
  )
}
