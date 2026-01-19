import { describe, expect, it } from "@jest/globals";

import { Digit } from "../digit";
import { size } from "../iterable";

import { BinaryAndNegationOperationsGenerator } from "./binary-and-negation-operations-generator";

describe(BinaryAndNegationOperationsGenerator.name, () => {
  const generator = new BinaryAndNegationOperationsGenerator();

  describe(".generate(digits)", () => {
    it("should return two operations if `digits` is [1]", () => {
      expect(
        size(
          generator.generate([
            Digit(1), //
          ]),
        ),
      ).toBe(2);
    });

    it("should return 18 unique operations if `digits` is [1, 2]", () => {
      expect(
        size(
          generator.generate([
            Digit(1), //
            Digit(2),
          ]),
        ),
      ).toBe(18);
    });

    it("should return 274 unique operations if `digits` is [1, 2, 3]", () => {
      expect(
        size(
          generator.generate([
            Digit(1), //
            Digit(2),
            Digit(3),
          ]),
        ),
      ).toBe(274);
    });

    it("should return 5282 unique operations if `digits` is [1, 2, 3, 4]", () => {
      expect(
        size(
          generator.generate([
            Digit(1), //
            Digit(2),
            Digit(3),
            Digit(4),
          ]),
        ),
      ).toBe(5282);
    });

    it("should return 114594 unique operations if `digits` is [1, 2, 3, 4, 5]", () => {
      expect(
        size(
          generator.generate([
            Digit(1), //
            Digit(2),
            Digit(3),
            Digit(4),
            Digit(5),
          ]),
        ),
      ).toBe(114594);
    });

    it("should return 2667954 unique operations if `digits` is [1, 2, 3, 4, 5, 6]", () => {
      expect(
        size(
          generator.generate([
            Digit(1), //
            Digit(2),
            Digit(3),
            Digit(4),
            Digit(5),
            Digit(6),
          ]),
        ),
      ).toBe(2667954);
    });

    it("should return 65117106 unique operations if digits is [1, 2, 3, 4, 5, 6, 7]", () => {
      expect(
        size(
          generator.generate([
            Digit(1), //
            Digit(2),
            Digit(3),
            Digit(4),
            Digit(5),
            Digit(6),
            Digit(7),
          ]),
        ),
      ).toBe(65117106);
    });

    it("should return 1644092226 unique operations if digits is [1, 2, 3, 4, 5, 6, 7, 8]", () => {
      expect(
        size(
          generator.generate([
            Digit(1), //
            Digit(2),
            Digit(3),
            Digit(4),
            Digit(5),
            Digit(6),
            Digit(7),
            Digit(8),
          ]),
        ),
      ).toBe(1644092226);
    });
  });
});
