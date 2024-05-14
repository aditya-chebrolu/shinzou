import { keyframes } from "@emotion/react";
import { lgScreen } from ".";

export const letterAnim = keyframes`
    50% {
        rotate:-10deg;
        scale:1;
    }

    to {
        rotate:0deg;
        scale:1;
    }
`;

export const lineAnim = keyframes`
    to {
        width: calc(100% + 5px)
    }
`;
