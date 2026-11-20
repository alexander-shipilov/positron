import { describe, expect, it, jest } from "@jest/globals";

import type { TypeGuard } from "../type/type-guard";

import { isArrayOf } from "./is-array-of";

import Mock = jest.Mock;

describe(`function ${isArrayOf.name}(value)`, () => {
  const isType = jest.fn() as unknown as Mock<TypeGuard<unknown, string>> &
    TypeGuard<unknown, string>;

  it("should return `true` if `value` is empty array", () => {
    expect(isArrayOf([], isType.mockReturnValue(true))).toBe(true);
    expect(isArrayOf([], isType.mockReturnValue(false))).toBe(true);
  });

  it("should return `true` if `value` is non-empty array and all elements \
      contained in `value` satisfy the provided type-guard function", () => {
    expect(isArrayOf([1, 2, 3], isType.mockReturnValue(true))).toBe(true);
  });

  it("should return `false` if at least one element contained in `value` does \
      not satisfy the provided type-guard function", () => {
    expect(isArrayOf([1], isType.mockReturnValue(false))).toBe(false);
  });
});
