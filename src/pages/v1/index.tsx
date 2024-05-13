import { css } from "@emotion/react";
import Details from "@modules/v1/details";
import { flex, lgScreen } from "@styles/index";
import { useTheme } from "src/contexts/theme-provider";

const styles = css`
  height: 100dvh;
  padding: 15px;
  background-size: 17px 17px;
  background-image: var(--dotted-bg);

  > .wrapper {
    ${flex({ gap: 0, column: true })};
  }

  ${lgScreen} {
    padding: 50px;
  }
`;

const Page = () => {
  const { isDarkMode } = useTheme();
  return (
    <div css={[styles]}>
      <div className="wrapper">
        <Details />
      </div>
    </div>
  );
};

export default Page;
