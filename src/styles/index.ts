import { css, keyframes } from "@emotion/react";
import { black } from "./colors";
import styled from "@emotion/styled";

export const lgScreen = `@media (min-width: 900px)`;
export const smScreen = `@media (max-width: 900px)`;

export const maxWidth = (w = 900) => `@media(max-width:${w}px)`;
export const minWidth = (w = 900) => `@media(min-width:${w}px)`;

export const flex = ({
  column = false,
  gap = [0, 0],
  wrap,
  align = "stretched",
  justify = "flex-start",
}: {
  column?: boolean;
  gap?: number[];
  wrap?: "wrap" | "no-wrap";
  align?: "center" | "stretched" | "start" | "end";
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "initial"
    | "inherit";
} = {}) => css`
  display: flex;
  flex-direction: ${column ? "column" : "row"};
  gap: ${gap[0]}px;
  align-items: ${align};
  justify-content: ${justify};
  flex-wrap: ${wrap};

  ${minWidth()} {
    gap: ${gap[1] || gap[0]}px;
  }
`;

export const noScrollbar = css`
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const pageStyles = css`
  ${flex({ column: true, gap: [20] })};
  max-width: min(100%, 1000px);
  ${minWidth()} {
    margin-inline: auto;
  }
`;

export const Spacer = styled.div<{ gap: number }>`
  min-height: ${(p) => p.gap || 0}px;
`;

export const center = css`
  display: grid;
  place-items: center;
`;

export const Card = styled.div`
  background: ${black[3]};
  padding: 10px;
  border: solid 1px ${black[1]};
`;

export const darkBackgroundStyles = css`
  background-image: var(--dotted-dark-bg);
  background-size: 17px 17px;
  background-color: black;
`;

export const customScrollBar = ({
  thumbColor,
  trackColor,
  thumbRadius = 0,
  thickness = 2,
  thumbHoverColor,
}: {
  thumbColor: `#${string}`;
  trackColor: `#${string}`;
  thumbHoverColor?: `#${string}`;
  thumbRadius?: number;
  thickness?: number;
}) => css`
  &::-webkit-scrollbar {
    width: ${thickness}px;
    height: ${thickness}px;
  }
  &::-webkit-scrollbar-track {
    background: ${trackColor};
  }
  &::-webkit-scrollbar-thumb {
    background: ${thumbColor};
    border-radius: ${thumbRadius}px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: ${thumbHoverColor};
  }
  /* Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: #888 #f1f1f1;
  }
`;

const getFill = (
  fill: { dweb?: string; mweb?: string } | string = "none",
  screen: "dweb" | "mweb"
) => {
  if (typeof fill === "string") return fill;
  return fill[screen] || "none";
};

export const SvgContainer = styled.div<{
  ratio?: string;
  w?: { dweb?: number; mweb?: number; default?: number };
  h?: { dweb?: number; mweb?: number; default?: number };
  fill?: { dweb?: string; mweb?: string } | string;
  stroke?: string;
}>`
  font-size: 0;
  > svg {
    ${({ w }) => (w ? `width:${w.mweb || w.default}px` : "")};
    ${({ h }) => (h ? `height:${h.mweb || h.default}px` : "")};
    fill: ${({ fill }) => getFill(fill, "mweb")};
    ${({ stroke }) => (stroke ? `stroke:${stroke}` : "")};
    aspect-ratio: ${({ ratio = "1" }) => ratio};
  }
  ${minWidth()} {
    > svg {
      ${({ w }) => (w ? `width:${w.dweb || w.default}px` : "")};
      ${({ h }) => (h ? `height:${h.dweb || h.default}px` : "")};
      fill: ${({ fill }) => getFill(fill, "dweb")};
    }
  }
`;

export const Divider = styled.div<{
  space?: number;
  color?: string;
  fullBleed?: boolean;
  thickness?: number;
}>`
  min-height: ${(p) => p.thickness || 1}px;
  background: ${(p) => p.color || black[2]};
  margin: ${(p) => p.space}px 0;

  ${(p) =>
    p.fullBleed
      ? css`
          box-shadow: 0 0 0 1000vmax ${p.color || black[2]};
          clip-path: inset(0 -100vmax);
        `
      : ""}
`;

const anim = keyframes`
  50% {
    scale:0.9;
  }
  70% {
    scale:1.1;
  }
`;

export const tagsRowStyles = css`
  ${flex({ gap: [15], wrap: "no-wrap" })};
  overflow-x: scroll;
  ${noScrollbar}

  > div {
    flex-shrink: 0;
    user-select: none;
    cursor: pointer;
    font-size: 18px;
    line-height: 18px;
    transition: all 150ms;
    color: #c0c0c0;
  }

  > .applied {
    animation: ${anim} 150ms linear forwards;
    color: #ffbf00;
  }

  ${minWidth()} {
    > div:not(.applied):has(~ div:hover) {
      scale: 0.9;
      opacity: 0.5;
    }

    > div:hover {
      /* color: #ffd700; */

      & ~ div:not(.applied) {
        scale: 0.9;
        opacity: 0.5;
      }
    }
  }
`;
