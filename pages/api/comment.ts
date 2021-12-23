// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getCommentsByIdAndIssueNumber } from "libs/help";

type Data = {
  data: unknown[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(req.method, 'is method!!!')
  const commentKeyword = req.query?.comment_keyword;
  if(commentKeyword === undefined || req.method !== "GET") {    
    res.status(200).json({data: []})
  } else {
    const { comments } = await getCommentsByIdAndIssueNumber(`key${commentKeyword}`);
    res.status(200).json({data: comments})
  }  
}
