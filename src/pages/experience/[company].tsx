import { PageWrapper } from "@styles/layout-styles";
import experience from "@data/experience.json";
import {
  headerStyles,
  imageContainerStyles,
  pointsContainerStyles,
  pointStyles,
  sectionContainerStyles,
  technologiesContainer,
} from "@modules/experience/styles";
import UnderlinedText from "@components/underlined-text";
import { SvgContainer } from "@styles/index";
import { icons } from "@constants/icons";
import LinkIcon from "@assets/link.svg";
import { Spacer } from "@styles/spacer";
import Image from "next/image";
import pp from "@assets/pp.png";
// todo: make data dynamic
const { technologies, stuffDone } = experience.bajaj;

const ExperiencePage = () => {
  return (
    <PageWrapper>
      <div className="full top" css={headerStyles}>
        <h1 className="title">EXPERIENCE</h1>
        <div className="company">/ Bajaj Finserv Health</div>
        <a href="https://www.bajajfinservhealth.in">
          <SvgContainer h={{ dweb: 30, mweb: 22 }} stroke="white">
            <LinkIcon />
          </SvgContainer>
        </a>
      </div>
      <TechnologyRow type="advance" />
      <TechnologyRow type="basic" />
      <div css={sectionContainerStyles}>
        <UnderlinedText text="At Bajaj, I have ..." type="h2" size="sm" />
        <div css={pointsContainerStyles}>
          {stuffDone.map((stuff, idx) => (
            <div
              css={pointStyles}
              key={idx}
              dangerouslySetInnerHTML={{ __html: stuff }}
            />
          ))}
        </div>
      </div>
      <div css={imageContainerStyles}>
        <Image src={pp} alt="dp" objectFit="contain" layout="fill" />
      </div>
    </PageWrapper>
  );
};

const TechnologyRow = ({ type }: { type: "advance" | "basic" }) => {
  const isBasic = type === "basic";
  const title = isBasic
    ? "Technologies I'm familiar with..."
    : "Technologies I'm proficient in...";

  const lineColor = isBasic ? "#87CEEB" : "#FC99AD";
  return (
    <div css={sectionContainerStyles}>
      <UnderlinedText text={title} type="h2" size="sm" lineColor={lineColor} />
      <div css={technologiesContainer}>
        {technologies[type].map((tech, idx) => {
          const { Icon, text } = icons[tech as keyof typeof icons];
          return (
            <div key={idx} className="tech">
              <SvgContainer h={20}>
                <Icon />
              </SvgContainer>
              <div>{text}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExperiencePage;
