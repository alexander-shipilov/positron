import { describe, expect, it } from "@jest/globals";

import { toBigRational } from "./toBigRational";

describe("BigRational(num, den)", () => {
  it("should return a `bigrational` if `value` is a safe numeric", () => {
    expect(toBigRational(1)).toEqual([1n, 1n]);
    expect(toBigRational("1")).toEqual([1n, 1n]);
    expect(toBigRational(1n)).toEqual([1n, 1n]);

    expect(toBigRational(1, 2n)).toEqual([1n, 2n]);
    expect(toBigRational("1", 2)).toEqual([1n, 2n]);
    expect(toBigRational(1n, "2")).toEqual([1n, 2n]);
  });

  it("should reduce returned fraction", () => {
    expect(toBigRational(2n, 6n)).toEqual([1n, 3n]);
    expect(toBigRational(6n, 4n)).toEqual([3n, 2n]);
    expect(toBigRational(6n, 8n)).toEqual([3n, 4n]);
  });

  it("should throw a `SyntaxError` if the passed `value` cannot be converted to an fraction", () => {
    expect(() => toBigRational("a")).toThrow(SyntaxError);
    expect(() => toBigRational(1, "a")).toThrow(SyntaxError);
  });
});
