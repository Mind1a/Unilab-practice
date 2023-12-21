import styled from "styled-components";

export const SUserPopup = styled.div`
  background-color: var(--clr-white);
  width: min(100%, 210px);
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 6px 15px 0 rgba(0, 0, 0, 0.4);

  h2 {
    color: var(--clr-black);
    font-size: var(--fs-base);
    font-weight: var(--fw-bold);
    padding-bottom: 1rem;
    border-bottom: 2px solid var(--clr-black-squeeze);
  }

  .links {
    padding-top: 1rem;
    display: grid;
  }

  .link {
    font-size: var(--fs-s);
    color: var(--clr-black);
    border-radius: 8px;
    padding: 0.5rem;
    transition: 0.1s ease-in;

    &:hover {
      text-shadow: 0 0 0.5px currentColor;
      background-color: var(--clr-titan-white);
    }
    &:focus-visible {
      text-shadow: 0 0 0.5px currentColor;
      background-color: var(--clr-titan-white);
    }

    &:active {
      background-color: var(--clr-titan-white);
    }

    &:last-child {
      color: var(--clr-red-500);

      &:hover {
        background-color: var(--clr-red-200);
      }
    }
  }
`;
