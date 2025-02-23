import {
  capitaliseMe,
  getActualScore,
  getFishInPounds,
  getFishScore,
  getNumberOfDecimals,
  getTrophy,
  getTrophyWithName,
  roundToDecimalPlace,
} from "../utils";

describe("getNumberOfDecimals", () => {
  it("should return 0 for an integer", () => {
    expect(getNumberOfDecimals(10)).toBe(0);
  });

  it("should return the correct decimal count", () => {
    expect(getNumberOfDecimals(10.123)).toBe(3);
  });

  it("should handle simple decimals", () => {
    expect(getNumberOfDecimals(5.1)).toBe(1);
  });

  it("should return 0 for a whole number with no decimals", () => {
    expect(getNumberOfDecimals(0)).toBe(0);
  });

  it("should handle very small decimal values", () => {
    expect(getNumberOfDecimals(0.0000123)).toBe(7);
  });
});

describe("getFishScore", () => {
  it("should return 100 when fishWeight equals specimenWeight", () => {
    expect(getFishScore(10, 10)).toBe(100);
  });

  it("should return 50 when fishWeight is half of specimenWeight", () => {
    expect(getFishScore(10, 5)).toBe(50);
  });

  it("should return 0 when fishWeight is 0", () => {
    expect(getFishScore(10, 0)).toBe(0);
  });

  it("should handle division by zero", () => {
    expect(getFishScore(0, 10)).toBe(0);
  });

  it("should return the correct score for large numbers", () => {
    expect(getFishScore(100, 250)).toBe(250);
  });
});

describe("getFishInPounds", () => {
  it("should convert ounces and drams to pounds", () => {
    expect(getFishInPounds(1, 16, 0)).toBe(2);
  });

  it("should handle 0 ounces and drams", () => {
    expect(getFishInPounds(5, 0, 0)).toBe(5);
  });

  it("should correctly handle fractional drams", () => {
    expect(getFishInPounds(0, 0, 16)).toBe(0.0625);
  });

  it("should return 0 if all inputs are 0", () => {
    expect(getFishInPounds(0, 0, 0)).toBe(0);
  });

  it("should work with mixed values", () => {
    expect(getFishInPounds(3, 8, 8)).toBe(3.53125);
  });
});

describe("capitaliseMe", () => {
  it("should capitalize the first letter", () => {
    expect(capitaliseMe("hello")).toBe("Hello");
  });

  it("should not change already capitalized words", () => {
    expect(capitaliseMe("Hello")).toBe("Hello");
  });

  it("should handle single-letter words", () => {
    expect(capitaliseMe("a")).toBe("A");
  });

  it("should handle empty strings", () => {
    expect(capitaliseMe("")).toBe("");
  });

  it("should not modify the rest of the string", () => {
    expect(capitaliseMe("hELLO")).toBe("HELLO");
  });
});

describe("roundToDecimalPlace", () => {
  it("should round to 2 decimal places by default", () => {
    expect(roundToDecimalPlace(1.23456)).toBe(1.23);
  });

  it("should round to the specified decimal places", () => {
    expect(roundToDecimalPlace(1.23456, 3)).toBe(1.235);
  });

  it("should round whole numbers correctly", () => {
    expect(roundToDecimalPlace(10, 2)).toBe(10);
  });

  it("should handle negative numbers correctly", () => {
    expect(roundToDecimalPlace(-1.5678, 2)).toBe(-1.57);
  });

  it("should handle rounding edge cases", () => {
    expect(roundToDecimalPlace(1.9999, 2)).toBe(2.0);
  });
});

describe("getTrophy", () => {
  it("should return 🏆 for index 0", () => {
    expect(getTrophy(0)).toBe("🏆 ");
  });

  it("should return 🥈 for index 1", () => {
    expect(getTrophy(1)).toBe("🥈 ");
  });

  it("should return 🥉 for index 2", () => {
    expect(getTrophy(2)).toBe("🥉 ");
  });

  it("should return a numbered string for index 3+", () => {
    expect(getTrophy(5)).toBe(" 6. ");
  });

  it("should handle negative indices gracefully", () => {
    expect(getTrophy(-1)).toBe("");
  });
});

describe("getTrophyWithName", () => {
  it("should return first place with name", () => {
    expect(getTrophyWithName(0, "Alice")).toBe("1. 🏆 - Alice - 🏆");
  });

  it("should return second place with name", () => {
    expect(getTrophyWithName(1, "Bob")).toBe("2. 🥈 - Bob - 🥈");
  });

  it("should return third place with name", () => {
    expect(getTrophyWithName(2, "Charlie")).toBe("3. 🥉 - Charlie - 🥉");
  });

  it("should return numbered name for 4th place+", () => {
    expect(getTrophyWithName(5, "Dave")).toBe("6. Dave");
  });

  it("should handle empty names", () => {
    expect(getTrophyWithName(0, "")).toBe("1. 🏆 -  - 🏆");
  });
});

describe("getActualScore", () => {
  it("should return 11 for first place", () => {
    expect(getActualScore(0, 5)).toBe(11);
  });

  it("should return 6 for sixth place", () => {
    expect(getActualScore(5, 5)).toBe(6);
  });

  it("should return 5 for places beyond sixth if fish exist", () => {
    expect(getActualScore(10, 3)).toBe(5);
  });

  it("should return 3 for places beyond sixth if no fish exist", () => {
    expect(getActualScore(10, 0)).toBe(3);
  });

  it("should return 0 for negative indices", () => {
    expect(getActualScore(-1, 5)).toBe(0);
  });
});
