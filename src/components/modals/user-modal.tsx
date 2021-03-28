import React, {useMemo} from 'react';
import styled from 'styled-components';
import {useUserContext} from '../../context/all-user-score';
import {Box} from '../common/box';
import {Divider} from '../common/divider';
import {Text} from '../common/text';
import {Modal} from './modal-components/modal';

const StyledContainer = styled.div`
  overflow-y: scroll;
`;

export const UserModalContent = (): JSX.Element => {
  const {currentUser, users} = useUserContext();
  const user = users
    ? users.find((thisUser) => thisUser.name === currentUser)
    : null;

  const specimensString = useMemo(() => {
    if (users && users.length) {
      if (!user) return '';
      if (!user.totalSpecimenNumber) return '';

      return new Array(user.totalSpecimenNumber).fill('🐟').join(' ');
    }
    return '';
  }, [user, users]);

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
              Total Points: {user ? user.score : 0}
            </Text>
            <Text lineHeight="18px" fontWeight={300} fontSize="14px">
              Total Fish: {user?.allFish?.length || 0}
            </Text>
            <Text lineHeight="18px" fontWeight={300} fontSize="14px">
              Total Specimen: {specimensString === '' ? 0 : specimensString}
            </Text>
          </Box>
          <Box py="20px">
            <Divider />
          </Box>
          <Box>
            <Box pb="5px">
              <Text lineHeight="20px" fontWeight={500} fontSize="16px">
                All logged fish
              </Text>
            </Box>
          </Box>
          <Box>
            <Box pb="5px">
              <Text lineHeight="24px" fontWeight={600} fontSize="21px">
                {user ? user.name : ''}
              </Text>
            </Box>
            <Text lineHeight="18px" fontWeight={300} fontSize="14px">
              Total Points: {user ? user.score : 0}
            </Text>
            <Text lineHeight="18px" fontWeight={300} fontSize="14px">
              Total Fish: {user?.allFish?.length || 0}
            </Text>
            <Text lineHeight="18px" fontWeight={300} fontSize="14px">
              Total Specimen: {specimensString === '' ? 0 : specimensString}
            </Text>
          </Box>
          <Box py="20px">
            <Divider />
          </Box>
          <Box>
            <Box pb="5px">
              <Text lineHeight="20px" fontWeight={500} fontSize="16px">
                All logged fish
              </Text>
            </Box>
          </Box>
          <Box>
            <Box pb="5px">
              <Text lineHeight="24px" fontWeight={600} fontSize="21px">
                {user ? user.name : ''}
              </Text>
            </Box>
            <Text lineHeight="18px" fontWeight={300} fontSize="14px">
              Total Points: {user ? user.score : 0}
            </Text>
            <Text lineHeight="18px" fontWeight={300} fontSize="14px">
              Total Fish: {user?.allFish?.length || 0}
            </Text>
            <Text lineHeight="18px" fontWeight={300} fontSize="14px">
              Total Specimen: {specimensString === '' ? 0 : specimensString}
            </Text>
          </Box>
          <Box py="20px">
            <Divider />
          </Box>
          <Box>
            <Box pb="5px">
              <Text lineHeight="20px" fontWeight={500} fontSize="16px">
                All logged fish
              </Text>
            </Box>
          </Box>
          <Box>
            <Box pb="5px">
              <Text lineHeight="24px" fontWeight={600} fontSize="21px">
                {user ? user.name : ''}
              </Text>
            </Box>
            <Text lineHeight="18px" fontWeight={300} fontSize="14px">
              Total Points: {user ? user.score : 0}
            </Text>
            <Text lineHeight="18px" fontWeight={300} fontSize="14px">
              Total Fish: {user?.allFish?.length || 0}
            </Text>
            <Text lineHeight="18px" fontWeight={300} fontSize="14px">
              Total Specimen: {specimensString === '' ? 0 : specimensString}
            </Text>
          </Box>
          <Box py="20px">
            <Divider />
          </Box>
          <Box>
            <Box pb="5px">
              <Text lineHeight="20px" fontWeight={500} fontSize="16px">
                All logged fish
              </Text>
            </Box>
          </Box>

          <Box>
            <Box pb="5px">
              <Text lineHeight="24px" fontWeight={600} fontSize="21px">
                {user ? user.name : ''}
              </Text>
            </Box>
            <Text lineHeight="18px" fontWeight={300} fontSize="14px">
              Total Points: {user ? user.score : 0}
            </Text>
            <Text lineHeight="18px" fontWeight={300} fontSize="14px">
              Total Fish: {user?.allFish?.length || 0}
            </Text>
            <Text lineHeight="18px" fontWeight={300} fontSize="14px">
              Total Specimen: {specimensString === '' ? 0 : specimensString}
            </Text>
          </Box>
          <Box py="20px">
            <Divider />
          </Box>
          <Box>
            <Box pb="5px">
              <Text lineHeight="20px" fontWeight={500} fontSize="16px">
                All logged fish
              </Text>
            </Box>
          </Box>
          <Box>
            <Box pb="5px">
              <Text lineHeight="24px" fontWeight={600} fontSize="21px">
                {user ? user.name : ''}
              </Text>
            </Box>
            <Text lineHeight="18px" fontWeight={300} fontSize="14px">
              Total Points: {user ? user.score : 0}
            </Text>
            <Text lineHeight="18px" fontWeight={300} fontSize="14px">
              Total Fish: {user?.allFish?.length || 0}
            </Text>
            <Text lineHeight="18px" fontWeight={300} fontSize="14px">
              Total Specimen: {specimensString === '' ? 0 : specimensString}
            </Text>
          </Box>
          <Box py="20px">
            <Divider />
          </Box>
          <Box>
            <Box pb="5px">
              <Text lineHeight="20px" fontWeight={500} fontSize="16px">
                All logged fish
              </Text>
            </Box>
          </Box>
        </Box>
      </StyledContainer>
    </Modal>
  );
};
