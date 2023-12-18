import { StyledHeading } from "./heading.styled"

export const Heading = ({
  content,
  fontSize,
  fontWeight,
  color,
  maxWidth,
  lineHeight,
}) => {
  return (
    <StyledHeading
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
      maxWidth={maxWidth}
      lineHeight={lineHeight}
    >
      {content}
    </StyledHeading>
  )
}