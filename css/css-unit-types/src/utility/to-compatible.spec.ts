import { describe, expect, it } from "@jest/globals";

import { CssUnit } from "../unit/css-unit";

import { toCompatible } from "./to-compatible";

describe("function toCompatible", () => {
  it("should convert canonical values into the specified compatible unit \
      regardless of case", () => {
    expect(toCompatible(96, CssUnit.in)).toEqual([1, CssUnit.in]);
    expect(toCompatible(192, "IN")).toEqual([2, CssUnit.in]);
    expect(toCompatible(180, CssUnit.turn)).toEqual([0.5, CssUnit.turn]);
    expect(toCompatible(2000, "kHz")).toEqual([2, CssUnit.khz]);
    expect(toCompatible(0.5, CssUnit.ms)).toEqual([500, CssUnit.ms]);
    expect(toCompatible(1, CssUnit.dpi)).toEqual([96, CssUnit.dpi]);
  });

  it("should throw `TypeError` if `unit` is not a compatible unit", () => {
    expect(() => toCompatible(10, CssUnit.em)).toThrow(TypeError);
    expect(() => toCompatible(10, "unknown")).toThrow(TypeError);
  });
});
