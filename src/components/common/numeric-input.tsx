/* eslint-disable react/require-default-props */
import React from 'react';

import {InputNumber} from 'antd';
import {Box} from './box';
import {Text} from './text';

export const SelectNumber = ({
  onChange,
  title,
  width,
  padding,
  value,
  renderRight,
}: {
  onChange: (value: number) => void;
  // eslint-disable-next-line react/require-default-props
  title?: string;
  width: number;
  padding: number;
  value: number;
  renderRight?: JSX.Element;
}): JSX.Element => {
  const renderWidth = renderRight
    ? `${50 + 2 * padding}px`
    : `${100 + 2 * padding}px`;
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
        width={renderWidth}
        display="flex"
        flexDirection="row"
        flex={1}
      >
        <InputNumber
          inputMode="decimal"
          min={0}
          style={{width: renderWidth}}
          max={100}
          defaultValue={0}
          value={value}
          onChange={(newValue) => onChange(newValue)}
        />
        {renderRight || null}
      </Box>
    </Box>
  );
};
