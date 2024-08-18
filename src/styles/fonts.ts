import { Fira_Code, Source_Sans_3 } from "@next/font/google";

export const codeFont = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--code-font",
});

export const sourceSansPro = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--source-sans-pro-font",
});
