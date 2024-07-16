import "@styles/globals.css";
import type { AppProps } from "next/app";
import { bunnyFont, codeFont, sourceSansPro } from "@styles/fonts";
import ThemeProvider from "src/contexts/theme-provider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${sourceSansPro.className} ${codeFont.variable} ${bunnyFont.variable}`}
    >
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </main>
  );
}
