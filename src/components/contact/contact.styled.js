import { styled } from "styled-components";
import { device } from "../../breakpoints";

export const StyledContact = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: clamp(1rem, 1rem + 5vw, 3rem);

  ${device.xs`
    margin: unset
  `}

  ${device.sm`
       margin: unset

  `}
  .phone {
    font-size: var(--fs-base);
    font-weight: var(--fw-semibold);
    color: var(--clr-black);
    white-space: nowrap;

    ${device.xs`
    display: none;
    justify-self:center;
  `}

    ${device.sm`
    display: none;
        justify-self:center;

  `}
  }

  .user {
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
  }
`;
