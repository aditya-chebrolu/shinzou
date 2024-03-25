import { css } from "@emotion/react";
import { black } from "./colors";
import styled from "@emotion/styled";

export const lgScreen = `@media (min-width: 900px)`;

export const flex = ({
  column = false,
  gap = 0,
  wrap,
  align = "stretched",
  justify = "flex-start",
}: {
  column?: boolean;
  gap?: number;
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
  gap: ${gap}px;
  align-items: ${align};
  justify-content: ${justify};
  flex-wrap: ${wrap};
`;

export const noScrollbar = css`
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const pageStyles = css`
  ${flex({ column: true, gap: 20 })};
  ${noScrollbar};
  height: 100dvh;
  overflow: hidden scroll;

  ${lgScreen} {
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

export const SvgContainer = styled.div<{
  ratio?: string;
  w?: { dweb?: number; mweb?: number; default?: number };
  h?: { dweb?: number; mweb?: number; default?: number };
}>`
  font-size: 0;
  > svg {
    ${({ w }) => (w ? `width:${w.mweb || w.default}px` : "")};
    ${({ h }) => (h ? `height:${h.mweb || h.default}px` : "")};
    ${({ ratio }) => (ratio ? `aspect-ratio:${ratio || 1}` : "")};
  }
  @media (min-width: 500px) {
    > svg {
      ${({ w }) => (w ? `width:${w.dweb || w.default}px` : "")};
      ${({ h }) => (h ? `height:${h.dweb || h.default}px` : "")};
      ${({ ratio }) => (ratio ? `aspect-ratio:${ratio}` : "")};
    }
  }
`;

export const Card = styled.div`
  background: ${black[3]};
  padding: 10px;
  border: solid 1px ${black[1]};
`;
