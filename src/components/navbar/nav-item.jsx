import PropTypes from "prop-types";
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

NavItem.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
