import { describe, expect, it } from "@jest/globals";

import { isNumberUnit } from "./is-number-unit";

describe("function isNumberUnit(maybeNumber)", () => {
  it("should return `true` if `maybeNumber` matches `number` in any case", () => {
    expect(isNumberUnit("number")).toBe(true);
    expect(isNumberUnit("NUMBER")).toBe(true);
    expect(isNumberUnit("Number")).toBe(true);
  });

  it("should return `false` if `maybeNumber` is not `number`", () => {
    expect(isNumberUnit("")).toBe(false);
    expect(isNumberUnit("px")).toBe(false);
    expect(isNumberUnit("percent")).toBe(false);
  });
});
