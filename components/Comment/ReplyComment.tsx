import { Button, Avatar, Popover, Notification } from "@arco-design/web-react";
import React, { useContext, useState } from "react";
import sd from "styles/ReplyComment.module.sass";
import { IconSend } from "@arco-design/web-react/icon";
import { CommentContext } from "contexts/comment/context";
import { createCommentForArticle } from "libs/comment.help";
import EmojiGenerator from "./EmojiGenerator";
import axios from "axios";

export default function ReplyComment({
  user,
}: {
  user: {
    name?: string;
    email?: string;
    image?: string;
  };
}) {
  const [loading, setLoading] = useState(false);
  const { image, name } = user;
  const { state, dispatch } = useContext(CommentContext);
  const handleMsgChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const msg = e.target.value;
    dispatch({
      type: "update_msg",
      payload: {
        msg,
      },
    });
  };

  const handleCreateAComment = async () => {
    const { issueNumber, identy } = state;
    const msg =
      /^#(\d+) /.test(state.msg) && state.comments.length >= ~~RegExp.$1
        ? state.msg.replace(
            /^#\d+ /,
            `> ${state.comments[Number(RegExp.$1) - 1]["content"]}\n\n`
          )
        : state.msg;
    console.log(issueNumber, msg)
    if (msg.length === 0) {
      Notification.warning({
        title: `${name} 😂`,
        content: `你啥也没说`,
        position: "bottomRight",
      });
    } else {
      if (!issueNumber) {
        setLoading(true);
        const {
          data: { success, issue_number },
        } = await axios.post("/api/issue?id=" + state.pathId);
        if (success) {
          dispatch({
            type: "update_issue_number",
            payload: {
              issueNumber: issue_number,
            },
          });        
        }
      }
      createCommentForArticle(state.issueNumber, identy, msg).then(() => {
        setLoading(false);
      });
      dispatch({
        type: "update_comments",
        payload: {
          comments: [
            {
              username: name as string,
              avatarUrl: image as string,
              content: msg.replace(/^#\d+ /, ""),
              datetime: new Date().toISOString(),
              id: ~~(Math.random() * 10 ** 6),
              reactions: {
                "+1": 0,
                "-1": 0,
                confused: 0,
                eyes: 0,
                heart: 0,
                hooray: 0,
                laugh: 0,
                rocket: 0,
                total_count: 0,
                url: "dsadasdda",
              },
            },
            ...state.comments,
          ],
        },
      });
      dispatch({
        type: "update_msg",
        payload: {
          msg: "",
        },
      });
    }
  };

  const handleAppendToMsg = (
    e: React.MouseEvent<HTMLSpanElement>,
    emoji: string
  ) => {
    e.stopPropagation();
    dispatch({
      type: "update_msg",
      payload: {
        msg: `${state.msg || ""}${emoji}`,
      },
    });
  };
  return (
    <div className={sd.container}>
      <div className={sd.profile}>
        <Avatar size={28}>
          <img alt="头像" src={image} />
        </Avatar>
      </div>
      <textarea
        spellCheck={false}
        maxLength={256}
        minLength={1}
        placeholder='使用 "#n" 开头可以回复指定评论哦😯'
        value={state.msg}
        onChange={handleMsgChange}
      />
      <Button
        size="mini"
        type="primary"
        className={sd.send}
        onClick={handleCreateAComment}
        loading={loading}
      >
        <IconSend />
        发送
      </Button>
      <div className={sd.md}>
        <svg
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
        >
          <path
            d="M2.5 5.5l.354-.354A.5.5 0 002 5.5h.5zm2 2l-.354.354.354.353.354-.353L4.5 7.5zm2-2H7a.5.5 0 00-.854-.354L6.5 5.5zm4 4l-.354.354.354.353.354-.353L10.5 9.5zM1.5 3h12V2h-12v1zm12.5.5v8h1v-8h-1zm-.5 8.5h-12v1h12v-1zM1 11.5v-8H0v8h1zm.5.5a.5.5 0 01-.5-.5H0A1.5 1.5 0 001.5 13v-1zm12.5-.5a.5.5 0 01-.5.5v1a1.5 1.5 0 001.5-1.5h-1zM13.5 3a.5.5 0 01.5.5h1A1.5 1.5 0 0013.5 2v1zm-12-1A1.5 1.5 0 000 3.5h1a.5.5 0 01.5-.5V2zM3 10V5.5H2V10h1zm-.854-4.146l2 2 .708-.708-2-2-.708.708zm2.708 2l2-2-.708-.708-2 2 .708.708zM6 5.5V10h1V5.5H6zm4-.5v4.5h1V5h-1zM8.146 7.854l2 2 .708-.708-2-2-.708.708zm2.708 2l2-2-.708-.708-2 2 .708.708z"
            fill="currentColor"
          ></path>
        </svg>
        <Popover
          content={
            <div
              style={{
                cursor: "pointer",
              }}
            >
              <EmojiGenerator handleClick={handleAppendToMsg} />
            </div>
          }
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
        </Popover>
      </div>
    </div>
  );
}
