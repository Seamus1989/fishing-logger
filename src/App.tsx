/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, {useState, useCallback} from 'react';
import styled from 'styled-components';

import './App.css';
import {ToastContainer} from 'react-toastify';
import {Input} from 'antd';
import {Box} from './components/common/box';
import {useToast} from './hooks/toast';
import {InputRow} from './components/molecules/input-row';
import {Nav} from './components/molecules/nav';
import {AppHeader} from './components/molecules/user-header';
import {StyledImage, UnderlinedText} from './components/random';
import {UserProvider, useUserContext} from './context/all-user-score';
import {FishProvider, useFishContext} from './context/fish-list';
import {ModalProvider} from './context/modal-context';
import logo from './logo.png';
import 'react-toastify/dist/ReactToastify.css';
import {RegionSelect} from './components/region-dropdown';

const StyledContainer = styled.div<{disabled: boolean}>`
  overflow-y: scroll;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  padding-bottom: 100px;
`;
const AppInner = () => {
  const {fish} = useFishContext();
  const {currentUser, users} = useUserContext();
  const [fishFilter, setFishFilter] = useState('');
  const {filterFish} = useFishContext();
  const {showToast} = useToast();

  const handleFilterInput = useCallback(
    (value: string) => {
      setFishFilter(value);
      filterFish(value);
    },
    [filterFish],
  );

  return (
    <>
      <AppHeader />

      <Box
        pt="35px"
        pb="10px"
        display="flex"
        flexDirection="row"
        justifyContent="center"
        flex={1}
      >
        <Box flex={1} />
        <Box>
          <StyledImage height={180} src={logo} width={180} />
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
        {(!!currentUser || fish) && (
          <Box py="10px" mx="10px">
            <RegionSelect disabled={!currentUser} />
          </Box>
        )}
        {fish && (
          <Box display="flex" p="10px" flexDirection="row">
            <Input
              min={0}
              style={{width: '200px'}}
              max={100}
              defaultValue={0}
              value={fishFilter}
              onChange={(newValue) => {
                handleFilterInput(newValue.currentTarget.value);
              }}
              placeholder="Filter by specimen..."
            />
            <Box
              onClick={() => handleFilterInput('')}
              pl="10px"
              justifyContent="center"
              display="flex"
              alignItems="center"
            >
              <UnderlinedText>Clear Filter</UnderlinedText>
            </Box>
          </Box>
        )}

        {fish
          ? fish.map(({name, specimenWeight}) => {
              return (
                <InputRow specimen={name} specimenWeight={specimenWeight} />
              );
            })
          : null}
      </StyledContainer>
      {users && users.length && <Nav />}
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
SOME TOUCH UPS

Remove delete header in table (just flex)
Maybe trial double flexing fish name
vertically center all elements inside the table!
Less padding on sides of table - make it inline with other bits
Underline or give border to some elements?
Change remove text to bin icon?
Abbreviate region?

Main scroll menu, outside click ref - if clicked outside, and is open then close. Auto tidy up.


Disable scroll to refresh!

Multiple modal work


NOW

New modal context, so we can show multiple user info

Create multiple user modal

Create table component? Then easy to make the three below

Group User modal
1. All user score table
2. All fish by biggest recorded
3. Specimen league

Add/edit all fish info for regions! DONE

BONUS
Toast positioning when scrolling down ???  seems okay now
Bottom nav will change pages - one shows modal. 
Rename components and reorganise into file/structure
user background  - on main page // make a background gradient https://www.npmjs.com/package/react-gradient SEAMO TODO




MVP FOR FULLSTACK

database fish (id, name, specimen weight, region), users (id, name, (email, password later))

Will need to seed all fish into database

Saving fish entered - when. When we hit the plus icon

Date component when adding single fish? And option to use today (easy click) - where inside modal?

Then modal with users all - paginated fish, ordered by date
Filters to allow filtered by date, fish species, region. A button to `comp` results - make filtered selection into a competition

Can click into a user from all users and edit/remove fish.

Some kind of detecting phone landscape/other
*/
