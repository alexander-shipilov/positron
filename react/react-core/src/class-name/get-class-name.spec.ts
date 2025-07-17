import { describe, expect, it } from "@jest/globals";

import { getClassName } from "./get-class-name";

describe(`getClassName(props)`, () => {
  it("should return a value of `props.className`", () => {
    expect(getClassName({ className: "foo" })).toBe("foo");
    expect(getClassName({ className: "foo bar" })).toBe("foo bar");
  });

  it("should return `null` if `props.className` is omitted", () => {
    expect(getClassName({})).toBe(null);
  });

  it("should return `null` if `props.className` is not a string", () => {
    expect(getClassName({ className: 1 })).toBe(null);
    expect(getClassName({ className: null })).toBe(null);
  });

  it("should return `null` if value of `props.className` has no non-whitespace symbols", () => {
    expect(getClassName({ className: "" })).toBe(null);
    expect(getClassName({ className: " " })).toBe(null);
  });
});
