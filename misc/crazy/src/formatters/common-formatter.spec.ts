import { describe, expect, it } from "@jest/globals";

import { div, pow, mul, neg, sub, add } from "../@fixtures";

import { CommonFormatter } from "./common-formatter";

describe(CommonFormatter.name, () => {
  const formatter = new CommonFormatter();

  describe(`#${formatter.format.name}(operand)`, () => {
    it("should format negation", () => {
      expect(formatter.format(neg(1))).toBe("neg(1)");
      expect(formatter.format(neg(neg(1)))).toBe("neg(neg(1))");

      expect(formatter.format(neg(add(2, 3)))).toBe("neg(add(2, 3))");
      expect(formatter.format(neg(sub(2, 3)))).toBe("neg(sub(2, 3))");
      expect(formatter.format(neg(mul(2, 3)))).toBe("neg(mul(2, 3))");
      expect(formatter.format(neg(div(2, 3)))).toBe("neg(div(2, 3))");
      expect(formatter.format(neg(pow(2, 3)))).toBe("neg(pow(2, 3))");
    });

    it("should format addition", () => {
      expect(formatter.format(add(1, 2))).toBe("add(1, 2)");

      expect(formatter.format(add(1, neg(2)))).toBe("add(1, neg(2))");
      expect(formatter.format(add(1, add(2, 3)))).toBe("add(1, add(2, 3))");
      expect(formatter.format(add(1, sub(2, 3)))).toBe("add(1, sub(2, 3))");
      expect(formatter.format(add(1, mul(2, 3)))).toBe("add(1, mul(2, 3))");
      expect(formatter.format(add(1, div(2, 3)))).toBe("add(1, div(2, 3))");
      expect(formatter.format(add(1, pow(2, 3)))).toBe("add(1, pow(2, 3))");

      expect(formatter.format(add(neg(3), 2))).toBe("add(neg(3), 2)");
      expect(formatter.format(add(add(3, 2), 1))).toBe("add(add(3, 2), 1)");
      expect(formatter.format(add(sub(3, 2), 1))).toBe("add(sub(3, 2), 1)");
      expect(formatter.format(add(mul(3, 2), 1))).toBe("add(mul(3, 2), 1)");
      expect(formatter.format(add(div(3, 2), 1))).toBe("add(div(3, 2), 1)");
      expect(formatter.format(add(pow(3, 2), 1))).toBe("add(pow(3, 2), 1)");
    });

    it("should format subtraction", () => {
      expect(formatter.format(sub(1, 2))).toBe("sub(1, 2)");

      expect(formatter.format(sub(1, neg(2)))).toBe("sub(1, neg(2))");
      expect(formatter.format(sub(1, add(2, 3)))).toBe("sub(1, add(2, 3))");
      expect(formatter.format(sub(1, sub(2, 3)))).toBe("sub(1, sub(2, 3))");
      expect(formatter.format(sub(1, mul(2, 3)))).toBe("sub(1, mul(2, 3))");
      expect(formatter.format(sub(1, div(2, 3)))).toBe("sub(1, div(2, 3))");
      expect(formatter.format(sub(1, pow(2, 3)))).toBe("sub(1, pow(2, 3))");

      expect(formatter.format(sub(neg(2), 3))).toBe("sub(neg(2), 3)");
      expect(formatter.format(sub(add(2, 3), 2))).toBe("sub(add(2, 3), 2)");
      expect(formatter.format(sub(sub(2, 3), 2))).toBe("sub(sub(2, 3), 2)");
      expect(formatter.format(sub(mul(2, 3), 2))).toBe("sub(mul(2, 3), 2)");
      expect(formatter.format(sub(div(2, 3), 2))).toBe("sub(div(2, 3), 2)");
      expect(formatter.format(sub(pow(2, 3), 2))).toBe("sub(pow(2, 3), 2)");
    });

    it("should format multiplication", () => {
      expect(formatter.format(mul(1, 2))).toBe("mul(1, 2)");

      expect(formatter.format(mul(1, neg(2)))).toBe("mul(1, neg(2))");
      expect(formatter.format(mul(1, add(2, 3)))).toBe("mul(1, add(2, 3))");
      expect(formatter.format(mul(1, sub(2, 3)))).toBe("mul(1, sub(2, 3))");
      expect(formatter.format(mul(1, mul(2, 3)))).toBe("mul(1, mul(2, 3))");
      expect(formatter.format(mul(1, div(2, 3)))).toBe("mul(1, div(2, 3))");
      expect(formatter.format(mul(1, pow(2, 3)))).toBe("mul(1, pow(2, 3))");

      expect(formatter.format(mul(neg(2), 3))).toBe("mul(neg(2), 3)");
      expect(formatter.format(mul(add(2, 3), 2))).toBe("mul(add(2, 3), 2)");
      expect(formatter.format(mul(sub(2, 3), 2))).toBe("mul(sub(2, 3), 2)");
      expect(formatter.format(mul(mul(2, 3), 2))).toBe("mul(mul(2, 3), 2)");
      expect(formatter.format(mul(div(2, 3), 2))).toBe("mul(div(2, 3), 2)");
      expect(formatter.format(mul(pow(2, 3), 2))).toBe("mul(pow(2, 3), 2)");
    });

    it("should format division", () => {
      expect(formatter.format(div(1, 2))).toBe("div(1, 2)");
      expect(formatter.format(div(1, neg(2)))).toBe("div(1, neg(2))");
      expect(formatter.format(div(1, add(2, 3)))).toBe("div(1, add(2, 3))");
      expect(formatter.format(div(1, sub(2, 3)))).toBe("div(1, sub(2, 3))");
      expect(formatter.format(div(1, mul(2, 3)))).toBe("div(1, mul(2, 3))");
      expect(formatter.format(div(1, div(2, 3)))).toBe("div(1, div(2, 3))");
      expect(formatter.format(div(1, pow(2, 3)))).toBe("div(1, pow(2, 3))");

      expect(formatter.format(div(neg(2), 3))).toBe("div(neg(2), 3)");
      expect(formatter.format(div(add(2, 3), 2))).toBe("div(add(2, 3), 2)");
      expect(formatter.format(div(sub(2, 3), 2))).toBe("div(sub(2, 3), 2)");
      expect(formatter.format(div(mul(2, 3), 2))).toBe("div(mul(2, 3), 2)");
      expect(formatter.format(div(div(2, 3), 2))).toBe("div(div(2, 3), 2)");
      expect(formatter.format(div(pow(2, 3), 2))).toBe("div(pow(2, 3), 2)");
    });

    it("should format exponentiation", () => {
      expect(formatter.format(pow(1, 2))).toBe("pow(1, 2)");

      expect(formatter.format(pow(1, neg(2)))).toBe("pow(1, neg(2))");
      expect(formatter.format(pow(1, add(2, 3)))).toBe("pow(1, add(2, 3))");
      expect(formatter.format(pow(1, sub(2, 3)))).toBe("pow(1, sub(2, 3))");
      expect(formatter.format(pow(1, mul(2, 3)))).toBe("pow(1, mul(2, 3))");
      expect(formatter.format(pow(1, div(2, 3)))).toBe("pow(1, div(2, 3))");
      expect(formatter.format(pow(1, pow(2, 3)))).toBe("pow(1, pow(2, 3))");

      expect(formatter.format(pow(neg(2), 3))).toBe("pow(neg(2), 3)");
      expect(formatter.format(pow(add(2, 3), 2))).toBe("pow(add(2, 3), 2)");
      expect(formatter.format(pow(sub(2, 3), 2))).toBe("pow(sub(2, 3), 2)");
      expect(formatter.format(pow(mul(2, 3), 2))).toBe("pow(mul(2, 3), 2)");
      expect(formatter.format(pow(div(2, 3), 2))).toBe("pow(div(2, 3), 2)");
      expect(formatter.format(pow(pow(2, 3), 2))).toBe("pow(pow(2, 3), 2)");
    });
  });
});
