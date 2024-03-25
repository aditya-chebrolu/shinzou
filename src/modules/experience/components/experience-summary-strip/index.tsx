import { Card, SvgContainer } from "@styles/index";
import { containerStyles } from "./styles";

type Props = {
  summary?: {
    Icon: any;
    designation: string;
    duration: string;
  };
  onClick?: () => void;
};

const ExperienceSummaryStrip = ({ summary, onClick = () => null }: Props) => {
  if (!summary) return null;
  const { Icon, designation, duration } = summary;
  return (
    <Card css={containerStyles} onClick={onClick}>
      <SvgContainer
        ratio="37/15"
        h={{ dweb: 25, mweb: 20, default: 25 }}
        className="logo"
      >
        <Icon />
      </SvgContainer>
      <div className="title">{designation}</div>
      <div className="date">{duration}</div>
    </Card>
  );
};

export default ExperienceSummaryStrip;
