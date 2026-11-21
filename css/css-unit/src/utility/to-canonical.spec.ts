import { describe, expect, it } from "@jest/globals";

import { CssUnit } from "../unit/css-unit";

import { toCanonical } from "./to-canonical";

describe("function toCanonical", () => {
  it("should convert compatible units to their canonical unit regardless of case", () => {
    expect(toCanonical(1, CssUnit.in)).toEqual([96, CssUnit.px]);
    expect(toCanonical(2, "IN")).toEqual([192, CssUnit.px]);
    expect(toCanonical(0.5, CssUnit.turn)).toEqual([180, CssUnit.deg]);
    expect(toCanonical(2, "kHz")).toEqual([2000, CssUnit.hz]);
    expect(toCanonical(500, CssUnit.ms)).toEqual([0.5, CssUnit.s]);
    expect(toCanonical(96, CssUnit.dpi)).toEqual([1, CssUnit.dppx]);
  });

  it("should throw `TypeError` if `unit` is not a compatible unit", () => {
    expect(() => toCanonical(10, CssUnit.em)).toThrow(TypeError);
    expect(() => toCanonical(10, "unknown")).toThrow(TypeError);
  });
});
