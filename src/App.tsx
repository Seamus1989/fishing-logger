/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';

import './App.css';
import {InputRow} from './components/molecules/input-row';
import {fishSpecies} from './consts';

export const App = () => {
  return (
    <>
      {fishSpecies.map(({name, specimenWeight}) => {
        return <InputRow fish={name} specimenWeight={specimenWeight} />;
      })}
    </>
  );
};
