import { describe, expect, it } from "@jest/globals";

import { CssUnit } from "@positron/css-unit";

import { NUMBER_UNIT } from "./number-unit";
import { toNumericUnit } from "./to-numeric-unit";

describe("function toNumericUnit(unitLike)", () => {
  it("should convert `%` and `percent` to `percent`", () => {
    expect(toNumericUnit("%")).toBe("percent");
    expect(toNumericUnit("percent")).toBe("percent");
    expect(toNumericUnit("PERCENT")).toBe("percent");
  });

  it("should convert `number` and CSS units regardless of case", () => {
    expect(toNumericUnit("NUMBER")).toBe(NUMBER_UNIT);
    expect(toNumericUnit("PX")).toBe(CssUnit.px);
    expect(toNumericUnit("kHz")).toBe(CssUnit.khz);
  });

  it("should return `null` if `unitLike` is not a valid numeric unit", () => {
    expect(toNumericUnit("")).toBeNull();
    expect(toNumericUnit("unknown")).toBeNull();
  });
});
