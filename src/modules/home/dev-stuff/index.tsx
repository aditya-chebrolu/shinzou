import UnderlinedText from "@components/underlined-text";
import { containerStyles, ctaStyles } from "./styles";
import Link from "next/link";
import { useRouter } from "next/router";

const DeveloperResourcesCta = ({ id }: { id: string }) => {
  const { push } = useRouter();
  const link = "/resources";
  const onClick = () => {
    push(link);
  };
  return (
    <div id={id} css={containerStyles}>
      <div className="bg" />
      <div css={ctaStyles} onClick={onClick}>
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
    </div>
  );
};

export default DeveloperResourcesCta;
