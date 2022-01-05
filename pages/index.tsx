import Head from "next/head";
import Image from "next/image";
import MotionBox from "components/MotionBox";
import TagGroups from "components/TagGroups";
import TypeIt from "typeit-react";
import { getAllTags } from "libs/help";
import sd from "styles/Home.module.sass"

interface IProps {
  tagsRecord: {
    [tag: string]: string[];
  };
}

const Home = ({ tagsRecord }: IProps) => {
  return (
    <div>
      <Head>
        <title>华为 OJ JavaScript 题解分享</title>
        <meta name="description" content="华为 OJ JavaScript 题解" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <main>
        <div
          style={{
            textAlign: "center",
            fontSize: "1.3rem",
            fontWeight: "bolder",
          }}
        >
          <TypeIt
            options={{
              strings: ["Huawei OJ - JavaScript Solutions"],
              speed: 60,
              waitUntilVisible: true,
            }}
          />
        </div>
        <MotionBox
          animate={{ y: 15, scale: 0.97 }}
          transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
          style={{
            margin: "0px auto",
            maxWidth: "min(400px, 90vw)",
          }}
        >
          <Image
            src="/js.svg"
            width={400}
            height={400}
            alt="Launching Illustration"
          />
        </MotionBox>
        <div className={sd.main}>
          <TagGroups
            tags={Object.keys(tagsRecord).map((key) => {
              return {
                name: key,
                count: tagsRecord[key].length,
              };
            })}
          />
        </div>
      </main>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const tagsRecord = await getAllTags();
  return {
    props: {
      tagsRecord,
    },
  };
}
