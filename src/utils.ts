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

const rounded = (decimals: number) => Math.round(decimals * 1000) / 1000;

export const roundToThreeDP = (num: number) => {
  const round = Math.round(num);
  const leftOvers = num - round;
  if (leftOvers > 0) {
    return round + rounded(leftOvers);
  }
  return round + rounded(leftOvers);
};
