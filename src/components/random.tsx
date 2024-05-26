import { Box, Text } from "@chakra-ui/react";

const StyledRotate = ({
  children,
  show,
}: {
  children: React.ReactNode;
  show: boolean;
}) => {
  return (
    <Box
      style={{
        msTransform: show ? "rotate(180deg)" : "rotate(0deg)",
        transform: show ? "rotate(180deg)" : "rotate(0deg)",
      }}
    >
      {children}
    </Box>
  );
};

const UnderlinedText = ({
  copy,
  small,
  verySmall,
}: {
  copy: string;
  small?: boolean;
  verySmall?: boolean;
}) => {
  const styles = {
    lineHeight: small ? "14px" : verySmall ? "12px" : "16px",
    fontSize: small ? "12px" : verySmall ? "10px" : "14px",
    fontWeight: 300,
    textDecoration: "underline",
  };

  return <Text {...styles}>{copy}</Text>;
};

export { StyledRotate, UnderlinedText };
