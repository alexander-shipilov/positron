import { describe, expect, it } from "@jest/globals";

import { isPercentUnit } from "./is-percent-unit";

describe("function isPercentUnit(maybePercent)", () => {
  it("should return `true` if `maybePercent` is `%` or `percent` in any \
      case", () => {
    expect(isPercentUnit("%")).toBe(true);
    expect(isPercentUnit("percent")).toBe(true);
    expect(isPercentUnit("PERCENT")).toBe(true);
    expect(isPercentUnit("Percent")).toBe(true);
  });

  it("should return `false` if `maybePercent` is not a percentage unit", () => {
    expect(isPercentUnit("")).toBe(false);
    expect(isPercentUnit("number")).toBe(false);
    expect(isPercentUnit("px")).toBe(false);
  });
});
