import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "../styles/About.module.sass";
import MotionBox from "../components/MotionBox";
import OutLink from "../components/OutLink";

const about: NextPage = () => {
  return (
    <div>
      <Head>
        <title>关于本站 - 华为OD机考算法JavaScript题解合集</title>
        <meta name="description" content="我是谁 为什么要建立本站 如何联系我" />
        <link rel="icon" href="/favicon.svg" />
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
              因为想练习算法和准备面试，机缘巧合之下在牛客网刷华为机考算法题。个人感觉牛客的
              JavaScript
              开发者较少，提交的相关题解也不够多，于是自己便在写完一题的时候加上题解，以整理自己的思路，也可以为后来者提供一些帮助。
            </p>
            <p>
              多数开发者都使用 Python 或 C/C++ 来写算法题，JavaScript
              相对较少，于是打算将自己的 JavaScript 题解整合起来，再使用 NextJs
              写一个静态应用发布出来。
            </p>
            <p>
              同时，也将一些已知的其他语言题解整理好的仓库地址收集到这里，以供他用⛽️。
            </p>
            <p>多语言题解合集:</p>
            <div className={styled.list}>
              <OutLink href="/">
                <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="15" height="15"><path d="M11.5 6v-.167c0-.736-.597-1.333-1.333-1.333H9a1.5 1.5 0 100 3h1a1.5 1.5 0 010 3H9A1.5 1.5 0 017.5 9m-2-5v5.264a2 2 0 01-1.106 1.789L3.5 11.5m-2-1v-6l6-3.5 6 3.5v6l-6 3.5-6-3.5z" stroke="currentColor"></path></svg>
              </OutLink>
              <OutLink href="https://github.com/yychdu/HUWAWEI_machine_test">
                <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="15" height="15"><path d="M10 5.5l-.068-.068a3.182 3.182 0 00-2.25-.932H7.5a3 3 0 000 6h.182c.844 0 1.653-.335 2.25-.932L10 9.5m-8.5 1v-6l6-3.5 6 3.5v6l-6 3.5-6-3.5z" stroke="currentColor"></path></svg>
              </OutLink>
              <OutLink href="https://github.com/nicedayzhu/hw-exam-code">
                <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="15" height="15"><path d="M6 2.5h1M4.5 4V1.5a1 1 0 011-1h4a1 1 0 011 1v5a1 1 0 01-1 1h-4a1 1 0 00-1 1v5a1 1 0 001 1h4a1 1 0 001-1V11M8 4.5H1.5a1 1 0 00-1 1v5a1 1 0 001 1h3m2.5-1h6.5a1 1 0 001-1v-5a1 1 0 00-1-1h-3m-2.5 9h1" stroke="currentColor"></path></svg>
              </OutLink>
            </div>
            <p>添加新的或更好的仓库地址?</p>
            <p>👏🏻欢迎联系我</p>
            <div className={styled.list}>
            <OutLink href="mailto: youyiqinyy@gmail.com">
              <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="15" height="15"><path d="M14.5.5l.46.197a.5.5 0 00-.657-.657L14.5.5zm-14 6l-.197-.46a.5.5 0 00-.06.889L.5 6.5zm8 8l-.429.257a.5.5 0 00.889-.06L8.5 14.5zM14.303.04l-14 6 .394.92 14-6-.394-.92zM.243 6.93l5 3 .514-.858-5-3-.514.858zM5.07 9.757l3 5 .858-.514-3-5-.858.514zm3.889 4.94l6-14-.92-.394-6 14 .92.394zM14.146.147l-9 9 .708.707 9-9-.708-.708z" fill="currentColor"></path></svg>
            </OutLink>
            <OutLink href="https://github.com/youyiqin">
              <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="15" height="15"><path d="M5.65 12.477a.5.5 0 10-.3-.954l.3.954zm-3.648-2.96l-.484-.128-.254.968.484.127.254-.968zM9 14.5v.5h1v-.5H9zm.063-4.813l-.054-.497a.5.5 0 00-.299.852l.352-.354zM12.5 5.913h.5V5.91l-.5.002zm-.833-2.007l-.466-.18a.5.5 0 00.112.533l.354-.353zm-.05-2.017l.456-.204a.5.5 0 00-.319-.276l-.137.48zm-2.173.792l-.126.484a.5.5 0 00.398-.064l-.272-.42zm-3.888 0l-.272.42a.5.5 0 00.398.064l-.126-.484zM3.383 1.89l-.137-.48a.5.5 0 00-.32.276l.457.204zm-.05 2.017l.354.353a.5.5 0 00.112-.534l-.466.181zM2.5 5.93H3v-.002l-.5.002zm3.438 3.758l.352.355a.5.5 0 00-.293-.851l-.06.496zM5.5 11H6l-.001-.037L5.5 11zM5 14.5v.5h1v-.5H5zm.35-2.977c-.603.19-.986.169-1.24.085-.251-.083-.444-.25-.629-.49a4.8 4.8 0 01-.27-.402c-.085-.139-.182-.302-.28-.447-.191-.281-.473-.633-.929-.753l-.254.968c.08.02.184.095.355.346.082.122.16.252.258.412.094.152.202.32.327.484.253.33.598.663 1.11.832.51.168 1.116.15 1.852-.081l-.3-.954zm4.65-.585c0-.318-.014-.608-.104-.878-.096-.288-.262-.51-.481-.727l-.705.71c.155.153.208.245.237.333.035.105.053.254.053.562h1zm-.884-.753c.903-.097 1.888-.325 2.647-.982.78-.675 1.237-1.729 1.237-3.29h-1c0 1.359-.39 2.1-.892 2.534-.524.454-1.258.653-2.099.743l.107.995zM13 5.91a3.354 3.354 0 00-.98-2.358l-.707.706c.438.44.685 1.034.687 1.655l1-.003zm-.867-1.824c.15-.384.22-.794.21-1.207l-1 .025a2.12 2.12 0 01-.142.82l.932.362zm.21-1.207a3.119 3.119 0 00-.27-1.195l-.913.408c.115.256.177.532.184.812l1-.025zm-.726-.99c.137-.481.137-.482.136-.482h-.003l-.004-.002a.462.462 0 00-.03-.007 1.261 1.261 0 00-.212-.024 2.172 2.172 0 00-.51.054c-.425.091-1.024.317-1.82.832l.542.84c.719-.464 1.206-.634 1.488-.694a1.2 1.2 0 01.306-.03l-.008-.001a.278.278 0 01-.01-.002l-.006-.002h-.003l-.002-.001c-.001 0-.002 0 .136-.482zm-2.047.307a8.209 8.209 0 00-4.14 0l.252.968a7.209 7.209 0 013.636 0l.252-.968zm-3.743.064c-.797-.514-1.397-.74-1.822-.83a2.17 2.17 0 00-.51-.053 1.259 1.259 0 00-.241.03l-.004.002h-.003l.136.481.137.481h-.001l-.002.001-.003.001a.327.327 0 01-.016.004l-.008.001h.008a1.19 1.19 0 01.298.03c.282.06.769.23 1.488.694l.543-.84zm-2.9-.576a3.12 3.12 0 00-.27 1.195l1 .025a2.09 2.09 0 01.183-.812l-.913-.408zm-.27 1.195c-.01.413.06.823.21 1.207l.932-.362a2.12 2.12 0 01-.143-.82l-1-.025zm.322.673a3.354 3.354 0 00-.726 1.091l.924.38c.118-.285.292-.545.51-.765l-.708-.706zm-.726 1.091A3.354 3.354 0 002 5.93l1-.003c0-.31.06-.616.177-.902l-.924-.38zM2 5.93c0 1.553.458 2.597 1.239 3.268.757.65 1.74.88 2.64.987l.118-.993C5.15 9.09 4.416 8.89 3.89 8.438 3.388 8.007 3 7.276 3 5.928H2zm3.585 3.404c-.5.498-.629 1.09-.584 1.704L6 10.963c-.03-.408.052-.683.291-.921l-.705-.709zM5 11v3.5h1V11H5zm5 3.5V13H9v1.5h1zm0-1.5v-2.063H9V13h1z" fill="currentColor"></path></svg>
            </OutLink>
            </div>
          </MotionBox>
        </div>
        <MotionBox
          className={styled.img}
          animate={{
            opacity: 1,
            top: 50,
          }}
          transition={{
            duration: 1,
            delay: 1.6,
          }}
        >
          <Image
            src="/sad1.jpg"
            className={styled.image}
            width={800}
            height={800}
          />
        </MotionBox>
      </div>
    </div>
  );
};

export default about;
