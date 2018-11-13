import { isEqualArrays } from "../isEqualArrays";

describe("isEqualArrays", () => {
  it("compares two array-likes", () => {
    expect(isEqualArrays([], [])).toBeTruthy();
    expect(isEqualArrays([1, 2, 3], [1, 2, 3])).toBeTruthy();
    expect(isEqualArrays({ length: 1, 0: 1 }, { length: 1, 0: 1 })).toBeTruthy();
    expect(isEqualArrays({ length: 1, 0: 1 }, [1])).toBeTruthy();
    expect(isEqualArrays({ length: 2 }, new Array(2))).toBeTruthy();
  });

  it("should return false if passed values has different length", () => {
    expect(isEqualArrays({ length: 2, 0: 1 }, [1])).toBeFalsy();
  });

  it("should use strict compare", () => {
    expect(isEqualArrays([1], ["1"])).toBeFalsy();
  });

  it("NaN == NaN", () => {
    expect(isEqualArrays([+"a"], [+"b"])).toBeTruthy();
  });

  it("should throw an error if the passed value is not an array-like", () => {
    expect(() => isEqualArrays({}, [])).toThrow();
    expect(() => isEqualArrays({ length: 0 }, [])).not.toThrow();
  });
});
