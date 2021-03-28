/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, {useState} from 'react';
import styled from 'styled-components';

import './App.css';
import {Box} from './components/common/box';
import {InputRow} from './components/molecules/input-row';
import {Nav} from './components/molecules/nav';
import {AppHeader} from './components/molecules/user-header';
import {StyledImage} from './components/random';
import {UserProvider, useUserContext} from './context/all-user-score';
import {FishProvider, useFishContext} from './context/fish-list';
import {ModalProvider} from './context/modal-context';
import logo from './logo.png';

const StyledContainer = styled.div<{disabled: boolean}>`
  overflow-y: scroll;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;
const AppInner = () => {
  const [showMessage, setShowMessage] = useState(false);
  const {fish} = useFishContext();
  const {currentUser} = useUserContext();

  return (
    <>
      <AppHeader showMessage={showMessage} />
      <Box
        py="15px"
        display="flex"
        flexDirection="row"
        justifyContent="center"
        flex={1}
      >
        <Box flex={1} />
        <Box>
          <StyledImage height={150} src={logo} width={150} />
        </Box>
        <Box flex={1} />
      </Box>
      <StyledContainer
        disabled={!currentUser}
        onClick={() => {
          if (!currentUser) {
            setShowMessage(true);
            setTimeout(() => setShowMessage(false), 4000);
          }
        }}
      >
        {fish.map(({name, specimenWeight}) => {
          return <InputRow specimen={name} specimenWeight={specimenWeight} />;
        })}
      </StyledContainer>
      <Nav />
    </>
  );
};
export const App = () => {
  return (
    <ModalProvider>
      <UserProvider>
        <FishProvider>
          <AppInner />
        </FishProvider>
      </UserProvider>
    </ModalProvider>
  );
};

/*
// TODO

// TODO NOW
1. Delete fish - and associate each with id = ${name}${number} and add to fish context
2. Add bin Icon to bin fish

// add species total into row
3. Add user input and sticky header, disable fields if user === '', add fish emoji to header for specimen number
4. Add tick button to action add user
5. Add tick button to fish to add fish - if fields not all === 0
6. Add 10 fish and test Test, make changes
7. Create bottom nav menu + modals
Nav = add user ? scoreboard ? view Current ? search fish
8. Edit user from all user screen ? 
9. Filter fish via search
10. Error toast? https://www.npmjs.com/package/react-toastify
11. Message to display on input - enter weight like this or like this

ALSO
Handle rounding numbersssss


TONIGHT
modal to show all user info https://ant.design/components/modal/ - evertyhing else is shit
// or use nav menu and router
Add other fish
Handle rounding numbersssss
Style font sizes a bit for mobile



Later
The bit I've made comments about
user background // make a background gradient https://www.npmjs.com/package/react-gradient SEAMO TODO
multiple users - need a button, next user - reset all form values (when I do that big)
Error toast
Check TODO
Test


*/
