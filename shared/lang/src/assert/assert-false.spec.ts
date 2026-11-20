import { describe, expect, it } from "@jest/globals";

import type { ErrorParams } from "../error/error-params";
import { neverLikeTests } from "../-tests/never-like-tests";

import { AssertException } from "./assert-exception";
import { ASSERT_FALSE_MESSAGE, assertFalse } from "./assert-false";

describe(`function ${assertFalse.name}(value, ...errorParams)`, () => {
  it("should return `value` if `value` is equal to `false`", () => {
    expect(assertFalse(false)).toBe(false);
  });

  it("should throw if `value` is not equal to `false`", () => {
    expect(() => assertFalse(true)).toThrow();
  });

  neverLikeTests(
    (...errorParams: ErrorParams) => assertFalse(true, ...errorParams),
    ASSERT_FALSE_MESSAGE,
    AssertException,
  );
});
