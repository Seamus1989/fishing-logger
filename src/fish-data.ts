/* eslint-disable camelcase */
export enum RegionEnum {
  'South_devon' = 'South-devon',
  'North_devon' = 'North-devon',
  'Cornwall' = 'Cornwall',
  'Dorset' = 'Dorset',
  'Somerset' = 'Somerset',
}

type ListedFish = {
  name: string;
  specimenWeight: number;
};

export type FishList = ListedFish[];

export type Region =
  | RegionEnum.North_devon
  | RegionEnum.South_devon
  | RegionEnum.Somerset
  | RegionEnum.Dorset
  | RegionEnum.Cornwall;

export type FishByRegionData = {
  region: Region;
  fish: FishList;
}[];

const fishSpeciesSouthDevon: FishList = [
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
  {
    name: 'Thick Lip Mullet',
    specimenWeight: 4.0,
  },
  {
    name: 'Thin Lip Mullet',
    specimenWeight: 3.5,
  },
  {
    name: 'Plaice',
    specimenWeight: 2.5,
  },
  {
    name: 'Polluck',
    specimenWeight: 3.75,
  },
  {
    name: 'Pouting',
    specimenWeight: 1.5,
  },
  {
    name: 'Blonde Ray',
    specimenWeight: 13.0,
  },
  {
    name: 'Small Eyed Ray',
    specimenWeight: 8.0,
  },
  {
    name: 'Spotted Ray',
    specimenWeight: 5.0,
  },
  {
    name: 'Sting Ray',
    specimenWeight: 20.0,
  },
  {
    name: 'Thornback Ray',
    specimenWeight: 10.0,
  },
  {
    name: 'Undulate Ray',
    specimenWeight: 12.0,
  },
  {
    name: 'Rockling',
    specimenWeight: 1.5,
  },
  {
    name: 'Scad',
    specimenWeight: 1.0,
  },
  {
    name: 'Silver Eel',
    specimenWeight: 2.5,
  },
  {
    name: 'Smooth Hounds',
    specimenWeight: 8.0,
  },
  {
    name: 'Sole',
    specimenWeight: 1.75,
  },
  {
    name: 'Spurdog',
    specimenWeight: 8.0,
  },
  {
    name: 'Tope',
    specimenWeight: 25,
  },
  {
    name: 'Trigger Fish',
    specimenWeight: 2.5,
  },
  {
    name: 'Turbot',
    specimenWeight: 3.0,
  },
  {
    name: 'Whiting',
    specimenWeight: 1.5,
  },
  {
    name: 'Ballan Wrasse',
    specimenWeight: 4.0,
  },
  {
    name: 'Cucko Wrasse',
    specimenWeight: 1.25,
  },
];

const fishSpeciesNorthDevon: FishList = [
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
  {
    name: 'Thick Lip Mullet',
    specimenWeight: 4.0,
  },
  {
    name: 'Thin Lip Mullet',
    specimenWeight: 3.5,
  },
  {
    name: 'Plaice',
    specimenWeight: 2.5,
  },
  {
    name: 'Polluck',
    specimenWeight: 3.75,
  },
  {
    name: 'Pouting',
    specimenWeight: 1.5,
  },
  {
    name: 'Blonde Ray',
    specimenWeight: 13.0,
  },
  {
    name: 'Small Eyed Ray',
    specimenWeight: 8.0,
  },
  {
    name: 'Spotted Ray',
    specimenWeight: 5.0,
  },
  {
    name: 'Sting Ray',
    specimenWeight: 20.0,
  },
  {
    name: 'Thornback Ray',
    specimenWeight: 10.0,
  },
  {
    name: 'Undulate Ray',
    specimenWeight: 12.0,
  },
  {
    name: 'Rockling',
    specimenWeight: 1.5,
  },
  {
    name: 'Scad',
    specimenWeight: 1.0,
  },
  {
    name: 'Silver Eel',
    specimenWeight: 2.5,
  },
  {
    name: 'Smooth Hounds',
    specimenWeight: 8.0,
  },
  {
    name: 'Sole',
    specimenWeight: 1.75,
  },
  {
    name: 'Spurdog',
    specimenWeight: 8.0,
  },
  {
    name: 'Tope',
    specimenWeight: 25,
  },
  {
    name: 'Trigger Fish',
    specimenWeight: 2.5,
  },
  {
    name: 'Turbot',
    specimenWeight: 3.0,
  },
  {
    name: 'Whiting',
    specimenWeight: 1.5,
  },
  {
    name: 'Ballan Wrasse',
    specimenWeight: 4.0,
  },
  {
    name: 'Cucko Wrasse',
    specimenWeight: 1.25,
  },
];

