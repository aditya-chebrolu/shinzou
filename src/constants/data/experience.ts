import BajajIcon from "@assets/bajaj.svg";

const getMonthYear = (date: Date): string => {
  const month = date.toLocaleString("default", { month: "short" });
  const year = date.getFullYear().toString().slice(2);
  return `${month}'${year}`;
};

export const experiences = [
  {
    company: "BAJAJ FINSERV HEALTH",
    companyURL: "https://www.bajajfinservhealth.in",
    url: "/experience/bajaj-finserv-health",
    Icon: BajajIcon,
    positions: [
      {
        designation: {
          long: "Software Development Engineer II",
          short: "SDE 2",
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
