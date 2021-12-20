import { NextApiRequest } from 'next';
import NextAuth from 'next-auth';
import GithubProvider from "next-auth/providers/github"
import { NextApiResponse } from 'next';

const callbacks = {};

callbacks.signIn = async function singIn(user, account, metadata) {
  // if(account.provider === 'github') {
  //   const {id, login, name, avatar = user.image} = metadata;
  //   const githubUser = {
  //     id, login, name, avatar
  //   };
  //   user.accessToken  = user.accessToken
  // }
  console.log('user is:', user)
  console.log('account is:', account)
}

const options = {
  providers: [
    GithubProvider({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET
    }),
  ],
  callbacks
}

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options)

const getTokenFromGithub = async () => {

}