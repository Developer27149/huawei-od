import { Divider } from "@arco-design/web-react";
import { useState, useEffect } from "react";
import { INavbar } from "interfaces";
import sd from "styles/ArticleBar.module.sass";
import MotionBox from "../MotionBox";
import cns from 'classnames'
import { scrollToElemById } from 'libs/scrollToElem';

interface IProps {
  navArr: INavbar[];
}

export default function ArticleNav(props: IProps) {
  const [showNavbar, setShowNavbar] = useState(true);
  const { navArr } = props;

  useEffect(() => {
    if(localStorage.article_bar) {
      setShowNavbar(true)
    }
    // init scroll event handle
    let scrollTimer: any;
    document.addEventListener("scroll", () => {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        
      }, 300);
    });
  }, [])

  return (
    <div className={sd.container}>
      {showNavbar ? (
        <MotionBox className={sd.navbar}>
          <Divider orientation="center">
            目录
          </Divider>          
          {
            navArr.length > 0 && navArr.map((nav, idx) => {
              return (
                <section key={idx} className={cns(sd[`h${nav.level}`], sd.section)}>
                  <a href="#" onClick={(e) => scrollToElemById(e, nav.targetId)}>{nav.text}</a>
                </section>
              )
            })
          }
        </MotionBox>
      ) : (
        <MotionBox
          animate={{
            opacity: 1,
          }}
          style={{
            opacity: 0,
            cursor: "pointer"
          }}
          transition={{
            duration: 0.6
          }}
        >
          <svg
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
          >
            <path
              d="M.5 0v14.5H15M5 2.5H2m6 3H3m5 3H5m10 3H8"
              stroke="currentColor"
            ></path>
          </svg>
        </MotionBox>
      )}
    </div>
  );
}
