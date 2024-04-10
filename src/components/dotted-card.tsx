import { css } from "@emotion/react";
import { black } from "@styles/colors";

const styles = css`
  border-radius: 8px;
  border: solid 1px ${black[2]};
  padding: 10px;
`;

const DottedCard = () => {
  return (
    <div css={styles}>
      <div className="a">EXPERIENCE</div>
      <div className="b">BAJAJ FINSERV HEALTH LIMITED</div>
    </div>
  );
};

export default DottedCard;
