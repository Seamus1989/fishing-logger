export const getNumberOfDecimals = (value: number): number => {
  const decimalPart = value.toString().split(".")[1];
  return decimalPart ? decimalPart.length : 0;
};

export const getFishScore = (
  specimenWeight: number,
  fishWeight: number
): number => {
  if (specimenWeight === 0) return 0; // Avoid division by zero
  return (fishWeight / specimenWeight) * 100;
};

export const getFishInPounds = (
  pound: number,
  ounce: number,
  dram: number
): number => {
  const dramTotal = dram / (16 * 16);
  const ounceTotal = ounce / 16;
  return pound + ounceTotal + dramTotal;
};

export const capitaliseMe = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export const roundToDecimalPlace = (num: number, howMany: number = 2) => {
  const factor = 10 ** howMany;
  return Math.round(num * factor) / factor;
};

export const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    console.error("Failed to copy:", err);
  }
};

export const getTrophy = (index: number) => {
  const trophies = ["🏆 ", "🥈 ", "🥉 "];
  return index < trophies.length ? trophies[index] : ` ${index + 1}. `;
};

export const getTrophyWithName = (index: number, name: string) => {
  const trophies = ["🏆", "🥈", "🥉"];
  return index < trophies.length
    ? `${index + 1}. ${trophies[index]} - ${name} - ${trophies[index]}`
    : `${index + 1}. ${name}`;
};

export const getActualScore = (index: number, numberOfFish: number) => {
  if (index < 0) return 0;
  const scores = [11, 10, 9, 8, 7, 6];
  return index < scores.length ? scores[index] : numberOfFish ? 5 : 3;
};
