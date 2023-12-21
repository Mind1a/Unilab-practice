import { SHeading } from "./heading.styled";

export const Heading = ({
  children,
  fontSize,
  fontWeight,
  color,
  maxWidth,
  lineHeight,
}) => {
  return (
    <SHeading
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
      maxWidth={maxWidth}
      lineHeight={lineHeight}
    >
      {children}
    </SHeading>
  );
};
