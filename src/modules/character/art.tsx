import Image from "next/image";
import panda from "@assets/panda.png";
import { css } from "@emotion/react";

const styles = css`
  margin-top: 400px;
  margin-inline: auto;
`;

const Art = ({ id }: { id: string }) => {
  return (
    <div css={styles} id={id}>
      <Image src={panda} alt="dp" height={100} />
    </div>
  );
};

export default Art;
