import { useEffect, useState } from "react";

export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState("lg");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        setScreenSize("lg");
      } else if (window.innerWidth >= 992) {
        setScreenSize("md");
      } else if (window.innerWidth >= 768) {
        setScreenSize("sm");
      } else {
        setScreenSize("xs");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { screenSize, isMobile: ["xs", "sm"].includes(screenSize) };
};
