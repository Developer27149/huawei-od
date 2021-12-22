import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

const callbacks = {
  async jwt({ token, account }: any) {
    if (account) {
      token.accessToken = account.access_token;
    }
    return token;
  },
  async session({ session, token }: any) {
    session.accessToken = token.accessToken;
    return session;
  },
};

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      authorization: { params: { scope: "user admin:public_key" } },
    }),
    // ...add more providers here
  ],
  callbacks,
  pages: {
    error: "/error",
  },
  // A database is optional, but required to persist accounts in a database
  // database: process.env.DATABASE_URL,
});
