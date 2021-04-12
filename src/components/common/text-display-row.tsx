import React from 'react';
import {Text} from './text';
import {Box} from './box';
import {UnderlinedText} from '../random';

export const TextDisplayRow = ({
  text,
  noPadding,
  bold,
  underline,
  verticalPadding,
  onClick,
}: {
  text: string;
  noPadding?: boolean;
  bold?: boolean;
  underline?: boolean;
  verticalPadding?: number;
  onClick?: () => void;
}) => {
  return (
    <Box
      flex={1}
      display="flex"
      flexDirection="column"
      pl={noPadding ? '0px' : '10px'}
      justifyContent="center"
      pb={verticalPadding ? `${verticalPadding}px` : '0px'}
      onClick={onClick}
    >
      <>
        {underline ? (
          <UnderlinedText verySmall>{text}</UnderlinedText>
        ) : (
          <Text
            lineHeight="12px"
            fontSize="10px"
            fontWeight={bold ? 600 : undefined}
          >
            {text}
          </Text>
        )}
      </>
    </Box>
  );
};
