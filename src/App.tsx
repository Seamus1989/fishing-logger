/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, {useState} from 'react';
import styled from 'styled-components';

import './App.css';
import {InputRow} from './components/molecules/input-row';
import {AppHeader} from './components/molecules/user-header';

import {UserProvider, useUserContext} from './context/all-user-score';
import {FishProvider, useFishContext} from './context/fish-list';

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
    </>
  );
};
export const App = () => {
  return (
    <UserProvider>
      <FishProvider>
        <AppInner />
      </FishProvider>
    </UserProvider>
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

*/
