import { css } from "@emotion/react";
import signImage from "@assets/sign.png";
import Image from "next/image";
import { lgScreen } from "@styles/index";
const styles = css`
  align-self: flex-end;
  > div {
    position: relative;
    aspect-ratio: 4096 / 861;
    height: 35px;
    margin-right: 10px;
  }

  ${lgScreen} {
    > div {
      margin-right: 50px;
      height: 70px;
    }
  }
`;

const Sign = () => {
  return (
    <div css={styles}>
      <div>
        <Image src={signImage} alt="aditya-chebrolu-sign" layout="fill" />
      </div>
    </div>
  );
};

export default Sign;
