/* eslint-disable react/require-default-props */
import React, {useCallback, useMemo, useState} from 'react';
import {SlideDown} from 'react-slidedown';
import styled from 'styled-components';
import {deviceWidth} from '../../consts';
import {Box} from '../common/box';
import {Text} from '../common/text';
import {SelectNumber} from '../common/numeric-input';
import 'react-slidedown/lib/slidedown.css';
import plus from '../../plus.svg';
import arrow from '../../down-arrow.svg';
import {getFishInPounds} from '../../utils';
import {useUserContext} from '../../context/all-user-score';

const StyledRotate = styled.div<{show: boolean}>`
  -ms-transform: ${(props) => (props.show ? `rotate(180deg)` : `rotate(0deg)`)};
  transform: ${(props) => (props.show ? `rotate(180deg)` : `rotate(0deg)`)};
`;
const StyledImage = styled.img<{height: number; width: number}>`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
`;
const DropdownArrow = ({
  onClick,
  show,
}: {
  onClick: () => void;
  show: boolean;
}) => {
  return (
    <Box onClick={onClick}>
      <StyledRotate show={show}>
        <StyledImage height={25} width={25} src={arrow} alt="logo" />
      </StyledRotate>
    </Box>
  );
};
const MyDropdown = ({
  open,
  children,
}: {
  open: boolean;
  children: JSX.Element;
}) => {
  return (
    <SlideDown className="my-dropdown-slidedown">
      {open ? children : null}
    </SlideDown>
  );
};
const SingleRow = ({
  isFirst,
  specimenWeight,
  specimen,
  rowNumber,
}: {
  isFirst: boolean;
  specimenWeight: number;
  specimen: string;
  rowNumber: number;
}) => {
  const [pounds, setPounds] = useState(0);
  const [ounces, setOunces] = useState(0);
  const [drams, setDrams] = useState(0);
  const [isAdded, setIsAdded] = useState(false);
  const {addFishToUser, addSpecimenToUser, deleteFish} = useUserContext();

  const score = useMemo(() => getFishInPounds(pounds, ounces, drams), [
    drams,
    ounces,
    pounds,
  ]);
  const addFish = useCallback(() => {
    const fish = {
      name: specimen,
      id: `${specimen}-${rowNumber}`,
      specimenWeight,
    };
    if (score >= specimenWeight) {
      addSpecimenToUser({...fish, scoredPoints: score}, score);
      setIsAdded(true);
      return;
    }
    addFishToUser({...fish, scoredPoints: score}, score);
    setIsAdded(true);
  }, [
    addFishToUser,
    addSpecimenToUser,
    rowNumber,
    score,
    specimen,
    specimenWeight,
  ]);

  const removeFish = useCallback(() => {
    deleteFish(`${specimen}-${rowNumber}`);
    setPounds(0);
    setOunces(0);
    setDrams(0);
  }, [deleteFish, rowNumber, specimen]);

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
          borderBottomStyle="solid"
          borderBottomWidth={1}
          borderBottomColor="black"
        >
          <Text lineHeight="20px" fontWeight={300} fontSize="12px">
            {isAdded ? ` Delete ` : ` Add `}
          </Text>
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

export const InputRow = ({
  specimen,
  specimenWeight,
}: {
  specimen: string;
  specimenWeight: number;
}): JSX.Element => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [howManyRows, setHowManyRows] = useState(1);

  const rowsArray = new Array(howManyRows).fill('');
  const {users, currentUser} = useUserContext();

  const specimensString = useMemo(() => {
    if (users && users.length) {
      const user = users.find((thisUser) => thisUser.name === currentUser);
      if (!user) return '';
      if (!user.specimens) return '';
      const specimens = user.specimens.filter((fish) => fish.name === specimen);

      return new Array(specimens.length).fill('🐟').join(' ');
    }
    return '';
  }, [currentUser, specimen, users]);

  const addRow = useCallback(() => {
    const newTotal = 1 + howManyRows;
    setHowManyRows(newTotal);
  }, [howManyRows]);

  const removeRow = useCallback(() => {
    // TODO
    const newTotal = -1 + howManyRows;
    setHowManyRows(newTotal);
  }, [howManyRows]);

  return (
    <Box
      maxWidth={`${deviceWidth}px`}
      margin="10px"
      padding="5px"
      borderRadius="5px"
      bg="#FFC2BB"
    >
      <Box
        onClick={() => setShowDropdown(!showDropdown)}
        flex={1}
        margin="5px"
        display="flex"
        flexDirection="row"
      >
        <Box
          display="flex"
          flex={1}
          flexDirection="column"
          justifyContent="center"
        >
          <Text lineHeight="12px" fontWeight={500} fontSize="10px">
            {specimen}
          </Text>
        </Box>
        <Box
          display="flex"
          flex={1}
          flexDirection="column"
          justifyContent="center"
        >
          <Text
            fontWeight={300}
            fontStyle="italic"
            lineHeight="12px"
            fontSize="10px"
          >
            {`Specimen: ${specimenWeight} lbs`}
          </Text>
        </Box>
        {specimensString === '' ? null : (
          <Box display="flex" flexDirection="column" justifyContent="center">
            <Text lineHeight="12px" fontSize="10px">
              {specimensString}
            </Text>
          </Box>
        )}
        <Box
          display="flex"
          flex={1}
          flexDirection="row"
          justifyContent="flex-end"
        >
          <Box>
            <DropdownArrow
              show={showDropdown}
              onClick={() => setShowDropdown(!showDropdown)}
            />
          </Box>
        </Box>
      </Box>
      <MyDropdown open={showDropdown}>
        <Box
          display="flex"
          flexDirection="row"
          flex={1}
          justifyContent="space-between"
        >
          <Box display="flex" flexDirection="column" flex={1} mr="5px">
            {rowsArray.map((row, index) => {
              return (
                <SingleRow
                  specimen={specimen}
                  specimenWeight={specimenWeight}
                  isFirst={index === 0}
                  rowNumber={index + 1}
                />
              );
            })}
          </Box>

          <Box
            ml="2px"
            mr="5px"
            display="flex"
            flexDirection="column"
            justifyContent="flex-end"
            onClick={addRow}
          >
            <StyledImage height={25} width={25} src={plus} alt="logo" />
          </Box>
        </Box>
      </MyDropdown>
    </Box>
  );
};
