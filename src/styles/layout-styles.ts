import styled from "@emotion/styled";
import { minWidth } from ".";
import { css } from "@emotion/react";

type Props = {
  bg?: "light" | "dark";
};

export const PageWrapper = styled.div<Props>`
  ${(props) =>
    props.bg === "dark"
      ? css`
          background: var(--dotted-dark-bg);
          color: var(--white);
        `
      : css`
          background: var(--dotted-bg);
          color: black;
        `};

  background-size: 17px 17px;
  min-height: 100dvh;
  position: relative;
  contain: paint;

  display: grid;
  grid-template-columns: 20px 1fr 20px;
  row-gap: 30px;

  > *:not(.full) {
    grid-column: 2/3;
  }

  .full {
    grid-column: 1/-1;
  }

  &:has(> .top) {
    padding-top: 0px;
  }

  ${minWidth()} {
    grid-template-columns: 27% 1fr 27%;
    row-gap: 50px;
  }
`;
