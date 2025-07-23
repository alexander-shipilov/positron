import { describe, expect, it } from "@jest/globals";

import { isClassName } from "./is-class-name";

describe(`isClassName(maybeClassName)`, () => {
  it("should return a `true` if `maybeClassName` is non-empty string", () => {
    expect(isClassName("foo")).toBe(true);
  });

  it("should return a `false` if `maybeClassName` is not a string", () => {
    expect(isClassName(null)).toBe(false);
    expect(isClassName(1)).toBe(false);
  });

  it("should return a `false` if `maybeClassName` has no non-whitespace symbols", () => {
    expect(isClassName("")).toBe(false);
    expect(isClassName(" ")).toBe(false);
    expect(isClassName(" \t\n")).toBe(false);
  });
});
