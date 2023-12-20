import styled from "styled-components";

export const StyledHeader = styled.header`
  position: relative;
  display: flex;
  gap: clamp(1rem, 0.5rem + 5vw, 4rem);
  align-items: center;
  padding: 2rem;
  width: min(100%, 1600px);
  margin-inline: auto;
`;
