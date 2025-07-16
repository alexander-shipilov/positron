import { describe, expect, it } from "@jest/globals";

import { isIterable } from "./is-iterable";

describe("isIterable(value)", () => {
  it("`isIterable`should return `true` if value looks like an `Iterable` object", () => {
    expect(isIterable({ [Symbol.iterator]: () => null })).toBe(true);
  });
});
