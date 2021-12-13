import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import MotionBox from "../MotionBox";

export default function HeaderNavs() {
  const [activeId, setActiveId] = useState(3);
  const router = useRouter();
  const handleUrlChange = (url: string) => {
    if (url.endsWith("/about")) {
      setActiveId(2);
    } else if (url.endsWith("/search")) {
      setActiveId(1);
    } else if (url === "/") {
      setActiveId(0);
    }
  }
  useEffect(() => {
    handleUrlChange(location.href);
    router.events.on("routeChangeComplete", handleUrlChange);
    return () => {
      router.events.off('routeChangeComplete', handleUrlChange);
    }
  }, []);
  
  return (
    <MotionBox
      style={{
        fontWeight: "bolder",
        opacity: 0,
        position: "relative",
        top: -20,        
      }}
      animate={{
        opacity: 1,
        scale: 1,
        top: 0,
      }}
      transition={{
        duration: 0.6,
        repeat: 0,
        delay: 0,        
      }}
    >
      <span className={activeId === 0 ? "active" : ""}>
        <Link href="/">首页</Link>
      </span>
      <span className={activeId === 1 ? "active" : ""}>
        <Link href="/search">搜索</Link>
      </span>
      <span className={activeId === 2 ? "active" : ""}>
        <Link href="/about">关于</Link>
      </span>
    </MotionBox>
  );
}
