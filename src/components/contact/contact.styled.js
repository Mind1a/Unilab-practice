import { styled } from "styled-components";

export const StyledContact = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: clamp(1rem, 1rem + 5vw, 3rem);

  .phone {
    font-size: var(--fs-base);
    font-weight: var(--fw-semibold);
    color: var(--clr-black);
    white-space: nowrap;
  }

  .user {
    background-color: var(--clr-titan-white);
    padding: 1em;
    border-radius: 100vmax;
    display: grid;
    place-items: center;

    &:focus-visible {
      outline: 2px solid var(--clr-primary);
      outline-offset: 2px;
    }
  }
`;
