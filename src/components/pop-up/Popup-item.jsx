import React from "react";
import { StyledPopUpItem } from "./popup-item.styled";

const PopupItem = ({ name, href }) => {
  return (
    <StyledPopUpItem
      className={(isActive) => (isActive ? "active" : "")}
      to={href}
    >
      {name}
    </StyledPopUpItem>
  );
};

export default PopupItem;
