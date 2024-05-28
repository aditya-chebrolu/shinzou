import UnderlinedText from "@components/underlined-text";
import { cheatSheets } from "@constants/data/cheat-sheets";
import { containerStyles, contentStyles } from "./styles";
import LinkIcon from "@assets/link.svg";
import { SvgContainer } from "@styles/index";

const Cheatsheets = () => {
  return (
    <div css={containerStyles}>
      <UnderlinedText text="Cheatsheets" type="h2" />
      <div css={contentStyles}>
        {cheatSheets.map((cs, idx) => (
          <a key={idx} className="row" href={cs.link}>
            <UnderlinedText
              text={cs.title}
              color="var(--title)"
              lineColor="var(--title-line)"
              size="xs"
              type="h3"
            />
            <SvgContainer
              h={{ dweb: 20, mweb: 18 }}
              stroke="var(--name)"
              className="icon"
            >
              <LinkIcon />
            </SvgContainer>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Cheatsheets;
