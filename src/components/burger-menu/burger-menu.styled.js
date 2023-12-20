import styled from "styled-components";
import { device } from "../../breakpoints";

export const StyledBurgerMenu = styled.button`
  color: var(--clr-primary);
  background-color: var(--clr-titan-white);
  font-size: var(--fs-h3);
  font-weight: var(--fw-bold);
  padding: 0.15em;
  border-radius: 100vmax;
  aspect-ratio: 1/1;
  display: grid;
  place-items: center;
  line-height: 0;
  transition: background-color 0.2s ease-in-out;
  display: none;
  cursor: pointer;
  &:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 2px;
  }

  ${device.xs`
      display: block;

  `}

  ${device.sm`
      display: block;

  `}

  ${device.md`
      display: block;

  `}
`;
