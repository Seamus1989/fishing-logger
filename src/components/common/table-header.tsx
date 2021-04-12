import React from 'react';
import {Text} from './text';
import {Box} from './box';

export const TableHeader = ({text}: {text: string}) => {
  return (
    <Box
      flex={1}
      display="flex"
      pb="20px"
      pt="10px"
      pl="10px"
      flexDirection="row"
    >
      <Text lineHeight="16px" fontSize="20px" fontWeight={600}>
        {text}
      </Text>
    </Box>
  );
};
