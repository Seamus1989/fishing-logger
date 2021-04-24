import React from 'react';
import {Box} from './box';

export const Divider = (): JSX.Element => {
  return <Box height="1px" backgroundColor="rgba(0,0,0,0.4)" />;
};

export const CentralDivider = (): JSX.Element => {
  return (
    <Box display="flex" flexDirection="row" my="5px" px="5px">
      <Box flex={5}>
        <Divider />
      </Box>
      <Box flex={1} />
    </Box>
  );
};
