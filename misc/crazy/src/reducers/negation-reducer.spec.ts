import { describe, expect, it } from "@jest/globals";

import { add, div, exp, mul, neg, operand, sub } from "../@fixtures";
import { CrazyCommonFormatter } from "../formatters";

import { NegationReducer } from "./negation-reducer";

describe(NegationReducer.name, () => {
  const reducer = new NegationReducer();

  describe("#reduce(operation)", () => {
    it("should leave unchanged `a`", () => {
      expect(reducer.reduce(operand(1))).toEqual(operand(1));
    });

    it("should leave unchanged `-a`", () => {
      expect(reducer.reduce(neg(2))).toEqual(neg(2));
    });

    it("should reduce `-(-a)` to `a`", () => {
      expect(reducer.reduce(neg(neg(2)))).toEqual(operand(2));
    });

    it("should reduce `-a + b` to `-(a - b)`", () => {
      expect(reducer.reduce(add(neg(1), 2))).toEqual(neg(sub(1, 2)));
    });

    it("should reduce `a + (-b)` to `a - b`", () => {
      expect(reducer.reduce(add(1, neg(2)))).toEqual(sub(1, 2));
    });

    it("should reduce `(-a) - b` to `-(a + b)`", () => {
      expect(reducer.reduce(sub(neg(1), 2))).toEqual(neg(add(1, 2)));
    });

    it("should reduce `a - (-b)` to `a + b`", () => {
      expect(reducer.reduce(sub(1, neg(2)))).toEqual(add(1, 2));
    });

    it("should reduce `(-a) * b` to `-(a * b)`", () => {
      expect(reducer.reduce(mul(neg(1), 2))).toEqual(neg(mul(1, 2)));
    });

    it("should reduce `a * -b` to `-(a * b)`", () => {
      expect(reducer.reduce(mul(1, neg(2)))).toEqual(neg(mul(1, 2)));
    });

    it("should reduce `-a * -b` to `a * b`", () => {
      expect(reducer.reduce(mul(neg(1), neg(2)))).toEqual(mul(1, 2));
    });

    it("should reduce `(-a) / b` to `-(a / b)`", () => {
      expect(reducer.reduce(div(neg(1), 2))).toEqual(neg(div(1, 2)));
    });

    it("should reduce `a / (-b)` to `-(a / b)`", () => {
      expect(reducer.reduce(div(1, neg(2)))).toEqual(neg(div(1, 2)));
    });

    it("should reduce `-a / -b` to `a / b`", () => {
      expect(reducer.reduce(div(neg(1), neg(2)))).toEqual(div(1, 2));
    });

    it("should leave unchanged -(a ^ b)", () => {
      expect(reducer.reduce(neg(exp(1, 2)))).toEqual(neg(exp(1, 2)));
    });

    describe("complex tests", () => {
      const formatter = new CrazyCommonFormatter();

      it("should reduce `a - -(-b + (c * -d))` to `a - (b + (c * d))`", () => {
        expect(
          formatter.format(
            reducer.reduce(sub(1, neg(add(neg(2), mul(3, neg(4)))))),
          ),
        ).toEqual(formatter.format(sub(1, add(2, mul(3, 4)))));
      });

      it("should reduce `a - (-b + (c * -d))` to `a + (b + (c * d))`", () => {
        expect(
          formatter.format(
            reducer.reduce(add(1, neg(add(neg(2), mul(3, neg(4)))))),
          ),
        ).toEqual(formatter.format(add(1, add(2, mul(3, 4)))));
      });

      it("should reduce `a - (-b + (-c * -d))` to `a + (b - (c * d))`", () => {
        expect(
          formatter.format(
            reducer.reduce(add(1, neg(add(neg(2), mul(neg(3), neg(4)))))),
          ),
        ).toEqual(formatter.format(add(1, sub(2, mul(3, 4)))));
      });

      it("should reduce `-a - (-b + (-c * -d))` to `-(a - (b - (c * d)))`", () => {
        expect(
          formatter.format(
            reducer.reduce(add(neg(1), neg(add(neg(2), mul(neg(3), neg(4)))))),
          ),
        ).toEqual(formatter.format(neg(sub(1, sub(2, mul(3, 4))))));
      });
    });
  });
});
