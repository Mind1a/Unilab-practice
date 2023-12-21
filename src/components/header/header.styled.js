import styled from "styled-components";
import { device } from "../../breakpoints";

export const StyledHeader = styled.header`
  display: flex;
  gap: clamp(1rem, 0.5rem + 5vw, 4rem);
  align-items: center;
  padding: 2rem;
  width: min(100%, 1600px);
  margin-inline: auto;

  ${device.xs`
    display: flex;
    justify-content: space-between;
  `}

  ${device.sm`
    display: flex;
      justify-content: space-between;

  `}
`;
