/* eslint-disable react/require-default-props */
import { Box, Collapse, Image, Text } from "@chakra-ui/react";
import { useCallback, useMemo, useState } from "react";

import OutsideClickHandler from "react-outside-click-handler";
import { darkColor, deviceWidth } from "../../consts";
import { useUserContext } from "../../context/all-user-score";
import arrow from "../../images/down-arrow.svg";
import { roundToDecimalPlace } from "../../utils";

import { TextDisplayRow } from "../common/text-display-row";
import { StyledRotate } from "../random";
import { SingleRow } from "./single-row";

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
        <Image height={15} width={15} src={arrow} alt="logo" />
      </StyledRotate>
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

  const { users, currentUser } = useUserContext();

  const specimensArr = useMemo(() => {
    if (users && users.length) {
      const user = users.find((thisUser) => thisUser.name === currentUser);
      if (!user) return [];
      if (!user.specimens) return [];
      const { specimenStringArray } = user;
      const thisSpecimenNumber = user.specimens.filter(
        (fish) => fish && fish.name === specimen
      ).length;
      if (thisSpecimenNumber === 0) return [];
      return specimenStringArray.slice(0, thisSpecimenNumber);
    }
    return [];
  }, [currentUser, specimen, users]);

  const totalFish = useMemo(() => {
    if (users && users.length) {
      const user = users.find((thisUser) => thisUser.name === currentUser);
      if (!user) return "";
      if (!user.allFish) return "";
      const total = user.allFish.filter(
        (fish) => fish.name === specimen
      ).length;

      return total;
    }
    return 0;
  }, [currentUser, specimen, users]);

  const totalPoints = useMemo(() => {
    if (users && users.length) {
      const user = users.find((thisUser) => thisUser.name === currentUser);
      if (!user) return 0;
      if (!user.allFish) return 0;
      return user.allFish
        .filter((fish) => fish && fish.name === specimen)
        .reduce((prev, curr) => {
          const currentScore = curr.scoredPoints;
          return prev + currentScore;
        }, 0);
    }
    return 0;
  }, [currentUser, specimen, users]);

  const handleDropdownClick = useCallback(() => {
    if (!currentUser) return;
    setShowDropdown(!showDropdown);
  }, [currentUser, showDropdown]);

  const handleClickOutside = useCallback(() => {
    if (!currentUser) return;
    if (!showDropdown) return;
    setShowDropdown(!showDropdown);
  }, [currentUser, showDropdown]);

  const renderSpecimens = useMemo(() => {
    if (!specimensArr) return null;
    return specimensArr.map((specimensString, index) => {
      return (
        <Box
          pl={index === 0 ? "0px" : "12px"}
          key={`${specimensString}-${index}`}
        >
          <Text lineHeight="12px" fontWeight={500} fontSize="10px">
            {specimensString}
          </Text>
        </Box>
      );
    });
  }, [specimensArr]);

  return (
    <OutsideClickHandler onOutsideClick={() => handleClickOutside()}>
      <Box
        maxWidth={`${deviceWidth}px`}
        margin="10px"
        padding="5px"
        borderRadius="5px"
        borderColor={specimensArr?.length ? "black" : darkColor}
        borderWidth={1}
        bg={darkColor}
      >
        <Box display="flex" flex={1} pt="5px" pl="5px" flexDirection="row">
          {renderSpecimens}
        </Box>
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
                {`${specimen.toUpperCase()}`}
              </Text>
            </Box>
          </Box>

          <TextDisplayRow text={`${"🏆  "} ${specimenWeight} lbs`} />
          <TextDisplayRow text={`Fish: ${totalFish || 0}`} />
          <TextDisplayRow
            text={`Points: ${roundToDecimalPlace(totalPoints)}`}
          />
          <Box
            display="flex"
            flex={0.5}
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
        <Collapse in={showDropdown} animateOpacity>
          <Box
            display="flex"
            flexDirection="row"
            flex={1}
            justifyContent="space-between"
          >
            <SingleRow
              specimen={specimen}
              specimenWeight={specimenWeight}
              hideRow={() => handleClickOutside()}
            />
          </Box>
        </Collapse>
      </Box>
    </OutsideClickHandler>
  );
};
