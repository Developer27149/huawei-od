import { useCustomTheme } from "../../hooks/useCustomTheme";
import React from "react";
import sd from "styles/ThemeBtn.module.sass";
import MotionShareBox from 'components/Menu/MotionShareBox';

export default function ThemeBtn() {
  const { reverseTheme, isDark } = useCustomTheme();

  return (
    <div className={sd.container} onClick={reverseTheme}>
      <MotionShareBox />
      <div className={sd.icon}>
        {isDark ? (
          <svg
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
          >
            <path
              d="M7.5 1.5v-1m0 13.99v-.998m6-5.997h1m-13 0h-1m2-4.996l-1-1m12 0l-1 1m-10 9.993l-1 1m12 0l-1-1m-2-4.997a2.999 2.999 0 01-3 2.998 2.999 2.999 0 113-2.998z"
              stroke="currentColor"
              strokeLinecap="square"
            ></path>
          </svg>
        ) : (
          <svg
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
          >
            <path
              d="M1.66 11.362A6.5 6.5 0 007.693.502a7 7 0 11-6.031 10.86z"
              stroke="currentColor"
              strokeLinejoin="round"
            ></path>
          </svg>
        )}
      </div>
    </div>
  );
}
