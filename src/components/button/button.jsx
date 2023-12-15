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
