import MotionBox from "components/MotionBox";
import React, { useState, useEffect, ReactChild } from "react";
import sd from "styles/Menu.module.sass";
import cn from "classnames";

export default function Menu(props: { children: ReactChild }) {
  const [constrains, setConstrains] = useState({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  });
  const [showItems, setShowItems] = useState(false);
  useEffect(() => {
    const updateConstrains = () => {
      setConstrains({
        ...constrains,
        top: -(window.innerHeight - 120),
        left: -(window.innerWidth - 120),
      });
    };
    let timer: any = setTimeout(updateConstrains);
    const handleResize = () => {
      clearTimeout(timer);
      timer = setTimeout(updateConstrains, 400);
    };
    document.addEventListener("resize", handleResize);
    // change show items
    const handleModifyShowItems = () => {
      console.log("click document");
      setShowItems(false);
    };
    document.addEventListener("click", handleModifyShowItems);
    return () => {
      document.removeEventListener("resize", handleResize);
      document.removeEventListener("click", handleModifyShowItems);
    };
  }, []);
  const handleClick = (e: React.MouseEvent) => {
    if (showItems) return;
    console.log("click outside box");
    setShowItems(!showItems);
    e.stopPropagation();
  };
  return (
    <>
      <MotionBox
        onClick={handleClick}
        className={cn(sd.container)}
        drag
        dragConstraints={constrains}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
        dragElastic={0.5}
        whileTap={{ cursor: "grabbing" }}
        style={{
          borderRadius: showItems ? "10px" : "50%",
        }}
      >
        {showItems ? (
          props.children
        ) : (
          <MotionBox
            style={{
              width: "1rem",
              height: "1rem",
              borderRadius: "50%",
              opacity: 0.2,
              backgroundColor: 'white',
              scale: 1.6
            }}
            animate={{      
              opacity: 0.6,
              scale: 1.8
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          ></MotionBox>
        )}
      </MotionBox>
    </>
  );
}
