import "@styles/globals.css";
import type { AppProps } from "next/app";
import "../styles/fonts.css";
import Head from "next/head";
import { description, keywords, title } from "@constants/data/meta";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="author" content="Aditya Chebrolu" />
        <meta name="robots" content="index,follow" />
        <meta name="keywords" content={keywords} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        {/* og */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
