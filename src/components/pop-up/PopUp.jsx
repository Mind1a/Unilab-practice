import React from "react";
import {
  StyledName,
  StyledPopUpLinksContainer,
  StyledPopup,
  StyledPopupWrapper,
} from "./pop-up.styled";
import PopupItem from "./Popup-item";

export const PopUp = () => {
  return (
    <StyledPopup className="arrow-top">
      <StyledPopupWrapper>
        <StyledName>Jerome Porter</StyledName>
        <StyledPopUpLinksContainer>
          <PopupItem href="#" name="Profile" />
          <PopupItem href="#" name="Settings" />
          <PopupItem href="#" name="Log out" />
        </StyledPopUpLinksContainer>
      </StyledPopupWrapper>
    </StyledPopup>
  );
};
