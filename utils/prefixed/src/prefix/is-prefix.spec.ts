import { describe, expect, it } from "@jest/globals";

import { isPrefix } from "./is-prefix";

describe(`isPrefix(maybePrefix)`, () => {
  it("should return `true` if the `maybePrefix` is a `Prefix`", () => {
    expect(isPrefix("foo-bar")).toBe(true);
    expect(isPrefix("foo-bar-ted")).toBe(true);
  });

  it("should return `false` if the `maybePrefix` is not a `Prefix`", () => {
    expect(isPrefix(1)).toBe(false);
    expect(isPrefix(Symbol())).toBe(false);
  });
});
