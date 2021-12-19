import TagGroups from 'components/TagGroups';
import React from 'react'
import MotionBox from '../MotionBox';

export default function Title({title, tags}: {title: string, tags: string[]}) {
  return (
    <MotionBox style={{
      textAlign: 'center'
    }}>      
      <h1>
        {title}
      </h1>
      <TagGroups tags={tags}/>
    </MotionBox>
  )
}
