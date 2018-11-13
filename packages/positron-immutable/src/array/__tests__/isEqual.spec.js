import { isEqual } from "../isEqual";

describe("isEqual", () => {
  it("compares two array-likes", () => {
    expect(isEqual([], [])).toBeTruthy();
    expect(isEqual([1, 2, 3], [1, 2, 3])).toBeTruthy();
    expect(isEqual({ length: 1, 0: 1 }, { length: 1, 0: 1 })).toBeTruthy();
    expect(isEqual({ length: 1, 0: 1 }, [1])).toBeTruthy();
    expect(isEqual({ length: 2 }, new Array(2))).toBeTruthy();
  });

  it("should return false if passed values has different length", () => {
    expect(isEqual({ length: 2, 0: 1 }, [1])).toBeFalsy();
  });

  it("should use strict compare", () => {
    expect(isEqual([1], ["1"])).toBeFalsy();
  });

  it("NaN == NaN", () => {
    expect(isEqual([+"a"], [+"b"])).toBeTruthy();
  });

  it("should throw an error if the passed value is not an array-like", () => {
    expect(() => isEqual({}, [])).toThrow();
    expect(() => isEqual({ length: 0 }, [])).not.toThrow();
  });
});
