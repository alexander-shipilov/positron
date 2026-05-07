import { describe, expect, it } from "@jest/globals";

import { add, div, mul, neg, pow, sub } from "../../@fixtures";

import { InfixFormatter } from "./infix-formatter";

describe("InfixFormatter", () => {
  describe("#format(operand)", () => {
    it("should format negation", () => {
      expect(InfixFormatter.format(neg(1))).toBe("-1");
      expect(InfixFormatter.format(neg(neg(1)))).toBe("-(-1)");

      expect(InfixFormatter.format(neg(add(2, 3)))).toBe("-(2 + 3)");
      expect(InfixFormatter.format(neg(sub(2, 3)))).toBe("-(2 - 3)");
      expect(InfixFormatter.format(neg(mul(2, 3)))).toBe("-(2 * 3)");
      expect(InfixFormatter.format(neg(div(2, 3)))).toBe("-(2 / 3)");
      expect(InfixFormatter.format(neg(pow(2, 3)))).toBe("-(2 ** 3)");
    });

    it("should format addition", () => {
      expect(InfixFormatter.format(add(1, 2))).toBe("1 + 2");

      expect(InfixFormatter.format(add(1, neg(2)))).toBe("1 + -2");
      expect(InfixFormatter.format(add(1, add(2, 3)))).toBe("1 + 2 + 3");
      expect(InfixFormatter.format(add(1, sub(2, 3)))).toBe("1 + 2 - 3");
      expect(InfixFormatter.format(add(1, mul(2, 3)))).toBe("1 + 2 * 3");
      expect(InfixFormatter.format(add(1, div(2, 3)))).toBe("1 + 2 / 3");
      expect(InfixFormatter.format(add(1, pow(2, 3)))).toBe("1 + 2 ** 3");

      expect(InfixFormatter.format(add(neg(3), 2))).toBe("-3 + 2");
      expect(InfixFormatter.format(add(add(3, 2), 1))).toBe("3 + 2 + 1");
      expect(InfixFormatter.format(add(sub(3, 2), 1))).toBe("3 - 2 + 1");
      expect(InfixFormatter.format(add(mul(3, 2), 1))).toBe("3 * 2 + 1");
      expect(InfixFormatter.format(add(div(3, 2), 1))).toBe("3 / 2 + 1");
      expect(InfixFormatter.format(add(pow(3, 2), 1))).toBe("3 ** 2 + 1");
    });

    it("should format subtraction", () => {
      expect(InfixFormatter.format(sub(1, 2))).toBe("1 - 2");

      expect(InfixFormatter.format(sub(1, neg(2)))).toBe("1 - -2");
      expect(InfixFormatter.format(sub(1, add(2, 3)))).toBe("1 - (2 + 3)");
      expect(InfixFormatter.format(sub(1, sub(2, 3)))).toBe("1 - (2 - 3)");
      expect(InfixFormatter.format(sub(1, mul(2, 3)))).toBe("1 - 2 * 3");
      expect(InfixFormatter.format(sub(1, div(2, 3)))).toBe("1 - 2 / 3");
      expect(InfixFormatter.format(sub(1, pow(2, 3)))).toBe("1 - 2 ** 3");

      expect(InfixFormatter.format(sub(neg(2), 3))).toBe("-2 - 3");
      expect(InfixFormatter.format(sub(add(2, 3), 2))).toBe("2 + 3 - 2");
      expect(InfixFormatter.format(sub(sub(2, 3), 2))).toBe("2 - 3 - 2");
      expect(InfixFormatter.format(sub(mul(2, 3), 2))).toBe("2 * 3 - 2");
      expect(InfixFormatter.format(sub(div(2, 3), 2))).toBe("2 / 3 - 2");
      expect(InfixFormatter.format(sub(pow(2, 3), 2))).toBe("2 ** 3 - 2");
    });

    it("should format multiplication", () => {
      expect(InfixFormatter.format(mul(1, 2))).toBe("1 * 2");

      expect(InfixFormatter.format(mul(1, neg(2)))).toBe("1 * -2");
      expect(InfixFormatter.format(mul(1, add(2, 3)))).toBe("1 * (2 + 3)");
      expect(InfixFormatter.format(mul(1, sub(2, 3)))).toBe("1 * (2 - 3)");
      expect(InfixFormatter.format(mul(1, mul(2, 3)))).toBe("1 * 2 * 3");
      expect(InfixFormatter.format(mul(1, div(2, 3)))).toBe("1 * 2 / 3");
      expect(InfixFormatter.format(mul(1, pow(2, 3)))).toBe("1 * 2 ** 3");

      expect(InfixFormatter.format(mul(neg(2), 3))).toBe("-2 * 3");
      expect(InfixFormatter.format(mul(add(2, 3), 2))).toBe("(2 + 3) * 2");
      expect(InfixFormatter.format(mul(sub(2, 3), 2))).toBe("(2 - 3) * 2");
      expect(InfixFormatter.format(mul(mul(2, 3), 2))).toBe("2 * 3 * 2");
      expect(InfixFormatter.format(mul(div(2, 3), 2))).toBe("2 / 3 * 2");
      expect(InfixFormatter.format(mul(pow(2, 3), 2))).toBe("2 ** 3 * 2");
    });

    it("should format division", () => {
      expect(InfixFormatter.format(div(1, 2))).toBe("1 / 2");

      expect(InfixFormatter.format(div(1, neg(2)))).toBe("1 / -2");
      expect(InfixFormatter.format(div(1, add(2, 3)))).toBe("1 / (2 + 3)");
      expect(InfixFormatter.format(div(1, sub(2, 3)))).toBe("1 / (2 - 3)");
      expect(InfixFormatter.format(div(1, mul(2, 3)))).toBe("1 / (2 * 3)");
      expect(InfixFormatter.format(div(1, div(2, 3)))).toBe("1 / (2 / 3)");
      expect(InfixFormatter.format(div(1, pow(2, 3)))).toBe("1 / 2 ** 3");

      expect(InfixFormatter.format(div(neg(2), 3))).toBe("-2 / 3");
      expect(InfixFormatter.format(div(add(2, 3), 2))).toBe("(2 + 3) / 2");
      expect(InfixFormatter.format(div(sub(2, 3), 2))).toBe("(2 - 3) / 2");
      expect(InfixFormatter.format(div(mul(2, 3), 2))).toBe("2 * 3 / 2");
      expect(InfixFormatter.format(div(div(2, 3), 2))).toBe("2 / 3 / 2");
      expect(InfixFormatter.format(div(pow(2, 3), 2))).toBe("2 ** 3 / 2");
    });

    it("should format exponentiation", () => {
      expect(InfixFormatter.format(pow(1, 2))).toBe("1 ** 2");

      expect(InfixFormatter.format(pow(1, neg(2)))).toBe("1 ** -2");
      expect(InfixFormatter.format(pow(1, add(2, 3)))).toBe("1 ** (2 + 3)");
      expect(InfixFormatter.format(pow(1, sub(2, 3)))).toBe("1 ** (2 - 3)");
      expect(InfixFormatter.format(pow(1, mul(2, 3)))).toBe("1 ** (2 * 3)");
      expect(InfixFormatter.format(pow(1, div(2, 3)))).toBe("1 ** (2 / 3)");
      expect(InfixFormatter.format(pow(1, pow(2, 3)))).toBe("1 ** (2 ** 3)");

      expect(InfixFormatter.format(pow(neg(2), 3))).toBe("(-2) ** 3");
      expect(InfixFormatter.format(pow(add(2, 3), 2))).toBe("(2 + 3) ** 2");
      expect(InfixFormatter.format(pow(sub(2, 3), 2))).toBe("(2 - 3) ** 2");
      expect(InfixFormatter.format(pow(mul(2, 3), 2))).toBe("(2 * 3) ** 2");
      expect(InfixFormatter.format(pow(div(2, 3), 2))).toBe("(2 / 3) ** 2");
      expect(InfixFormatter.format(pow(pow(2, 3), 2))).toBe("(2 ** 3) ** 2");
    });
  });
});
