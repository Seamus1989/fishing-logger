/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import styled from 'styled-components';

import './App.css';
import {ToastContainer} from 'react-toastify';
import {Box} from './components/common/box';
import {useToast} from './hooks/toast';
import {InputRow} from './components/molecules/input-row';
import {Nav} from './components/molecules/nav';
import {AppHeader} from './components/molecules/user-header';
import {StyledImage} from './components/random';
import {UserProvider, useUserContext} from './context/all-user-score';
import {FishProvider, useFishContext} from './context/fish-list';
import {ModalProvider} from './context/modal-context';
import logo from './logo.png';
import 'react-toastify/dist/ReactToastify.css';
import {RegionSelect} from './components/region-dropdown';

const StyledContainer = styled.div<{disabled: boolean}>`
  overflow-y: scroll;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;
const AppInner = () => {
  const {fish} = useFishContext();
  const {currentUser} = useUserContext();
  const {showToast} = useToast();

  return (
    <>
      <AppHeader />
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
            showToast('Please select a user before making selections', true);
          }
        }}
      >
        <Box py="30px" m="10px">
          <RegionSelect disabled={!currentUser} />
        </Box>

        {fish
          ? fish.map(({name, specimenWeight}) => {
              return (
                <InputRow specimen={name} specimenWeight={specimenWeight} />
              );
            })
          : null}
      </StyledContainer>
      <Nav />
    </>
  );
};
export const App = () => {
  return (
    <FishProvider>
      <ModalProvider>
        <UserProvider>
          <>
            <AppInner />
            <ToastContainer />
          </>
        </UserProvider>
      </ModalProvider>
    </FishProvider>
  );
};

/*
DONE LIST
handle flex box inside sfsh component, stop drop down arrow flexing, and flex in weight
Deleting fish is to be done via single user modal, inside of which you can delete fish

NEW plan
change mechanism we use to delete/add, have this in single user modal, with text saying edit entries on top header (to ope modal)
React drop down with multiple regions
Bottom nav will change pages - one shows modal. 
add speciment weight to fish row

create Rows for logged fish (component)

Loose the error toast for user message and use https://www.npmjs.com/package/react-toastify

5. Add check to this --- tick button to fish to add fish - if fields not all === 0

Handle rounding numbersssss

// MAIN TODO


1. Main task - having multiple users, clearing fields and being able to edit user by clicking in

2. User modal - list all fish logged, and connect to nav menu buttons
create components for fish - add large fish emoji for specimens

3. Do some of the other tasks



// RANDOM LIST
1. Delete fish - and associate each with id = ${name}${number} and add to fish context BUG FIXXX

10. Error toast? https://www.npmjs.com/package/react-toastify - modal - create Error modal


BONUS
BONUS POINTS
REGIONS
Toast positioning when scrolling down


Later
Check all todos
Test
user background  - on main page // make a background gradient https://www.npmjs.com/package/react-gradient SEAMO TODO



*/
