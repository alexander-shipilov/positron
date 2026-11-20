import { describe, expect, it } from "@jest/globals";

import type { ErrorParams } from "../error/error-params";
import { neverLikeTests } from "../-tests/never-like-tests";

import { AssertException } from "./assert-exception";
import { ASSERT_TRUE_MESSAGE, assertTrue } from "./assert-true";

describe(`function ${assertTrue.name}(value, ...errorParams)`, () => {
  it("should return `value` if `value` is equal to `true`", () => {
    expect(assertTrue(true)).toBe(true);
  });

  it("should throw if `value` is not equal to `true`", () => {
    expect(() => assertTrue(false)).toThrow();
  });

  neverLikeTests(
    (...errorParams: ErrorParams) => assertTrue(false, ...errorParams),
    ASSERT_TRUE_MESSAGE,
    AssertException,
  );
});
