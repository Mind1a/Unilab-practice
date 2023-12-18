import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: min(100%, 1600px);
  margin: 0 auto;
  padding: 2rem;
  font-size: var(--fs-xs);
  font-weight: var(--fw-regular);
`

export const SPolicies = styled.div`
  display: flex;
  align-items: center;
  color: var(--clr-muted);

    p {
      margin-right: 8px;
    }

    span {
      margin: 0 4px;
    }

    a {
      color: var(--clr-primary);
    }
`

export const SPaymentMethods = styled.ul`
  display: flex;

  li {
    display: flex;
    align-items: center;
    margin-right: 8px;
  }

  li:last-child{
  margin: 0;
}
`