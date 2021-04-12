/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, {createContext, useContext, useCallback, useState} from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {FishList, allFishedWithRegions, Region} from '../fish-data';

const FishContext = createContext<{
  fish: FishList | null;
  region: Region | null;
  filterFish: (name: string) => void;
  toggleRegion: (selection?: Region) => void;
}>({
  fish: null,
  region: null,
  filterFish: () => {},
  toggleRegion: () => {},
});

const FishProvider = (props: {children: JSX.Element}): JSX.Element => {
  const [fish, setFish] = useState<null | FishList>(null);
  const [region, setRegion] = useState<null | Region>(null);

  const filterFish = useCallback(
    (value: string) => {
      const indexOfRegionSelected = allFishedWithRegions.findIndex(
        (e) => e.region === region,
      );
      if (value === '' && region) {
        if (indexOfRegionSelected === -1) {
          // throw error ???
          return;
        }
        setFish(allFishedWithRegions[indexOfRegionSelected].fish);
        return;
      }
      if (indexOfRegionSelected === -1) {
        // throw error ???
        return;
      }
      const currentFish = allFishedWithRegions[indexOfRegionSelected].fish;
      const result = currentFish.filter((singleFish) => {
        return singleFish.name.toLowerCase().includes(value.toLowerCase());
      });
      setFish(result);
    },
    [region],
  );

  const toggleRegion = useCallback((selection?: Region) => {
    if (!selection) {
      setRegion(null);
      setFish(null);
    }
    const indexOfSelection = allFishedWithRegions.findIndex(
      (e) => e.region === selection,
    );
    if (indexOfSelection === -1) {
      // error handle ? TODO
      return;
    }
    setRegion(allFishedWithRegions[indexOfSelection].region);
    setFish(allFishedWithRegions[indexOfSelection].fish);
  }, []);
  return (
    <FishContext.Provider value={{fish, filterFish, region, toggleRegion}}>
      {props.children}
    </FishContext.Provider>
  );
};
const useFishContext = () => useContext(FishContext);

export {useFishContext, FishProvider};
