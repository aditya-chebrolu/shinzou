import { useRouter } from "next/router";
import { containerStyles, resumeButton } from "./styles";

const Footer = () => {
  return (
    <div css={containerStyles}>
      <a href="resume.pdf" target="_blank" css={resumeButton}>
        RESUME
      </a>
    </div>
  );
};

export default Footer;
