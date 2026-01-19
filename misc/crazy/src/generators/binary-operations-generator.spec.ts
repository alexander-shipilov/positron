import { describe, expect, it } from "@jest/globals";

import { operand, add, div, exp, mul, sub } from "../@fixtures";
import { Digit } from "../digit";

import { BinaryOperationsGenerator } from "./binary-operations-generator";

describe(BinaryOperationsGenerator.name, () => {
  const generator = new BinaryOperationsGenerator();

  describe(".generate(digits)", () => {
    it("should return `operand(1)` if `digits` is [1]", () => {
      expect([
        ...generator.generate([
          Digit(1), //
        ]),
      ]).toEqual([operand(1)]);
    });

    it(
      "should return `[" +
        "operand(12), " +
        "add(1, 2), " +
        "div(1, 2), " +
        "exp(1, 2), " +
        "mul(1, 2), " +
        "sub(1, 2), " +
        "]` if `digits` is [1, 2]",
      () => {
        expect([
          ...generator.generate([
            Digit(1), //
            Digit(2),
          ]),
        ]).toEqual([
          operand(12),
          add(1, 2),
          div(1, 2),
          exp(1, 2),
          mul(1, 2),
          sub(1, 2),
        ]);
      },
    );
  });
});
