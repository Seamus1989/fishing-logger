/* eslint-disable react/require-default-props */
import React, {useCallback, useMemo, useState} from 'react';

import {Box} from '../common/box';
import {SelectNumber} from '../common/numeric-input';
import 'react-slidedown/lib/slidedown.css';
import {getFishInPounds} from '../../utils';
import {useUserContext} from '../../context/all-user-score';
import plus from '../../plus.svg';
import remove from '../../remove.svg';
import {StyledImage} from '../random';

export const SingleRow = ({
  isFirst,
  specimenWeight,
  specimen,
  rowNumber,
  addRow,
  removeRow,
}: {
  isFirst: boolean;
  specimenWeight: number;
  specimen: string;
  rowNumber: number;
  addRow: () => void;
  removeRow: (rowNumber: number) => void;
}): JSX.Element => {
  const [pounds, setPounds] = useState(0);
  const [ounces, setOunces] = useState(0);
  const [drams, setDrams] = useState(0);
  const [isAdded, setIsAdded] = useState(false);
  const {addFishToUser, addSpecimenToUser, deleteFish} = useUserContext();

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
      id: `${specimen}-${rowNumber}`,
      specimenWeight,
    };
    addRow();
    if (fishInPounds >= specimenWeight) {
      addSpecimenToUser({...fish, scoredPoints: score}, score);
      setIsAdded(true);
      return;
    }
    addFishToUser({...fish, scoredPoints: score}, score);
    setIsAdded(true);
  }, [
    addFishToUser,
    addRow,
    addSpecimenToUser,
    fishInPounds,
    rowNumber,
    specimen,
    specimenWeight,
  ]);

  const removeFish = useCallback(() => {
    deleteFish(`${specimen}-${rowNumber}`);
    setPounds(0);
    setOunces(0);
    setDrams(0);
    removeRow(rowNumber - 1);
  }, [deleteFish, removeRow, rowNumber, specimen]);

  const handleClick = useCallback(() => {
    if (isAdded) {
      removeFish();
      return;
    }
    addFish();
  }, [addFish, isAdded, removeFish]);

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
          <StyledImage
            height={25}
            width={25}
            src={!isAdded ? plus : remove}
            alt="logo"
          />
        </Box>
      </Box>
    );
  }, [handleClick, isAdded]);

  return (
    <Box py="5px" flex={1} display="flex" flexDirection="row">
      <SelectNumber
        width={50}
        padding={5}
        title={isFirst ? 'Pounds' : undefined}
        onChange={(value) => setPounds(value)}
        value={pounds}
      />
      <SelectNumber
        width={50}
        padding={5}
        title={isFirst ? 'Ounces' : undefined}
        onChange={(value) => setOunces(value)}
        value={ounces}
      />
      <SelectNumber
        width={50}
        padding={5}
        title={isFirst ? 'Drams' : undefined}
        onChange={(value) => setDrams(value)}
        value={drams}
        renderRight={renderRight}
      />
    </Box>
  );
};
