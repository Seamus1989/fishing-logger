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
import {TextDisplayColumn} from '../common/text-display-column';
import {useFishContext} from '../../context/fish-list';

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

  return (
    <AnimateHeight duration={450} height={height}>
      <Box m="10px" bg="#FFC2BB" borderRadius="10px" p="15px">
        <Box>
          <Box pb="5px">
            <Text lineHeight="18px" fontWeight={600} fontSize="16px">
              {user ? user.name : ''}
            </Text>
          </Box>
          <TextDisplayColumn
            text={`Total Fish: ${user?.allFish?.length || 0}`}
          />
          <TextDisplayColumn
            text={`Total Specimen: ${user?.totalSpecimenNumber || 0}`}
          />
          <TextDisplayColumn
            text={`Score Points: ${user ? roundToDecimanPlace(user.score) : 0}`}
          />

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
  const {toggleRegion} = useFishContext();

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
              <Box pb="10px" justifyContent="center" flex={1}>
                <Box
                  display="flex"
                  flex={1}
                  justifyContent="flex-end"
                  flexDirection="row"
                >
                  <Box
                    onClick={() => {
                      changeUser('');
                      setText('');
                      toggleRegion(undefined);
                    }}
                  >
                    <UnderlinedText small>Next User</UnderlinedText>
                  </Box>
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
