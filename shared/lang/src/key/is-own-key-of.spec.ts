import { describe, expect, it } from "@jest/globals";

import { isOwnKeyOf } from "./is-own-key-of";

describe(`function ${isOwnKeyOf.name}(key, value)`, () => {
  it("should return `true` if `key` is an own property of `value`", () => {
    expect(isOwnKeyOf("foo", { foo: 1 })).toBe(true);
    expect(isOwnKeyOf(0, [1])).toBe(true);
  });

  it("should return `false` if `key` is not an own property of `value` or does not exist", () => {
    expect(isOwnKeyOf("foo", {})).toBe(false);
    expect(isOwnKeyOf("toString", {})).toBe(false);
    expect(isOwnKeyOf("at", "")).toBe(false);
  });

  it("should return `false` if the `value` is `null` or `undefined`", () => {
    expect(isOwnKeyOf("foo", null)).toBe(false);
    expect(isOwnKeyOf("foo", undefined)).toBe(false);
  });
});
