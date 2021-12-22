import { useRouter } from 'next/router'
import MotionBox from "../components/MotionBox";
import Image from "next/image";
import { Button } from "@arco-design/web-react";
import React from 'react';

export default function login() {
  const router = useRouter();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        height: "80vh",
      }}
    >
      <MotionBox
        animate={{ y: 20, scale: 0.97 }}
        transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}        
        style={{
          margin: "8px auto",
          maxWidth: "min(400px, 90vw)"
        }}
      >
        <Image
          src="/gfw.svg"
          width={400}
          height={400}
          alt="Launching Illustration"
        />
      </MotionBox>
      <p style={{ textAlign: "center" }}>网络波动，墙太高了😭，稍后重试吧。</p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Button onClick={() => {          
          router.push(localStorage.prevUrl ?? '/').then(() => {
            localStorage.removeItem('prevUrl');
          });
        }}>返回上一页</Button>
      </div>
    </div>
  );
}
