import "@styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { description, keywords, title } from "@constants/data/meta";
import { newTitleFont, rubikFont, sourceSansPro } from "@styles/fonts";
import ThemeProvider from "src/contexts/theme-provider";

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
        {/* ios */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="AC Portfolio" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#000000" />
      </Head>
      <main
        className={`${rubikFont.className} ${sourceSansPro.variable} ${newTitleFont.variable}`}
      >
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </main>
    </>
  );
}
