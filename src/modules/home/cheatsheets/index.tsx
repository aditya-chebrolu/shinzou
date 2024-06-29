import UnderlinedText from "@components/underlined-text";
import { containerStyles } from "./styles";
import Link from "next/link";
import { useRouter } from "next/router";

const CheatSheets = () => {
  const { push } = useRouter();
  const link = "https://blog.adityachebrolu.com";
  const onClick = () => {
    push(link);
  };
  return (
    <div css={containerStyles} onClick={onClick}>
      <Link href={link}>
        <UnderlinedText text="Cheatsheets🔥" type="h2" />
      </Link>
      <div>Click here to view programming cheat sheets 😃</div>
    </div>
  );
};

export default CheatSheets;
