import { describe, expect, it } from "@jest/globals";

import { isTypedNumberFixtures } from "../-fixtures/is-[typed]-number.fixtures";

import { isSafeIntegerNumber } from "./is-safe-integer-number";

describe(`function ${isSafeIntegerNumber.name}(value)`, () => {
  it("should act as the `Number.isSafeInteger` function", () => {
    isTypedNumberFixtures.forEach((value) => {
      expect(isSafeIntegerNumber(value)).toBe(Number.isSafeInteger(value));
    });
  });
});
