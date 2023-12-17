import { styled } from "styled-components";

export const StyledLandingBody = styled.main`
  width: min(100%, 1600px);
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;



  a {
    color: var(--clr-white);
    line-height: 30px;
    max-width: 100px;
    font-size: var(--fs-h4);
    text-align: center;
    font-weight: 800;
    background-color: var(--clr-primary);
    min-width: 180px;
    min-height: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    padding: 3.75rem 2.5rem;

    &:focus-visible {
      outline: 2px solid var(--clr-primary);
      outline-offset: 2px;
    }
  }
`;