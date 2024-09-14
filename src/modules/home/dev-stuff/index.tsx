import UnderlinedText from "@components/underlined-text";
import { containerStyles, ctaStyles } from "./styles";
import Link from "next/link";
import { useRouter } from "next/router";

const DeveloperResourcesCta = () => {
  const { push } = useRouter();
  const link = "/resources";
  const onClick = () => {
    push(link);
  };
  return (
    <div css={containerStyles}>
      <div className="bg" />
      <div css={ctaStyles} onClick={onClick}>
        <Link href={link}>
          <UnderlinedText
            text="Developer Resources"
            type="h2"
            size="md"
            color="white"
            hideLine
          />
        </Link>
        <div className="desc">
          <span>Click here</span> to view developer resources 😃
        </div>
      </div>
    </div>
  );
};

export default DeveloperResourcesCta;
