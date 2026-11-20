import { describe, expect, it } from "@jest/globals";

import type { ErrorParams } from "../error/error-params";
import { neverLikeTests } from "../-tests/never-like-tests";

import { AssertException } from "./assert-exception";
import {
  ASSERT_NON_OPTIONAL_MESSAGE,
  assertNonOptional,
} from "./assert-non-optional";

describe(`function ${assertNonOptional.name}(value, ...errorParams)`, () => {
  it("should return `value` if `value` is not equal to `undefined`", () => {
    expect(assertNonOptional(1)).toBe(1);
    expect(assertNonOptional(null)).toBe(null);
  });

  it("should throw if `value` is equal to `undefined`", () => {
    expect(() => assertNonOptional(undefined)).toThrow();
  });

  neverLikeTests(
    (...errorParams: ErrorParams) => {
      assertNonOptional(undefined, ...errorParams);
    },
    ASSERT_NON_OPTIONAL_MESSAGE,
    AssertException,
  );
});
