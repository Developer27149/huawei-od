import { getAllTags } from "libs/help";
import { useEffect } from 'react';
import ArticleItem from 'components/ArticleComponent/ArticleItem'
import { Divider } from '@arco-design/web-react';
// 读取当前标签下的所有文章

type Params = {
  params: {
    id: string;
  };
};

export default function tag({tagsRecord, id}: {tagsRecord: {[tag: string]: string[]}, id: string}) {
  useEffect(() => {
    console.log(tagsRecord, id);
  }, [])
  return (
    <div style={{
      width: "min(760px, 90vw)",
      margin: '0 auto',
    }}>
      <h3 style={{textAlign: 'center'}}>
        tag: {id}
      </h3>
      {
        tagsRecord[id].map((title, idx) => (
          <ArticleItem title={title.trim()} key={idx} idx={idx}/>
        ))
      }
      <Divider style={{ borderBottomWidth: 2, borderBottomStyle: 'dotted' }} />
    </div>
  )
}

export async function getStaticProps({ params }: Params) {
  const tagsRecord = await getAllTags();  
  return {
    props: {
      tagsRecord,
      id: params.id
    },
  };
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// the path has not been generated.
export async function getStaticPaths() {
  const tagsRecord = await getAllTags();
  // // Get the paths we want to pre-render based on posts
  const paths = Object.keys(tagsRecord).map((id) => {
    return {
      params: { id },
    };
  });
  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: false };
}
