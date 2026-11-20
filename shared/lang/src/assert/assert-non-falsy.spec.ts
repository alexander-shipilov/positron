import { describe, expect, it } from "@jest/globals";

import type { ErrorParams } from "../error/error-params";
import { falsyFixtures, nonFalsyFixtures } from "../-fixtures/falsy.fixtures";
import { neverLikeTests } from "../-tests/never-like-tests";

import { AssertException } from "./assert-exception";
import { ASSERT_NON_FALSY_MESSAGE, assertNonFalsy } from "./assert-non-falsy";

describe(`function ${assertNonFalsy.name}(value, ...errorParams)`, () => {
  it("should return `value` if `value` is a non-falsy value", () => {
    nonFalsyFixtures.forEach((value) => {
      expect(assertNonFalsy(value)).toBe(value);
    });
  });

  it("should throw if `value` is a falsy value", () => {
    falsyFixtures.forEach((value) => {
      expect(() => assertNonFalsy(value)).toThrow();
    });
  });

  neverLikeTests(
    (...errorParams: ErrorParams) => assertNonFalsy(false, ...errorParams),
    ASSERT_NON_FALSY_MESSAGE,
    AssertException,
  );
});
