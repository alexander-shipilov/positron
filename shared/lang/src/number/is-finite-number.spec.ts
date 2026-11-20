import { describe, expect, it } from "@jest/globals";

import { isTypedNumberFixtures } from "../-fixtures/is-[typed]-number.fixtures";

import { isFiniteNumber } from "./is-finite-number";

describe(`function ${isFiniteNumber.name}(value)`, () => {
  it("should act as the `Number.isFinite` function", () => {
    isTypedNumberFixtures.forEach((value) => {
      expect(isFiniteNumber(value)).toBe(Number.isFinite(value));
    });
  });
});
