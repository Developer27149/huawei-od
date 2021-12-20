// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { code } = req.query;
    const {
      data: { access_token },
    } = await axios({
      method: "POST",
      url:
        "https://github.com/login/oauth/access_token?" +
        `client_id=${process.env.CLIENT_ID}&` +
        `client_secret=${process.env.CLIENT_SECRETS}&` +
        `code=${code}`,
      headers: {
        accept: "application/json",
      },
    });
    console.log(access_token);
    res.status(301).json({ success: true, token: access_token });
  } catch (error) {
    console.log(error);
    res.status(200).json({
      success: false,
      token: "",
      info: error
    });
  }
}
