import { describe, expect, it } from "@jest/globals";

import { isPrefixedKey } from "./is-prefixed-key";

describe(`isPrefixedKey(prefix, key)`, () => {
  it("should return `true` if the `key` is prefixed by `prefix`", () => {
    expect(isPrefixedKey("foo", "foo-")).toBe(true);
    expect(isPrefixedKey("foo", "foo-bar")).toBe(true);
    expect(isPrefixedKey("foo-bar", "foo-bar-ted")).toBe(true);
  });

  it("should return `false` if the `key` is not prefixed by `prefix`", () => {
    expect(isPrefixedKey("foo", "foo")).toBe(false);
    expect(isPrefixedKey("foo", "bar")).toBe(false);
    expect(isPrefixedKey("baz", "foo-bar")).toBe(false);
  });

  it("should return `false` if the `key` is `number` or `symbol`", () => {
    expect(isPrefixedKey("foo", 1)).toBe(false);
    expect(isPrefixedKey("bar", Symbol(""))).toBe(false);
  });
});
