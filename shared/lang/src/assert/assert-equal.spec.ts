import { describe, expect, it } from "@jest/globals";

import type { ErrorParams } from "../error/error-params";
import { equalFixtures } from "../-fixtures/equal.fixtures";
import { neverLikeTests } from "../-tests/never-like-tests";

import { ASSERT_EQUAL_MESSAGE, assertEqual } from "./assert-equal";
import { AssertException } from "./assert-exception";

describe(`function ${assertEqual.name}(value, expected, ...errorParams)`, () => {
  it("should return `value` if `value` is equal (`===`) to `expected`", () => {
    equalFixtures.forEach(([value, expected]) => {
      expect(assertEqual(value, expected)).toBe(value);
      expect(assertEqual(expected, value)).toBe(expected);
    });
  });

  it("should throw if `value` is not equal (`===`) to `expected`", () => {
    for (let i = 0; i < equalFixtures.length; i++) {
      const [value] = equalFixtures[i];

      for (let j = i + 1; j < equalFixtures.length; j++) {
        const [expected] = equalFixtures[j];

        expect(() => assertEqual(value, expected)).toThrow();
        expect(() => assertEqual(expected, value)).toThrow();
      }
    }
  });

  neverLikeTests(
    (...errorParams: ErrorParams) => assertEqual(true, false, ...errorParams),
    ASSERT_EQUAL_MESSAGE,
    AssertException,
  );
});
