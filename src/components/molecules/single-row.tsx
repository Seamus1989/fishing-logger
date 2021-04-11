/* eslint-disable react/require-default-props */
import React, {useCallback, useMemo, useState} from 'react';

import {Box} from '../common/box';
import {SelectNumber} from '../common/numeric-input';
import 'react-slidedown/lib/slidedown.css';
import {getFishInPounds} from '../../utils';
import {useUserContext} from '../../context/all-user-score';
import plus from '../../plus.svg';
import {StyledImage} from '../random';

export const SingleRow = ({
  specimenWeight,
  specimen,
}: {
  specimenWeight: number;
  specimen: string;
}): JSX.Element => {
  const [pounds, setPounds] = useState(0);
  const [ounces, setOunces] = useState(0);
  const [drams, setDrams] = useState(0);
  const {addFishToUser, addSpecimenToUser} = useUserContext();

  const fishInPounds = useMemo(() => getFishInPounds(pounds, ounces, drams), [
    drams,
    ounces,
    pounds,
  ]);
  const addFish = useCallback(() => {
    const score = (fishInPounds * 100) / specimenWeight;

    if (score === 0) return;
    const fish = {
      name: specimen,
      // TODO ID ? do wee actually need it, not really?
      id: `${specimen}`,
      specimenWeight,
    };
    if (fishInPounds >= specimenWeight) {
      addSpecimenToUser({...fish, scoredPoints: score}, score);
      return;
    }
    addFishToUser({...fish, scoredPoints: score}, score);
  }, [
    addFishToUser,
    addSpecimenToUser,
    fishInPounds,
    specimen,
    specimenWeight,
  ]);

  const handleClick = useCallback(() => {
    addFish();
    setPounds(0);
    setOunces(0);
    setDrams(0);
  }, [addFish]);

  const renderRight = useMemo(() => {
    return (
      <Box
        display="flex"
        justifyContent="flex-end"
        flexDirection="column"
        flex={1}
        pl="10px"
        onClick={() => handleClick()}
      >
        <Box
          ml="2px"
          mr="5px"
          display="flex"
          flexDirection="column"
          justifyContent="flex-end"
        >
          <StyledImage height={25} width={25} src={plus} alt="logo" />
        </Box>
      </Box>
    );
  }, [handleClick]);

  return (
    <Box py="5px" flex={1} display="flex" flexDirection="row">
      <SelectNumber
        width={50}
        padding={5}
        title="Pounds"
        onChange={(value) => setPounds(value)}
        value={pounds}
      />
      <SelectNumber
        width={50}
        padding={5}
        title="Ounces"
        onChange={(value) => setOunces(value)}
        value={ounces}
      />
      <SelectNumber
        width={50}
        padding={5}
        title="Drams"
        onChange={(value) => setDrams(value)}
        value={drams}
        renderRight={renderRight}
      />
    </Box>
  );
};
