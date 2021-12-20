import { Button, Avatar, Switch, Popover, Tag } from "@arco-design/web-react";
import React from "react";
import sd from "styles/ReplyComment.module.sass";
import { IconSend } from "@arco-design/web-react/icon";

export default function ReplyComment({
  logout,
  user,
}: {
  logout: Function;
  user: {
    name: string;
    email: string;
    image: string;
  };
}) {
  const { email, image, name } = user;
  return (
    <div className={sd.container}>
      <div className={sd.profile}>
        <Avatar size={28}>
          <img alt="头像" src={image} />
        </Avatar>
        {/* <Tag color="blue" style={{
          transform: 'scale(0.8)'
        }}>{name.substring(0, 16)}</Tag> */}
        <Popover
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
        </Popover>
      </div>
      <textarea
        spellCheck={false}
        maxLength={256}
        minLength={1}
        placeholder="支持 Markdown 样式！"
      />
      <Button size="mini" type="primary" className={sd.btns}>
          <IconSend />
          发送
        </Button>
    </div>
  );
}
