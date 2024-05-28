import { containerStyles, languageOptionStyles } from "./styles";
import { pickIcons } from "@constants/icons";
import { SvgContainer } from "@styles/index";
import Link from "next/link";
import { useRouter } from "next/router";

const CheatSheetHeader = () => {
  const { query } = useRouter();
  const { topic = "" } = query as Record<string, string>;

  return (
    <div css={containerStyles}>
      <div className="content">
        {pickIcons(["java", "swift"]).map(({ Icon, text }, idx) => (
          <Link
            key={idx}
            css={languageOptionStyles(topic === text.toLowerCase())}
            href={`/cheatsheets/${text.toLowerCase()}`}
          >
            <SvgContainer h={{ mweb: 25, default: 30 }}>
              <Icon />
            </SvgContainer>
            <div>{text}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CheatSheetHeader;
