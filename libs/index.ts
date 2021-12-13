export const setDarkMode = (isDark: boolean): void => {
  if (isDark) {
    document.body.setAttribute("arco-theme", "dark");
  } else {
    document.body.removeAttribute("arco-theme");
  }
};
