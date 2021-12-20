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
          src="/404.svg"
          width={400}
          height={400}
          alt="Launching Illustration"
        />
      </MotionBox>
      <h3 style={{ textAlign: "center" }}>404</h3>
      <p style={{ textAlign: "center" }}>我是谁😭，我在哪？</p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Button onClick={() => router.back()}>返回上一页</Button>
      </div>
    </div>
  );
}
