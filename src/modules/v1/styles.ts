import { css, keyframes } from "@emotion/react";
import { flex, minWidth } from "@styles/index";

export const pageStyles = css`
  background-color: #000000;
  opacity: 1;
  background-image: linear-gradient(#1a1a1a 1px, transparent 1px),
    linear-gradient(to right, #151515 1px, #000000 1px);
  background-size: 20px 20px;
  min-height: 100dvh;
`;

export const containerStyles = css`
  display: grid;
  grid-template-columns: 1fr 80% 1fr;
  row-gap: 2rem;

  > div {
    grid-column: 2/3;
  }
`;

const anim = keyframes`
0% {
    background-position: 200%;
  }
  100% {
    background-position: -200%;
  }
`;

export const nameStyles = css`
  grid-row: 1/2;
  text-align: center;
  font-weight: bold;
  font-size: 3rem;
  background: linear-gradient(
    90deg,
    #ffb6c1,
    #ff69b4,
    #c71585,
    #9370db,
    #b19cd9,
    #9370db,
    #c71585,
    #ff69b4,
    #ffb6c1
  );

  /* background: linear-gradient(
    90deg,
    hsla(197, 14%, 57%, 1),
    hsla(192, 17%, 94%, 1),
    hsla(197, 14%, 57%, 1)
  ); */

  /* background: linear-gradient(
    90deg,
    hsla(47, 100%, 87%, 1),
    hsla(334, 81%, 60%, 1),
    hsla(237, 64%, 56%, 1),
    hsla(334, 81%, 60%, 1),
    hsla(47, 100%, 87%, 1)
  ); */
  background-size: 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  animation: ${anim} 10s linear infinite;

  ${minWidth()} {
    font-size: 9rem;
  }
`;

export const socialsStyles = css`
  grid-row: 2/3;
  ${flex({ gap: [20] })};
  margin: auto;
`;

export const experienceSectionStyles = css`
  grid-column: 1/-1 !important;
  grid-row: 3/4;
  background-color: white;

  > .title {
    text-align: center;
    color: white;
    font-size: 4rem;
    font-weight: bold;
    background: linear-gradient(
      90deg,
      hsla(221, 59%, 75%, 1),
      hsla(216, 40%, 58%, 1)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const skillsSectionStyles = css`
  grid-row: 4/5;
  > .title {
    text-align: center;
    color: white;
    font-size: 4rem;
    font-weight: bold;
    background: linear-gradient(
      90deg,
      hsla(221, 59%, 75%, 1) 0%,
      hsla(216, 40%, 58%, 1) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const projectsSectionStyles = css`
  grid-row: 5/6;
  > .title {
    text-align: center;
    color: white;
    font-size: 4rem;
    font-weight: bold;
    background: linear-gradient(
      90deg,
      hsla(221, 59%, 75%, 1) 0%,
      hsla(216, 40%, 58%, 1) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
