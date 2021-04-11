/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, {createContext, useContext, useCallback, useState} from 'react';
import {randomFishEmojiGenerator, Region} from '../consts';

export type Fish = {
  name: string;
  id: string;
  specimenWeight: number;
  scoredPoints: number;
  region: Region;
};
export type User = {
  name: string;
  score: number;
  totalSpecimenNumber: number;
  specimenStringArray: string[];
  specimens: Fish[] | null;
  allFish: Fish[] | null;
  bonusPoints: number;
};
const defaultNewUserFields = {
  score: 0,
  totalSpecimenNumber: 0,
  specimenStringArray: [],
  specimens: null,
  allFish: null,
  bonusPoints: 0,
};
const UserContext = createContext<{
  users: User[] | null;
  pushUserToList: (user: string) => void;
  currentUser: string;
  changeUser: (newUser: string) => void;
  addFishToUser: (fish: Fish, score: number) => void;
  addSpecimenToUser: (fish: Fish, score: number) => void;
  deleteUser: (name: string) => void;
  resetAllUsers: () => void;
  deleteFish: (id: string) => void;
}>({
  currentUser: '',
  users: null,
  pushUserToList: () => {},
  changeUser: () => {},
  addFishToUser: () => {},
  addSpecimenToUser: () => {},
  resetAllUsers: () => {},
  deleteUser: () => {},
  deleteFish: () => {},
});

const UserProvider = (props: {children: JSX.Element}): JSX.Element => {
  const [users, setUsers] = useState<User[] | null>(null);
  const [currentUser, setCurrentUser] = useState('');

  const pushUserToList = useCallback(
    (newUser: string) => {
      // TO be used in text input only
      setCurrentUser(newUser);
      const allNewUserInfo = {name: newUser, ...defaultNewUserFields};
      if (users) {
        setUsers([...users, allNewUserInfo]);
        return;
      }
      setUsers([allNewUserInfo]);
    },
    [users],
  );
  const addFishToUser = useCallback(
    (newFish: Fish, scoreToAdd: number) => {
      if (users) {
        const user = users.find((thisUser) => thisUser.name === currentUser);

        if (!user) return;
        const otherUsers = users.filter(
          (compareUser) => compareUser.name !== currentUser,
        );

        const {allFish, score, ...rest} = user;
        const sortedFish = allFish
          ? [...allFish, newFish].sort((a, b) => {
              return a.scoredPoints - b.scoredPoints;
            })
          : [newFish];
        const newInfo = {
          allFish: sortedFish,
          score: score + scoreToAdd,
          ...rest,
        } as User;
        setUsers([...otherUsers, newInfo]);
      }
    },
    [currentUser, users],
  );

  const addSpecimenToUser = useCallback(
    (newFish: Fish, scoreToAdd: number) => {
      if (users) {
        const user = users.find((thisUser) => thisUser.name === currentUser);
        if (!user) return;

        const otherUsers = users.filter(
          (compareUser) => compareUser.name !== currentUser,
        );

        const {
          allFish,
          specimens,
          score,
          totalSpecimenNumber,
          name,
          specimenStringArray,
          bonusPoints,
        } = user;

        const newSpecimenArr = [
          ...specimenStringArray,
          randomFishEmojiGenerator(Math.random()),
        ];
        const sortedFish = allFish
          ? [...allFish, newFish].sort((a, b) => {
              return a.scoredPoints - b.scoredPoints;
            })
          : [newFish];
        const newInfo = {
          name,
          allFish: sortedFish,
          specimens: specimens ? [...specimens, newFish] : [newFish],
          score: score + scoreToAdd,
          totalSpecimenNumber: totalSpecimenNumber + 1,
          specimenStringArray: newSpecimenArr,
          bonusPoints: bonusPoints + 3,
        } as User;

        setUsers([...otherUsers, newInfo]);
      }
    },
    [currentUser, users],
  );

  const changeUser = useCallback(
    (newUser: string) => {
      if (newUser === '') {
        setCurrentUser('');
        return;
      }
      setCurrentUser(newUser);
      const allUsers = users ? [...users] : [];
      setUsers([...allUsers, {name: newUser, ...defaultNewUserFields}]);
      // have a text input and tick button to add and fire this! TODO
    },
    [users],
  );
  const resetAllUsers = useCallback(() => {
    setUsers(null);
    setCurrentUser('');
  }, []);
  // eslint-disable-next-line no-console

  const deleteUser = useCallback(() => {
    if (!users) return;
    const user = users.find((thisUser) => thisUser.name === currentUser);
    if (!user) return;

    const otherUsers = users.filter(
      (compareUser) => compareUser.name !== currentUser,
    );
    setUsers(otherUsers);
  }, [currentUser, users]);

  const deleteFish = useCallback(
    (id: string) => {
      if (users) {
        let specimensToDelete = 0;
        const user = users.find((thisUser) => thisUser.name === currentUser);
        if (!user) return;

        const otherUsers = users.filter(
          (compareUser) => compareUser.name !== currentUser,
        );

        const {
          allFish,
          specimens,
          score,
          totalSpecimenNumber,
          specimenStringArray,
          name,
          bonusPoints,
        } = user;
        if (!allFish || !allFish.length) return;

        const indexToDelete = allFish.findIndex((e) => e.id === id);
        if (indexToDelete === -1) return;
        // TODO THROW ERROR
        const old = allFish.splice(indexToDelete, 1);

        if (specimens && specimens.length) {
          const specimenIndexToDelete = specimens.findIndex((e) => e.id === id);
          if (specimenIndexToDelete !== -1) {
            specimens.splice(specimenIndexToDelete, 1);
            specimensToDelete = 1;
          }
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const [del, ...newSpecimenArr] = specimenStringArray;
        const newInfo = {
          name,
          allFish,
          specimens,
          score: score - old[0].scoredPoints,
          totalSpecimenNumber: totalSpecimenNumber - specimensToDelete,
          specimenStringArray: newSpecimenArr,
          bonusPoints: bonusPoints === 3 ? 0 : bonusPoints - 3,
        } as User;
        setUsers([...otherUsers, newInfo]);
      }
    },
    [currentUser, users],
  );

  return (
    <UserContext.Provider
      value={{
        users,
        pushUserToList,
        currentUser,
        changeUser,
        addFishToUser,
        addSpecimenToUser,
        deleteUser,
        resetAllUsers,
        deleteFish,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
const useUserContext = () => useContext(UserContext);

export {useUserContext, UserProvider};
