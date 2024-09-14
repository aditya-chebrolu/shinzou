import "@styles/globals.css";
import type { AppProps } from "next/app";
import {
  caveatFont,
  dancingFont,
  playFont,
  playWriteFont,
  sourceSans,
} from "@styles/fonts";
import Head from "next/head";
import { MuiThemeProvider } from "src/contexts/mui-theme-provider";

//remove theme provider
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main
        className={`${sourceSans.className} ${sourceSans.variable} ${playWriteFont.variable} ${playFont.variable} ${caveatFont.variable} ${dancingFont.variable}`}
      >
        <MuiThemeProvider>
          <Component {...pageProps} />
        </MuiThemeProvider>
      </main>
    </>
  );
}
