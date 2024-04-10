import { css } from "@emotion/react";
import { name } from "../data";

const styles = css`
  text-transform: uppercase;
  font-size: 28px;
  line-height: 28px;
  font-weight: bold;
  letter-spacing: 1px;
  color: #85b09a;
`;

const CompactIntro = () => {
  return <div css={styles}>{name}</div>;
};

export default CompactIntro;
