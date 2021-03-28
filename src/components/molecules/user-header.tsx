import React, {useState, useMemo, useEffect} from 'react';
import {Input} from 'antd';
import styled from 'styled-components';
import AnimateHeight from 'react-animate-height';
import {useUserContext} from '../../context/all-user-score';
import {Box} from '../common/box';
import {Text} from '../common/text';
import {StyledImage, UnderlinedText} from '../random';
import plus from '../../plus.svg';
import {useFishContext} from '../../context/fish-list';
import {MyDropdown} from './input-row';
import {useModalContext} from '../../context/modal-context';
import {UserModalContent} from '../modals/user-modal';

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

  const specimensString = useMemo(() => {
    if (users && users.length) {
      if (!user) return '';
      if (!user.totalSpecimenNumber) return '';

      return new Array(user.totalSpecimenNumber).fill('🐟').join(' ');
    }
    return '';
  }, [user, users]);

  useEffect(() => {
    if (!user) {
      setHeight(0);
    }

    if (user) {
      setHeight('auto');
    }
  }, [user]);

  return (
    <AnimateHeight duration={500} height={height}>
      <Box m="10px" bg="#FFC2BB" borderRadius="10px" p="15px">
        <Box>
          <Text lineHeight="20px" fontWeight={600} fontSize="18px">
            {user ? user.name : ''}
          </Text>
          <Text lineHeight="18px" fontWeight={300} fontSize="14px">
            Total Points: {user ? user.score : 0}
          </Text>
          <Text lineHeight="18px" fontWeight={300} fontSize="14px">
            Total Fish: {user?.allFish?.length || 0}
          </Text>
          <Text lineHeight="18px" fontWeight={300} fontSize="14px">
            Total Specimen: {specimensString}
          </Text>

          <Box onClick={() => setShow(true)} mt="5px">
            <UnderlinedText>See All</UnderlinedText>
          </Box>
          <UserModalContent />
        </Box>
      </Box>
    </AnimateHeight>
  );
};
export const AppHeader = ({
  showMessage,
}: {
  showMessage: boolean;
}): JSX.Element => {
  const {currentUser, changeUser} = useUserContext();
  const {filterFish} = useFishContext();
  const [text, setText] = useState('');
  const [fishFilter, setFishFilter] = useState('');

  return (
    <StyledContainer>
      <Box display="flex" flex={1} flexDirection="row">
        <Box p="10px" my="10px" flex={1} display="flex" flexDirection="row">
          <Box display="flex" flexDirection="column">
            <Box display="flex" py="10px" flexDirection="row">
              <Input
                min={0}
                style={{width: '150px'}}
                max={100}
                defaultValue={0}
                value={text}
                disabled={!!currentUser}
                onChange={(newValue) => setText(newValue.currentTarget.value)}
                placeholder="Enter a new fisherer..."
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
              {!!currentUser && (
                <Box
                  onClick={() => {
                    changeUser('');
                    setText('');
                  }}
                  ml="20px"
                  justifyContent="center"
                  flex={1}
                >
                  <UnderlinedText>Edit User</UnderlinedText>
                </Box>
              )}
            </Box>
            <Box display="flex" py="10px" flexDirection="row">
              <Input
                min={0}
                style={{width: '150px'}}
                max={100}
                defaultValue={0}
                value={fishFilter}
                onChange={(newValue) => {
                  setFishFilter(newValue.currentTarget.value);
                  filterFish(newValue.currentTarget.value);
                }}
                placeholder="Filter specimen..."
              />
            </Box>
          </Box>
        </Box>

        <Box flex={1} display="flex">
          <UserHeaderProfile />
        </Box>
      </Box>
      <MyDropdown open={showMessage}>
        <Box m="10px" justifyContent="center" flex={1}>
          <Text
            textAlign="center"
            lineHeight="20px"
            fontSize="16px"
            color="red"
          >
            Please enter a user before making selections
          </Text>
        </Box>
      </MyDropdown>
    </StyledContainer>
  );
};
