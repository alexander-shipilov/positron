import { describe, expect, it } from "@jest/globals";

import { hasOwnProperty } from "./has-own-property";

describe(`${hasOwnProperty.name}(target, key)`, () => {
  it("should return `true` if `key` is an own property of `target`", () => {
    expect(hasOwnProperty({ foo: 1 }, "foo")).toBe(true);
  });

  it("should return `false` if `key` is not an own property of `target` or does not exist", () => {
    expect(hasOwnProperty({}, "foo")).toBe(false);
    expect(hasOwnProperty({}, "toString")).toBe(false);
  });

  it("should return `false` if the `target` is `null` or `undefined`", () => {
    expect(hasOwnProperty(null, "foo")).toBe(false);
    expect(hasOwnProperty(undefined, "foo")).toBe(false);
  });
});
