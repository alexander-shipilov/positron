import { describe, expect, it } from "@jest/globals";

import { div, pow, mul, neg, sub, add } from "../@fixtures";

import { InfixFormatter } from "./infix-formatter";

describe(InfixFormatter.name, () => {
  const formatter = new InfixFormatter();

  describe("#format(operand)", () => {
    it("should format negation", () => {
      expect(formatter.format(neg(1))).toBe("-1");
      expect(formatter.format(neg(neg(1)))).toBe("-(-1)");

      expect(formatter.format(neg(add(2, 3)))).toBe("-(2 + 3)");
      expect(formatter.format(neg(sub(2, 3)))).toBe("-(2 - 3)");
      expect(formatter.format(neg(mul(2, 3)))).toBe("-(2 * 3)");
      expect(formatter.format(neg(div(2, 3)))).toBe("-(2 / 3)");
      expect(formatter.format(neg(pow(2, 3)))).toBe("-(2 ** 3)");
    });

    it("should format addition", () => {
      expect(formatter.format(add(1, 2))).toBe("1 + 2");

      expect(formatter.format(add(1, neg(2)))).toBe("1 + -2");
      expect(formatter.format(add(1, add(2, 3)))).toBe("1 + 2 + 3");
      expect(formatter.format(add(1, sub(2, 3)))).toBe("1 + 2 - 3");
      expect(formatter.format(add(1, mul(2, 3)))).toBe("1 + 2 * 3");
      expect(formatter.format(add(1, div(2, 3)))).toBe("1 + 2 / 3");
      expect(formatter.format(add(1, pow(2, 3)))).toBe("1 + 2 ** 3");

      expect(formatter.format(add(neg(3), 2))).toBe("-3 + 2");
      expect(formatter.format(add(add(3, 2), 1))).toBe("3 + 2 + 1");
      expect(formatter.format(add(sub(3, 2), 1))).toBe("3 - 2 + 1");
      expect(formatter.format(add(mul(3, 2), 1))).toBe("3 * 2 + 1");
      expect(formatter.format(add(div(3, 2), 1))).toBe("3 / 2 + 1");
      expect(formatter.format(add(pow(3, 2), 1))).toBe("3 ** 2 + 1");
    });

    it("should format subtraction", () => {
      expect(formatter.format(sub(1, 2))).toBe("1 - 2");

      expect(formatter.format(sub(1, neg(2)))).toBe("1 - -2");
      expect(formatter.format(sub(1, add(2, 3)))).toBe("1 - (2 + 3)");
      expect(formatter.format(sub(1, sub(2, 3)))).toBe("1 - (2 - 3)");
      expect(formatter.format(sub(1, mul(2, 3)))).toBe("1 - 2 * 3");
      expect(formatter.format(sub(1, div(2, 3)))).toBe("1 - 2 / 3");
      expect(formatter.format(sub(1, pow(2, 3)))).toBe("1 - 2 ** 3");

      expect(formatter.format(sub(neg(2), 3))).toBe("-2 - 3");
      expect(formatter.format(sub(add(2, 3), 2))).toBe("2 + 3 - 2");
      expect(formatter.format(sub(sub(2, 3), 2))).toBe("2 - 3 - 2");
      expect(formatter.format(sub(mul(2, 3), 2))).toBe("2 * 3 - 2");
      expect(formatter.format(sub(div(2, 3), 2))).toBe("2 / 3 - 2");
      expect(formatter.format(sub(pow(2, 3), 2))).toBe("2 ** 3 - 2");
    });

    it("should format multiplication", () => {
      expect(formatter.format(mul(1, 2))).toBe("1 * 2");

      expect(formatter.format(mul(1, neg(2)))).toBe("1 * -2");
      expect(formatter.format(mul(1, add(2, 3)))).toBe("1 * (2 + 3)");
      expect(formatter.format(mul(1, sub(2, 3)))).toBe("1 * (2 - 3)");
      expect(formatter.format(mul(1, mul(2, 3)))).toBe("1 * 2 * 3");
      expect(formatter.format(mul(1, div(2, 3)))).toBe("1 * 2 / 3");
      expect(formatter.format(mul(1, pow(2, 3)))).toBe("1 * 2 ** 3");

      expect(formatter.format(mul(neg(2), 3))).toBe("-2 * 3");
      expect(formatter.format(mul(add(2, 3), 2))).toBe("(2 + 3) * 2");
      expect(formatter.format(mul(sub(2, 3), 2))).toBe("(2 - 3) * 2");
      expect(formatter.format(mul(mul(2, 3), 2))).toBe("2 * 3 * 2");
      expect(formatter.format(mul(div(2, 3), 2))).toBe("2 / 3 * 2");
      expect(formatter.format(mul(pow(2, 3), 2))).toBe("2 ** 3 * 2");
    });

    it("should format division", () => {
      expect(formatter.format(div(1, 2))).toBe("1 / 2");

      expect(formatter.format(div(1, neg(2)))).toBe("1 / -2");
      expect(formatter.format(div(1, add(2, 3)))).toBe("1 / (2 + 3)");
      expect(formatter.format(div(1, sub(2, 3)))).toBe("1 / (2 - 3)");
      expect(formatter.format(div(1, mul(2, 3)))).toBe("1 / (2 * 3)");
      expect(formatter.format(div(1, div(2, 3)))).toBe("1 / (2 / 3)");
      expect(formatter.format(div(1, pow(2, 3)))).toBe("1 / 2 ** 3");

      expect(formatter.format(div(neg(2), 3))).toBe("-2 / 3");
      expect(formatter.format(div(add(2, 3), 2))).toBe("(2 + 3) / 2");
      expect(formatter.format(div(sub(2, 3), 2))).toBe("(2 - 3) / 2");
      expect(formatter.format(div(mul(2, 3), 2))).toBe("2 * 3 / 2");
      expect(formatter.format(div(div(2, 3), 2))).toBe("2 / 3 / 2");
      expect(formatter.format(div(pow(2, 3), 2))).toBe("2 ** 3 / 2");
    });

    it("should format exponentiation", () => {
      expect(formatter.format(pow(1, 2))).toBe("1 ** 2");

      expect(formatter.format(pow(1, neg(2)))).toBe("1 ** -2");
      expect(formatter.format(pow(1, add(2, 3)))).toBe("1 ** (2 + 3)");
      expect(formatter.format(pow(1, sub(2, 3)))).toBe("1 ** (2 - 3)");
      expect(formatter.format(pow(1, mul(2, 3)))).toBe("1 ** (2 * 3)");
      expect(formatter.format(pow(1, div(2, 3)))).toBe("1 ** (2 / 3)");
      expect(formatter.format(pow(1, pow(2, 3)))).toBe("1 ** (2 ** 3)");

      expect(formatter.format(pow(neg(2), 3))).toBe("(-2) ** 3");
      expect(formatter.format(pow(add(2, 3), 2))).toBe("(2 + 3) ** 2");
      expect(formatter.format(pow(sub(2, 3), 2))).toBe("(2 - 3) ** 2");
      expect(formatter.format(pow(mul(2, 3), 2))).toBe("(2 * 3) ** 2");
      expect(formatter.format(pow(div(2, 3), 2))).toBe("(2 / 3) ** 2");
      expect(formatter.format(pow(pow(2, 3), 2))).toBe("(2 ** 3) ** 2");
    });
  });
});
