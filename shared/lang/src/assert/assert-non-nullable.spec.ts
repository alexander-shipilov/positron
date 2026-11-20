import { describe, expect, it } from "@jest/globals";

import type { ErrorParams } from "../error/error-params";
import { neverLikeTests } from "../-tests/never-like-tests";

import { AssertException } from "./assert-exception";
import {
  ASSERT_NON_NULLABLE_MESSAGE,
  assertNonNullable,
} from "./assert-non-nullable";

describe(`function ${assertNonNullable.name}(value, ...errorParams)`, () => {
  it("should return `value` if `value` is not equal to `null` or `undefined`", () => {
    expect(assertNonNullable(1)).toBe(1);
    expect(assertNonNullable("")).toBe("");
  });

  it("should throw if `value` is equal to `null` or `undefined`", () => {
    expect(() => assertNonNullable(null)).toThrow();
    expect(() => assertNonNullable(undefined)).toThrow();
  });

  neverLikeTests(
    (...errorParams: ErrorParams) => {
      assertNonNullable(null, ...errorParams);
    },
    ASSERT_NON_NULLABLE_MESSAGE,
    AssertException,
  );
});
