import { icons } from "@constants/icons";
import { pick } from "lodash-es";

export const projects = [
  {
    title: "The Lobby",
    url: "https://thelobby.in",
    tech: Object.values(
      pick(icons, ["html", "css", "js", "ts", "next", "nestjs", "mongo"])
    ),
    description: [
      [
        "Developed by utilizing ",
        icons.next,
        "for the frontend and ",
        icons.nest,
        "for the backend, the application was smoothly deployed on an ",
        icons.ec2,
        "instance.",
      ],
    ],
  },
];
