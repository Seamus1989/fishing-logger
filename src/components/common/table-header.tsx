import { Box, Text } from "@chakra-ui/react";

export const TableHeader = ({ text }: { text: string }) => {
  return (
    <Box
      flex={1}
      display="flex"
      pb="20px"
      pt="10px"
      pl="10px"
      flexDirection="row"
    >
      <Text lineHeight="24px" fontSize="21px" fontWeight={600}>
        {text}
      </Text>
    </Box>
  );
};
