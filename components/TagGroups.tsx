import React from 'react'
import Tag from './CustomTag'
import { randomColorByIdx } from 'libs';
import MotionBox from './MotionBox';

export default function TagGroups({tags}: {tags: string[]}) {
  return (
    <MotionBox style={{
      display: 'flex',
      justifyContent: 'center',
      gap: '8px'
    }}>
      {tags.map((tag, idx) => (<Tag tag={tag} color={randomColorByIdx(idx)} delay={idx / 10} key={tag}/>))}
    </MotionBox>
  )
}
