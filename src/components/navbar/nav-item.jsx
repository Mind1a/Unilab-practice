import { StyledNavItem } from "./nav-item.styled";

export const NavItem = ({ href, title }) => {
  return (
    <StyledNavItem
      className={({ isActive }) => (isActive ? "active" : "")}
      to={href}
    >
      {title}
    </StyledNavItem>
  );
};
