import { describe, expect, it } from "@jest/globals";

import { isBigRational } from "./isBigRational";

describe("isBigRational(value)", () => {
  it("should return `true` if the `value` is a pair of `bigint`s", () => {
    expect(isBigRational([1n, 1n])).toBe(true);

    expect(isBigRational([1, 1])).toBe(false);
    expect(isBigRational([])).toBe(false);
    expect(isBigRational(1)).toBe(false);
  });
});
