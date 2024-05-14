import { icons } from "@constants/icons";
import { SvgContainer } from "@styles/index";
import React from "react";
import { containerStyles } from "./styles";

const Skills = () => {
  return (
    <div css={containerStyles}>
      {Object.values(icons).map(({ Icon }, idx) => (
        <SvgContainer key={idx} h={{ mweb: 25, default: 40 }}>
          <Icon />
        </SvgContainer>
      ))}
    </div>
  );
};

export default Skills;
