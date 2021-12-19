import "../styles/globals.css";
import "@arco-design/web-react/dist/css/arco.min.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import Head from "next/head";
import { AppWrapper } from "components/Context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppWrapper>
      <Layout>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </AppWrapper>
  );
}

export default MyApp;
