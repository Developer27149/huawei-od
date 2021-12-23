import React, { useContext, useEffect } from "react";
import sd from "styles/Comment.module.sass";
import GithubLogin from "./GithubLogin";
import ReplyComment from "./ReplyComment";
import { useSession, signIn, signOut } from "next-auth/react";
import { Badge, Button, Empty } from "@arco-design/web-react";
import CommentItem from "./CommentItem";
import { CommentContext } from "contexts/comment/context";
import { AppGlobalContext } from "contexts/global";
import MotionBox from "components/MotionBox";

export default function CustomComment() {
  const session = useSession();
  const { state, dispatch } = useContext(CommentContext);
  const globalContext = useContext(AppGlobalContext);

  useEffect(() => {
    console.log("session is:", session);
    console.log("comment list is:", state);
    dispatch({
      type: "update_token",
      payload: {
        token: session.data?.accessToken as string | undefined,
      },
    });
  }, [session]);

  useEffect(() => {
    console.log(globalContext.state.showComment);
  }, [globalContext.state]);
  return (
    <MotionBox
      className={sd.container}
      style={{
        display: globalContext.state.showComment ? "flex" : "none",
        opacity: 0.6,
        right: globalContext.state.showComment ? "0" : "-100%"
      }}
      animate={
        globalContext.state.showComment ? {
          opacity: 1,
          right: 0
        } : {}
      }
      transition={{
        duration: 0.5
      }}
    >
      <div className={sd.header}>
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
          <Button
            onClick={() => signOut()}
            size="mini"
            type="secondary"
            status="success"
            shape="round"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
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
            EXIT
          </Button>
        )}
      </div>
      <div className={sd.main}>
        {state.comments && state.comments.length > 0 ? (
          state.comments.map((i, idx) => (
            <CommentItem idx={idx} data={i} key={i.id} />
          ))
        ) : (
          <Empty />
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
