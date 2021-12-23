// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Octokit } from "@octokit/rest";
import type { NextApiRequest, NextApiResponse } from "next";
import { owner, repo } from "libs/public";

type Data = {
  success: boolean,
  issue_number: number
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const id = req.query?.id;
  if (req.method !== "POST" || !id) {
    res.status(404).end();
  } else {
    const api = new Octokit({
      auth: process.env.GITHUB_TOKEN,
    });
    api.issues
      .create({
        owner,
        repo,
        title: `key${id}`,
      })
      .then((resp) => {
        console.log(resp);
        res.status(200).json({ success: true, issue_number: resp.data.number });
      });
    setTimeout(() => {
      res.status(500).end();
    }, 6 * 1000);
  }
}
