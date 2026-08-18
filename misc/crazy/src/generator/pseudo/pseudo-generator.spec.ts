import { describe, expect, it } from "@jest/globals";

import { add, div, mul, neg, operand, pow, sub } from "../../@fixtures";
import { DefaultCreator } from "../../creator";
import { Natural } from "../../number";
import { size } from "../../utils";

import { PseudoGenerator } from "./pseudo-generator";

describe(PseudoGenerator.name, () => {
  const generator = new PseudoGenerator(DefaultCreator);

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

    it(
      "should return `[" +
        "operand(1, 2), " +
        "neg(operand(1, 2)), " +
        "add(1, 2), " +
        "neg(add(1, 2)), " +
        "sub(1, 2), " +
        "neg(sub(1, 2))" +
        "mul(1, 2), " +
        "neg(mul(1, 2)), " +
        "div(1, 2), " +
        "neg(div(1, 2)), " +
        "pow(1, 2), " +
        "neg(pow(1, 2)), " +
        "pow(neg(1), 2), " +
        "neg(pow(neg(1), 2)), " +
        "pow(1, neg(2)), " +
        "neg(pow(1, neg(2))), " +
        "pow(neg(1), neg(2)), " +
        "neg(pow(neg(1), neg(2))), " +
        "]` if `digits` is [1, 2]",
      () => {
        expect([
          ...generator.generate([
            Natural(1), //
            Natural(2),
          ]),
        ]).toEqual([
          operand(1, 2),
          neg(operand(1, 2)),
          add(1, 2),
          neg(add(1, 2)),
          sub(1, 2),
          neg(sub(1, 2)),
          mul(1, 2),
          neg(mul(1, 2)),
          div(1, 2),
          neg(div(1, 2)),
          pow(1, 2),
          neg(pow(1, 2)),
          pow(neg(1), 2),
          neg(pow(neg(1), 2)),
          pow(1, neg(2)),
          neg(pow(1, neg(2))),
          pow(neg(1), neg(2)),
          neg(pow(neg(1), neg(2))),
        ]);
      },
    );

    it("should return 290 unique operations if `digits` is [1, 2, 3]", () => {
      expect(
        size(
          generator.generate([
            Natural(1), //
            Natural(2),
            Natural(3),
          ]),
        ),
      ).toBe(290);
    });

    it("should return 5_938 unique operations if `digits` is [1, 2, 3, 4]", () => {
      expect(
        size(
          generator.generate([
            Natural(1), //
            Natural(2),
            Natural(3),
            Natural(4),
          ]),
        ),
      ).toBe(5_938);
    });

    it("should return 136_770 unique operations if `digits` is [1, 2, 3, 4, 5]", () => {
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
      ).toBe(136_770);
    });

    it("should return 3_379_794 unique operations if `digits` is [1, 2, 3, 4, 5, 6]", () => {
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
      ).toBe(3_379_794);
    });

    it("should return 87_547_746 unique operations if digits is [1, 2, 3, 4, 5, 6, 7]", () => {
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
      ).toBe(87_547_746);
    });

    it("should return 2_345_800_050 unique operations if digits is [1, 2, 3, 4, 5, 6, 7, 8]", () => {
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
      ).toBe(2_345_800_050);
    });

    it("should return 64_477_920_386 unique operations if digits is [1, 2, 3, 4, 5, 6, 7, 8, 9]", () => {
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
            Natural(9),
          ]),
        ),
      ).toBe(64_477_920_386);
    });
  });
});
