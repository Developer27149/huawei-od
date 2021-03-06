import { Divider } from "@arco-design/web-react";
import { useEffect, useState } from "react";
import { INavbar } from "interfaces";
import sd from "styles/ArticleBar.module.sass";
import MotionBox from "../MotionBox";
import cns from "classnames";
import { scrollToElemById } from "libs/scrollToElem";
import { useGlobalContext } from "contexts/global";

interface IProps {
  navArr: INavbar[];
}

export default function ArticleNav({ navArr }: IProps) {
  const { state, dispatch } = useGlobalContext();
  const handleHiddenArticleNav = (e: React.MouseEvent<HTMLDivElement>) => {
    dispatch({
      type: "navbar",
      payload: !state.showArticleNav,
    });
    e.stopPropagation();
  };
  useEffect(() => {
    let scrollTimer: any;
    document.addEventListener("scroll", () => {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        const ids = navArr.map((i) => i.targetId);
        if (ids.length > 0) {
          const headingElems = ids
            .map((id) => {
              return {
                elem: document.querySelector("#" + id) as HTMLElement,
                id,
              };
            })
            .filter((i) => i.elem !== null);
          headingElems.sort((a, b) => {
            var { x, y } = a.elem.getBoundingClientRect();
            const _aDistance = Math.sqrt(x ** 2 + (y - 100) ** 2);
            var { x, y } = b.elem.getBoundingClientRect();
            const _bDistance = Math.sqrt(x ** 2 + (y - 100) ** 2);
            return _aDistance - _bDistance;
          });
          headingElems.forEach((h, idx) => {
            h.elem.style.color = idx === 0 ? "#4080FF" : "var(--color-text-1)";
          });
        }
      }, 300);
    });
  }, []);

  return (
    <div className={sd.container}>
      <MotionBox
        className={sd.navbar}
        style={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.4,
        }}
      >
        <span className={sd.close} onClick={handleHiddenArticleNav}>
          <svg
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
          >
            <path
              d="M1 1.5h1m5 0h1m2 0h1m2 0h1m-1 3h1m-7 0h1m5 3h1m-4 0h1m-4 0h1m5 3h1m-7 0h1m5 3h1m-4 0h1m-4 0h1m-4 0h1m-4 0h1m-1-3h1m-1-3h1m2 0h1m-4-3h1m2-3h1"
              stroke="currentColor"
            ></path>
          </svg>
        </span>
        <Divider orientation="center" className={sd.title}>
          ??????
        </Divider>
        {navArr.length > 0 &&
          navArr.map((nav, idx) => {
            return (
              <section
                key={idx}
                className={cns(sd[`h${nav.level}`], sd.section)}
              >
                <a href="#" onClick={(e) => scrollToElemById(e, nav.targetId)}>
                  {nav.text}
                </a>
              </section>
            );
          })}
      </MotionBox>
    </div>
  );
}
