import { css, keyframes } from "@emotion/react";
import { customScrollBar, flex, lgScreen } from "@styles/index";

const scrollAnim = keyframes`
  from {   
    scale: 0.9;
    opacity: 0;
  }
  to { 
    scale: 1;
    opacity: 1;
  }
`;

// const codeThemeStyles = css`
//   code[class*="language-"],
//   pre[class*="language-"] {
//     color: #d6deeb;
//     font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
//     text-align: left;
//     white-space: pre;
//     word-spacing: normal;
//     word-break: normal;
//     word-wrap: normal;
//     -moz-tab-size: 4;
//     -o-tab-size: 4;
//     tab-size: 4;
//     -webkit-hyphens: none;
//     -moz-hyphens: none;
//     -ms-hyphens: none;
//     hyphens: none;
//   }

//   code span {
//     /* text-wrap: wrap; */
//     word-break: break-all;
//     /* word-wrap: break-word; */
//   }

//   pre[class*="language-"]::-moz-selection,
//   pre[class*="language-"] ::-moz-selection,
//   code[class*="language-"]::-moz-selection,
//   code[class*="language-"] ::-moz-selection {
//     text-shadow: none;
//     background: rgba(29, 59, 83, 0.99);
//   }

//   pre[class*="language-"]::selection,
//   pre[class*="language-"] ::selection,
//   code[class*="language-"]::selection,
//   code[class*="language-"] ::selection {
//     text-shadow: none;
//     background: rgba(29, 59, 83, 0.99);
//   }

//   @media print {
//     code[class*="language-"],
//     pre[class*="language-"] {
//       text-shadow: none;
//     }
//   }

//   /* Code blocks */
//   pre[class*="language-"] {
//     padding: 1em;
//     margin: 0.5em 0;
//     overflow: auto;
//   }

//   :not(pre) > code[class*="language-"],
//   pre[class*="language-"] {
//     color: #d6deeb;
//     background: #011627;
//   }

//   :not(pre) > code[class*="language-"] {
//     padding: 0.1em;
//     border-radius: 0.3em;
//     white-space: normal;
//   }

//   .token.comment,
//   .token.prolog,
//   .token.cdata {
//     color: #637777;
//   }

//   .token.punctuation {
//     color: #5f7e97;
//   }

//   .namespace {
//     color: #82b1ff;
//   }

//   .token.deleted {
//     color: rgba(239, 83, 80, 0.56);
//     font-style: italic;
//   }

//   .token.symbol,
//   .token.property {
//     color: #80cbc4;
//   }

//   .token.operator {
//     color: #c792ea;
//   }

//   .token.tag,
//   .token.keyword {
//     color: #c792ea;
//   }

//   .token.boolean {
//     color: #ff5874;
//   }

//   .token.number {
//     color: #f78c6c;
//   }

//   .token.constant,
//   .token.function,
//   .token.builtin,
//   .token.char {
//     color: #82aaff;
//   }

//   .token.selector,
//   .token.doctype {
//     color: #c792ea;
//     font-style: italic;
//   }

//   .token.attr-name,
//   .token.inserted {
//     color: #c5e478;
//     font-style: italic;
//   }

//   .token.string,
//   .token.url,
//   .token.entity,
//   .language-css .token.string,
//   .style .token.string {
//     color: #ecc48d;
//   }

//   .token.class-name,
//   .token.atrule,
//   .token.attr-value {
//     color: #ffcb8b;
//   }

//   .token.regex,
//   .token.important,
//   .token.variable {
//     color: #d6deeb;
//   }

//   .token.important,
//   .token.bold {
//     font-weight: bold;
//   }

//   .token.italic {
//     font-style: italic;
//   }
// `;

export const containerStyles = css`
  ${flex({ column: true, gap: [0] })};
  position: relative;
  border: solid 1.5px #343841;
  /* scale: 0.9; */
  /* opacity: 0; */

  animation: ${scrollAnim} forwards linear;
  /* animation-timeline: scroll(); //block for y scroll ; inline for x scroll */
  /* animation-timeline: view(500px 0px); dist. from top and dist. from bottom */
  animation-timeline: view();
  animation-range: 0px 100px; //  start when top is 100px from bottom
  /* animation-range: cover; */
  /* animation-range-start: 0px; // start when elem top is 0px from bottom */
  /* animation-range-end: 100px; // end when elem top is 0px from bottom */
  /* animation-range: 0px 100px; // shorthand for start and end */
`;

export const descriptionStyles = css`
  ${flex({ gap: [10], column: true })}
  padding: 8px;
  font-size: 14px;

  color: #c0c0c0;
  border-bottom: solid 1.5px #343841;
  background-color: #17181c;

  > div {
    > .highlighted {
      color: #318ce7;
    }
  }

  ${lgScreen} {
    font-size: 15px;
    padding: 10px 15px;
  }
`;

export const codeStyles = css`
  background-color: #0d0d0f;
  color: #dbdbdb;
  font-family: var(--code-font);
  font-size: 14px;
  padding: 6px 8px;
  line-height: 22px;
  overflow-x: auto;

  ${lgScreen} {
    padding: 10px 15px;
    line-height: 24px;
    ${customScrollBar({
      thumbColor: "#343841",
      trackColor: "#0d0d0f",
      thickness: 4,
    })};
  }
`;
