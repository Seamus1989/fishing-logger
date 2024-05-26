import { randomFishEmojiGenerator } from "../../consts";
import { useUserContext } from "../../context/all-user-score";
import { roundToDecimalPlace } from "../../utils";

import { Box, Image } from "@chakra-ui/react";
import { RegionEnum } from "../../fish-data";
import bin from "../../images/delete.svg";
import { TextDisplayRow } from "../common/text-display-row";
import { labelMapper } from "../region-dropdown";

const Bin = () => {
  return <Image height={15} width={15} src={bin} alt="logo" />;
};
export const SingleLoggedFish = ({
  name,
  scoredPoints,
  region,
  recordedWeight,
  specimenWeight,
  isFirst,
  id,
}: {
  name: string;
  scoredPoints: number;
  region: RegionEnum;
  recordedWeight: number;
  specimenWeight: number;
  isFirst: boolean;
  id: string;
}) => {
  const { deleteFish } = useUserContext();
  const isSpecimen = recordedWeight >= specimenWeight;
  const label = labelMapper[region].replace("+", " ");
  if (!isFirst) {
    return (
      <Box display="flex" pb="3px" flexDirection="row">
        <TextDisplayRow
          verticalPadding={5}
          leftPadding={3}
          text={
            !isSpecimen
              ? name
              : `${name} ${randomFishEmojiGenerator(Math.random())}`
          }
        />
        <TextDisplayRow
          verticalPadding={5}
          leftPadding={5}
          text={`${roundToDecimalPlace(scoredPoints)}`}
        />
        <TextDisplayRow verticalPadding={5} text={label} fontSize="14px" />
        <TextDisplayRow
          verticalPadding={5}
          text={`${roundToDecimalPlace(recordedWeight)} lbs`}
        />
        <Box
          flex={1}
          display="flex"
          flexDirection="row"
          justifyContent="center"
        >
          <Box justifyContent="center" display="flex" flexDirection="column">
            <Box
              mb="3px"
              borderBottom="1px rgba(0,0,0,0.4) solid"
              onClick={() => deleteFish(id)}
            >
              <Bin />
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
  return (
    <>
      <Box display="flex" flexDirection="column">
        <Box
          mb="8px"
          pb="2px"
          borderBottom="0.5px rgba(0,0,0,0.4) solid"
          display="flex"
          flexDirection="row"
        >
          <TextDisplayRow leftPadding={3} bold text="Fish" />
          <TextDisplayRow leftPadding={5} bold text="Score" />
          <TextDisplayRow bold text="Region" />
          <TextDisplayRow bold text="Weight" />
          <Box flex={1} display="flex" flexDirection="column" />
        </Box>

        <Box display="flex" pb="3px" flexDirection="row">
          <TextDisplayRow
            verticalPadding={5}
            leftPadding={3}
            text={
              !isSpecimen
                ? name
                : `${name} ${randomFishEmojiGenerator(Math.random())}`
            }
          />
          <TextDisplayRow
            verticalPadding={5}
            leftPadding={5}
            text={`${roundToDecimalPlace(scoredPoints)}`}
          />
          <TextDisplayRow verticalPadding={5} text={label} fontSize="14px" />
          <TextDisplayRow
            verticalPadding={5}
            text={`${roundToDecimalPlace(recordedWeight)} lbs`}
          />

          <Box
            flex={1}
            display="flex"
            flexDirection="row"
            justifyContent="center"
          >
            <Box justifyContent="center" display="flex" flexDirection="column">
              <Box
                mb="3px"
                borderBottom="1px rgba(0,0,0,0.4) solid"
                onClick={() => deleteFish(id)}
              >
                <Bin />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
