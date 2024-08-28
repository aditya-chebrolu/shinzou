import { Source_Sans_3 } from "@next/font/google";
import localFont from "next/font/local";

export const playFont = localFont({
  src: "../assets/fonts/play.ttf",
  variable: "--play-font",
});

export const sourceSansPro = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--source-sans-pro-font",
});
