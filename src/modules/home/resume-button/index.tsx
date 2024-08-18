import { resumeButton } from "./styles";

const ResumeButton = () => {
  return (
    <div css={resumeButton}>
      <a href="resume.pdf" target="_blank">
        RESUME
      </a>
    </div>
  );
};

export default ResumeButton;
