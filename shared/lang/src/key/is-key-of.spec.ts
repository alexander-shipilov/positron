import { describe, expect, it } from "@jest/globals";

import { isKeyOf } from "./is-key-of";

describe(`function ${isKeyOf.name}(key, value)`, () => {
  it("should return `true` if `key` is a property of `value`", () => {
    expect(isKeyOf("foo", { foo: 1 })).toBe(true);
    expect(isKeyOf("toString", {})).toBe(true);
    expect(isKeyOf("toString", "")).toBe(true);
    expect(isKeyOf("at", "")).toBe(true);
  });

  it("should return `false` if `key` is not a property of `value`", () => {
    expect(isKeyOf("foo", {})).toBe(false);
    expect(isKeyOf("foo", "")).toBe(false);
  });

  it("should return `false` if the `value` is `null` or `undefined`", () => {
    expect(isKeyOf("foo", null)).toBe(false);
    expect(isKeyOf("foo", undefined)).toBe(false);
  });
});
