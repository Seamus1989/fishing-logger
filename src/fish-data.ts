/* eslint-disable camelcase */
export enum RegionEnum {
  // TODO
  "EnglandWales" = "Eng/Wales",
  "ScotlandIreland" = "Scot/Ire",
}

type ListedFish = {
  name: string;
  specimenWeight: number;
};

export type FishList = ListedFish[];

export type Region = RegionEnum.EnglandWales | RegionEnum.ScotlandIreland;

export type FishByRegionData = {
  region: Region;
  fish: FishList;
}[];

const fishSpeciesEnglandWales: FishList = [
  {
    // online but not on dyls list
    name: "Angler fish",
    specimenWeight: 25.0,
  },
  {
    name: "Bass",
    specimenWeight: 8.0,
  },
  {
    name: "Black Bream",
    specimenWeight: 2.5,
  },
  {
    name: "Couchs Bream",
    specimenWeight: 1.25,
  },
  {
    name: "Gilthead Bream",
    specimenWeight: 5,
  },
  {
    name: "Red Bream",
    specimenWeight: 1.0,
  },
  {
    name: "Brill",
    specimenWeight: 2.0,
  },
  {
    name: "Bull Huss",
    specimenWeight: 10.0,
  },
  {
    name: "Coalfish",
    specimenWeight: 2.5,
  },
  {
    name: "Cod",
    specimenWeight: 10.0,
  },
  {
    name: "Conger Eel",
    specimenWeight: 25.0,
  },
  {
    name: "Dab",
    specimenWeight: 1.0,
  },
  {
    name: "Flounder",
    specimenWeight: 2,
  },
  {
    name: "Garfish",
    specimenWeight: 1.25,
  },
  {
    name: "Gurnard (Tub)",
    specimenWeight: 2.5,
  },
  {
    name: "Gurnard (Red)",
    specimenWeight: 1.0,
  },
  {
    name: "Haddock",
    specimenWeight: 1.0,
  },
  {
    name: "John Dory",
    specimenWeight: 1.0,
  },
  {
    name: "Dogfish (LS)",
    specimenWeight: 2.5,
  },
  {
    name: "Ling",
    specimenWeight: 4.5,
  },
  {
    name: "Mackerel",
    specimenWeight: 1.5,
  },
  {
    name: "Megrim",
    specimenWeight: 1.0,
  },
  {
    name: "Monkfish",
    specimenWeight: 25.0,
  },
  {
    name: "Gold Grey Mullet",
    specimenWeight: 2.0,
  },
  {
    name: "Red Mullet",
    specimenWeight: 1.25,
  },
  {
    name: "Thick Lip Mullet",
    specimenWeight: 4.0,
  },
  {
    name: "Thin Lip Mullet",
    specimenWeight: 3.25,
  },
  {
    name: "Plaice",
    specimenWeight: 2.5,
  },
  {
    name: "Pollack",
    specimenWeight: 3.75,
  },
  {
    name: "Pouting",
    specimenWeight: 1.5,
  },
  {
    name: "Blonde Ray",
    specimenWeight: 14.0,
  },
  {
    name: "Small Eyed Ray",
    specimenWeight: 9.0,
  },
  {
    name: "Spotted Ray",
    specimenWeight: 4.0,
  },
  {
    name: "Sting Ray",
    specimenWeight: 20.0,
  },
  {
    name: "Thornback Ray",
    specimenWeight: 10.0,
  },
  {
    name: "Undulate Ray",
    specimenWeight: 12.0,
  },
  {
    name: "Rockling (3 Bearded)",
    specimenWeight: 1.5,
  },
  {
    name: "Scad",
    specimenWeight: 1.0,
  },
  {
    name: "Silver Eel",
    specimenWeight: 2.5,
  },
  {
    name: "Smooth Hounds",
    specimenWeight: 10.0,
  },
  {
    name: "Sole",
    specimenWeight: 1.75,
  },
  {
    name: "Spurdog",
    specimenWeight: 10.0,
  },
  {
    name: "Tope",
    specimenWeight: 25.0,
  },
  {
    name: "Trigger Fish",
    specimenWeight: 2.5,
  },
  {
    name: "Turbot",
    specimenWeight: 3.0,
  },
  {
    name: "Weaver - Greater",
    specimenWeight: 0.75,
  },
  {
    name: "Whiting",
    specimenWeight: 2.0,
  },
  {
    name: "Ballan Wrasse",
    specimenWeight: 4.5,
  },
  {
    name: "Cucko Wrasse",
    specimenWeight: 1.25,
  },
  {
    name: "Whiting",
    specimenWeight: 1.5,
  },
];

