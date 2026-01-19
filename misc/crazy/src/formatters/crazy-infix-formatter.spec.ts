import { describe, expect, it } from "@jest/globals";

import { add, div, exp, mul, neg, sub } from "../@fixtures";

import { CrazyInfixFormatter } from "./crazy-infix-formatter";

describe(CrazyInfixFormatter.name, () => {
  const formatter = new CrazyInfixFormatter();

  describe("#format(operand)", () => {
    it("should format negation", () => {
      expect(formatter.format(neg(1))).toBe("-1");
      expect(formatter.format(neg(neg(1)))).toBe("-(-1)");

      expect(formatter.format(neg(add(2, 3)))).toBe("-(2 + 3)");
      expect(formatter.format(neg(sub(2, 3)))).toBe("-(2 - 3)");
      expect(formatter.format(neg(mul(2, 3)))).toBe("-(2 * 3)");
      expect(formatter.format(neg(div(2, 3)))).toBe("-(2 / 3)");
      expect(formatter.format(neg(exp(2, 3)))).toBe("-(2 ** 3)");
    });

    it("should format addition", () => {
      expect(formatter.format(add(1, 2))).toBe("1 + 2");

      expect(formatter.format(add(1, neg(2)))).toBe("1 + -2");
      expect(formatter.format(add(1, add(2, 3)))).toBe("1 + 2 + 3");
      expect(formatter.format(add(1, sub(2, 3)))).toBe("1 + 2 - 3");
      expect(formatter.format(add(1, mul(2, 3)))).toBe("1 + 2 * 3");
      expect(formatter.format(add(1, div(2, 3)))).toBe("1 + 2 / 3");
      expect(formatter.format(add(1, exp(2, 3)))).toBe("1 + 2 ** 3");

      expect(formatter.format(add(neg(3), 2))).toBe("-3 + 2");
      expect(formatter.format(add(add(3, 2), 1))).toBe("3 + 2 + 1");
      expect(formatter.format(add(sub(3, 2), 1))).toBe("3 - 2 + 1");
      expect(formatter.format(add(mul(3, 2), 1))).toBe("3 * 2 + 1");
      expect(formatter.format(add(div(3, 2), 1))).toBe("3 / 2 + 1");
      expect(formatter.format(add(exp(3, 2), 1))).toBe("3 ** 2 + 1");
    });

    it("should format subtraction", () => {
      expect(formatter.format(sub(1, 2))).toBe("1 - 2");

      expect(formatter.format(sub(1, neg(2)))).toBe("1 - -2");
      expect(formatter.format(sub(1, add(2, 3)))).toBe("1 - (2 + 3)");
      expect(formatter.format(sub(1, sub(2, 3)))).toBe("1 - (2 - 3)");
      expect(formatter.format(sub(1, mul(2, 3)))).toBe("1 - 2 * 3");
      expect(formatter.format(sub(1, div(2, 3)))).toBe("1 - 2 / 3");
      expect(formatter.format(sub(1, exp(2, 3)))).toBe("1 - 2 ** 3");

      expect(formatter.format(sub(neg(2), 3))).toBe("-2 - 3");
      expect(formatter.format(sub(add(2, 3), 2))).toBe("2 + 3 - 2");
      expect(formatter.format(sub(sub(2, 3), 2))).toBe("2 - 3 - 2");
      expect(formatter.format(sub(mul(2, 3), 2))).toBe("2 * 3 - 2");
      expect(formatter.format(sub(div(2, 3), 2))).toBe("2 / 3 - 2");
      expect(formatter.format(sub(exp(2, 3), 2))).toBe("2 ** 3 - 2");
    });

    it("should format multiplication", () => {
      expect(formatter.format(mul(1, 2))).toBe("1 * 2");

      expect(formatter.format(mul(1, neg(2)))).toBe("1 * -2");
      expect(formatter.format(mul(1, add(2, 3)))).toBe("1 * (2 + 3)");
      expect(formatter.format(mul(1, sub(2, 3)))).toBe("1 * (2 - 3)");
      expect(formatter.format(mul(1, mul(2, 3)))).toBe("1 * 2 * 3");
      expect(formatter.format(mul(1, div(2, 3)))).toBe("1 * 2 / 3");
      expect(formatter.format(mul(1, exp(2, 3)))).toBe("1 * 2 ** 3");

      expect(formatter.format(mul(neg(2), 3))).toBe("-2 * 3");
      expect(formatter.format(mul(add(2, 3), 2))).toBe("(2 + 3) * 2");
      expect(formatter.format(mul(sub(2, 3), 2))).toBe("(2 - 3) * 2");
      expect(formatter.format(mul(mul(2, 3), 2))).toBe("2 * 3 * 2");
      expect(formatter.format(mul(div(2, 3), 2))).toBe("2 / 3 * 2");
      expect(formatter.format(mul(exp(2, 3), 2))).toBe("2 ** 3 * 2");
    });

    it("should format division", () => {
      expect(formatter.format(div(1, 2))).toBe("1 / 2");

      expect(formatter.format(div(1, neg(2)))).toBe("1 / -2");
      expect(formatter.format(div(1, add(2, 3)))).toBe("1 / (2 + 3)");
      expect(formatter.format(div(1, sub(2, 3)))).toBe("1 / (2 - 3)");
      expect(formatter.format(div(1, mul(2, 3)))).toBe("1 / (2 * 3)");
      expect(formatter.format(div(1, div(2, 3)))).toBe("1 / (2 / 3)");
      expect(formatter.format(div(1, exp(2, 3)))).toBe("1 / 2 ** 3");

      expect(formatter.format(div(neg(2), 3))).toBe("-2 / 3");
      expect(formatter.format(div(add(2, 3), 2))).toBe("(2 + 3) / 2");
      expect(formatter.format(div(sub(2, 3), 2))).toBe("(2 - 3) / 2");
      expect(formatter.format(div(mul(2, 3), 2))).toBe("2 * 3 / 2");
      expect(formatter.format(div(div(2, 3), 2))).toBe("2 / 3 / 2");
      expect(formatter.format(div(exp(2, 3), 2))).toBe("2 ** 3 / 2");
    });

    it("should format exponentiation", () => {
      expect(formatter.format(exp(1, 2))).toBe("1 ** 2");

      expect(formatter.format(exp(1, neg(2)))).toBe("1 ** -2");
      expect(formatter.format(exp(1, add(2, 3)))).toBe("1 ** (2 + 3)");
      expect(formatter.format(exp(1, sub(2, 3)))).toBe("1 ** (2 - 3)");
      expect(formatter.format(exp(1, mul(2, 3)))).toBe("1 ** (2 * 3)");
      expect(formatter.format(exp(1, div(2, 3)))).toBe("1 ** (2 / 3)");
      expect(formatter.format(exp(1, exp(2, 3)))).toBe("1 ** (2 ** 3)");

      expect(formatter.format(exp(neg(2), 3))).toBe("(-2) ** 3");
      expect(formatter.format(exp(add(2, 3), 2))).toBe("(2 + 3) ** 2");
      expect(formatter.format(exp(sub(2, 3), 2))).toBe("(2 - 3) ** 2");
      expect(formatter.format(exp(mul(2, 3), 2))).toBe("(2 * 3) ** 2");
      expect(formatter.format(exp(div(2, 3), 2))).toBe("(2 / 3) ** 2");
      expect(formatter.format(exp(exp(2, 3), 2))).toBe("(2 ** 3) ** 2");
    });
  });
});
