import { Source_Sans_3, Caveat, Dancing_Script } from "@next/font/google";
import localFont from "next/font/local";

export const playFont = localFont({
  src: "../assets/fonts/play.ttf",
  variable: "--play-font",
});

export const playWriteFont = localFont({
  src: "../assets/fonts/playwrite.ttf",
  variable: "--play-write-font",
});

export const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--source-sans-font",
});

export const caveatFont = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--caveat-font",
});

export const dancingFont = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--dancing-font",
});
