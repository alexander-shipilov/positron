import { describe, expect, it } from "@jest/globals";

import type { ErrorParams } from "../error/error-params";
import { neverLikeTests } from "../-tests/never-like-tests";

import { AssertException } from "./assert-exception";
import { ASSERT_UNDEFINED_MESSAGE, assertUndefined } from "./assert-undefined";

describe(`function ${assertUndefined.name}(value, ...errorParams)`, () => {
  it("should return `value` if `value` is equal to `undefined`", () => {
    // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
    expect(assertUndefined(undefined)).toBe(undefined);
  });

  it("should throw if `value` is not equal to `undefined`", () => {
    expect(() => {
      assertUndefined(null);
    }).toThrow();
  });

  neverLikeTests(
    (...errorParams: ErrorParams) => {
      assertUndefined(true, ...errorParams);
    },
    ASSERT_UNDEFINED_MESSAGE,
    AssertException,
  );
});
