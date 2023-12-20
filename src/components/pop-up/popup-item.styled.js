import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledPopUpItem = styled(NavLink)`
  line-height: 36px;
  font-size: var(--fs-s);
  color: var(--clr-black);
  border-radius: 8px;
  padding-left: 8px;
  &:hover {
    text-shadow: 0 0 0.5px currentColor;
    background-color: var(--clr-titan-white);
    transition: 0.3s ease-in;
  }
  &:focus-visible {
    text-shadow: 0 0 0.5px currentColor;
  }
  &:active {
    background-color: var(--clr-titan-white);
  }

  &:last-child {
    color: var(--clr-red-500);
  }

  &:last-child:hover {
    background-color: var(--clr-red-200);
  }
`;
