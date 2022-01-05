import { useRef } from "react";

import useScript from "libs/useScript";

const PublicComment = () => {
  const comment = useRef<HTMLDivElement>(null);

  useScript({
    url: "https://utteranc.es/client.js",
    theme: "github-light",
    issueTerm: "title",
    repo: "youyiqin/huawei-od",
    ref: comment,
  });

  return <div ref={comment}></div>;
};

export default PublicComment;
