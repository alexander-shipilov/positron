import { describe, expect, it } from "@jest/globals";

import { isPropertyOf } from "./is-property-of";

describe(`${isPropertyOf.name}(target, key)`, () => {
  it("should return `true` if `key` is a property of `target`", () => {
    expect(isPropertyOf("foo", { foo: 1 })).toBe(true);
    expect(isPropertyOf("toString", {})).toBe(true);
    expect(isPropertyOf("toString", "")).toBe(true);
    expect(isPropertyOf("at", "")).toBe(true);
  });

  it("should return `false` if `key` is not a property of `target`", () => {
    expect(isPropertyOf("foo", {})).toBe(false);
    expect(isPropertyOf("foo", "")).toBe(false);
  });

  it("should return `false` if the `target` is `null` or `undefined`", () => {
    expect(isPropertyOf("foo", null)).toBe(false);
    expect(isPropertyOf("foo", undefined)).toBe(false);
  });
});
