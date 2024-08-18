import BajajIcon from "@assets/bajaj.svg";
import { icons } from "@constants/icons";
import { pick } from "lodash-es";

const calculateWorkExperience = (startDate: Date, endDate: Date): string => {
  const startYear = startDate.getFullYear();
  const startMonth = startDate.getMonth();
  const endYear = endDate.getFullYear();
  const endMonth = endDate.getMonth();

  let years = endYear - startYear;
  let months = endMonth - startMonth;

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  if (months === 0) {
    return `${years}`;
  }

  return `${years}.${months}`;
};

export const experiences = [
  {
    company: "Bajaj Finserv Health Limited",
    companyURL: "https://www.bajajfinservhealth.in",
    designation: "SOFTWARE ENGINEER II",
    shortDesignation: "SDE II",
    duration: "Jan 2022 - Present",
    startDate: new Date("2022-01-01"),
    endDate: new Date(),
    workExperience: calculateWorkExperience(new Date("2022-01-01"), new Date()),
    Icon: BajajIcon,
    techStack: [
      pick(icons, [
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
      ]),
    ],
    positions: [
      {
        designation: "SOFTWARE ENGINEER II",
        duration: "Oct 23 - Present",
        points: [
          "Led the seamless migration of our module from a mono repo architecture to a micro frontend architecture, liberating development releases from dependencies on other modules.",
          "Implemented branch validation, SonarQube integration, and tailored development pipelines, enhancing efficiency across UAT, Beta, and Production stages using YAML files.",
          "Reduced bugs through the creation of ELK dashboards, streamlining the identification of API failures for swift and efficient resolution.",
          "Mentored junior team members,providing guidance on development,fostering a collaborative and knowledge-sharing environment within the team.",
        ],
      },
      {
        designation: "SOFTWARE ENGINEER I",
        duration: "July 22 - Oct 23",
        points: [
          "Proficiently worked with React and Next.js frameworks to enhance website functionality and performance.",
          "Achieved a 45% reduction in Lines of Code by creating reusable components and logic, while significantly improving cognitive complexity and adhering to coding standards.",
          "Optimized UI/UX design, overhauled web pages, and enhanced overall accessibility for a more user-friendly online experience.",
          "Significantly enhanced SEO, propelling the website to a prominent position on the first page of Google search results.",
          "Developed multiple API endpoints, implementing robust business logic to enhance functionality and efficiency.",
          "Authored comprehensive test cases for each component, ensuring thorough evaluation and validation of system functionality.",
        ],
      },
    ],
  },
];
