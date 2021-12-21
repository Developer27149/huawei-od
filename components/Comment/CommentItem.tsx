import { Comment,Avatar } from '@arco-design/web-react'
import MotionBox from 'components/MotionBox.js'
import React from 'react'
interface IProp {
  username: string,
  avatarUrl: string,
  content: string,
  datetime: string,
}
export default function CommentItem({username, avatarUrl, content, datetime}: IProp) {
  return (
    <MotionBox>
      <Comment author={username}
        avatar={
          <Avatar>
            <img src={avatarUrl} alt={username} />
          </Avatar>
        }
      />
    </MotionBox>
  )
}
