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
        <Tag color="blue" style={{
          transform: 'scale(0.8)'
        }}>{name.substring(0, 16)}</Tag>
      </div>
      <textarea
        spellCheck={false}
        maxLength={256}
        minLength={1}
        placeholder="支持 Markdown 样式！"
      />
      <div className={sd.btns}>
        <Button size="mini" type="primary">
          <IconSend />
          发送
        </Button>
        <Popover
          style={{
            fontSize: "10px",
            transform: 'scale(0.6)'
          }}
          title="通知"
          position="left"
          content={<span>有人回复您的评论时，尽可能通过邮件告知</span>}
        >
          <Switch checkedText="Email" uncheckedText="勿扰" defaultChecked />
        </Popover>
      </div>
    </div>
  );
}
