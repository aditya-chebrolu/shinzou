import { css } from "@emotion/react";
import { black } from "@styles/colors";
import { MouseEventHandler, ReactNode, useState } from "react";
import { sleep } from "src/utils";

const styles = (md = false) => css`
  position: relative;
  overflow: hidden;
  padding: 0 0 4px 4px;
  cursor: pointer;
  user-select: none;

  > .content {
    position: relative;
    background: ${black[3]};
    padding: 10px;
    border: solid 1px ${black[1]};
    z-index: 2;
  }

  > .content,
  > .left,
  > .down {
    transition-duration: 150ms;
    ${md &&
    css`
      translate: -4px 4px;
    `};
  }

  > .left,
  > .down {
    position: absolute;
  }

  > .down {
    background-color: ${black[1]};
    bottom: 0;
    left: 4px;
    height: 4px;
    width: calc(100% - 4px);
    transform: skewX(-45deg);
    transform-origin: top left;
  }

  > .left {
    background-color: ${black[0]};
    top: 4px;
    left: 0;
    width: 4px;
    transform: skewY(-45deg);
    transform-origin: top left;
    height: calc(100% - 4px);
  }
`;

const CardButton = ({
  children,
  onClick: onCardClick,
}: {
  children: ReactNode;
  onClick?: MouseEventHandler;
}) => {
  const [isMouseDown, setMouseDown] = useState(false);

  const onClick = async (e: any) => {
    await sleep(150);
    onCardClick?.(e);
  };

  return (
    <div
      css={[styles(isMouseDown)]}
      onMouseDown={() => setMouseDown(true)}
      onMouseUp={() => setMouseDown(false)}
      onMouseLeave={() => setMouseDown(false)}
      onPointerDown={() => setMouseDown(true)}
      onPointerUp={() => setMouseDown(false)}
      onPointerLeave={() => setMouseDown(false)}
      onClick={onClick}
    >
      <div className="content">{children}</div>
      <div className="down" />
      <div className="left" />
    </div>
  );
};

export default CardButton;
