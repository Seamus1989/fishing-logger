import React from 'react';
import {Text} from './text';
import {Box} from './box';

export const EmptyDisplay = ({text}: {text: string}) => {
  return (
    <Box flex={1} display="flex" flexDirection="row" p="10px">
      <>
        <Text lineHeight="12px" fontSize="10px" fontWeight={500}>
          {text}
        </Text>
      </>
    </Box>
  );
};
