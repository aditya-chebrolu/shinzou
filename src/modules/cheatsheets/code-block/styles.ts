import { css, keyframes } from "@emotion/react";
import { flex, lgScreen } from "@styles/index";

const codeThemeStyles = css`
  code[class*="language-"],
  pre[class*="language-"] {
    color: #d6deeb;
    font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  code span {
    text-wrap: wrap;
    word-break: break-all;
    /* word-wrap: break-word; */
  }

  pre[class*="language-"]::-moz-selection,
  pre[class*="language-"] ::-moz-selection,
  code[class*="language-"]::-moz-selection,
  code[class*="language-"] ::-moz-selection {
    text-shadow: none;
    background: rgba(29, 59, 83, 0.99);
  }

  pre[class*="language-"]::selection,
  pre[class*="language-"] ::selection,
  code[class*="language-"]::selection,
  code[class*="language-"] ::selection {
    text-shadow: none;
    background: rgba(29, 59, 83, 0.99);
  }

  @media print {
    code[class*="language-"],
    pre[class*="language-"] {
      text-shadow: none;
    }
  }

  /* Code blocks */
  pre[class*="language-"] {
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
  }

  :not(pre) > code[class*="language-"],
  pre[class*="language-"] {
    color: #d6deeb;
    background: #011627;
  }

  :not(pre) > code[class*="language-"] {
    padding: 0.1em;
    border-radius: 0.3em;
    white-space: normal;
  }

  .token.comment,
  .token.prolog,
  .token.cdata {
    color: #637777;
  }

  .token.punctuation {
    color: #5f7e97;
  }

  .namespace {
    color: #82b1ff;
  }

  .token.deleted {
    color: rgba(239, 83, 80, 0.56);
    font-style: italic;
  }

  .token.symbol,
  .token.property {
    color: #80cbc4;
  }

  .token.operator {
    color: #c792ea;
  }

  .token.tag,
  .token.keyword {
    color: #c792ea;
  }

  .token.boolean {
    color: #ff5874;
  }

  .token.number {
    color: #f78c6c;
  }

  .token.constant,
  .token.function,
  .token.builtin,
  .token.char {
    color: #82aaff;
  }

  .token.selector,
  .token.doctype {
    color: #c792ea;
    font-style: italic;
  }

  .token.attr-name,
  .token.inserted {
    color: #c5e478;
    font-style: italic;
  }

  .token.string,
  .token.url,
  .token.entity,
  .language-css .token.string,
  .style .token.string {
    color: #ecc48d;
  }

  .token.class-name,
  .token.atrule,
  .token.attr-value {
    color: #ffcb8b;
  }

  .token.regex,
  .token.important,
  .token.variable {
    color: #d6deeb;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }

  .token.italic {
    font-style: italic;
  }
`;

export const containerStyles = css`
  ${flex({ column: true, gap: [0] })};
  position: relative;
  > .copied {
    position: absolute;
    right: 15px;
    bottom: 15px;
    font-size: 12px;
    line-height: 12px;
    color: #29ab87;
  }
  ${codeThemeStyles}
`;

export const descriptionStyles = css`
  ${flex({ gap: [10], column: true })}
  color: #c0c0c0;
  background-color: #1c1c20;
  padding: 8px;
  font-size: 14px;

  > div {
    > .highlighted {
      /* color: #f653a6; */
      color: #318ce7;
    }
  }

  ${lgScreen} {
    font-size: 15px;
    padding: 10px 15px;
  }
`;

const anim = keyframes`
  50% {
    border-color: #29AB87;
  }
`;

export const codeStyles = (showAnim = false) => css`
  background-color: #0d0d0f;
  color: #dbdbdb;
  font-family: var(--code-font);
  cursor: pointer;
  font-size: 13px;
  padding: 8px;
  border: solid 1.5px #1c1c20;

  ${showAnim
    ? css`
        animation: ${anim} 700ms forwards;
      `
    : ""}

  ${lgScreen} {
    padding: 15px;
    font-size: 14px;

    ${lgScreen} {
      transition: all 300ms;
      &:hover {
        border-color: #494954;
      }
    }
  }
`;
