import { styled } from "styled-components";

export const StyledButton = styled.button`
  font-size: ${({ fontSize }) => fontSize || "var(--fs-base)"};
  font-weight: ${({ fontWeight }) => fontWeight || "var(--fw-semibold)"};
  background-color: ${({ background }) =>
    background || "var(--clr-titan-white)"};
  color: ${({ color }) => color || "var(--clr-titan-white)"};
  padding: 0.6em;
  border-radius: 100vmax;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5em;
  white-space: nowrap;

  &:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 2px;
  }
`;
