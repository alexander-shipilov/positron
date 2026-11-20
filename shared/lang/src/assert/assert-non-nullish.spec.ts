import { describe, expect, it } from "@jest/globals";

import type { ErrorParams } from "../error/error-params";
import { neverLikeTests } from "../-tests/never-like-tests";

import { AssertException } from "./assert-exception";
import {
  ASSERT_NON_NULLISH_MESSAGE,
  assertNonNullish,
} from "./assert-non-nullish";

describe(`function ${assertNonNullish.name}(value, ...errorParams)`, () => {
  it("should return `value` if `value` is not equal to `null`", () => {
    expect(assertNonNullish(1)).toBe(1);
    // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
    expect(assertNonNullish(undefined)).toBe(undefined);
  });

  it("should throw if `value` is equal to `null`", () => {
    expect(() => assertNonNullish(null)).toThrow();
  });

  neverLikeTests(
    (...errorParams: ErrorParams) => {
      assertNonNullish(null, ...errorParams);
    },
    ASSERT_NON_NULLISH_MESSAGE,
    AssertException,
  );
});
