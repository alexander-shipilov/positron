import { describe, expect, it } from "@jest/globals";

import { isOwnPropertyOf } from "./is-own-property-of";

describe(`${isOwnPropertyOf.name}(target, key)`, () => {
  it("should return `true` if `key` is an own property of `target`", () => {
    expect(isOwnPropertyOf({ foo: 1 }, "foo")).toBe(true);
  });

  it("should return `false` if `key` is not an own property of `target` or does not exist", () => {
    expect(isOwnPropertyOf({}, "foo")).toBe(false);
    expect(isOwnPropertyOf({}, "toString")).toBe(false);
  });

  it("should return `false` if the `target` is `null` or `undefined`", () => {
    expect(isOwnPropertyOf(null, "foo")).toBe(false);
    expect(isOwnPropertyOf(undefined, "foo")).toBe(false);
  });
});
