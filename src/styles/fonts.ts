import { Oswald, Rubik } from "@next/font/google";

export const rubikFont = Rubik({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--rubik-font",
});

export const oswaldFont = Oswald({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--oswald-font",
});
