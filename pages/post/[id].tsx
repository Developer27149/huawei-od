import Markdown from "markdown-to-jsx";
import { getAllArticleIdArr, getArticleById } from "libs/help";
import { IArticleData } from "interfaces";
import { useEffect, useState } from "react";
import Code from "components/Code";
import sd from "styles/Article.module.sass";
import { convertTextToValidId } from "libs";
import dynamic from 'next/dynamic'
// components/MyChart.js contains the recharts chart
const ArticleNav = dynamic(
    () => import('components/ArticleComponent/ArticleNav'),
    { ssr: false }
  )

interface IProps {
  articleData: IArticleData;
}
interface IRecord {
  [key:string]: number,
}

type Params = {
  params: {
    id: string;
  };
};



const Post = (props: IProps) => {
  const {
    articleData: { title, tags, content, navArr },
  } = props;
  

  return (
    <div className={sd.atricle}>
      <h1>Post: {title}</h1>
      <ul>{tags && tags.map((tag) => <span key={tag}>{tag}</span>)}</ul>
      <Markdown
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
      <ArticleNav navArr={navArr} />
    </div>
  );
};

export default Post;

export async function getStaticProps({ params }: Params) {
  const articleData = await getArticleById(params.id);
  return {
    props: {
      articleData,
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
