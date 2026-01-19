import { describe, expect, it } from "@jest/globals";

import { isPropertyOwner } from "./is-property-owner";

describe(`${isPropertyOwner.name}(target, key)`, () => {
  it("should return `true` if `key` is a property of `target`", () => {
    expect(isPropertyOwner({ foo: 1 }, "foo")).toBe(true);
    expect(isPropertyOwner({}, "toString")).toBe(true);
    expect(isPropertyOwner("", "toString")).toBe(true);
  });

  it("should return `false` if `key` is not a property of `target`", () => {
    expect(isPropertyOwner({}, "foo")).toBe(false);
    expect(isPropertyOwner("", "foo")).toBe(false);
  });

  it("should return `false` if the `target` is `null` or `undefined`", () => {
    expect(isPropertyOwner(null, "foo")).toBe(false);
    expect(isPropertyOwner(undefined, "foo")).toBe(false);
  });
});
