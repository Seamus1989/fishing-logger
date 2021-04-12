import React from 'react';
import {useUserContext} from '../../context/all-user-score';
import {Box} from '../common/box';
import {TextDisplayRow} from '../common/text-display-row';

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
  region: string;
  recordedWeight: number;
  specimenWeight: number;
  isFirst: boolean;
  id: string;
}) => {
  const {deleteFish} = useUserContext();
  if (!isFirst) {
    return (
      <Box display="flex" flexDirection="row">
        <TextDisplayRow verticalPadding={2} text={name} />
        <TextDisplayRow verticalPadding={2} text={`${scoredPoints}`} />
        <TextDisplayRow verticalPadding={2} text={`${region}`} />
        <TextDisplayRow verticalPadding={2} text={`${recordedWeight} lbs`} />
        <TextDisplayRow
          verticalPadding={2}
          underline
          text="Remove"
          onClick={() => deleteFish(id)}
        />
      </Box>
    );
  }
  return (
    <>
      <Box display="flex" flexDirection="column">
        <Box pb="10px" display="flex" flexDirection="row">
          <TextDisplayRow bold text="Fish" />
          <TextDisplayRow bold text="Score" />
          <TextDisplayRow bold text="Region" />
          <TextDisplayRow bold text="Weight" />
          <TextDisplayRow bold text="Delete" />
        </Box>
        <Box display="flex" flexDirection="row">
          <TextDisplayRow verticalPadding={2} text={name} />
          <TextDisplayRow verticalPadding={2} text={`${scoredPoints}`} />
          <TextDisplayRow verticalPadding={2} text={`${region}`} />
          <TextDisplayRow verticalPadding={2} text={`${recordedWeight} lbs`} />
          <TextDisplayRow
            verticalPadding={2}
            underline
            text="Remove"
            onClick={() => deleteFish(id)}
          />
        </Box>
      </Box>
    </>
  );
};
