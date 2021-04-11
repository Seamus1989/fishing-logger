import React, {useState, useEffect} from 'react';
import {Input} from 'antd';
import styled from 'styled-components';
import AnimateHeight from 'react-animate-height';
import {useUserContext} from '../../context/all-user-score';
import {Box} from '../common/box';
import {Text} from '../common/text';
import {StyledImage, UnderlinedText} from '../random';
import plus from '../../plus.svg';
import {useModalContext} from '../../context/modal-context';
import {UserModalContent} from '../modals/user-modal';
import {capitaliseMe, roundToDecimanPlace} from '../../utils';

const StyledContainer = styled.div`
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  left: 0;
  background-color: #ff8883;
  z-index: 100;
`;

const UserHeaderProfile = () => {
  const {currentUser, users} = useUserContext();
  const [height, setHeight] = useState<string | number>(0);

  const {setShow} = useModalContext();
  const user = users
    ? users.find((thisUser) => thisUser.name === currentUser)
    : null;

  useEffect(() => {
    if (!user) {
      setHeight(0);
    }

    if (user) {
      setHeight('auto');
    }
  }, [user]);

  const bonusPoints = user?.bonusPoints || 0;

  return (
    <AnimateHeight duration={450} height={height}>
      <Box m="10px" bg="#FFC2BB" borderRadius="10px" p="15px">
        <Box>
          <Box pb="5px">
            <Text lineHeight="18px" fontWeight={600} fontSize="16px">
              {user ? user.name : ''}
            </Text>
          </Box>
          <Text lineHeight="16px" fontWeight={300} fontSize="12px">
            Total Fish: {user?.allFish?.length || 0}
          </Text>
          <Text lineHeight="16px" fontWeight={300} fontSize="12px">
            Total Specimen: {user?.totalSpecimenNumber || 0}
          </Text>
          <Text lineHeight="16px" fontWeight={300} fontSize="12px">
            Score Points: {user ? roundToDecimanPlace(user.score) : 0}
          </Text>
          <Text lineHeight="16px" fontWeight={300} fontSize="12px">
            Bonus Points: {roundToDecimanPlace(bonusPoints)}
          </Text>
          <Text lineHeight="16px" fontWeight={300} fontSize="12px">
            Total Points:{' '}
            {user ? roundToDecimanPlace(user.score + bonusPoints) : 0}
          </Text>

          <Box onClick={() => setShow(true)} mt="5px">
            <UnderlinedText>See All / Edit</UnderlinedText>
          </Box>
          <UserModalContent />
        </Box>
      </Box>
    </AnimateHeight>
  );
};
export const AppHeader = (): JSX.Element => {
  const {currentUser, changeUser} = useUserContext();
  const [text, setText] = useState('');

  return (
    <StyledContainer>
      <Box display="flex" flex={1} flexDirection="row">
        <Box
          pt="10px"
          pb="10px"
          pl="10px"
          my="10px"
          flex={1}
          display="flex"
          flexDirection="row"
        >
          <Box display="flex" flexDirection="column">
            <Box display="flex" pb="5px" pt="10px" flexDirection="row">
              <Input
                min={0}
                style={{width: '100px'}}
                max={100}
                defaultValue={0}
                value={text}
                disabled={!!currentUser}
                onChange={(newValue) =>
                  setText(capitaliseMe(newValue.currentTarget.value))
                }
                placeholder="Enter a user"
              />
              {currentUser || text === '' ? null : (
                <Box
                  ml="15px"
                  mr="5px"
                  display="flex"
                  flexDirection="column"
                  justifyContent="flex-end"
                  onClick={() => changeUser(text)}
                >
                  <StyledImage height={20} width={20} src={plus} alt="logo" />
                </Box>
              )}
            </Box>

            {!!currentUser && (
              <Box
                onClick={() => {
                  changeUser('');
                  setText('');
                }}
                pb="10px"
                justifyContent="center"
                flex={1}
              >
                <Box
                  display="flex"
                  flex={1}
                  justifyContent="flex-end"
                  flexDirection="row"
                >
                  <UnderlinedText small>Next User</UnderlinedText>
                </Box>
              </Box>
            )}
          </Box>
        </Box>

        <Box flex={1} display="flex">
          <UserHeaderProfile />
        </Box>
      </Box>
    </StyledContainer>
  );
};
