import React from 'react';
import {Box} from '../common/box';
import {Text} from '../common/text';
import {Modal} from './modal-components/modal';

export const UserModalContent = (): JSX.Element => {
  return (
    <Modal title="User Score">
      <Box>
        <Text>helo</Text>
      </Box>
    </Modal>
  );
};
