import styled from "styled-components";

export const StyledPopup = styled.div`
  width: 209px;
  height: 205px;
  position: absolute;
  z-index: 999;
  padding: 16px;
  right: 2rem;
  top: 85%;

  &:after {
    content: "";
    height: 100%;
    width: 100%;
    border-radius: 16px;
    position: absolute;
    top: 0;
    left: 0;
    box-shadow: 0 1px 12px rgba(0, 0, 0, 0.1);
  }

  &:before {
    content: "";
    width: 25px;
    height: 25px;
    transform: rotate(45deg);
    background: white;
    position: absolute;
    border: 1px solid #fff;
    z-index: 998;
  }

  &.arrow-top:before {
    top: -8px;
    right: 13px;
  }
`;

export const StyledPopupWrapper = styled.div`
  width: 100%;
  border-radius: 4px;
  background: #fff;
  position: relative;
  z-index: 998;
`;

export const StyledName = styled.h6`
  color: var(--clr-black);
  font-weight: var(--fw-bold);
  font-weight: bold;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--clr-black-squeeze);
`;

export const StyledPopUpLinksContainer = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
`;
