import React from 'react';

import {InputNumber} from 'antd';
import {Box} from './box';
import {Text} from './text';

export const SelectNumber = ({
  onChange,
  title,
  width,
  padding,
}: {
  onChange: () => void;
  // eslint-disable-next-line react/require-default-props
  title?: string;
  width: number;
  padding: number;
}): JSX.Element => {
  return (
    <Box flex={1} display="flex" flexDirection="column">
      {title && (
        <Box px={`${padding}px`} pb="2px">
          <Text lineHeight="10px" fontWeight={400} fontSize="8px">
            {title}
          </Text>
        </Box>
      )}
      <Box
        px={`${padding}px`}
        width="50px"
        display="flex"
        flexDirection="row"
        flex={1}
      >
        <InputNumber
          inputMode="decimal"
          min={0}
          style={{width: '50px'}}
          max={100}
          defaultValue={0}
          onChange={onChange}
        />
      </Box>
    </Box>
  );
};
