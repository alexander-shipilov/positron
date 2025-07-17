import { describe, expect, it } from "@jest/globals";

import { isClassNameProps } from "./is-class-name-props";

describe(`isClassNameProps(maybeClassNameProps)`, () => {
  it("should return a `true` if `maybeClassNameProps` is an object with valid `className` property", () => {
    expect(isClassNameProps({ className: "foo" })).toBe(true);
    expect(isClassNameProps({ className: "foo bar" })).toBe(true);
    expect(isClassNameProps({ className: "foo bar", prop: true })).toBe(true);
  });

  it("should return `false` if `className` property is omitted", () => {
    expect(isClassNameProps({})).toBe(false);
    expect(isClassNameProps({ prop: 1 })).toBe(false);
  });

  it("should return `false` if value of `className` property is not a string", () => {
    expect(isClassNameProps({ className: 1 })).toBe(false);
    expect(isClassNameProps({ className: null })).toBe(false);
  });

  it("should return `false` if value of `className` property has no non-whitespace symbols", () => {
    expect(isClassNameProps({ className: "" })).toBe(false);
    expect(isClassNameProps({ className: " " })).toBe(false);
  });
});
