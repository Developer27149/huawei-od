import React, { useContext, useEffect,useState } from "react";
import sd from "styles/Comment.module.sass";
import GithubLogin from "./GithubLogin";
import ReplyComment from "./ReplyComment";
import { useSession, signIn, signOut } from "next-auth/react";
import { Badge, Button, Empty } from "@arco-design/web-react";
import CommentItem from "./CommentItem";
import { CommentContext } from "contexts/comment/context";
import MotionBox from "components/MotionBox";
import { IconMenuFold } from "@arco-design/web-react/icon";
import { useGlobalContext } from "contexts/global";

export default function CustomComment() {
  const session = useSession();
  const [isShow, setIsShow] = useState(false);
  const { state, dispatch } = useContext(CommentContext);
  const globalContext = useGlobalContext();
  const handleSwitchShowComment = () => {
    globalContext.dispatch({ type: "comment", showComment: false });
  };

  useEffect(() => {
    dispatch({
      type: "update_token",
      payload: {
        token: session.data?.accessToken as string | undefined,
      },
    });
  }, [session]);
  useEffect(() => {
    setTimeout(() => {
      setIsShow(true)
    }, 2000)
  }, [])

  return (
    <MotionBox
      className={sd.container}
      style={{
        opacity: 0,
        right: globalContext.state.showComment ? "-570px" : "0",
        display: isShow ? '' : "none"
      }}
      animate={{
        opacity: 1,
        right: globalContext.state.showComment ? 0 : "-570px",
      }}
      transition={{
        duration: 1,
      }}
    >
      <div className={sd.header}>
        <IconMenuFold
          onClick={handleSwitchShowComment}
          style={{
            cursor: "pointer",
          }}
        />
        <Badge
          count={state.comments?.length || 0}
          maxCount={99}
          dotStyle={{
            transform: "scale(0.7)",
          }}
          offset={[10, 3]}
          style={{
            padding: "6px 14px",
            borderRadius: "6px",
            fontSize: "1.2rem",
          }}
        >
          讨论
        </Badge>
        {session.data && (
          <span
            style={{
              cursor: "pointer",
            }}
            onClick={() => {
              signOut();
            }}
          >
            <svg
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
            >
              <path
                d="M13.5 7.5l-3 3.25m3-3.25l-3-3m3 3H4m4 6H1.5v-12H8"
                stroke="currentColor"
              ></path>
            </svg>
          </span>
        )}
      </div>
      <div className={sd.main}>
        {state.comments && state.comments.length > 0 ? (
          state.comments.map((i, idx) => (
            <CommentItem idx={idx} data={i} key={i.id} />
          ))
        ) : (
          <Empty description="还没有人留下痕迹😌" />
        )}
      </div>
      <div className={sd.footer}>
        {session.data ? (
          <ReplyComment user={session.data?.user as {}} />
        ) : (
          <GithubLogin login={signIn} />
        )}
      </div>
    </MotionBox>
  );
}
