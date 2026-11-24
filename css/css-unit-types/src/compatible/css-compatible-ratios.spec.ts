import { describe, expect, it } from "@jest/globals";

import { CssCanonicalUnits } from "../canonical/css-canonical-units";
import { CssUnit } from "../unit/css-unit";

import { CssCompatibleRatios } from "./css-compatible-ratios";
import { CssCompatibleUnits } from "./css-compatible-units";

describe("const CssCompatibleRatios", () => {
  it("should define a positive ratio and canonical unit for every compatible \
      unit", () => {
    const keys = Object.keys(CssCompatibleRatios);

    expect(keys.sort()).toEqual([...CssCompatibleUnits].sort());

    for (const unit of CssCompatibleUnits) {
      const [ratio, canonical] = CssCompatibleRatios[unit];

      expect(ratio).toBeGreaterThan(0);
      expect(CssCanonicalUnits.has(canonical)).toBe(true);
    }
  });

  it("should map every canonical unit to ratio `1` with itself", () => {
    for (const canonical of CssCanonicalUnits) {
      expect(CssCompatibleRatios[canonical]).toEqual([1, canonical]);
    }
  });

  it("should define accurate conversion factors", () => {
    expect(CssCompatibleRatios[CssUnit.in]).toEqual([96, CssUnit.px]);
    expect(CssCompatibleRatios[CssUnit.turn]).toEqual([360, CssUnit.deg]);
    expect(CssCompatibleRatios[CssUnit.khz]).toEqual([1000, CssUnit.hz]);
    expect(CssCompatibleRatios[CssUnit.ms]).toEqual([0.001, CssUnit.s]);
  });
});
