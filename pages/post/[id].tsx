import Head from "next/head";
import { useRef } from "react";
import Markdown from "markdown-to-jsx";
import {
  getAllArticleIdArr,
  getArticleById,
  getCommentsByIdAndIssueNumber,
} from "libs/help";
import Code from "components/ArticleComponent/Code";
import sd from "styles/Article.module.sass";
import { convertTextToValidId } from "libs";
import Menu from "components/Menu";
import ThemeBtn from "components/Menu/ThemeBtn";
import ArticleNavBtn from "components/Menu/ArticleNavBtn";
import Title from "components/ArticleComponent/Title";
import { owner, repo } from "libs/public";
import { IProps } from "interfaces/index";
import { CommentProvider, IInitState } from "contexts/comment/context";
import { useReducer } from "react";
import { commentReducer } from "contexts/comment/reducer";
import { useSession } from "next-auth/react";
import CommentBtn from "components/Menu/CommentBtn";
import dynamic from "next/dynamic";
import { useGlobalContext } from "contexts/global";

const ArticleNav = dynamic(
  () => import("components/ArticleComponent/ArticleNav")
);
const CustomComment = dynamic(() => import("components/Comment"));
type Params = {
  params: {
    id: string;
  };
};

const Post = (props: IProps) => {
  const {
    articleData: { title, tags = [], content, navArr },
    comments,
    repo,
    owner,
    id,
    issueNumber,
  } = props;
  const articleBoxRef = useRef<HTMLDivElement>(null);

  const session = useSession();
  const globalContext = useGlobalContext();
  // eslint-nextline-disable
  const [state, dispatch] = useReducer<any>(commentReducer, {
    identy: {
      owner,
      repo,
      token: session.data?.accessToken || "",
    },
    comments,
    pathId: id,
    issueNumber,
    msg: "",
  });

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="华为 OJ JavaScript 题解" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Menu>
        <>
          <ThemeBtn />
          <ArticleNavBtn />
          <CommentBtn />
        </>
      </Menu>
      <div className={sd.atricle} ref={articleBoxRef}>
        <Title title={title} tags={tags} />
        {globalContext.state.showArticleNav && <ArticleNav navArr={navArr} />}
        <Markdown
          className={sd.content}
          options={{
            overrides: {
              pre: {
                component: Code,
              },
            },
            slugify: convertTextToValidId,
          }}
        >
          {content}
        </Markdown>
        {/* <PublicComment /> */}
        <CustomComment />
        {/* <CommentProvider value={{ state: state, dispatch }}>
          <CustomComment />
        </CommentProvider> */}
      </div>
    </>
  );
};

export default Post;

export async function getStaticProps({ params }: Params) {
  const { id } = params;
  const articleData = await getArticleById(id);
  const { comments, issueNumber = null } = await getCommentsByIdAndIssueNumber(
    `key${id}`
  );
  return {
    props: {
      articleData,
      id,
      comments,
      owner,
      repo,
      issueNumber,
    },
  };
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// the path has not been generated.
export async function getStaticPaths() {
  const ids: string[] = await getAllArticleIdArr();
  // // Get the paths we want to pre-render based on posts
  const paths = ids.map((id) => {
    return {
      params: { id },
    };
  });
  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: false };
}
