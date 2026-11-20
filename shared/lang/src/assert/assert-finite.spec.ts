import { describe, expect, it } from "@jest/globals";

import type { ErrorParams } from "../error/error-params";
import { neverLikeTests } from "../-tests/never-like-tests";

import { AssertException } from "./assert-exception";
import { ASSERT_FINITE_MESSAGE, assertFinite } from "./assert-finite";

describe(`function ${assertFinite.name}(value, ...errorParams)`, () => {
  it("should return `value` if `value` is a finite number", () => {
    expect(assertFinite(0)).toBe(0);
    expect(assertFinite(Number.MAX_VALUE)).toBe(Number.MAX_VALUE);
    expect(assertFinite(Number.MIN_VALUE)).toBe(Number.MIN_VALUE);
  });

  it("should throw if `value` is not a finite number", () => {
    expect(() => assertFinite(NaN)).toThrow();
    expect(() => assertFinite(Infinity)).toThrow();
    expect(() => assertFinite(-Infinity)).toThrow();
  });

  neverLikeTests(
    (...errorParams: ErrorParams) => assertFinite(NaN, ...errorParams),
    ASSERT_FINITE_MESSAGE,
    AssertException,
  );
});
