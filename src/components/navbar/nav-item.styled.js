import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const StyledNavItem = styled(NavLink)`
  white-space: nowrap;
  color: var(--clr-black);
  font-size: var(--fs-base);
  font-weight: var(--fw-regular);
  padding: 0.75rem 0;
  border-bottom: 2px solid transparent;

  &:hover {
    text-shadow: 0 0 0.5px currentColor;
  }

  &:focus-visible {
    text-shadow: 0 0 0.5px currentColor;
  }

  &.active {
    border-bottom-color: var(--clr-primary);
    text-shadow: 0 0 0.5px currentColor;
  }
`;
