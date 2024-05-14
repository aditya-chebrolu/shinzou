import { containerStyles, imageStyles } from "./styles";
import Name from "@modules/v0/intro/name";
import mypic from "@assets/aditya.jpg";
import Image from "next/image";
import { useEffect, useState } from "react";
import SectionWrapper from "@components/section-wrapper";

const IntroSection = () => {
  const [b, setB] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => {
      setB(true);
      clearTimeout(t);
    }, 1500);

    return () => {
      clearTimeout(t);
    };
  }, []);
  return (
    <SectionWrapper customCss={containerStyles}>
      <div css={imageStyles(b)}>
        <Image
          src={mypic}
          alt="adityachebrolu"
          objectFit="cover"
          layout="fill"
          objectPosition="0 0.2px"
        />
      </div>
      <Name />
    </SectionWrapper>
  );
};

export default IntroSection;
