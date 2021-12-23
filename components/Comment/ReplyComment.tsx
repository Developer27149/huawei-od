import {
  Button,
  Avatar,
  Switch,
  Popover,
  Tag,
  Notification,
} from "@arco-design/web-react";
import React, { useContext } from "react";
import sd from "styles/ReplyComment.module.sass";
import { IconSend } from "@arco-design/web-react/icon";
import { CommentContext } from "contexts/comment/context";
import { createCommentForArticle } from "libs/comment.help";

export default function ReplyComment({
  user,
}: {
  user: {
    name?: string;
    email?: string;
    image?: string;
  };
}) {
  const { image, name } = user;
  const { state, dispatch } = useContext(CommentContext);
  const handleMsgChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const msg = e.target.value;
    console.log(msg)
    dispatch({
      type: "update_msg",
      payload: {
        msg,
      },
    });
  };

  const handleCreateAComment = () => {
    const { issueNumber, identy } = state;
    const msg = state.msg;
    if (msg && issueNumber) {
      createCommentForArticle(issueNumber, identy, msg);
      dispatch({
        type: "update_comments",
        payload: {
          comments: [            
            {
              username: name as string,
              avatarUrl: image as string,
              content: msg,
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
          msg: ""
        }
      })
    } else {
      Notification.warning({
        title: `${name} 😂`,
        content: `你啥也没说`,
        position: "bottomRight",
      });
    }
  };
  return (
    <div className={sd.container}>
      <div className={sd.profile}>
        <Avatar size={28}>
          <img alt="头像" src={image} />
        </Avatar>
        {/* <Popover
          style={{
            fontSize: "10px",
            transform: "scale(0.6)",
          }}
          title="通知"
          position="right"
          content={<span>有人回复您的评论时，尽可能通过邮件告知</span>}
        >
          <Switch
            style={{
              fontSize: "10px",
              transform: "scale(0.6)",
            }}
            checkedText="Email"
            uncheckedText="勿扰"
            defaultChecked
          />
        </Popover> */}
      </div>
      <textarea
        spellCheck={false}
        maxLength={256}
        minLength={1}
        placeholder="支持 Markdown 样式！"
        value={state.msg}
        onChange={handleMsgChange}
      />
      <Button
        size="mini"
        type="primary"
        className={sd.btns}
        onClick={handleCreateAComment}
      >
        <IconSend />
        发送
      </Button>
    </div>
  );
}
