import { RefObject, useRef } from "react";
import { containerStyles } from "./styles";
// import { motion, useScroll, useTransform } from "framer-motion";

type Props = {
  id: string;
  containerRef: RefObject<HTMLDivElement>;
};

const Header = ({ id, containerRef }: Props) => {
  // const { scrollY: scrollY } = useScroll({ container: containerRef });
  // const size = useTransform(scrollY, [0, 180], ["80px", "40px"]);
  // const padding = useTransform(scrollY, [0, 180], ["50px", "0px"]);
  // const radius = useTransform(scrollY, [0, 180], ["0 0 90% 90%", "0 0 0% 0%"]);

  return (
    <div
      // style={{ padding: padding, borderRadius: radius }}
      id={id}
      css={containerStyles}
    >
      <h1
        // style={{
        //   fontSize: size,
        // }}
        className="title"
      >
        Aditya Chebrolu
      </h1>
    </div>
  );
};

export default Header;
