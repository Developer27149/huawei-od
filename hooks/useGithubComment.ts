import { useEffect, useState } from "react";
import { Octokit } from "@octokit/rest";
const baseUrl = "https://api.github.com/";

export default function useGithubComment(id: string) {
  // import
  // const api = new Octokit();
  // const owner = process.env.OWNER as string;
  // const repo =  process.env.REPO as string
  // console.log(process.env, 'is env')
  // const [commentList, setCommentList] = useState([]);
  // useEffect(() => {
  //   (async function () {
  //     const res = await api.issues.listLabelsForRepo({
  //       owner,
  //       repo,
  //     });
  //     console.log(res);
  //   })();    
  // }, []);
  // return { commentList };
  return {}
}
