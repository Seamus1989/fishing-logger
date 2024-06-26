/* eslint-disable react/require-default-props */

import {
  Box,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
} from "@chakra-ui/react";

export const SelectNumber = ({
  onChange,
  title,
  value,
  hideSteppers,
}: {
  onChange: (value: string) => void;
  // eslint-disable-next-line react/require-default-props
  title?: string;
  value: string;
  hideSteppers?: boolean;
}): JSX.Element => {
  return (
    <Box flex={1} display="flex" flexDirection="column">
      {title && (
        <Box p="5px">
          <Text lineHeight="10px" fontWeight={400} fontSize="10px">
            {title}
          </Text>
        </Box>
      )}
      <Box display="flex" flexDirection="row" flex={1}>
        <NumberInput
          inputMode="decimal"
          min={0}
          style={{ backgroundColor: "white" }}
          value={value}
          size="sm"
          onChange={(newValue) => onChange(newValue)}
        >
          <NumberInputField />
          {!hideSteppers && (
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          )}
        </NumberInput>
      </Box>
    </Box>
  );
};
