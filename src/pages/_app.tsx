import "@styles/globals.css";
import type { AppProps } from "next/app";
import { avenirFont, codeFont, sourceSansPro } from "@styles/fonts";
import ThemeProvider from "src/contexts/theme-provider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${sourceSansPro.className} ${codeFont.variable} ${avenirFont.variable}`}
    >
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </main>
  );
}
