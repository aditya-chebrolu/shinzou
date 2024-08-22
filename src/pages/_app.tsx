import "@styles/globals.css";
import type { AppProps } from "next/app";
import { codeFont, sourceSansPro } from "@styles/fonts";
import ThemeProvider from "src/contexts/theme-provider";
import Head from "next/head";
import { MuiThemeProvider } from "src/contexts/mui-theme-provider";

//remove theme provider
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={`${sourceSansPro.className} ${codeFont.variable}`}>
        <MuiThemeProvider>
          <Component {...pageProps} />
        </MuiThemeProvider>
      </main>
    </>
  );
}
