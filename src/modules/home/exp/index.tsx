import UnderlinedText from "@components/underlined-text";
import { experiences } from "@constants/data/experience";
import { SvgContainer } from "@styles/index";
import { experienceSectionStyles, experienceStyles } from "./styles";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div css={experienceSectionStyles}>
      <UnderlinedText text="Experience" type="h2" />
      {experiences.map((exp, idx) => (
        <ExperienceBox experience={exp} key={idx} />
      ))}
    </div>
  );
};

const ExperienceBox = ({
  experience,
}: {
  experience: (typeof experiences)[number];
}) => {
  const { Icon } = experience;

  return (
    <motion.div css={experienceStyles}>
      <SvgContainer h={{ dweb: 52, mweb: 45 }} className="icon">
        <Icon />
      </SvgContainer>
      <a
        href={experience.companyURL}
        target="_blank"
        rel="noreferrer"
        className="name"
      >
        {experience.company}
      </a>
      <div className="row2">{experience.designation}</div>
    </motion.div>
  );
};

export default Experience;
