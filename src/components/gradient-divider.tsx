import { css } from "@emotion/react";
import { Divider, minWidth } from "@styles/index";

const styles = css`
  background: linear-gradient(90deg, #fffacd 0%, #89cff0 50%, #fffacd 100%);
  position: relative;
  flex-shrink: 0;

  ${minWidth()} {
    background: linear-gradient(
      90deg,
      #fffacd 0%,
      #89cff0 10%,
      #89cff0 90%,
      #fffacd 100%
    );
  }
`;

// type ElementConstructor = ((props: any) => JSX.Element) | React.FC<any>;

// type PropsFrom<T extends ElementConstructor> = T extends React.FC<infer P>
//   ? P
//   : never;

const GradientDivider = () => (
  <Divider thickness={0.6} color="#fffacd" css={styles} fullBleed />
);

export default GradientDivider;
