import { ceil } from "../ceil";

describe("ceil", () => {
  it("return smallest number less than or equal to the passed value rounded to a given tolerance", () => {
    expect(ceil(3.1)).toBe(4);
    expect(ceil(3.1, 1)).toBe(4);
    expect(ceil(3.1, 2)).toBe(4);
    expect(ceil(3.4, 0.5)).toBe(3.5);
  });

  it("should return NaN if the passed value or tolerance is not a number", () => {
    expect(ceil("a", 1)).toEqual(NaN);
    expect(ceil(1, "a")).toEqual(NaN);
  });
});
