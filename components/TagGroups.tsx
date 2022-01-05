import React from 'react'
import Tag from './CustomTag'
import { randomColorByIdx } from 'libs';
import MotionBox from './MotionBox';

export default function TagGroups({tags}: {tags: {name: string, count?: number}[]}) {
  return (
    <MotionBox style={{
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '8px',
      width: '100%'
    }}>
      {tags.map((tag, idx) => (<Tag count={tag?.count} tag={tag.name} color={randomColorByIdx(idx)} delay={idx / 10} key={tag.name}/>))}
    </MotionBox>
  )
}
