import { useState, useEffect } from "react";
import { setDarkMode } from "../libs/index";

export const useCustomTheme = () => {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const _isDark = localStorage.getItem("dark") === "1";
    setIsDark(_isDark);
    setDarkMode(_isDark);
  }, []);
  useEffect(() => {
    localStorage.setItem("dark", isDark ? "1" : "0");
    setDarkMode(isDark);
  }, [isDark]);

  const reverseTheme = () => {
    setIsDark(!isDark);
  };
  return { isDark, reverseTheme };
};
