import BajajIcon from "@assets/bajaj.svg";
import { icons } from "@constants/icons";
import { get } from "http";
import { pick } from "lodash-es";
import { start } from "repl";

const getMonthYear = (date: Date): string => {
  const month = date.toLocaleString("default", { month: "short" });
  const year = date.getFullYear().toString().slice(2);
  return `${month}'${year}`;
};

export const experiences = [
  {
    company: "BAJAJ FINSERV HEALTH LIMITED",
    companyURL: "https://www.bajajfinservhealth.in",
    Icon: BajajIcon,
    techStack: [
      "azure",
      "react",
      "ts",
      "node",
      "html",
      "css",
      "javascript",
      "next",
      "nest",
      "docker",
      "kubernetes",
      "elk",
      "redis",
      "mongo",
    ],
    positions: [
      {
        designation: {
          long: "Software Development Engineer II",
          short: "SDE II",
          startDate: getMonthYear(new Date("2023-10-01")),
        },
      },
      {
        designation: {
          long: "Software Development Engineer I",
          short: "SDE I",
          startDate: getMonthYear(new Date("2022-06-01")),
        },
      },
      {
        designation: {
          long: "Frontend Intern",
          short: "Frontend Intern",
          startDate: getMonthYear(new Date("2022-01-01")),
        },
      },
    ],
  },
];

export type ExperienceType = (typeof experiences)[number];
