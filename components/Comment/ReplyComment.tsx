import { Button, Avatar, Radio, Switch } from "@arco-design/web-react";
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
        <span className={sd.name}>{name}</span>
      </div>
      <textarea
        spellCheck={false}
        maxLength={256}
        minLength={1}
        placeholder="支持 Markdown 样式！"
      />
      <div className={sd.btns}>
        <Button
          size="mini"
          // style={{
          //   color: "#FAAC7B",
          // }}
          type="primary"
        >
          <IconSend />发送
        </Button>
        <Switch checkedText="通知" uncheckedText="勿扰" defaultChecked/>
      </div>
    </div>
  );
}
