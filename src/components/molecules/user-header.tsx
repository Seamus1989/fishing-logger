import React, {useState, useMemo} from 'react';
import {Input} from 'antd';
import styled from 'styled-components';
import {useUserContext} from '../../context/all-user-score';
import {Box} from '../common/box';
import {Text} from '../common/text';
import {StyledImage} from '../random';
import plus from '../../plus.svg';
import {useFishContext} from '../../context/fish-list';
import {MyDropdown} from './input-row';

const StyledContainer = styled.div`
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  left: 0;
`;

const UserHeaderProfile = () => {
  const {currentUser, users} = useUserContext();
  const user = users
    ? users.find((thisUser) => thisUser.name === currentUser)
    : null;
  if (!user) return null;
  return (
    <Box>
      <Box>
        <Text>{user.name}</Text>
        <Text>Total Points: {user.score}</Text>
        <Text>Total Fish: {user?.allFish?.length || 0}</Text>
        <Text>Specimen number: {user?.specimens?.length || 0}</Text>
      </Box>
    </Box>
  );
};
export const AppHeader = ({
  showMessage,
}: {
  showMessage: boolean;
}): JSX.Element => {
  const {currentUser, changeUser, users} = useUserContext();
  const {filterFish} = useFishContext();
  const [text, setText] = useState('');
  const [fishFilter, setFishFilter] = useState('');

  const specimensString = useMemo(() => {
    if (users && users.length) {
      const user = users.find((thisUser) => thisUser.name === currentUser);
      if (!user) return '';
      if (!user.totalSpecimenNumber) return '';

      return new Array(user.totalSpecimenNumber).fill('🐟').join(' ');
    }
    return '';
  }, [currentUser, users]);

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
                onChange={(newValue) => setText(newValue.currentTarget.value)}
                placeholder="Enter a new fisherer..."
              />
              {currentUser ? null : (
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

          {specimensString !== '' ? (
            <Box flex={1} display="flex" flexDirection="row">
              <Text lineHeight="12px" fontSize="10px">
                {specimensString}
              </Text>
            </Box>
          ) : null}
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
