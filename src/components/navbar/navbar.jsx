import { NavItem } from "./nav-item";
import { StyledNavbar } from "./navbar.styled";

export const Navbar = () => {
  return (
    <StyledNavbar>
      <NavItem href="/" title="Discover" />
      <NavItem href="/process" title="Make Your Burger" />
    </StyledNavbar>
  );
};
