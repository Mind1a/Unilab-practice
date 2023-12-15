import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const StyledLogo = styled(Link)`
  color: var(--clr-primary);
  background-color: var(--clr-titan-white);
  font-size: var(--fs-h3);
  font-weight: var(--fw-bold);
  padding: 0.75em;
  border-radius: 100vmax;
  aspect-ratio: 1/1;
  display: grid;
  place-items: center;
  line-height: 0;
  transition: background-color 0.2s ease-in-out;

  &:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 2px;
  }
`;
