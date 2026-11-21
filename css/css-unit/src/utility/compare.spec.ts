import { describe, expect, it } from "@jest/globals";

import { CssUnit } from "../unit/css-unit";

import { compare } from "./compare";

describe("function compare", () => {
  it("should return `0` if dimensions with compatible units are equal", () => {
    expect(compare([96, CssUnit.px], [1, CssUnit.in])).toBe(0);
    expect(compare([360, CssUnit.deg], [1, CssUnit.turn])).toBe(0);
    expect(compare([1000, CssUnit.ms], [1, CssUnit.s])).toBe(0);
  });

  it("should return a negative number if `value1` is less than `value2`", () => {
    expect(compare([50, CssUnit.px], [1, CssUnit.in])).toBeLessThan(0);
    expect(compare([180, CssUnit.deg], [1, CssUnit.turn])).toBeLessThan(0);
  });

  it("should return a positive number if `value1` is greater than `value2`", () => {
    expect(compare([150, CssUnit.px], [1, CssUnit.in])).toBeGreaterThan(0);
    expect(compare([2, CssUnit.khz], [500, CssUnit.hz])).toBeGreaterThan(0);
  });

  it("should return `NaN` if dimensions belong to different canonical \
      categories", () => {
    expect(compare([10, CssUnit.px], [10, CssUnit.deg])).toBeNaN();
    expect(compare([1, CssUnit.s], [1, CssUnit.hz])).toBeNaN();
  });

  it("should return `NaN` if any dimension uses a relative or incompatible \
      unit", () => {
    expect(compare([10, CssUnit.em], [10, CssUnit.px])).toBeNaN();
    expect(compare([10, CssUnit.px], [10, CssUnit.em])).toBeNaN();
    expect(compare([10, CssUnit.vw], [10, CssUnit.vh])).toBeNaN();
  });
});
