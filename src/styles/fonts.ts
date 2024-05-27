import { Rubik, Source_Sans_3 } from "@next/font/google";
import local from "@next/font/local";

export const rubikFont = Rubik({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--rubik-font",
});

export const sourceSansPro = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--source-sans-pro-font",
});

export const newTitleFont = local({
  src: "../assets/fonts/new-title.woff2",
  variable: "--avenir-font",
});
