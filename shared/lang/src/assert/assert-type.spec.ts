import { describe, expect, it, jest } from "@jest/globals";

import type { ErrorParams } from "../error/error-params";
import type { TypeGuard } from "../type/type-guard";
import { neverLikeTests } from "../-tests/never-like-tests";

import { AssertException } from "./assert-exception";
import { ASSERT_TYPE_MESSAGE, assertType } from "./assert-type";

import Mock = jest.Mock;

describe(`function ${assertType.name}(value, isType, ...errorParams)`, () => {
  const isType = jest.fn() as unknown as Mock<TypeGuard<unknown, string>> &
    TypeGuard<unknown, string>;

  it("should return `value` if `value` if `isType(value)` returns `true`", () => {
    expect(assertType("foo", isType.mockReturnValue(true))).toBe("foo");
    expect(isType).toHaveBeenCalled();
    expect(isType).toHaveBeenLastCalledWith("foo");
  });

  it("should throw if `value` is not equal to `type`", () => {
    expect(() => assertType(null, isType.mockReturnValue(false))).toThrow();
    expect(isType).toHaveBeenLastCalledWith(null);
  });

  neverLikeTests(
    (...errorParams: ErrorParams) =>
      assertType(null, isType.mockReturnValue(false), ...errorParams),
    ASSERT_TYPE_MESSAGE,
    AssertException,
  );
});