const fishSpeciesCornwall: FishList = [
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
  {
    name: 'Thick Lip Mullet',
    specimenWeight: 4.0,
  },
  {
    name: 'Thin Lip Mullet',
    specimenWeight: 3.5,
  },
  {
    name: 'Plaice',
    specimenWeight: 2.5,
  },
  {
    name: 'Polluck',
    specimenWeight: 3.75,
  },
  {
    name: 'Pouting',
    specimenWeight: 1.5,
  },
  {
    name: 'Blonde Ray',
    specimenWeight: 13.0,
  },
  {
    name: 'Small Eyed Ray',
    specimenWeight: 8.0,
  },
  {
    name: 'Spotted Ray',
    specimenWeight: 5.0,
  },
  {
    name: 'Sting Ray',
    specimenWeight: 20.0,
  },
  {
    name: 'Thornback Ray',
    specimenWeight: 10.0,
  },
  {
    name: 'Undulate Ray',
    specimenWeight: 12.0,
  },
  {
    name: 'Rockling',
    specimenWeight: 1.5,
  },
  {
    name: 'Scad',
    specimenWeight: 1.0,
  },
  {
    name: 'Silver Eel',
    specimenWeight: 2.5,
  },
  {
    name: 'Smooth Hounds',
    specimenWeight: 8.0,
  },
  {
    name: 'Sole',
    specimenWeight: 1.75,
  },
  {
    name: 'Spurdog',
    specimenWeight: 8.0,
  },
  {
    name: 'Tope',
    specimenWeight: 25,
  },
  {
    name: 'Trigger Fish',
    specimenWeight: 2.5,
  },
  {
    name: 'Turbot',
    specimenWeight: 3.0,
  },
  {
    name: 'Whiting',
    specimenWeight: 1.5,
  },
  {
    name: 'Ballan Wrasse',
    specimenWeight: 4.0,
  },
  {
    name: 'Cucko Wrasse',
    specimenWeight: 1.25,
  },
];

const fishSpeciesDorset: FishList = [
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
  {
    name: 'Thick Lip Mullet',
    specimenWeight: 4.0,
  },
  {
    name: 'Thin Lip Mullet',
    specimenWeight: 3.5,
  },
  {
    name: 'Plaice',
    specimenWeight: 2.5,
  },
  {
    name: 'Polluck',
    specimenWeight: 3.75,
  },
  {
    name: 'Pouting',
    specimenWeight: 1.5,
  },
  {
    name: 'Blonde Ray',
    specimenWeight: 13.0,
  },
  {
    name: 'Small Eyed Ray',
    specimenWeight: 8.0,
  },
  {
    name: 'Spotted Ray',
    specimenWeight: 5.0,
  },
  {
    name: 'Sting Ray',
    specimenWeight: 20.0,
  },
  {
    name: 'Thornback Ray',
    specimenWeight: 10.0,
  },
  {
    name: 'Undulate Ray',
    specimenWeight: 12.0,
  },
  {
    name: 'Rockling',
    specimenWeight: 1.5,
  },
  {
    name: 'Scad',
    specimenWeight: 1.0,
  },
  {
    name: 'Silver Eel',
    specimenWeight: 2.5,
  },
  {
    name: 'Smooth Hounds',
    specimenWeight: 8.0,
  },
  {
    name: 'Sole',
    specimenWeight: 1.75,
  },
  {
    name: 'Spurdog',
    specimenWeight: 8.0,
  },
  {
    name: 'Tope',
    specimenWeight: 25,
  },
  {
    name: 'Trigger Fish',
    specimenWeight: 2.5,
  },
  {
    name: 'Turbot',
    specimenWeight: 3.0,
  },
  {
    name: 'Whiting',
    specimenWeight: 1.5,
  },
  {
    name: 'Ballan Wrasse',
    specimenWeight: 4.0,
  },
  {
    name: 'Cucko Wrasse',
    specimenWeight: 1.25,
  },
];

const fishSpeciesSomerset: FishList = [
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
  {
    name: 'Thick Lip Mullet',
    specimenWeight: 4.0,
  },
  {
    name: 'Thin Lip Mullet',
    specimenWeight: 3.5,
  },
  {
    name: 'Plaice',
    specimenWeight: 2.5,
  },
  {
    name: 'Polluck',
    specimenWeight: 3.75,
  },
  {
    name: 'Pouting',
    specimenWeight: 1.5,
  },
  {
    name: 'Blonde Ray',
    specimenWeight: 13.0,
  },
  {
    name: 'Small Eyed Ray',
    specimenWeight: 8.0,
  },
  {
    name: 'Spotted Ray',
    specimenWeight: 5.0,
  },
  {
    name: 'Sting Ray',
    specimenWeight: 20.0,
  },
  {
    name: 'Thornback Ray',
    specimenWeight: 10.0,
  },
  {
    name: 'Undulate Ray',
    specimenWeight: 12.0,
  },
  {
    name: 'Rockling',
    specimenWeight: 1.5,
  },
  {
    name: 'Scad',
    specimenWeight: 1.0,
  },
  {
    name: 'Silver Eel',
    specimenWeight: 2.5,
  },
  {
    name: 'Smooth Hounds',
    specimenWeight: 8.0,
  },
  {
    name: 'Sole',
    specimenWeight: 1.75,
  },
  {
    name: 'Spurdog',
    specimenWeight: 8.0,
  },
  {
    name: 'Tope',
    specimenWeight: 25,
  },
  {
    name: 'Trigger Fish',
    specimenWeight: 2.5,
  },
  {
    name: 'Turbot',
    specimenWeight: 3.0,
  },
  {
    name: 'Whiting',
    specimenWeight: 1.5,
  },
  {
    name: 'Ballan Wrasse',
    specimenWeight: 4.0,
  },
  {
    name: 'Cucko Wrasse',
    specimenWeight: 1.25,
  },
];

const allFishedWithRegions: FishByRegionData = [
  {
    region: RegionEnum.South_devon,
    fish: fishSpeciesSouthDevon,
  },
  {
    region: RegionEnum.North_devon,
    fish: fishSpeciesNorthDevon,
  },
  {
    region: RegionEnum.Cornwall,
    fish: fishSpeciesCornwall,
  },
  {
    region: RegionEnum.Dorset,
    fish: fishSpeciesDorset,
  },
  {
    region: RegionEnum.Somerset,
    fish: fishSpeciesSomerset,
  },
];

export {
  allFishedWithRegions,
  fishSpeciesSouthDevon,
  fishSpeciesNorthDevon,
  fishSpeciesCornwall,
};
