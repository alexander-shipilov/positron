import { describe, expect, it } from "@jest/globals";

import { div, pow, mul, sub, operand, add, neg } from "../@fixtures";
import { CommonCreator } from "../creators";
import { size } from "../iterable";
import { natural } from "../number";

import { CommonGenerator } from "./common-generator";

describe(CommonGenerator.name, () => {
  const generator = new CommonGenerator(CommonCreator);

  describe(".generate(digits)", () => {
    it("should return `operand(1)` if `digits` is [1]", () => {
      expect([
        ...generator.generate([
          natural(1), //
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
            natural(1), //
            natural(2),
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

    it("should return 274 unique operations if `digits` is [1, 2, 3]", () => {
      expect(
        size(
          generator.generate([
            natural(1), //
            natural(2),
            natural(3),
          ]),
        ),
      ).toBe(274);
    });

    it("should return 5_282 unique operations if `digits` is [1, 2, 3, 4]", () => {
      expect(
        size(
          generator.generate([
            natural(1), //
            natural(2),
            natural(3),
            natural(4),
          ]),
        ),
      ).toBe(5_282);
    });

    it("should return 114_594 unique operations if `digits` is [1, 2, 3, 4, 5]", () => {
      expect(
        size(
          generator.generate([
            natural(1), //
            natural(2),
            natural(3),
            natural(4),
            natural(5),
          ]),
        ),
      ).toBe(114_594);
    });

    it("should return 2_667_954 unique operations if `digits` is [1, 2, 3, 4, 5, 6]", () => {
      expect(
        size(
          generator.generate([
            natural(1), //
            natural(2),
            natural(3),
            natural(4),
            natural(5),
            natural(6),
          ]),
        ),
      ).toBe(2_667_954);
    });

    it("should return 65_117_106 unique operations if digits is [1, 2, 3, 4, 5, 6, 7]", () => {
      expect(
        size(
          generator.generate([
            natural(1), //
            natural(2),
            natural(3),
            natural(4),
            natural(5),
            natural(6),
            natural(7),
          ]),
        ),
      ).toBe(65_117_106);
    });

    it("should return 1_644_092_226 unique operations if digits is [1, 2, 3, 4, 5, 6, 7, 8]", () => {
      expect(
        size(
          generator.generate([
            natural(1), //
            natural(2),
            natural(3),
            natural(4),
            natural(5),
            natural(6),
            natural(7),
            natural(8),
          ]),
        ),
      ).toBe(1_644_092_226);
    });

    it("should return 42_583_831_874 unique operations if digits is [1, 2, 3, 4, 5, 6, 7, 8, 9]", () => {
      expect(
        size(
          generator.generate([
            natural(1), //
            natural(2),
            natural(3),
            natural(4),
            natural(5),
            natural(6),
            natural(7),
            natural(8),
            natural(9),
          ]),
        ),
      ).toBe(42_583_831_874);
    });
  });
});
