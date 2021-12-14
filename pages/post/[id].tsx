import { useRouter } from 'next/router'
import Link from 'next/link'
import Markdown from "markdown-to-jsx"
import { getAllArticleIdArr, getArticleById } from '../../libs/help'
import { IArticleData } from "../../interfaces";
import 'highlight.js/styles/Shades-of-purple.css'
import {useEffect} from 'react';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';

interface IProps {
  articleData: IArticleData
}

type Params = {
  params: {
    id: string
  }
}

const Post = (props: IProps) => {
  const {articleData: {
    title, language, tags, content
  }} = props;
  // useEffect(hljs.highlightAll, [])
  useEffect(() => {
    hljs.registerLanguage('javascript', javascript);
    hljs.registerLanguage('js', javascript);
  }, [])
  return (
    <>
      <h1>Post: {title}</h1>
      <h5>{language}</h5>
      <ul>
        {
          tags && tags.map(tag => (<span key={tag}>{tag}</span>))
        }
      </ul>
      <Markdown options={{  }}>{content}</Markdown>
    </>
  )
}

export default Post

export async function getStaticProps({ params }: Params) {  
  const articleData = await getArticleById(params.id)
  console.log(articleData);
  
  return {
    props: {
      articleData
    },
  }
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// the path has not been generated.
export async function getStaticPaths() {
  const ids: string[] = await getAllArticleIdArr();
  // // Get the paths we want to pre-render based on posts
  const paths = ids.map(id => {
    return {
      params: {id}
    }
  })
  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: false }
}
