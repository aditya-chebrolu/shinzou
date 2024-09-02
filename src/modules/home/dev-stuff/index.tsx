import UnderlinedText from "@components/underlined-text";
import { containerStyles } from "./styles";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import bgImage from "@assets/images/bg.png";

const DeveloperResourcesCta = () => {
  const { push } = useRouter();
  const link = "/resources";
  const onClick = () => {
    push(link);
  };
  return (
    <div css={containerStyles} onClick={onClick}>
      <Link href={link}>
        <UnderlinedText
          text="Developer Resources"
          type="h2"
          size="md"
          color="white"
          showLine={false}
        />
      </Link>
      <div className="desc">
        <span>Click here</span> to view developer resources 😃
      </div>
    </div>
  );
};

export default DeveloperResourcesCta;
