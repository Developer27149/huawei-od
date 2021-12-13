import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Button } from "@arco-design/web-react";
import { useCustomTheme } from "../hooks/useCustomTheme";

const about: NextPage = () => {
  const { reverseTheme } = useCustomTheme();
  return (
    <div>
      <Head>
        <title>关于本站</title>
        <meta name="description" content="我是谁 为什么要建立本站 如何联系我" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <h1>我是谁？</h1>
      <Button onClick={reverseTheme} type="dashed">
        Hello
      </Button>
      <code>
        {`
          const demo = () => {
            return 1
          }
          `}
      </code>
    </div>
  );
};

export default about;
