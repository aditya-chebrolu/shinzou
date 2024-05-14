import { Card, SvgContainer } from "@styles/index";
import { containerStyles } from "./styles";
import CardButton from "@components/card-button";

type Summary = {
  Icon: any;
  designation: string;
  duration: string;
};

type Props = {
  summary?: Summary;
  onClick?: () => void;
  isButton?: boolean;
};

const ExperienceSummaryStrip = ({
  summary,
  onClick = () => null,
  isButton = false,
}: Props) => {
  if (!summary) return null;

  if (isButton) {
    return (
      <CardButton onClick={onClick}>
        <Content summary={summary} />
      </CardButton>
    );
  }
  return (
    <Card>
      <Content summary={summary} />
    </Card>
  );
};

const Content = ({ summary }: { summary: Summary }) => {
  const { Icon, designation, duration } = summary;
  return (
    <div css={containerStyles}>
      <SvgContainer
        ratio="37/15"
        h={{ dweb: 25, mweb: 20, default: 25 }}
        className="logo"
      >
        <Icon />
      </SvgContainer>
      <div className="title">{designation}</div>
      <div className="date">{duration}</div>
    </div>
  );
};

export default ExperienceSummaryStrip;
