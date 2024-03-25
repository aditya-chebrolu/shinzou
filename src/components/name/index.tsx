import {
  introContainerStyles,
  dotStyles,
  designationContainerStyles,
  containerStyles,
} from "./styles";
import { designation } from "@constants/data";

const Name = () => {
  const PRE = "Hi, I'm".split("");
  const NAME = "Aditya Chebrolu";
  const [fn, ln] = NAME.split(" ");

  return (
    <div css={containerStyles}>
      <div css={introContainerStyles}>
        <div className="intro">{PRE}</div>
        <div>
          {fn.split("").map((l, idx) => (
            <div
              className="letter"
              style={{ animationDelay: `${1000 + idx * 150}ms` }}
              key={idx}
            >
              {l}
            </div>
          ))}
        </div>
        <div>
          {ln.split("").map((l, idx) => (
            <span
              key={idx}
              className="letter"
              style={{
                animationDelay: `${1000 + (idx + fn.length) * 150}ms`,
              }}
            >
              {l}
            </span>
          ))}
          <div
            css={dotStyles}
            style={{ animationDelay: `${1000 + (NAME.length + 2) * 150}ms` }}
          />
        </div>
      </div>
      <div css={designationContainerStyles}>
        {designation.map(({ letter, delay }, idx) => (
          <span
            key={idx}
            style={{
              animationDelay: `${
                1000 + (NAME.length + 2) * 150 + delay * 80
              }ms`,
            }}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Name;
