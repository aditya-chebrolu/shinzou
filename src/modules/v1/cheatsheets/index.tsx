import UnderlinedText from "@components/underlined-text";
import { cheatSheetsData } from "@constants/data/cheat-sheets";
import { containerStyles, contentStyles } from "./styles";
import Link from "next/link";

const CheatSheets = () => {
  return (
    <div css={containerStyles}>
      <UnderlinedText
        text="Cheatsheets🔥"
        type="h2"
        size={{ mweb: "lg", dweb: "xs" }}
        lineColor="#FFE5B4"
      />
      <div css={contentStyles}>
        {cheatSheetsData.map((data, idx) => (
          <Link key={idx} href={data.link}>
            <span className="num">{idx + 1}.</span>
            <span className="name">{data.title}</span>
            <span className="txt"> Cheat Sheet</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CheatSheets;
