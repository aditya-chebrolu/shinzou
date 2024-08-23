import { css } from "@emotion/react";
import { flex, minWidth } from "@styles/index";

// export const experienceSectionStyles = css`
//   ${flex({ column: true, gap: [20] })};
// `;

// export const experienceStyles = css`
//   display: grid;
//   grid-template-columns: auto 1fr;
//   border: solid 1px #e5e4e2;
//   background-color: white;
//   padding: 10px;
//   column-gap: 10px;
//   box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
//   > .icon {
//     grid-area: 1 / 1 / 3 / 2;
//     border-right: solid 1px #e5e4e2;
//     padding-right: 10px;
//   }

//   > .name {
//     grid-area: 1 / 2 / 2 / 3;
//     font-size: 16px;
//     align-self: start;
//     justify-self: start;
//   }

//   > .row2 {
//     grid-area: 2 / 2 / 3 / 3;
//     font-size: 16px;
//     align-self: end;
//     justify-self: start;
//     color: #6d6d6d;
//   }

//   ${minWidth()} {
//     > .name {
//       font-size: 18px;
//     }

//     > .row2 {
//       font-size: 16px;
//     }
//   }
// `;

export const experienceSectionStyles = css`
  display: flex;
  flex-direction: column;
  gap: 10px;

  > .title {
    all: unset;
    font-weight: bold;
    font-size: 55px;
    line-height: 55px;
    font-family: var(--play-font);
    color: var(--gunmetal);
    filter: drop-shadow(-2.5px 2.5px 0px #ffbf00);
  }

  > .content {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  ${minWidth()} {
    > .title {
      font-size: 70px;
      line-height: 70px;
    }
  }
`;
