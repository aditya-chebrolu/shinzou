import UnderlinedText from "@components/underlined-text";
import { experiences } from "@constants/data/experience";
import { flex, SvgContainer } from "@styles/index";
import { experienceStyles } from "./styles";
import BajajLogo from "@assets/bajaj.svg";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div css={flex({ column: true, gap: [20] })}>
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
  const { company } = experience;
  return (
    <motion.div
      css={experienceStyles}
      whileTap={{ scale: 0.95 }}
      initial={{ scale: 1 }}
    >
      <SvgContainer>
        <BajajLogo />
      </SvgContainer>
      <div className="name">{company}</div>
      <div className="role">SDE 2</div>
    </motion.div>
  );
};

export default Experience;
