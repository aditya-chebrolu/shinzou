import { css } from "@emotion/react";
import { flex } from "@styles/index";

export const sectionStyles = css`
  ${flex({ column: true, gap: 10, align: "center" })};
  > .title {
    font-size: 24px;
    line-height: 24px;
    font-weight: bold;
  }

  > .content {
    align-self: center;
    display: grid;
    gap: 5px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);

    svg {
      height: 40px;
      aspect-ratio: 1;
    }
  }
`;

export const techSetStyles = (
  rs: number,
  cs: number,
  re: number,
  ce: number
) => css`
  grid-area: ${rs} / ${cs} / ${re} / ${ce};
  ${flex({ gap: 10, align: "center", justify: "space-around" })};
  /* align-self: flex-start; */
`;
