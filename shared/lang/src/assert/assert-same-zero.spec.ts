import { describe, expect, it } from "@jest/globals";

import type { ErrorParams } from "../error/error-params";
import { sameZeroFixtures } from "../-fixtures/same-zero.fixtures";
import { neverLikeTests } from "../-tests/never-like-tests";

import { AssertException } from "./assert-exception";
import { ASSERT_SAME_ZERO_MESSAGE, assertSameZero } from "./assert-same-zero";

describe(`function ${assertSameZero.name}(value, expected, ...errorParams)`, () => {
  it("should return `value` if `value` is equal (`same-value-zero`) as `expected`", () => {
    sameZeroFixtures.forEach(([value, expected]) => {
      expect(assertSameZero(value, expected)).toBe(value);
      expect(assertSameZero(expected, value)).toBe(expected);
    });
  });

  it("should throw if `value` is not equal (`same-value-zero`) as `expected`", () => {
    for (let i = 0; i < sameZeroFixtures.length; i++) {
      const [value] = sameZeroFixtures[i];

      for (let j = i + 1; j < sameZeroFixtures.length; j++) {
        const [expected] = sameZeroFixtures[j];

        expect(() => assertSameZero(value, expected)).toThrow();
        expect(() => assertSameZero(expected, value)).toThrow();
      }
    }
  });

  neverLikeTests(
    (...neverParms: ErrorParams) => assertSameZero(true, false, ...neverParms),
    ASSERT_SAME_ZERO_MESSAGE,
    AssertException,
  );
});
