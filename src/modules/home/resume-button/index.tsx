import { useRouter } from "next/router";
import { resumeButton } from "./styles";

const ResumeButton = () => {
  return (
    <a href="resume.pdf" target="_blank" css={resumeButton}>
      RESUME
    </a>
  );
};

export default ResumeButton;
