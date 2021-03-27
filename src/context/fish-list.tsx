/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, {createContext, useContext, useCallback, useState} from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {FishList, fishSpecies} from '../consts';

const FishContext = createContext<{
  fish: FishList;
  filterFish: (name: string) => void;
}>({
  fish: fishSpecies,
  filterFish: () => {},
});

const FishProvider = (props: {children: JSX.Element}): JSX.Element => {
  const [fish, setFish] = useState(fishSpecies);
  const filterFish = useCallback((value: string) => {
    const result = fishSpecies.filter((singleFish) => {
      return singleFish.name.toLowerCase().includes(value.toLowerCase());
    });
    setFish(result);
  }, []);
  return (
    <FishContext.Provider value={{fish, filterFish}}>
      {props.children}
    </FishContext.Provider>
  );
};
const useFishContext = () => useContext(FishContext);

export {useFishContext, FishProvider};
