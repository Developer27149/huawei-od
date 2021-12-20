import Markdown from "markdown-to-jsx";
import { getAllArticleIdArr, getArticleById } from "libs/help";
import { IArticleData } from "interfaces";
import Code from "components/Code";
import sd from "styles/Article.module.sass";
import { convertTextToValidId } from "libs";
import ArticleNav from "components/ArticleComponent/ArticleNav";
import Menu from "components/Menu";
import ThemeBtn from "components/Menu/ThemeBtn";
import ArticleNavBtn from "components/Menu/ArticleNavBtn";
import Title from "components/ArticleComponent/Title";
import Comment from "components/Comment";

interface IProps {
  articleData: IArticleData;
}
interface IRecord {
  [key: string]: number;
}

type Params = {
  params: {
    id: string;
  };
};

const Post = (props: IProps) => {
  const {
    articleData: { title, tags = [], content, navArr },
  } = props;

  return (
    <>
      <Menu>
        <>
          <ThemeBtn />
          <ArticleNavBtn />
        </>
      </Menu>
      <div className={sd.atricle}>
        <Title title={title} tags={tags} />
        <ArticleNav navArr={navArr} />
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
        <Comment />
      </div>
    </>
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
