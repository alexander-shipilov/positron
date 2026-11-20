import { describe, expect, it } from "@jest/globals";

import type { ErrorParams } from "../error/error-params";
import { sameFixtures } from "../-fixtures/same.fixtures";
import { neverLikeTests } from "../-tests/never-like-tests";

import { AssertException } from "./assert-exception";
import { ASSERT_SAME_MESSAGE, assertSame } from "./assert-same";

describe(`function ${assertSame.name}(value, expected, ...errorParams)`, () => {
  it("should return `value` if `value` is equal (`same-value`) as `expected`", () => {
    sameFixtures.forEach(([value, expected]) => {
      expect(assertSame(value, expected)).toBe(value);
      expect(assertSame(expected, value)).toBe(expected);
    });
  });

  it("should throw if `value` is not equal (`same-value`) as `expected`", () => {
    for (let i = 0; i < sameFixtures.length; i++) {
      const [value] = sameFixtures[i];

      for (let j = i + 1; j < sameFixtures.length; j++) {
        const [expected] = sameFixtures[j];

        expect(() => assertSame(value, expected)).toThrow();
        expect(() => assertSame(expected, value)).toThrow();
      }
    }
  });

  neverLikeTests(
    (...errorParams: ErrorParams) => assertSame(true, false, ...errorParams),
    ASSERT_SAME_MESSAGE,
    AssertException,
  );
});
