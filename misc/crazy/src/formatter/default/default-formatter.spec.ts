import { describe, expect, it } from "@jest/globals";

import { add, div, mul, neg, pow, sub } from "../../@fixtures";

import { DefaultFormatter } from "./default-formatter";

describe("DefaultFormatter", () => {
  describe(`#${DefaultFormatter.format.name}(operand)`, () => {
    it("should format negation", () => {
      expect(DefaultFormatter.format(neg(1))).toBe("neg(1)");
      expect(DefaultFormatter.format(neg(neg(1)))).toBe("neg(neg(1))");

      expect(DefaultFormatter.format(neg(add(2, 3)))).toBe("neg(add(2, 3))");
      expect(DefaultFormatter.format(neg(sub(2, 3)))).toBe("neg(sub(2, 3))");
      expect(DefaultFormatter.format(neg(mul(2, 3)))).toBe("neg(mul(2, 3))");
      expect(DefaultFormatter.format(neg(div(2, 3)))).toBe("neg(div(2, 3))");
      expect(DefaultFormatter.format(neg(pow(2, 3)))).toBe("neg(pow(2, 3))");
    });

    it("should format addition", () => {
      expect(DefaultFormatter.format(add(1, 2))).toBe("add(1, 2)");

      expect(DefaultFormatter.format(add(1, neg(2)))).toBe("add(1, neg(2))");
      expect(DefaultFormatter.format(add(1, add(2, 3)))).toBe(
        "add(1, add(2, 3))",
      );
      expect(DefaultFormatter.format(add(1, sub(2, 3)))).toBe(
        "add(1, sub(2, 3))",
      );
      expect(DefaultFormatter.format(add(1, mul(2, 3)))).toBe(
        "add(1, mul(2, 3))",
      );
      expect(DefaultFormatter.format(add(1, div(2, 3)))).toBe(
        "add(1, div(2, 3))",
      );
      expect(DefaultFormatter.format(add(1, pow(2, 3)))).toBe(
        "add(1, pow(2, 3))",
      );

      expect(DefaultFormatter.format(add(neg(3), 2))).toBe("add(neg(3), 2)");
      expect(DefaultFormatter.format(add(add(3, 2), 1))).toBe(
        "add(add(3, 2), 1)",
      );
      expect(DefaultFormatter.format(add(sub(3, 2), 1))).toBe(
        "add(sub(3, 2), 1)",
      );
      expect(DefaultFormatter.format(add(mul(3, 2), 1))).toBe(
        "add(mul(3, 2), 1)",
      );
      expect(DefaultFormatter.format(add(div(3, 2), 1))).toBe(
        "add(div(3, 2), 1)",
      );
      expect(DefaultFormatter.format(add(pow(3, 2), 1))).toBe(
        "add(pow(3, 2), 1)",
      );
    });

    it("should format subtraction", () => {
      expect(DefaultFormatter.format(sub(1, 2))).toBe("sub(1, 2)");

      expect(DefaultFormatter.format(sub(1, neg(2)))).toBe("sub(1, neg(2))");
      expect(DefaultFormatter.format(sub(1, add(2, 3)))).toBe(
        "sub(1, add(2, 3))",
      );
      expect(DefaultFormatter.format(sub(1, sub(2, 3)))).toBe(
        "sub(1, sub(2, 3))",
      );
      expect(DefaultFormatter.format(sub(1, mul(2, 3)))).toBe(
        "sub(1, mul(2, 3))",
      );
      expect(DefaultFormatter.format(sub(1, div(2, 3)))).toBe(
        "sub(1, div(2, 3))",
      );
      expect(DefaultFormatter.format(sub(1, pow(2, 3)))).toBe(
        "sub(1, pow(2, 3))",
      );

      expect(DefaultFormatter.format(sub(neg(2), 3))).toBe("sub(neg(2), 3)");
      expect(DefaultFormatter.format(sub(add(2, 3), 2))).toBe(
        "sub(add(2, 3), 2)",
      );
      expect(DefaultFormatter.format(sub(sub(2, 3), 2))).toBe(
        "sub(sub(2, 3), 2)",
      );
      expect(DefaultFormatter.format(sub(mul(2, 3), 2))).toBe(
        "sub(mul(2, 3), 2)",
      );
      expect(DefaultFormatter.format(sub(div(2, 3), 2))).toBe(
        "sub(div(2, 3), 2)",
      );
      expect(DefaultFormatter.format(sub(pow(2, 3), 2))).toBe(
        "sub(pow(2, 3), 2)",
      );
    });

    it("should format multiplication", () => {
      expect(DefaultFormatter.format(mul(1, 2))).toBe("mul(1, 2)");

      expect(DefaultFormatter.format(mul(1, neg(2)))).toBe("mul(1, neg(2))");
      expect(DefaultFormatter.format(mul(1, add(2, 3)))).toBe(
        "mul(1, add(2, 3))",
      );
      expect(DefaultFormatter.format(mul(1, sub(2, 3)))).toBe(
        "mul(1, sub(2, 3))",
      );
      expect(DefaultFormatter.format(mul(1, mul(2, 3)))).toBe(
        "mul(1, mul(2, 3))",
      );
      expect(DefaultFormatter.format(mul(1, div(2, 3)))).toBe(
        "mul(1, div(2, 3))",
      );
      expect(DefaultFormatter.format(mul(1, pow(2, 3)))).toBe(
        "mul(1, pow(2, 3))",
      );

      expect(DefaultFormatter.format(mul(neg(2), 3))).toBe("mul(neg(2), 3)");
      expect(DefaultFormatter.format(mul(add(2, 3), 2))).toBe(
        "mul(add(2, 3), 2)",
      );
      expect(DefaultFormatter.format(mul(sub(2, 3), 2))).toBe(
        "mul(sub(2, 3), 2)",
      );
      expect(DefaultFormatter.format(mul(mul(2, 3), 2))).toBe(
        "mul(mul(2, 3), 2)",
      );
      expect(DefaultFormatter.format(mul(div(2, 3), 2))).toBe(
        "mul(div(2, 3), 2)",
      );
      expect(DefaultFormatter.format(mul(pow(2, 3), 2))).toBe(
        "mul(pow(2, 3), 2)",
      );
    });

    it("should format division", () => {
      expect(DefaultFormatter.format(div(1, 2))).toBe("div(1, 2)");
      expect(DefaultFormatter.format(div(1, neg(2)))).toBe("div(1, neg(2))");
      expect(DefaultFormatter.format(div(1, add(2, 3)))).toBe(
        "div(1, add(2, 3))",
      );
      expect(DefaultFormatter.format(div(1, sub(2, 3)))).toBe(
        "div(1, sub(2, 3))",
      );
      expect(DefaultFormatter.format(div(1, mul(2, 3)))).toBe(
        "div(1, mul(2, 3))",
      );
      expect(DefaultFormatter.format(div(1, div(2, 3)))).toBe(
        "div(1, div(2, 3))",
      );
      expect(DefaultFormatter.format(div(1, pow(2, 3)))).toBe(
        "div(1, pow(2, 3))",
      );

      expect(DefaultFormatter.format(div(neg(2), 3))).toBe("div(neg(2), 3)");
      expect(DefaultFormatter.format(div(add(2, 3), 2))).toBe(
        "div(add(2, 3), 2)",
      );
      expect(DefaultFormatter.format(div(sub(2, 3), 2))).toBe(
        "div(sub(2, 3), 2)",
      );
      expect(DefaultFormatter.format(div(mul(2, 3), 2))).toBe(
        "div(mul(2, 3), 2)",
      );
      expect(DefaultFormatter.format(div(div(2, 3), 2))).toBe(
        "div(div(2, 3), 2)",
      );
      expect(DefaultFormatter.format(div(pow(2, 3), 2))).toBe(
        "div(pow(2, 3), 2)",
      );
    });

    it("should format exponentiation", () => {
      expect(DefaultFormatter.format(pow(1, 2))).toBe("pow(1, 2)");

      expect(DefaultFormatter.format(pow(1, neg(2)))).toBe("pow(1, neg(2))");
      expect(DefaultFormatter.format(pow(1, add(2, 3)))).toBe(
        "pow(1, add(2, 3))",
      );
      expect(DefaultFormatter.format(pow(1, sub(2, 3)))).toBe(
        "pow(1, sub(2, 3))",
      );
      expect(DefaultFormatter.format(pow(1, mul(2, 3)))).toBe(
        "pow(1, mul(2, 3))",
      );
      expect(DefaultFormatter.format(pow(1, div(2, 3)))).toBe(
        "pow(1, div(2, 3))",
      );
      expect(DefaultFormatter.format(pow(1, pow(2, 3)))).toBe(
        "pow(1, pow(2, 3))",
      );

      expect(DefaultFormatter.format(pow(neg(2), 3))).toBe("pow(neg(2), 3)");
      expect(DefaultFormatter.format(pow(add(2, 3), 2))).toBe(
        "pow(add(2, 3), 2)",
      );
      expect(DefaultFormatter.format(pow(sub(2, 3), 2))).toBe(
        "pow(sub(2, 3), 2)",
      );
      expect(DefaultFormatter.format(pow(mul(2, 3), 2))).toBe(
        "pow(mul(2, 3), 2)",
      );
      expect(DefaultFormatter.format(pow(div(2, 3), 2))).toBe(
        "pow(div(2, 3), 2)",
      );
      expect(DefaultFormatter.format(pow(pow(2, 3), 2))).toBe(
        "pow(pow(2, 3), 2)",
      );
    });
  });
});
