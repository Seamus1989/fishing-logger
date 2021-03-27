/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';

import './App.css';
import {InputRow} from './components/molecules/input-row';
import {fishSpecies} from './consts';
import {UserProvider} from './context/all-user-score';

export const App = () => {
  return (
    <UserProvider>
      <>
        {fishSpecies.map(({name, specimenWeight}) => {
          return <InputRow specimen={name} specimenWeight={specimenWeight} />;
        })}
      </>
    </UserProvider>
  );
};

/*

// TODO NOW
1. Delete fish - and associate each with id = ${name}${number} and add to fish context
2. Add bin Icon to bin fish

3. Add user input and sticky header, disable fields if user === '', add fish emoji to header for specimen number
4. Add tick button to action add user
5. Add tick button to fish to add fish - if fields not all === 0
6. Add 10 fish and test Test, make changes
7. Create bottom nav menu + modals
Nav = add user ? scoreboard ? view Current ? search fish
8. Edit user from all user screen ? 
9. Filter fish via search
10. Error toast?
11. Message to display on input - enter weight like this or like this



calculation and stuff
// todo have a tick button which will add all new info to users
// disable all field until name added
Search bar
User name entry - disable if a field has been touched
Sticky user name name
Bottom nav menu - search, save  user, Scores

use react router?????

// if deleting user ? Or re-editing? Edit button on user?

// error message toast

*/
//  total specimen number on sticky header by user
