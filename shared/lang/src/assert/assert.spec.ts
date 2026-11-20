import { describe, expect, it } from "@jest/globals";

import type { ErrorParams } from "../error/error-params";
import { neverLikeTests } from "../-tests/never-like-tests";

import { assert, ASSERT_MESSAGE } from "./assert";
import { AssertException } from "./assert-exception";

describe(`function ${assert.name}(value, predicate, ...errorParams)`, () => {
  it("should return `value` if `value` satisfies `predicate`", () => {
    const value: readonly unknown[] = [];

    expect(assert(value, ({ length }) => length === 0)).toBe(value);
  });

  it("should throw if `value` does not satisfy `predicate`", () => {
    expect(() => assert([], ({ length }) => length !== 0)).toThrow();
  });

  neverLikeTests(
    (...errorParams: ErrorParams) => assert(false, () => false, ...errorParams),
    ASSERT_MESSAGE,
    AssertException,
  );
});
