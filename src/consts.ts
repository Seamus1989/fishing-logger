export const deviceWidth = Math.min(
  document.body.scrollWidth,
  document.documentElement.scrollWidth,
  document.body.offsetWidth,
  document.documentElement.offsetWidth,
  document.documentElement.clientWidth,
  180,
);

export const fishSpecies = [
  {
    name: 'Salmon',
    specimenWeight: 3.0,
  },
  {
    name: 'Bass',
    specimenWeight: 2.0,
  },
  {
    name: 'Dab',
    specimenWeight: 1.5,
  },
  {
    name: 'Flounder',
    specimenWeight: 1.0,
  },
];