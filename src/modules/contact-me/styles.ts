import { css } from "@emotion/react";
import { black } from "@styles/colors";
import { flex } from "@styles/index";

export const sectionStyles = css`
  ${flex({ gap: 20, column: true, align: "center" })};
  align-self: center;

  > .title {
    font-size: 25px;
    font-weight: bold;
    line-height: 25px;
  }

  > .content {
    /* ${flex({ gap: 20 })} */
    display: grid;
    gap: 5px;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    > div {
      background-color: ${black[3]};
      border: solid 1px ${black[1]};
      padding: 5px;
      transition-duration: 300ms;
      cursor: pointer;
      &:hover {
        scale: 1.2;
        background: none;
        border-color: black;
        /* background-color: ${black[3]}; */
      }

      &:has(~ div:hover) {
        scale: 0.8;
        /* rotate: -45deg; */
        filter: blur(1px);
      }

      &:hover ~ div {
        scale: 0.8;
        /* rotate: 45deg; */
        filter: blur(1px);
      }
    }
  }
`;
