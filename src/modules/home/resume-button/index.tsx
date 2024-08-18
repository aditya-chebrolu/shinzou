import { useRouter } from "next/router";
import { resumeButton } from "./styles";

const ResumeButton = () => {
  return (
    <a href="resume.pdf" target="_blank">
      <div css={resumeButton}>RESUME</div>
    </a>
  );
};

export default ResumeButton;
