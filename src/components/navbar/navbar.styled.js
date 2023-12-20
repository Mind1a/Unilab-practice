import { styled } from "styled-components";
import { device } from "../../breakpoints";

export const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  gap: clamp(1rem, 0.5rem + 5vw, 2rem);

  ${device.xs`
    display: none;
  `}

  ${device.sm`
    display: none;
  `}

  ${device.md`
    display: none;
  `}
`;
