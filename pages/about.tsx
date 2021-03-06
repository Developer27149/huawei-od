import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "../styles/About.module.sass";
import MotionBox from "../components/MotionBox";
import OutLink from "../components/OutLink";
import TypeIt from "typeit-react";

const about: NextPage = () => {
  return (
    <div>
      <Head>
        <title>关于本站 - 华为 OJ 机考算法JavaScript题解合集</title>
        <meta name="description" content="我是谁 为什么要建立本站 如何联系我" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <div className={styled.container}>
        <div className={styled.main}>
          <MotionBox
            className={styled.intro}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 1.4,
            }}
          >
            <h2>ok，你好</h2>
            <h3>我是妙才，一个初级开发者。</h3>
          </MotionBox>
          <MotionBox
            className={styled.detail}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 1.4,
              delay: 1,
            }}
          >
            <p>
              我在牛客网刷了一圈华为 OJ 的题，最终整理了 JavaScript 题解示例在此。
            </p>
            <p>题解不算详细，不过能保证都通过了所有的测试用例。总之，希望能帮到你。</p>
            <p>
              同时，也将一些已知的其他语言题解整理好的仓库地址收集到这里，以供他用⛽️。
            </p>
            <div className={styled.list}>
              <OutLink href="/">
                <svg
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                >
                  <path
                    d="M11.5 6v-.167c0-.736-.597-1.333-1.333-1.333H9a1.5 1.5 0 100 3h1a1.5 1.5 0 010 3H9A1.5 1.5 0 017.5 9m-2-5v5.264a2 2 0 01-1.106 1.789L3.5 11.5m-2-1v-6l6-3.5 6 3.5v6l-6 3.5-6-3.5z"
                    stroke="currentColor"
                  ></path>
                </svg>
              </OutLink>
              <OutLink href="https://github.com/yychdu/HUWAWEI_machine_test">
                <svg
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                >
                  <path
                    d="M10 5.5l-.068-.068a3.182 3.182 0 00-2.25-.932H7.5a3 3 0 000 6h.182c.844 0 1.653-.335 2.25-.932L10 9.5m-8.5 1v-6l6-3.5 6 3.5v6l-6 3.5-6-3.5z"
                    stroke="currentColor"
                  ></path>
                </svg>
              </OutLink>
              <OutLink href="https://github.com/nicedayzhu/hw-exam-code">
                <svg
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                >
                  <path
                    d="M6 2.5h1M4.5 4V1.5a1 1 0 011-1h4a1 1 0 011 1v5a1 1 0 01-1 1h-4a1 1 0 00-1 1v5a1 1 0 001 1h4a1 1 0 001-1V11M8 4.5H1.5a1 1 0 00-1 1v5a1 1 0 001 1h3m2.5-1h6.5a1 1 0 001-1v-5a1 1 0 00-1-1h-3m-2.5 9h1"
                    stroke="currentColor"
                  ></path>
                </svg>
              </OutLink>
            </div>
            <p>添加新的或更好的仓库地址?👏🏻欢迎联系我。</p>
          </MotionBox>
        </div>
        <MotionBox
        animate={{ y: 15, scale: 0.97 }}
        transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
        className={styled.img}
      >
        <Image
          src="/js.svg"
          width={400}
          height={400}
          alt="Launching Illustration"
        />
      </MotionBox>
      </div>
      
    </div>
  );
};

export default about;
