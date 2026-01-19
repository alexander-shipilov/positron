import { describe, expect, it } from "@jest/globals";

import { splittings } from "./splittings";

describe(`${splittings.name}(array)`, () => {
  it("should return an iterator of possible splittings into non-empty parts", () => {
    expect([...splittings([])]).toEqual([]);
    expect([...splittings([0])]).toEqual([]);
    expect([...splittings([0, 1])]).toEqual([[[0], [1]]]);
    expect([...splittings([0, 1, 2])]).toEqual([
      [[0], [1, 2]],
      [[0, 1], [2]],
    ]);
  });
});
