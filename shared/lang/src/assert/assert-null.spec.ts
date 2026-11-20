import { describe, expect, it } from "@jest/globals";

import type { ErrorParams } from "../error/error-params";
import { neverLikeTests } from "../-tests/never-like-tests";

import { AssertException } from "./assert-exception";
import { ASSERT_NULL_MESSAGE, assertNull } from "./assert-null";

describe(`function ${assertNull.name}(value, ...errorParams)`, () => {
  it("should return `value` if `value` is equal to `null`", () => {
    expect(assertNull(null)).toBe(null);
  });

  it("should throw if `value` is not equal to `null`", () => {
    expect(() => assertNull(undefined)).toThrow();
  });

  neverLikeTests(
    (...errorParams: ErrorParams) => assertNull(undefined, ...errorParams),
    ASSERT_NULL_MESSAGE,
    AssertException,
  );
});
