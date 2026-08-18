import { describe, expect, it } from "@jest/globals";

import { split } from "./split";

describe(`${split.name}(array, index)`, () => {
  it("should split the passed `array` to two arrays", () => {
    expect(split([], 0)).toEqual([[], []]);
    expect(split([0, 1], 0)).toEqual([[], [0, 1]]);
    expect(split([0, 1], 1)).toEqual([[0], [1]]);
    expect(split([0, 1], 2)).toEqual([[0, 1], []]);
  });
});
