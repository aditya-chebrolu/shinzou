import { bgStyles, imageStyles, sectionStyles } from "./styles";
import Name from "@components/name";
import mypic from "@assets/aditya.jpg";
import Image from "next/image";
import { useEffect, useState } from "react";

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
    <div css={sectionStyles}>
      <div css={bgStyles}>
        <div className="mask" />
      </div>
      <div className="content">
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
      </div>
    </div>
  );
};

export default IntroSection;
