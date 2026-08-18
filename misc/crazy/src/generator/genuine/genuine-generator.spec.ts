import { describe, expect, it } from "@jest/globals";

import { neg, operand } from "../../@fixtures";
import { DefaultCreator } from "../../creator";
import { Natural } from "../../number";
import { size } from "../../utils";

import { GenuineGenerator } from "./genuine-generator";

describe(GenuineGenerator.name, () => {
  const generator = new GenuineGenerator(DefaultCreator);

  describe(`.${generator.generate.name}(digits)`, () => {
    it("should return `[operand(1), neg(operand(1))]` if `digits` is [1]", () => {
      expect([
        ...generator.generate([
          Natural(1), //
        ]),
      ]).toEqual([
        operand(1), //
        neg(operand(1)),
      ]);
    });

    it("should return 442 unique operations if `digits` is [1, 2, 3]", () => {
      expect(
        size(
          generator.generate([
            Natural(1), //
            Natural(2),
            Natural(3),
          ]),
        ),
      ).toBe(442);
    });

    it("should return 11_262 unique operations if `digits` is [1, 2, 3, 4]", () => {
      expect(
        size(
          generator.generate([
            Natural(1), //
            Natural(2),
            Natural(3),
            Natural(4),
          ]),
        ),
      ).toBe(11_262);
    });

    it("should return 322_482 unique operations if `digits` is [1, 2, 3, 4, 5]", () => {
      expect(
        size(
          generator.generate([
            Natural(1), //
            Natural(2),
            Natural(3),
            Natural(4),
            Natural(5),
          ]),
        ),
      ).toBe(322_482);
    });

    it("should return 9_904_102 unique operations if `digits` is [1, 2, 3, 4, 5, 6]", () => {
      expect(
        size(
          generator.generate([
            Natural(1), //
            Natural(2),
            Natural(3),
            Natural(4),
            Natural(5),
            Natural(6),
          ]),
        ),
      ).toBe(9_904_102);
    });

    it("should return 318_806_122 unique operations if digits is [1, 2, 3, 4, 5, 6, 7]", () => {
      expect(
        size(
          generator.generate([
            Natural(1), //
            Natural(2),
            Natural(3),
            Natural(4),
            Natural(5),
            Natural(6),
            Natural(7),
          ]),
        ),
      ).toBe(318_806_122);
    });

    it("should return 10_614_558_542 unique operations if digits is [1, 2, 3, 4, 5, 6, 7, 8]", () => {
      expect(
        size(
          generator.generate([
            Natural(1), //
            Natural(2),
            Natural(3),
            Natural(4),
            Natural(5),
            Natural(6),
            Natural(7),
            Natural(8),
          ]),
        ),
      ).toBe(10_614_558_542);
    });
  });
});