const fishSpeciesScotlandIreland: FishList = [
  {
    // online but not on dyls list
    name: "Angler fish",
    specimenWeight: 20.0,
  },
  {
    name: "Bass",
    specimenWeight: 9.0,
  },
  {
    name: "Black Bream",
    specimenWeight: 2.25,
  },
  {
    name: "Gilthead Bream",
    specimenWeight: 5.0,
  },
  {
    name: "Couchs Bream",
    specimenWeight: 1.25,
  },
  {
    name: "Red Bream",
    specimenWeight: 1.0,
  },
  {
    name: "Brill",
    specimenWeight: 3.5,
  },
  {
    name: "Bull Huss",
    specimenWeight: 10.0,
  },
  {
    name: "Coalfish",
    specimenWeight: 5,
  },
  {
    name: "Cod",
    specimenWeight: 10.0,
  },
  {
    name: "Conger Eel",
    specimenWeight: 25.0,
  },
  {
    name: "Dab",
    specimenWeight: 1.0,
  },
  {
    name: "Flounder",
    specimenWeight: 2.0,
  },
  {
    name: "Garfish",
    specimenWeight: 1.25,
  },
  {
    name: "Gurnard (Tub)",
    specimenWeight: 2.5,
  },
  {
    name: "Gurnard (Red)",
    specimenWeight: 1.0,
  },
  {
    name: "Haddock",
    specimenWeight: 1.0,
  },
  {
    name: "John Dory",
    specimenWeight: 1.0,
  },
  {
    name: "Dogfish (LS)",
    specimenWeight: 2.5,
  },
  {
    name: "Ling",
    specimenWeight: 5.0,
  },
  {
    name: "Mackerel",
    specimenWeight: 1.75,
  },
  {
    name: "Megrim",
    specimenWeight: 1.0,
  },
  {
    name: "Monkfish",
    specimenWeight: 25.0,
  },
  {
    name: "Gold Grey Mullet",
    specimenWeight: 1.5,
  },
  {
    name: "Red Mullet",
    specimenWeight: 1.25,
  },
  {
    name: "Thick Lip Mullet",
    specimenWeight: 4.0,
  },
  {
    name: "Thin Lip Mullet",
    specimenWeight: 3.25,
  },
  {
    name: "Plaice",
    specimenWeight: 2.5,
  },
  {
    name: "Pollack",
    specimenWeight: 6.0,
  },
  {
    name: "Pouting",
    specimenWeight: 1.75,
  },
  {
    name: "Blonde Ray",
    specimenWeight: 14.0,
  },
  {
    name: "Small Eyed Ray",
    specimenWeight: 9.0,
  },
  {
    name: "Spotted Ray",
    specimenWeight: 4.0,
  },
  {
    name: "Sting Ray",
    specimenWeight: 25.0,
  },
  {
    name: "Thornback Ray",
    specimenWeight: 10.0,
  },
  {
    name: "Undulate Ray",
    specimenWeight: 10.0,
  },
  {
    name: "Rockling (3 Bearded)",
    specimenWeight: 0.75,
  },
  {
    name: "Scad",
    specimenWeight: 1,
  },
  {
    name: "Silver Eel",
    specimenWeight: 2,
  },
  {
    name: "Smooth Hounds",
    specimenWeight: 10.0,
  },
  {
    name: "Sole",
    specimenWeight: 1.5,
  },
  {
    name: "Spurdog",
    specimenWeight: 8.0,
  },
  {
    name: "Tope",
    specimenWeight: 25.0,
  },
  {
    name: "Trigger Fish",
    specimenWeight: 2.5,
  },
  {
    name: "Turbot",
    specimenWeight: 4.0,
  },
  {
    name: "Weaver - Greater",
    specimenWeight: 0.75,
  },
  {
    name: "Whiting",
    specimenWeight: 2,
  },
  {
    name: "Ballan Wrasse",
    specimenWeight: 4.5,
  },
  {
    name: "Cucko Wrasse",
    specimenWeight: 1.25,
  },
  {
    name: "Whiting",
    specimenWeight: 1.5,
  },
];
export const allFishWithRegions: FishByRegionData = [
  {
    region: RegionEnum.EnglandWales,
    fish: fishSpeciesEnglandWales,
  },
  {
    region: RegionEnum.ScotlandIreland,
    fish: fishSpeciesScotlandIreland,
  },
];
