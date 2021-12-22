import React, { useContext, useEffect } from "react";
import sd from "styles/Comment.module.sass";
import GithubLogin from "./GithubLogin";
import ReplyComment from "./ReplyComment";
import { useSession, signIn, signOut } from "next-auth/react";
import { Badge, Button, Empty } from "@arco-design/web-react";
import useGithubComment from 'hooks/useGithubComment';
import CommentItem from "./CommentItem";
import { CommentContext } from 'contexts/comment/context';

export default function CustomComment() {
  const session = useSession();
  const { state, dispatch } = useContext(CommentContext);

  // const data = session.data;
  // const comments = useGithubComment(postId);
  useEffect(() => {
    console.log('session is:', session);
    // console.log('session is ', session);
    console.log('comment list is:', state.comments)
    if(session.data?.accessToken) {
      dispatch({type: 'token', payload: session.data.accessToken})
    }
  }, [state, session])
  return (
    <div className={sd.container}>
      <div className={sd.header}>
        <Badge
          count={state.comments?.length || 0}
          maxCount={99}
          dotStyle={{
            transform: "scale(0.7)",
          }}
          offset={[10, 3]}
          style={{
            padding: '6px 14px',
            borderRadius: '6px',
            fontSize: '1.2rem'
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
          {
            state.comments && state.comments.length > 0 ? (
              state.comments.map((i, idx) => (<CommentItem idx={idx} data={i} key={i.id} />))
            ) : <Empty />
          }
      </div>
      <div className={sd.footer}>
        {session.data ? (
          <ReplyComment user={session.data?.user as {}} />
        ) : (
          <GithubLogin login={signIn} />
        )}
      </div>
    </div>
  );
}