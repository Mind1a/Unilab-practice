import { styled } from "styled-components";
import { device } from "../../breakpoints";

export const SUser = styled.div`
  position: relative;
`;

export const SUserButton = styled.button`
  background-color: var(--clr-titan-white);
  padding: 1em;
  border-radius: 100vmax;
  display: grid;
  place-items: center;
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid var(--clr-primary);
    outline-offset: 2px;
  }

  ${device.xs`
    display: none;
  `}

  ${device.md`
    display: none;
  `}

    ${device.sm`
    display: none;
  `}
`;
