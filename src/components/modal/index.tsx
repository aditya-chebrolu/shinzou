import { Dialog, Drawer } from "@mui/material";
import React, { ReactNode, use } from "react";
import { useScreenSize } from "src/hooks/use-screen-size";
import { modalStyles } from "./styles";

type Props = {
  children: ReactNode;
  onClose: () => void;
  open: boolean;
};

const Modal = ({ children, onClose, open }: Props) => {
  const { screenSize } = useScreenSize();
  const isSmallDevice = ["xs", "sm"].includes(screenSize);

  const Wrapper = isSmallDevice ? Drawer : Dialog;

  return (
    <Wrapper open={open} onClose={onClose} css={modalStyles} anchor="bottom">
      <div className="content">{children}</div>
    </Wrapper>
  );
};

export default Modal;
