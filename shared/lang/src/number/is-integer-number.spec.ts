import { describe, expect, it } from "@jest/globals";

import { isTypedNumberFixtures } from "../-fixtures/is-[typed]-number.fixtures";

import { isIntegerNumber } from "./is-integer-number";

describe(`function ${isIntegerNumber.name}(value)`, () => {
  it("should act as the `Number.isInteger` function", () => {
    isTypedNumberFixtures.forEach((value) => {
      expect(isIntegerNumber(value)).toBe(Number.isInteger(value));
    });
  });
});
