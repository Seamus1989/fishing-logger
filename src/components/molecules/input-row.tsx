/* eslint-disable react/require-default-props */
import React, {useCallback, useMemo, useState} from 'react';
import {SlideDown} from 'react-slidedown';
import {deviceWidth} from '../../consts';
import {Box} from '../common/box';
import {Text} from '../common/text';
import 'react-slidedown/lib/slidedown.css';
import arrow from '../../down-arrow.svg';
import {useUserContext} from '../../context/all-user-score';
import {SingleRow} from './single-row';
import {StyledImage, StyledRotate} from '../random';

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

export const MyDropdown = ({
  open,
  children,
}: {
  open: boolean;
  children: JSX.Element;
}): JSX.Element => {
  return (
    <SlideDown className="my-dropdown-slidedown">
      {open ? children : null}
    </SlideDown>
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
      const specimens = user.specimens.filter(
        (fish) => fish && fish.name === specimen,
      );

      return new Array(specimens.length).fill('🐟').join(' ');
    }
    return '';
  }, [currentUser, specimen, users]);

  const totalFish = useMemo(() => {
    if (users && users.length) {
      const user = users.find((thisUser) => thisUser.name === currentUser);
      if (!user) return '';
      if (!user.allFish) return '';
      const total = user.allFish.filter((fish) => fish.name === specimen)
        .length;

      return total;
    }
    return 0;
  }, [currentUser, specimen, users]);

  const totalPoints = useMemo(() => {
    if (users && users.length) {
      const user = users.find((thisUser) => thisUser.name === currentUser);
      if (!user) return '';
      if (!user.allFish) return '';
      return user.allFish
        .filter((fish) => fish && fish.name === specimen)
        .reduce((prev, curr) => {
          const currentScore = curr.scoredPoints;
          return prev + currentScore;
        }, 0);
    }
    return 0;
  }, [currentUser, specimen, users]);

  const addRow = useCallback(() => {
    const newTotal = 1 + howManyRows;
    setHowManyRows(newTotal);
  }, [howManyRows]);

  const removeRow = useCallback(
    (index) => {
      const newTotal = -1 + howManyRows;
      if (newTotal > 0) setHowManyRows(newTotal);
    },
    [howManyRows],
  );

  const handleDropdownClick = useCallback(() => {
    if (!currentUser) return;
    setShowDropdown(!showDropdown);
  }, [currentUser, showDropdown]);

  return (
    <Box
      maxWidth={`${deviceWidth}px`}
      margin="10px"
      padding="5px"
      borderRadius="5px"
      bg="#FFC2BB"
    >
      <Box
        onClick={() => handleDropdownClick()}
        flex={1}
        margin="5px"
        display="flex"
        flexDirection="row"
      >
        <Box display="flex" flex={1} flexDirection="row">
          <Box display="flex" flexDirection="column" justifyContent="center">
            <Text lineHeight="12px" fontWeight={500} fontSize="10px">
              {specimen.toUpperCase()}
            </Text>
          </Box>
          {specimensString === '' ? null : (
            <Box
              flex={1}
              display="flex"
              flexDirection="column"
              pl="10px"
              justifyContent="center"
            >
              <Text lineHeight="12px" fontSize="10px">
                {specimensString}
              </Text>
            </Box>
          )}
        </Box>
        <Box
          flex={1}
          display="flex"
          flexDirection="column"
          pl="10px"
          justifyContent="center"
        >
          <Text lineHeight="12px" fontSize="10px">
            Fish: {totalFish}
          </Text>
        </Box>
        <Box
          flex={1}
          display="flex"
          flexDirection="column"
          pl="10px"
          justifyContent="center"
        >
          <Text lineHeight="12px" fontSize="10px">
            Points: {totalPoints}
          </Text>
        </Box>
        <Box
          display="flex"
          flex={1}
          flexDirection="row"
          justifyContent="flex-end"
        >
          <Box>
            <DropdownArrow
              show={showDropdown}
              onClick={() => handleDropdownClick()}
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
              // SEAMO maybe these rows map from fish recorded??
              // for each fish, we see if any exist for user, if not render empty
              // if fish exist we render accordingly and we will not need to hand remove functionality
              // SEAMO HERE WE ARE TODO
              return (
                <SingleRow
                  specimen={specimen}
                  specimenWeight={specimenWeight}
                  isFirst={index === 0}
                  rowNumber={index + 1}
                  addRow={addRow}
                  removeRow={removeRow}
                />
              );
            })}
          </Box>
        </Box>
      </MyDropdown>
    </Box>
  );
};
