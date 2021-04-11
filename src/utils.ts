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
  const dramTotal = (dram / 16) * 16;
  const ounceTotal = ounce / 16;
  const poundsTotal = pound;
  return dramTotal + ounceTotal + poundsTotal;
};

export const capitaliseMe = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

const rounded = (decimals: number, howMany: number) =>
  Math.round(decimals * howMany) / howMany;

export const roundToDecimanPlace = (num: number, howMany?: number) => {
  const factor = 10 ** (howMany || 2);
  const round = Math.round(num);
  const leftOvers = num - round;
  if (leftOvers > 0) {
    return round + rounded(leftOvers, factor);
  }
  return round + rounded(leftOvers, factor);
};
