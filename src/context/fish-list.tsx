/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, {createContext, useContext, useCallback, useState} from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {FishList, allFishedWithRegions, Region} from '../fish-data';
import {useToast} from '../hooks/toast';

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
  const {showToast} = useToast();

  const filterFish = useCallback(
    (value: string) => {
      const indexOfRegionSelected = allFishedWithRegions.findIndex(
        (e) => e.region === region,
      );
      if (value === '' && region) {
        if (indexOfRegionSelected === -1) {
          showToast('Something has gone wrong.', true);
          return;
        }
        setFish(allFishedWithRegions[indexOfRegionSelected].fish);
        return;
      }
      if (indexOfRegionSelected === -1) {
        showToast('Something has gone wrong.', true);
        return;
      }
      const currentFish = allFishedWithRegions[indexOfRegionSelected].fish;
      const result = currentFish.filter((singleFish) => {
        return singleFish.name.toLowerCase().includes(value.toLowerCase());
      });
      setFish(result);
    },
    [region, showToast],
  );

  const toggleRegion = useCallback(
    (selection?: Region) => {
      if (!selection) {
        setRegion(null);
        setFish(null);
        return;
      }
      const indexOfSelection = allFishedWithRegions.findIndex(
        (e) => e.region === selection,
      );
      if (indexOfSelection === -1) {
        showToast('Something has gone wrong.', true);
        return;
      }
      setRegion(allFishedWithRegions[indexOfSelection].region);
      setFish(allFishedWithRegions[indexOfSelection].fish);
    },
    [showToast],
  );
  return (
    <FishContext.Provider value={{fish, filterFish, region, toggleRegion}}>
      {props.children}
    </FishContext.Provider>
  );
};
const useFishContext = () => useContext(FishContext);

export {useFishContext, FishProvider};
