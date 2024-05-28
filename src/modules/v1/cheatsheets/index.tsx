import UnderlinedText from "@components/underlined-text";
import { containerStyles, contentStyles } from "./styles";
import Link from "next/link";
import { availableCheatSheets } from "@constants/data/cheatsheets/available-cheat-sheets";
import { pickIcons } from "@constants/icons";

const CheatSheets = () => {
  return (
    <div css={containerStyles}>
      <UnderlinedText
        text="Cheatsheets🔥"
        type="h2"
        size={{ mweb: "lg", dweb: "xs" }}
        lineColor={{ dweb: "#FFE5B4" }}
      />
      <div css={contentStyles}>
        {pickIcons(availableCheatSheets as any).map((data, idx) => (
          <Link key={idx} href={`/cheatsheets/${data.slug}`}>
            <span className="num">{idx + 1}.</span>
            <span className="name">{data.text}</span>
            <span className="txt"> Cheat Sheet</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CheatSheets;
