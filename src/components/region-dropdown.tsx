import React, {useCallback, useState} from 'react';
import Select from 'react-select';
import {RegionEnum} from '../fish-data';
import {useFishContext} from '../context/fish-list';

const options = [
  {value: RegionEnum.North_devon as string, label: 'North Devon'},
  {value: RegionEnum.South_devon as string, label: 'South Devon'},
  {value: RegionEnum.Cornwall as string, label: 'Cornwall'},
  {value: RegionEnum.Dorset as string, label: 'Dorset & Hampshire'},
  {value: RegionEnum.Somerset as string, label: 'Avon & Somerset'},
];

export const RegionSelect = ({disabled}: {disabled: boolean}) => {
  const [selection, setSelection] = useState(null);
  const {toggleRegion} = useFishContext();

  const handleChange = useCallback(
    (selectedOption) => {
      setSelection(selectedOption);
      toggleRegion(selectedOption.value);
    },
    [toggleRegion],
  );

  return (
    <Select
      className="basic-single"
      value={selection}
      onChange={handleChange}
      options={options}
      isSearchable
      isDisabled={disabled}
      placeholder="Select a fishing region..."
    />
  );
};
