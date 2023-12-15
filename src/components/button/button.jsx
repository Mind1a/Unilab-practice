import PropTypes from "prop-types";
import { StyledButton } from "./button.styled";

export const Button = ({
  type,
  content,
  onClick,
  color,
  backgroundColor,
  fontSize,
  FontWeight,
}) => {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      color={color}
      backgroundColor={backgroundColor}
      fontSize={fontSize}
      FontWeight={FontWeight}
    >
      {content}
    </StyledButton>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  fontSize: PropTypes.string,
  FontWeight: PropTypes.string,
};
