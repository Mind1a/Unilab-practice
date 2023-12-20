import React, { useState } from "react";
import { StyledBurgerMenu } from "./burger-menu.styled";
import open from "../../assets/burger-menu/open.png";
import close from "../../assets/burger-menu/close.png";

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleMenuOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <StyledBurgerMenu onClick={handleMenuOpen}>
        <img src={isOpen ? open : close} alt="burger menu" />
      </StyledBurgerMenu>
    </>
  );
};
