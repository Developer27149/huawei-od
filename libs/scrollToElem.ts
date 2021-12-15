export const scrollToElemById = (
  e: React.MouseEvent<HTMLAnchorElement>,
  id: string,
  offset = 40
) => {
  e.preventDefault();
  const elem = document.querySelector<HTMLElement>("#" + id);
  const html = document.querySelector("html");
  if (elem && html) {
    html && html.scroll(0, elem.offsetTop - offset);
  }
};
