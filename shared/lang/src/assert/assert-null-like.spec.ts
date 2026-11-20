import { describe, expect, it } from "@jest/globals";

import type { ErrorParams } from "../error/error-params";
import { neverLikeTests } from "../-tests/never-like-tests";

import { AssertException } from "./assert-exception";
import { ASSERT_NULL_LIKE_MESSAGE, assertNullLike } from "./assert-null-like";

describe(`function ${assertNullLike.name}(value, ...errorParams)`, () => {
  it("should return `value` if `value` is null-like", () => {
    expect(assertNullLike(null)).toBe(null);
    expect(assertNullLike(undefined)).toBe(undefined);
  });

  it("should throw if `value` is not null-like", () => {
    expect(() => assertNullLike(1)).toThrow();
  });

  neverLikeTests(
    (...errorParams: ErrorParams) => assertNullLike(1, ...errorParams),
    ASSERT_NULL_LIKE_MESSAGE,
    AssertException,
  );
});
