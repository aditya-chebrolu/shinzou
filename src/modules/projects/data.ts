import { icons } from "@constants/icons";
import { pick } from "lodash-es";

export const projects = [
  {
    title: "The Lobby",
    url: "https://thelobby.in",
    tech: pick(icons, ["html", "css", "js", "ts", "next", "nestjs", "mongo"]),
    description: "",
  },
];
