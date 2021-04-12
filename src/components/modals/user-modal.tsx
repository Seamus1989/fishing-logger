import React from 'react';
import styled from 'styled-components';
import {useUserContext} from '../../context/all-user-score';
import {AllLoggedFish} from '../molecules/all-logged-fish';
import {TableHeader} from '../common/table-header';
import {Box} from '../common/box';
import {Modal} from './modal-components/modal';
import {TextDisplayColumn} from '../common/text-display-column';
import {Text} from '../common/text';
import {roundToDecimalPlace} from '../../utils';

const StyledContainer = styled.div`
  overflow-y: scroll;
`;

export const UserModalContent = () => {
  const {currentUser, users} = useUserContext();
  const user = users
    ? users.find((thisUser) => thisUser.name === currentUser)
    : null;

  if (!user) return null;
  return (
    <Modal title="User Score">
      <StyledContainer>
        <Box p="15px" flex={1} bg="#FFC2BB">
          <Box pb="25px">
            <Box pb="5px">
              <Text lineHeight="18px" fontWeight={600} fontSize="16px">
                {user ? user.name : ''}
              </Text>
            </Box>
            <Box pl="5px">
              <TextDisplayColumn
                text={`Total Fish: ${user?.allFish?.length || 0}`}
              />
              <TextDisplayColumn
                text={`Total Specimen: ${user?.totalSpecimenNumber || 0}`}
              />
              <TextDisplayColumn
                text={`Score Points: ${
                  user ? roundToDecimalPlace(user.score) : 0
                }`}
              />
            </Box>
          </Box>
          <Box pb="50px">
            <TableHeader text="All Logged Fish" />
            <AllLoggedFish user={user} />
          </Box>
        </Box>
      </StyledContainer>
    </Modal>
  );
};
