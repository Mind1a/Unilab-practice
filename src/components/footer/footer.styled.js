import styled from "styled-components";
import { device } from "../../breakpoints";

export const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: min(100%, 1600px);
  margin: 0 auto;
  padding: 2rem;
  font-size: var(--fs-xs);
  font-weight: var(--fw-regular);

  ${device.md` 
    flex-wrap: wrap; 
    gap: 0.5rem; 
    justify-content: center; 
    padding: 1rem; 
  `}

  ${device.xs` 
    justify-content: space-between; 
  `}
`;

export const SPolicies = styled.div`
  display: flex;
  align-items: center;
  color: var(--clr-muted);
  padding: 0 0.5rem;

  p {
    margin-right: 8px;
  }

  span {
    margin: 0 4px;
  }

  a {
    color: var(--clr-primary);
    &:focus-visible {
      outline: 2px solid var(--clr-primary);
      outline-offset: 2px;
    }
  }

  ${device.xs` 
    display: block; 
  `}
`;

export const SPaymentMethods = styled.ul`
  display: flex;
  padding: 0 0.5rem;

  li {
    display: flex;
    align-items: center;
    margin-right: 8px;
  }

  li:last-child {
    margin: 0;
  }
`;
