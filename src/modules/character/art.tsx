import Image from "next/image";
import dp from "@assets/dp.png";
import { css } from "@emotion/react";

const styles = css`
  margin-top: 400px;
  margin-left: auto;
  margin-right: 20px;
`;

const Art = ({ id }: { id: string }) => {
  return (
    <div css={styles} id={id}>
      <Image src={dp} alt="dp" height={100} />
    </div>
  );
};

export default Art;
