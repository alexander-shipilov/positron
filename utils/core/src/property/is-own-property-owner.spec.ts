import { describe, expect, it } from "@jest/globals";

import { isOwnPropertyOwner } from "./is-own-property-owner";

describe(`${isOwnPropertyOwner.name}(target, key)`, () => {
  it("should return `true` if `key` is an own property of `target`", () => {
    expect(isOwnPropertyOwner({ foo: 1 }, "foo")).toBe(true);
    expect(isOwnPropertyOwner([1], 0)).toBe(true);
  });

  it("should return `false` if `key` is not an own property of `target` or does not exist", () => {
    expect(isOwnPropertyOwner({}, "foo")).toBe(false);
    expect(isOwnPropertyOwner({}, "toString")).toBe(false);
    expect(isOwnPropertyOwner("", "toString")).toBe(false);
  });

  it("should return `false` if the `target` is `null` or `undefined`", () => {
    expect(isOwnPropertyOwner(null, "foo")).toBe(false);
    expect(isOwnPropertyOwner(undefined, "foo")).toBe(false);
  });
});
