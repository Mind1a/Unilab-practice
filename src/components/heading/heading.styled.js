import { styled } from "styled-components";

export const SHeading = styled.h1`
  font-size: ${({ fontSize }) => fontSize || "var(--fs-h1)"};
  font-weight: ${({ fontWeight }) => fontWeight || "var(--fw-bold)"};
  color: ${({ color }) => color || "var(--clr-black)"};
  max-width: ${({ maxWidth }) => maxWidth || "240px"};
  line-height: ${({ lineHeight }) => lineHeight || "80px"};
`;