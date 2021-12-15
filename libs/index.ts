export const log = console.log;

export const setDarkMode = (isDark: boolean): void => {
  if (isDark) {
    document.body.setAttribute("arco-theme", "dark");
  } else {
    document.body.removeAttribute("arco-theme");
  }
};

export const convertTextToValidId = (str: string):string => encodeURI(str).replaceAll("%", "").replaceAll(/[^\w]/g, '')
