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
  const {currentUser} = useUserContext();
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

NOW
User modal specimen fish emoji?
Test removing fish removes emojis from string?

USER MODAL
1. Specimen table (create reusable table component?)
2. Table by fish? Like in UI selection?

Group User modal
1. All user score table
2. All fish by biggest recorded
3. Specimen league

Rename components and reorganise into file/structure

create empty component
new close button on modal header, use something else! use red to delete fish?
^^ on that note have a general test of everything!
Create single user modal
fish all list, and fish by fish, so all bass in one row with summary
create Rows for logged fish (component)
Add check to this --- tick button to fish to add fish - if fields not all === 0
Edit region weights to be correct


DONE LIST
Reset button on fish filter
Bug when selecting region
background close onclick modal?
Add a few regions to app
put zero on fish points
sort dyls bug with bonus points
make logo bigger
Some issue with entering drams, on score calculation

scroll to bottom looks dodgey when we have info - add some bottom padding of like 80px
make text box less width and put edit user underneath
hide filter when no fish selected, and maybe move to the top of the fish list??
fix scroll of the region selection, I think by flexing parent to fill all space when no region present
change emoji in header to a number - stop flexing issues
handle flex box inside sfsh component, stop drop down arrow flexing, and flex in weight
Deleting fish is to be done via single user modal, inside of which you can delete fish


2. User modal - list all fish logged, and connect to nav menu buttons
create components for fish - add large fish emoji for specimens


BONUS
Toast positioning when scrolling down ???  seems okay now
Bottom nav will change pages - one shows modal. 


Later
Check all todos
Test
user background  - on main page // make a background gradient https://www.npmjs.com/package/react-gradient SEAMO TODO


*/
