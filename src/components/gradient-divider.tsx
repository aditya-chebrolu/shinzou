import { css } from "@emotion/react";
import { Divider } from "@styles/index";
// import PropTypes, { InferProps } from "prop-types";
const styles = css`
  background: linear-gradient(
    90deg,
    hsla(240, 4%, 15%, 1) 0%,
    hsla(6, 92%, 67%, 1) 50%,
    hsla(240, 4%, 15%, 1) 100%
  );
  position: relative;
`;

type ElementConstructor = ((props: any) => JSX.Element) | React.FC<any>;

type PropsFrom<T extends ElementConstructor> = T extends React.FC<infer P>
  ? P
  : never;

const GradientDivider = (props: PropsFrom<typeof Divider>) => (
  <Divider {...props} css={styles} fullBleed />
);

export default GradientDivider;
