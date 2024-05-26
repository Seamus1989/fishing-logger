import { Text } from "@chakra-ui/react";

export const TextDisplayColumn = ({ text }: { text: string }) => {
  return (
    <Text lineHeight="16px" fontWeight={300} fontSize="12px">
      {text}
    </Text>
  );
};
