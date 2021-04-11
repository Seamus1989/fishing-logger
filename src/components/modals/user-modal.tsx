import React from 'react';
import styled from 'styled-components';
import {useUserContext} from '../../context/all-user-score';
import {roundToDecimanPlace} from '../../utils';
import {AllLoggedFish} from '../all-logged-fish';
import {Box} from '../common/box';
import {Text} from '../common/text';
import {Modal} from './modal-components/modal';

const StyledContainer = styled.div`
  overflow-y: scroll;
`;

export const UserModalContent = () => {
  const {currentUser, users} = useUserContext();
  const user = users
    ? users.find((thisUser) => thisUser.name === currentUser)
    : null;

  const bonusPoints = user?.bonusPoints || 0;

  if (!user) return null;
  return (
    <Modal title="User Score">
      <StyledContainer>
        <Box p="20px" flex={1} bg="#FFC2BB">
          <Box m="20px">
            <Box pb="5px">
              <Text lineHeight="24px" fontWeight={600} fontSize="21px">
                {user ? user.name : ''}
              </Text>
            </Box>
            <Text lineHeight="18px" fontWeight={300} fontSize="14px">
              Total Points: {user ? roundToDecimanPlace(user.score) : 0}
            </Text>
            <Text lineHeight="18px" fontWeight={300} fontSize="14px">
              Total Fish: {user?.allFish?.length || 0}
            </Text>
            <Text lineHeight="18px" fontWeight={300} fontSize="14px">
              Total Specimen:{' '}
            </Text>
          </Box>

          <Box>
            <Box pb="5px">
              <Text lineHeight="20px" fontWeight={600} fontSize="18px">
                {user ? user.name : ''}
              </Text>
            </Box>
            <Text lineHeight="18px" fontWeight={300} fontSize="14px">
              Total Fish: {user?.allFish?.length || 0}
            </Text>
            <Text lineHeight="18px" fontWeight={300} fontSize="14px">
              Total Specimen: {user?.specimenStringArray.join(' ') || 0}
            </Text>
            <Text lineHeight="18px" fontWeight={300} fontSize="14px">
              Bonus Points: {roundToDecimanPlace(bonusPoints)}
            </Text>
            <Text lineHeight="18px" fontWeight={300} fontSize="14px">
              Total Points:{' '}
              {user ? roundToDecimanPlace(user.score + bonusPoints) : 0}
            </Text>
          </Box>
          <AllLoggedFish user={user} />
        </Box>
      </StyledContainer>
    </Modal>
  );
};
