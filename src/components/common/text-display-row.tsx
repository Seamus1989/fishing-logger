import { Text } from "@chakra-ui/react";

import { Box } from "@chakra-ui/react";
import { UnderlinedText } from "../random";

export const TextDisplayRow = ({
  text,
  leftPadding,
  bold,
  underline,
  verticalPadding,
  onClick,
  borderBottom,
  fontSize,
}: {
  text: string;
  leftPadding?: number;
  bold?: boolean;
  underline?: boolean;
  verticalPadding?: number;
  onClick?: () => void;
  borderBottom?: boolean;
  fontSize?: string;
}) => {
  return (
    <Box
      flex={1}
      display="flex"
      flexDirection="column"
      pl={!leftPadding ? "0px" : `${leftPadding}px`}
      justifyContent="center"
      pb={verticalPadding ? `${verticalPadding}px` : "0px"}
      onClick={onClick}
      borderBottom={borderBottom ? "1px black solid" : undefined}
    >
      <>
        {underline ? (
          <UnderlinedText verySmall copy="text"></UnderlinedText>
        ) : (
          <Text
            lineHeight="12px"
            fontSize={fontSize || "10px"}
            fontWeight={bold ? 600 : undefined}
          >
            {text}
          </Text>
        )}
      </>
    </Box>
  );
};
