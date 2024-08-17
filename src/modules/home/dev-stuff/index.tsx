import UnderlinedText from "@components/underlined-text";
import { containerStyles } from "./styles";
import Link from "next/link";
import { useRouter } from "next/router";

const DeveloperResourcesCta = () => {
  const { push } = useRouter();
  const link = "/resources";
  const onClick = () => {
    push(link);
  };
  return (
    <div css={containerStyles} onClick={onClick}>
      <Link href={link}>
        <UnderlinedText text="Developer Resources" type="h2" />
      </Link>
      <div>Click here to view developer resources 😃</div>
    </div>
  );
};

export default DeveloperResourcesCta;
