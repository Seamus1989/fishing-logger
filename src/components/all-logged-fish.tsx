import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {User, useUserContext} from '../context/all-user-score';
import {Box} from './common/box';
import {Text} from './common/text';
import {SingleLoggedFish} from './single-logged-fish';

export const AllLoggedFish = ({user}: {user: User}) => {
  // const fishes = user?.allFish?.map(({name, scoredPoints}) => {});
  // TODO
  return (
    <Box>
      <Text>hello</Text>
      <SingleLoggedFish />
    </Box>
  );
};
