import { StyledButton } from "./button.styled";

export const Button = ({
  type,
  content,
  onClick,
  color,
  background,
  fontSize,
  fontWeight,
}) => {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      color={color}
      background={background}
      fontSize={fontSize}
      fontWeight={fontWeight}
    >
      {content}
    </StyledButton>
  );
};
