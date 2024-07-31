import "@styles/globals.css";
import type { AppProps } from "next/app";
import { bunnyFont, codeFont, sourceSansPro } from "@styles/fonts";
import ThemeProvider from "src/contexts/theme-provider";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main
        className={`${sourceSansPro.className} ${codeFont.variable} ${bunnyFont.variable}`}
      >
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </main>
    </>
  );
}
