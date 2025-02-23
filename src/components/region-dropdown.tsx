import { useMemo, useState } from "react";

import { Select } from "@chakra-ui/react";
import { useFishContext } from "../context/fish-list";
import { Region, RegionEnum } from "../fish-data";

export type RegionOption = {
  value: Region;
  label: string;
};

export const labelMapper = {
  [RegionEnum.EnglandWales]: `🏴󠁧󠁢󠁥󠁮󠁧󠁿 + 🏴󠁧󠁢󠁷󠁬󠁳󠁿`,
  [RegionEnum.ScotlandIreland]: `🏴󠁧󠁢󠁳󠁣󠁴󠁿 + 🇮🇪`,
};
const options = [
  {
    value: RegionEnum.EnglandWales as string,
    label: labelMapper[RegionEnum.EnglandWales],
  },
  {
    value: RegionEnum.ScotlandIreland as string,
    label: labelMapper[RegionEnum.ScotlandIreland],
  },
];

export const RegionSelect = ({ disabled }: { disabled: boolean }) => {
  const [selection, setSelection] = useState<RegionOption | undefined>(
    undefined
  );
  const { toggleRegion } = useFishContext();

  const renderOptions = useMemo(() => {
    return options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ));
  }, []);
  return (
    <Select
      width="100%"
      variant="filled"
      value={selection?.value}
      onChange={(e) => {
        const selectedOption = options.find(
          (option) => option.value === e.target.value
        );
        if (selectedOption) {
          setSelection(selectedOption as RegionOption);
          toggleRegion(selectedOption.value as Region);
        }
      }}
      isDisabled={disabled}
      placeholder="Select a region..."
    >
      {renderOptions}
    </Select>
  );
};
