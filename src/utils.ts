export const getNumberOfDecimals = (value: number): number => {
  if (Math.floor(value.valueOf()) === value.valueOf()) return 0;
  return value.toString().split('.')[1].length || 0;
};

export const getFishScore = (
  specimenWeight: number,
  fishWeight: number,
): number => {
  const decimal = fishWeight / specimenWeight;
  return decimal * 100;
};

export const getFishInPounds = (
  pound: number,
  ounce: number,
  dram: number,
): number => {
  const dramTotal = 16 * 16 * dram;
  const ounceTotal = 16 * ounce;
  const poundsTotal = pound;
  return dramTotal + ounceTotal + poundsTotal;
};
