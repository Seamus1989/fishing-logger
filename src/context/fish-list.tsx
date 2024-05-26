import { createContext, useCallback, useContext, useState } from "react";

import { FishList, Region, allFishWithRegions } from "../fish-data";
import { useToast } from "../hooks/toast";

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

const FishProvider = (props: { children: JSX.Element }): JSX.Element => {
  const [fish, setFish] = useState<null | FishList>(null);
  const [region, setRegion] = useState<null | Region>(null);
  const { showToast } = useToast();

  const filterFish = useCallback(
    (value: string) => {
      const indexOfRegionSelected = allFishWithRegions.findIndex(
        (e) => e.region === region
      );
      if (value === "" && region) {
        if (indexOfRegionSelected === -1) {
          showToast("Something has gone wrong.", true);
          return;
        }
        setFish(allFishWithRegions[indexOfRegionSelected].fish);
        return;
      }
      if (indexOfRegionSelected === -1) {
        showToast("Something has gone wrong.", true);
        return;
      }
      const currentFish = allFishWithRegions[indexOfRegionSelected].fish;
      const result = currentFish.filter((singleFish) => {
        return singleFish.name.toLowerCase().includes(value.toLowerCase());
      });
      setFish(result);
    },
    [region, showToast]
  );

  const toggleRegion = useCallback(
    (selection?: Region) => {
      if (!selection) {
        setRegion(null);
        setFish(null);
        return;
      }
      const indexOfSelection = allFishWithRegions.findIndex(
        (e) => e.region === selection
      );
      if (indexOfSelection === -1) {
        showToast("Something has gone wrong.", true);
        return;
      }
      setRegion(allFishWithRegions[indexOfSelection].region);
      setFish(allFishWithRegions[indexOfSelection].fish);
    },
    [showToast]
  );
  return (
    <FishContext.Provider value={{ fish, filterFish, region, toggleRegion }}>
      {props.children}
    </FishContext.Provider>
  );
};
const useFishContext = () => useContext(FishContext);

export { FishProvider, useFishContext };
