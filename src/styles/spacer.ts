import styled from "@emotion/styled";

type Props = {
  w?: `${number}${"px" | "%"}`;
  h?: `${number}${"px" | "%"}`;
};

export const Spacer = styled.div<Props>`
  width: ${({ w = "auto" }) => w};
  min-width: ${({ w = "auto" }) => w};
  max-width: ${({ w = "auto" }) => w};
  height: ${({ h = "auto" }) => h};
  min-height: ${({ h = "auto" }) => h};
  max-height: ${({ h = "auto" }) => h};
`;
