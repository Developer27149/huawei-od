import "../styles/globals.css";
import "@arco-design/web-react/dist/css/arco.min.css";
import type { AppProps } from "next/app";
import Layout from "components/Layout";
import Head from "next/head";
import { GlobalContextProvider } from "contexts/global";
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps: {session, ...pageProps} }: AppProps) {
  return (
    <GlobalContextProvider>
      <Layout>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <SessionProvider session={pageProps.session}>
          <Component {...pageProps} />
        </SessionProvider>
      </Layout>
    </GlobalContextProvider>
  );
}

export default MyApp;
