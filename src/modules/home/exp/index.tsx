import { experiences } from "@constants/data/experience";
import ExperienceStrip from "./experience-strip";
import { experienceSectionStyles } from "./styles";

type Props = {
  id: string;
};

const ExperienceSection = ({ id }: Props) => {
  return (
    <div css={experienceSectionStyles} id={id}>
      <h2 className="title">Workex</h2>
      <div className="content">
        {experiences.map((exp, idx) => (
          <ExperienceStrip key={idx} experience={exp} />
        ))}
      </div>
    </div>
  );
};

// import UnderlinedText from "@components/underlined-text";
// import { experiences } from "@constants/data/experience";
// import { SvgContainer } from "@styles/index";
// import { experienceSectionStyles, experienceStyles } from "./styles";
// import { motion } from "framer-motion";
// import Modal from "@components/modal";
// import { useState } from "react";

// const Experience = () => {
//   const [open, setOpen] = useState(false);
//   const onClose = () => {
//     setOpen(false);
//   };

//   const openModal = () => {
//     setOpen(true);
//   };

//   return (
//     <>
//       <div css={experienceSectionStyles}>
//         <UnderlinedText text="Experience" type="h2" />
//         {experiences.map((exp, idx) => (
//           <ExperienceBox experience={exp} key={idx} openModal={openModal} />
//         ))}
//       </div>
//       <Modal open={open} onClose={onClose}>
//         Hi there
//       </Modal>
//     </>
//   );
// };

// const ExperienceBox = ({
//   experience,
//   openModal,
// }: {
//   experience: (typeof experiences)[number];
//   openModal: () => void;
// }) => {
//   const { Icon } = experience;

//   return (
//     <motion.div css={experienceStyles} onClick={openModal}>
//       <SvgContainer h={{ dweb: 52, mweb: 45 }} className="icon">
//         <Icon />
//       </SvgContainer>
//       <a
//         href={experience.companyURL}
//         target="_blank"
//         rel="noreferrer"
//         className="name"
//       >
//         {experience.company}
//       </a>
//       <div className="row2">{experience.designation}</div>
//     </motion.div>
//   );
// };

export default ExperienceSection;
