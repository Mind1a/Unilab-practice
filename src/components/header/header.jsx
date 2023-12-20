import { BurgerMenu } from "../burger-menu";
import { Contact } from "../contact";
import { Logo } from "../logo";
import { Navbar } from "../navbar";
import { StyledHeader } from "./header.styled";

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Navbar />
      <Contact />
      <BurgerMenu />
    </StyledHeader>
  );
};
