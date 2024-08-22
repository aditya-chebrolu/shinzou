import { RefObject, useRef } from "react";
import { containerStyles, h1Styles } from "./styles";
import { useScreenSize } from "src/hooks/use-screen-size";
import { motion, useScroll, useTransform } from "framer-motion";

type Props = {
  id: string;
  containerRef: RefObject<HTMLDivElement>;
};

const Header = ({ id, containerRef }: Props) => {
  const { isMobile } = useScreenSize();
  const { scrollY: scrollY } = useScroll({ container: containerRef });
  const fromSize = useRef(isMobile ? "40px" : "80px");
  const toSize = useRef(isMobile ? "20px" : "40px");
  const scrolledValue = useRef(isMobile ? 120 : 180);
  const size = useTransform(
    scrollY,
    [0, scrolledValue.current],
    [fromSize.current, toSize.current]
  );
  const padding = useTransform(
    scrollY,
    [0, scrolledValue.current],
    ["50px", "15px"]
  );
  const radius = useTransform(
    scrollY,
    [0, scrolledValue.current],
    ["0 0 90% 90%", "0 0 0% 0%"]
  );

  return (
    <motion.div
      style={{
        paddingBlock: padding,
        borderRadius: radius,
      }}
      id={id}
      css={containerStyles}
    >
      <motion.h1
        css={h1Styles}
        style={{
          lineHeight: size,
          fontSize: size,
        }}
      >
        Aditya Chebrolu
      </motion.h1>
    </motion.div>
  );
};

export default Header;
