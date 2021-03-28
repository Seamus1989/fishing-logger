export const deviceWidth = Math.min(
  document.body.scrollWidth,
  document.documentElement.scrollWidth,
  document.body.offsetWidth,
  document.documentElement.offsetWidth,
  document.documentElement.clientWidth,
);

export const deviceHeight = Math.min(
  document.body.scrollHeight,
  document.documentElement.scrollHeight,
  document.body.offsetHeight,
  document.documentElement.offsetHeight,
  document.documentElement.clientHeight,
);

export const totalPlusIconWidth = 32;
type Fish = {
  name: string;
  specimenWeight: number;
};
export type FishList = Fish[];

export const fishSpecies: FishList = [
  {
    name: 'Bass',
    specimenWeight: 8.0,
  },
  {
    name: 'Black Bream',
    specimenWeight: 2.5,
  },
  {
    name: 'Gilthead Bream',
    specimenWeight: 3.5,
  },
  {
    name: 'Red Bream',
    specimenWeight: 1.0,
  },
  {
    name: 'Brill',
    specimenWeight: 2.0,
  },
  {
    name: 'Bull Huss',
    specimenWeight: 10,
  },
  {
    name: 'Coalfish',
    specimenWeight: 2.5,
  },
  {
    name: 'Cod',
    specimenWeight: 8,
  },
  {
    name: 'Conger Eel',
    specimenWeight: 25,
  },
  {
    name: 'Dab',
    specimenWeight: 1.0,
  },
  {
    name: 'Flounder',
    specimenWeight: 2.5,
  },
  {
    name: 'Garfish',
    specimenWeight: 1.25,
  },
  {
    name: 'Gurnard (Tub)',
    specimenWeight: 2.5,
  },
  {
    name: 'Gurnard (Red)',
    specimenWeight: 1.0,
  },
  {
    name: 'Haddock',
    specimenWeight: 1.0,
  },
  {
    name: 'John Dory',
    specimenWeight: 1.0,
  },
  {
    name: 'Dogfish (LS)',
    specimenWeight: 2.5,
  },
  {
    name: 'Ling',
    specimenWeight: 4.5,
  },
  {
    name: 'Mackerel',
    specimenWeight: 1.5,
  },
  {
    name: 'Megrim',
    specimenWeight: 1.0,
  },
  {
    name: 'Monkfish',
    specimenWeight: 25,
  },
  {
    name: 'Grey Mullet',
    specimenWeight: 2.0,
  },
  {
    name: 'Red Mullet',
    specimenWeight: 1.25,
  },
];
