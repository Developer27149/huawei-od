import { useCustomTheme } from "../hooks/useCustomTheme";
import React from "react";
import MotionBox from "./MotionBox"


export default function CustomAside() {
  const { reverseTheme,isDark } = useCustomTheme();

  return (
    <div className="left-aside">
      <MotionBox
      style={{
        width: 42,
        height: 42,
        background: '#99aabb',
        borderRadius: "50%",
        opacity: 0.2
        }}                  
        transition={{
          duration: 3.2,
          repeat: Infinity,
          ease: [0.17, 0.67, 0.83, 0.67]
        }}
        animate={{
          opacity: [0.2, 0.8, 0.2],
          scale: [0.9, 1.1, 0.9]
        }}    
      >
        <MotionBox
        
      style={{
        width: 36,
        height: 36,
        background: '#eee',
        borderRadius: "50%",
        opacity: 0.2
        }}                  
        transition={{
          duration: 3.2,
          repeat: Infinity,
          ease: [0.17, 0.67, 0.83, 0.67]
        }}
        animate={{
          opacity: [0.2, 0.8, 0.2],
          scale: [0.9, 1.1, 0.9]
        }}    
      >        
      </MotionBox>
      </MotionBox>
      <div className="theme-icon" onClick={reverseTheme}> 
          {isDark ? '☀️':'🌛'}
      </div>
    </div>
  );
}
