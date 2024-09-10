import { type ExperienceType } from "@constants/data/experience";
import { SvgContainer } from "@styles/index";
import { experienceStripStyles, titleStyles } from "./styles";
import LinkIcon from "@assets/link.svg";
import Link from "next/link";
import { useRouter } from "next/router";
type Props = {
  experience: ExperienceType;
};

const ExperienceStrip = ({ experience }: Props) => {
  const Icon = experience.Icon;
  const { push } = useRouter();
  return (
    <div css={experienceStripStyles} onClick={() => push(experience.url)}>
      <SvgContainer h={{ dweb: 30, mweb: 25 }} className="icon">
        <Icon />
      </SvgContainer>
      <h2 css={titleStyles}>
        <span>{experience.positions[0].designation.short}</span>
        <div className="divider" />
        <a href="">{experience.company}</a>
      </h2>
      <Link href={experience.url}>
        <SvgContainer
          h={{ dweb: 20, mweb: 20 }}
          stroke="var(--black)"
          className="icon link"
        >
          <LinkIcon />
        </SvgContainer>
      </Link>
    </div>
  );
};

export default ExperienceStrip;
