import React, { useEffect, useState } from "react";
import sd from "styles/Comment.module.sass";
// import GithubLogin from "./GithubLogin";
// import ReplyComment from "./ReplyComment";
import { useSession, signIn, signOut } from "next-auth/react";
// import { Badge, Empty } from "@arco-design/web-react";
// import CommentItem from "./CommentItem";
// import { CommentContext } from "contexts/comment/context";
import MotionBox from "components/MotionBox";
import { IconMenuFold, IconMenuUnfold } from "@arco-design/web-react/icon";
import { useGlobalContext } from "contexts/global";
import PublicComment from "components/PublicComment";

export default function CustomComment() {
  // const session = useSession();
  const [isShow, setIsShow] = useState(false);
  // const { state, dispatch } = useContext(CommentContext);
  const { state, dispatch } = useGlobalContext();

  // const handleSwitchShowComment = () => {
  //   console.log('click btn', state)
  //   dispatch({
  //     type: "comment",
  //     showComment: !state.showComment,
  //   });
  // };

  const handleSwitchShowComment = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation();
    dispatch({
      type: "comment",
      payload: !state.showComment,
    });
  };
  // useEffect(() => {
  //   dispatch({
  //     type: "update_token",
  //     payload: {
  //       token: session.data?.accessToken as string | undefined,
  //     },
  //   });
  // }, [session]);
  useEffect(() => {
    setTimeout(() => {
      setIsShow(true);
    }, 2000);
    return () => {
      dispatch({
        type: "comment",
        payload: false,
      });
    }
  }, []);

  return (
    <MotionBox
      className={sd.container}
      style={{
        opacity: 0,
        right: state.showComment ? "-670px" : "0",
        display: isShow ? "" : "none",
        padding: "1rem",
      }}
      animate={{
        opacity: 1,
        right: state.showComment ? 0 : "-670px",
      }}
      transition={{
        duration: 1,
      }}
    >
      <PublicComment />
      <span
        className={sd.header}
        onClick={handleSwitchShowComment}
        style={{
          cursor: "pointer",
        }}
      >
        {state.showComment ? <IconMenuUnfold /> : <IconMenuFold />}

        {/* <Badge
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
        )} */}
      </span>

      {/* <div className={sd.main}>
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
      </div> */}
    </MotionBox>
  );
}
