import { RefObject, useRef } from 'react';
import { containerStyles, h1Styles, outerContainerStyles } from './styles';
import { useScreenSize } from 'src/hooks/use-screen-size';
import { motion, useScroll, useTransform } from 'framer-motion';

type Props = {
  id: string;
  containerRef: RefObject<HTMLDivElement>;
};

const Header = ({ id, containerRef }: Props) => {
  const { isMobile } = useScreenSize();
  const { scrollY: scrollY } = useScroll({ container: containerRef });
  const fromSize = isMobile ? '40px' : '80px';
  const toSize = isMobile ? '35px' : '40px';
  const scrolledValue = isMobile ? 100 : 180;
  const size = useTransform(scrollY, [0, scrolledValue], [fromSize, toSize]);
  const padding = useTransform(scrollY, [0, scrolledValue], ['50px', '15px']);
  const radius = useTransform(
    scrollY,
    [0, scrolledValue],
    ['0 0 90% 90%', '0 0 0% 0%']
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
      {/* <div css={outerContainerStyles} /> */}
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
