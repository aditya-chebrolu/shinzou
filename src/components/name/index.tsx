import { description, designation, name } from "@constants/data/name";
import {
  introContainerStyles,
  dotStyles,
  designationContainerStyles,
  containerStyles,
  letterStyle1,
  letterStyle2,
  descriptionStyles,
} from "./styles";

const Name = () => {
  const PRE = "Hi, I'm".split("");
  const NAME = "Aditya Chebrolu";
  const [fn, ln] = NAME.split(" ");

  return (
    <div css={containerStyles}>
      <LineOne />
      <LineTwo />
      <div css={descriptionStyles}>{description}</div>
    </div>
  );
};

const LineOne = () => {
  const [fn, ln] = name.split(" ").map((l) => l.split(""));
  const initDelay = 1;
  const letterInterval = 0.1;
  const fnDelay = initDelay + fn.length * letterInterval;
  const lnDelay = fnDelay + ln.length * letterInterval;
  return (
    <div css={introContainerStyles}>
      <div className="intro">Hi, I'm</div>
      <div>
        {fn.map((letter, idx) => (
          <div
            key={idx}
            css={letterStyle1(1, initDelay + idx * letterInterval)}
          >
            {letter}
          </div>
        ))}
      </div>
      <div>
        {ln.map((letter, idx) => (
          <div key={idx} css={letterStyle1(1, fnDelay + idx * letterInterval)}>
            {letter}
          </div>
        ))}
        <div css={dotStyles(lnDelay)} />
      </div>
    </div>
  );
};

const LineTwo = () => {
  const letterInterval = 0.1;
  const initDelay = 1 + name.length * letterInterval;
  return (
    <div css={designationContainerStyles}>
      {designation.map((word, idx) => (
        <div key={idx}>
          {word.map((obj, idx) => (
            <div
              key={idx}
              css={letterStyle2(1, initDelay + obj.delay * letterInterval)}
            >
              {obj.letter}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Name;
