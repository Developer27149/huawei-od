import { Avatar, Button, Popover, Notification } from "@arco-design/web-react";
import MotionBox from "components/MotionBox";
import {
  getReactionEmojiByName,
  setReactionForComment,
} from "libs/comment.help";
import Markdown from "markdown-to-jsx";

import { IComment, reactionsOptions } from "interfaces";
import sd from "styles/CommentItem.module.sass";
import CommentCode from "components/Comment/CommentCode";
import { useContext } from "react";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/zh-cn";
import { CommentContext } from "contexts/comment/context";
import axios from "axios";
dayjs.extend(relativeTime);
dayjs.locale("zh-cn");

interface IProp {
  data: IComment;
  idx: number;
}

export default function CommentItem({
  data: { username, avatarUrl, content, datetime, id, reactions },
  idx,
}: IProp) {
  const options = {
    overrides: {
      pre: {
        component: CommentCode,
      },
    },
  };

  const {
    state: { identy, pathId },
    dispatch,
  } = useContext(CommentContext);

  const handleNeedLogin = () => {
    Notification.warning({
      title: "Tip 😞",
      content: "登录后才可以留言或点表情",
      position: "bottomRight",
    });
  };

  const successCallback = async () => {
    try {
      const {
        data: { data },
      } = await axios.get("/api/comment?comment_keyword=" + pathId);
      dispatch({
        type: "update_comments",
        payload: {
          comments: data,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const actions = Object.entries(reactions)
    .filter(
      (item) => item[1] > 0 && item[0] !== "url" && item[0] !== "total_count"
    )
    .map((item) => {
      const [key, count] = item as [reactionsOptions, number];
      return (
        <Popover content={key} key={key} position="left">
          <Button
            size="mini"
            status="success"
            type="secondary"
            icon={getReactionEmojiByName(key)}
            style={{
              transform: "scale(0.8)",
            }}
            shape="round"
            onClick={() =>
              setReactionForComment({
                id,
                action: key,
                identy,
                callback: handleNeedLogin,
                successCallback,
              })
            }
          >
            {` ${count}`}
          </Button>
        </Popover>
      );
    });
  return (
    <MotionBox className={sd.container}>
      <div className={sd.header}>
        <Avatar>
          <img src={avatarUrl} alt={username} />
        </Avatar>
        <div>
          <a
            target="_blank"
            href={`https://github.com/${username}`}
            className={sd.name}
          >
            @{username}
          </a>
          <div className={sd.datetime}>{dayjs(datetime).toNow()}</div>
        </div>
        <div className={sd.add}>
          <Popover
            trigger="hover"
            position="left"
            content={
              <div
                style={{
                  width: "8rem",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "1rem",
                  justifyContent: "center",
                  cursor: "pointer",
                  userSelect: "none",
                }}
              >
                {Object.keys(reactions)
                  .filter((i) => i !== "url" && i !== "total_count")
                  .map((i) => {
                    return (
                      <div
                        key={i}
                        className={sd.emoji}
                        onClick={() =>
                          setReactionForComment({
                            id,
                            action: i as reactionsOptions,
                            identy,
                            callback: handleNeedLogin,
                            successCallback,
                          })
                        }
                      >
                        {getReactionEmojiByName(i as reactionsOptions)}
                      </div>
                    );
                  })}
              </div>
            }
          >
            😁
          </Popover>
          <span className={sd.idx}>#{idx + 1}</span>
        </div>
      </div>
      <Markdown className={sd.content} options={options}>
        {content}
      </Markdown>
      <div className={sd.reactions}>{actions.map((i) => i)}</div>
    </MotionBox>
  );
}
