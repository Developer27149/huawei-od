import React from 'react'

export default function EmojiGenerator({handleClick}: {handleClick: (e: React.MouseEvent<HTMLSpanElement>, emoji: string) => void}) {
  return (
    <>
      {['💩', '🤡', '👹', '👺', '👻', '👽', '👾', '🤖'].map(emoji => {
        return <span style={{
          margin: "8px"
        }} onClick={(e) => handleClick(e, emoji)} key={emoji}>{emoji}</span>
      })}
    </>
  )
}
