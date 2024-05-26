/* eslint-disable react/require-default-props */
import { useCallback, useMemo, useState } from "react";

import { Box, Flex, Image } from "@chakra-ui/react";

import { useUserContext } from "../../context/all-user-score";
import { useFishContext } from "../../context/fish-list";
import { useToast } from "../../hooks/toast";
import plus from "../../images/plus.svg";
import { getFishInPounds } from "../../utils";
import { SelectNumber } from "../common/numeric-input";

export const SingleRow = ({
  specimenWeight,
  specimen,
  hideRow,
}: {
  specimenWeight: number;
  specimen: string;
  hideRow: () => void;
}): JSX.Element => {
  const { region } = useFishContext();
  const [pounds, setPounds] = useState(0);
  const [ounces, setOunces] = useState(0);
  const [drams, setDrams] = useState(0);
  const { addFishToUser, addSpecimenToUser } = useUserContext();
  const { showToast } = useToast();

  const fishInPounds = useMemo(
    () => getFishInPounds(pounds, ounces, drams),
    [drams, ounces, pounds]
  );

  const addFish = useCallback(() => {
    if (!region) {
      showToast("Something has gone wrong.", true);
      return;
    }
    const score = (fishInPounds * 100) / specimenWeight;

    if (score === 0) return;
    const fish = {
      name: specimen,
      // TODO ID ? do wee actually need it, not really? Maybe not when fullstacked?
      id: `${specimen}-${region}-${fishInPounds}`,
      specimenWeight,
      region,
      recordedWeight: fishInPounds,
    };
    if (fishInPounds >= specimenWeight) {
      addSpecimenToUser({ ...fish, scoredPoints: score }, score);
      hideRow();
      return;
    }
    addFishToUser({ ...fish, scoredPoints: score }, score);
    hideRow();
  }, [
    addFishToUser,
    addSpecimenToUser,
    fishInPounds,
    hideRow,
    region,
    showToast,
    specimen,
    specimenWeight,
  ]);

  const handleClick = useCallback(() => {
    if (pounds === 0 && ounces === 0 && drams === 0) {
      showToast("Please enter a weight first.", true);
      return;
    }
    addFish();
    setPounds(0);
    setOunces(0);
    setDrams(0);
  }, [addFish, drams, ounces, pounds, showToast]);

  return (
    <Box py="5px" flex={1} display="flex" flexDirection="row" gap="20px">
      <SelectNumber
        title="Pounds"
        onChange={(value) => setPounds(value)}
        value={pounds}
      />
      <SelectNumber
        title="Ounces"
        onChange={(value) => setOunces(value)}
        value={ounces}
      />
      <SelectNumber
        title="Drams"
        onChange={(value) => setDrams(value)}
        value={drams}
      />

      <Flex
        flexDirection="row"
        height="100%"
        justifyContent="center"
        alignItems={"flex-end"}
        onClick={() => handleClick()}
      >
        <Flex flex={1} />
        <Image height={25} width={25} src={plus} alt="logo" />
      </Flex>
    </Box>
  );
};
