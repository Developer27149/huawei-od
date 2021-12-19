export const setDarkMode = (isDark: boolean): void => {
  if (isDark) {
    document.body.setAttribute("arco-theme", "dark");
  } else {
    document.body.removeAttribute("arco-theme");
  }
};

export const convertTextToValidId = (str: string): string =>
  encodeURI(str).replaceAll("%", "").replaceAll(/[^\w]/g, "");

export const randomColorByIdx = (idx: number): string => {
  return [
    "red",
    "orangered",
    "orange",
    "gold",
    "lime",
    "green",
    "cyan",
    "blue",
    "gray",
  ][idx % 9];
};
