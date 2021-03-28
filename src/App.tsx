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
// MAIN TODO
1. Main task - having multiple users, clearing fields and being able to edit user by clicking in

2. User modal - list all fish logged, and connect to nav menu buttons
create components for fish - add large fish emoji for specimens

3. Do some of the other tasks



// RANDOM LIST
1. Delete fish - and associate each with id = ${name}${number} and add to fish context BUG FIXXX
5. Add check to this --- tick button to fish to add fish - if fields not all === 0
10. Error toast? https://www.npmjs.com/package/react-toastify - modal - create Error modal


BONUS
BONUS POINTS
REGIONS
Handle rounding numbersssss


Later
Check all todos
Test
user background  - on main page // make a background gradient https://www.npmjs.com/package/react-gradient SEAMO TODO



*/
