import { describe, expect, it } from "@jest/globals";

import type { CssMathSum, CssUnitValue } from "@positron/css-numeric";

import { Numeric } from "./numeric";
import { NumericComparer } from "./numeric-comparer";
import { NumericConverter } from "./numeric-converter";
import { NumericFactory } from "./numeric-factory";
import { NumericHelpers } from "./numeric-helpers";
import { NumericMathValue } from "./numeric-math-value";
import { NumericParser } from "./numeric-parser";
import { NumericSerializer } from "./numeric-serializer";
import { NumericStorage } from "./numeric-storage";
import { NumericType } from "./numeric-type";
import { NumericValue } from "./numeric-value";

describe(`class ${Numeric.name}`, () => {
  const numeric = new Numeric({
    Comparer: NumericComparer,
    Converter: NumericConverter,
    CSS: NumericHelpers,
    Factory: NumericFactory,
    MathValue: NumericMathValue,
    NumericType,
    NumericValue,
    Parser: NumericParser,
    Serializer: NumericSerializer,
    Storage: NumericStorage,
  });

  const {
    CSS,
    CSSMathClamp,
    CSSMathInvert,
    CSSMathMax,
    CSSMathMin,
    CSSMathNegate,
    CSSMathProduct,
    CSSMathSum,
    CSSMathValue,
    CSSNumericValue,
    CSSUnitValue,
  } = numeric;

  it("should construct unit values and expose `value`, `unit`, and \
      `type()`", () => {
    const px = CSS.px(10);

    expect(px).toBeInstanceOf(CSSUnitValue);
    expect(px).toBeInstanceOf(CSSNumericValue);
    expect(px.value).toBe(10);
    expect(px.unit).toBe("px");
    expect(px.type()).toEqual({ length: 1 });
    expect(px.toString()).toBe("10px");
  });

  it("should collapse same-unit arithmetic and build math expressions \
      for mixed units", () => {
    expect(CSS.px(10).add(CSS.px(5)).toString()).toBe("15px");
    expect(CSS.px(10).sub(CSS.px(4)).toString()).toBe("6px");
    expect(CSS.px(10).mul(3).toString()).toBe("30px");
    expect(CSS.px(10).div(2).toString()).toBe("5px");

    const sum = CSS.px(10).add(CSS.percent(50));

    expect(sum).toBeInstanceOf(CSSMathSum);
    expect(sum).toBeInstanceOf(CSSMathValue);
    expect((sum as CssMathSum).operator).toBe("sum");
    expect(sum.toString()).toBe("calc(10px + 50%)");
    expect(sum.type()).toEqual({ length: 1, percentHint: "length" });
  });

  it("should compare numeric values structurally via `.equals()`", () => {
    expect(CSS.px(10).equals(new CSSUnitValue(10, "PX"))).toBe(true);
    expect(CSS.px(10).equals(CSS.px(20))).toBe(false);
    expect(
      CSS.px(1)
        .add(CSS.percent(2))
        .equals(CSS.px(1).add(CSS.percent(2))),
    ).toBe(true);
    expect(
      CSS.px(1)
        .add(CSS.percent(2))
        .equals(CSS.percent(2).add(CSS.px(1))),
    ).toBe(false);
  });

  it("should construct `CSSMathClamp`, `CSSMathMin`, `CSSMathMax`, \
      `CSSMathNegate`, `CSSMathInvert`, and `CSSMathProduct`", () => {
    expect(new CSSMathClamp(1, 2, 3).operator).toBe("clamp");
    expect(new CSSMathMin(1, 2).operator).toBe("min");
    expect(new CSSMathMax(1, 2).operator).toBe("max");
    expect(new CSSMathNegate(CSS.px(5)).toString()).toBe("calc(-5px)");
    expect(new CSSMathInvert(CSS.px(5)).toString()).toBe("calc(1 / 5px)");
    expect(new CSSMathProduct(CSS.px(2), CSS.em(3)).toString()).toBe(
      "calc(2px * 3em)",
    );
  });

  describe(".createSumValue($this)", () => {
    it("should convert compatible unit values to canonical units", () => {
      const sum = numeric.createSumValue(CSS.in(1));

      expect(sum).toHaveLength(1);
      expect(sum[0].value).toBe(96);
      expect([...sum[0].units]).toEqual([["px", 1]]);
    });

    it("should convert unitless numbers to an empty unit map", () => {
      const sum = numeric.createSumValue(CSS.number(42));

      expect(sum).toHaveLength(1);
      expect(sum[0].value).toBe(42);
      expect(sum[0].units.size).toBe(0);
    });

    it("should negate all items when `$this` is a `CSSMathNegate`", () => {
      const expr = new CSSMathNegate(
        new CSSMathSum(CSS.px(10), CSS.percent(50)),
      );
      const sum = numeric.createSumValue(expr);

      expect(sum).toHaveLength(2);
      expect(sum[0].value).toBe(-10);
      expect([...sum[0].units]).toEqual([["px", 1]]);
      expect(sum[1].value).toBe(-50);
      expect([...sum[1].units]).toEqual([["percent", 1]]);
    });

    it("should invert value and negate powers when `$this` is a \
        `CSSMathInvert`", () => {
      const sum = numeric.createSumValue(new CSSMathInvert(CSS.in(2)));

      expect(sum).toHaveLength(1);
      expect(sum[0].value).toBeCloseTo(1 / 192);
      expect([...sum[0].units]).toEqual([["px", -1]]);
    });

    it("should throw `TypeError` when inverting zero or a multi-term \
        sum", () => {
      expect(() =>
        numeric.createSumValue(new CSSMathInvert(CSS.px(0))),
      ).toThrow(TypeError);

      expect(() =>
        numeric.createSumValue(
          new CSSMathInvert(new CSSMathSum(CSS.px(10), CSS.em(5))),
        ),
      ).toThrow(TypeError);
    });

    it("should evaluate `CSSMathMin`, `CSSMathMax`, and `CSSMathClamp` for \
        matching units", () => {
      const maxSum = numeric.createSumValue(
        new CSSMathMax(CSS.in(1), CSS.px(100)),
      );
      const minSum = numeric.createSumValue(
        new CSSMathMin(CSS.in(1), CSS.px(100)),
      );
      const clampSum = numeric.createSumValue(
        new CSSMathClamp(CSS.px(10), CSS.in(1), CSS.px(50)),
      );

      expect(maxSum[0].value).toBe(100);
      expect([...maxSum[0].units]).toEqual([["px", 1]]);
      expect(minSum[0].value).toBe(96);
      expect([...minSum[0].units]).toEqual([["px", 1]]);
      expect(clampSum[0].value).toBe(50);
      expect([...clampSum[0].units]).toEqual([["px", 1]]);
    });

    it("should throw `TypeError` when `CSSMathMin`, `CSSMathMax`, or \
        `CSSMathClamp` have incompatible units", () => {
      expect(() =>
        numeric.createSumValue(new CSSMathMax(CSS.px(10), CSS.em(5))),
      ).toThrow(TypeError);

      expect(() =>
        numeric.createSumValue(
          new CSSMathClamp(CSS.px(10), CSS.percent(50), CSS.px(100)),
        ),
      ).toThrow(TypeError);
    });

    it("should combine like units and keep distinct compatible units in \
        `CSSMathSum`", () => {
      const sum = numeric.createSumValue(
        new CSSMathSum(
          CSS.px(10), //
          CSS.in(1),
          CSS.percent(25),
          CSS.percent(25),
        ),
      );

      expect(sum).toHaveLength(2);
      expect(sum[0].value).toBe(106);
      expect([...sum[0].units]).toEqual([["px", 1]]);
      expect(sum[1].value).toBe(50);
      expect([...sum[1].units]).toEqual([["percent", 1]]);
    });

    it("should throw `TypeError` in `CSSMathSum` when operand types cannot \
        be added", () => {
      expect(() =>
        numeric.createSumValue(new CSSMathSum(CSS.px(10), CSS.deg(10))),
      ).toThrow(TypeError);
    });

    it("should distribute products and cancel opposite unit powers in \
        `CSSMathProduct`", () => {
      const sum = numeric.createSumValue(
        new CSSMathProduct(
          new CSSMathSum(CSS.px(10), CSS.em(2)),
          new CSSMathInvert(CSS.px(2)),
        ),
      );

      expect(sum).toHaveLength(2);
      expect(sum[0].value).toBe(5);
      expect(sum[0].units.size).toBe(0);
      expect(sum[1].value).toBe(1);
      expect([...sum[1].units]).toEqual([
        ["em", 1],
        ["px", -1],
      ]);
    });
  });

  describe(".to(unit)", () => {
    it("should convert compatible units regardless of case", () => {
      const inFromPx = CSS.px(96).to("in");
      const pxFromIn = CSS.in(2).to("PX");
      const degFromTurn = CSS.turn(0.5).to("deg");
      const pctFromPct = CSS.percent(25).to("%");

      expect(inFromPx).toBeInstanceOf(CSSUnitValue);
      expect(inFromPx.value).toBe(1);
      expect(inFromPx.unit).toBe("in");
      expect(pxFromIn.value).toBe(192);
      expect(pxFromIn.unit).toBe("px");
      expect(degFromTurn.value).toBe(180);
      expect(degFromTurn.unit).toBe("deg");
      expect(pctFromPct.value).toBe(25);
      expect(pctFromPct.unit).toBe("percent");
    });

    it("should simplify reducible math expressions into a single unit \
        value", () => {
      const sumResult = CSS.px(96).add(CSS.in(1)).to("in");
      const ratioResult = CSS.px(10).div(CSS.px(2)).to("number");

      expect(sumResult.value).toBe(2);
      expect(sumResult.unit).toBe("in");
      expect(ratioResult.value).toBe(5);
      expect(ratioResult.unit).toBe("number");
    });

    it("should throw `SyntaxError` when `unit` is invalid", () => {
      expect(() => CSS.px(10).to("unknown")).toThrow(SyntaxError);
      expect(() => CSS.px(10).to("")).toThrow(SyntaxError);
    });

    it("should throw `TypeError` when `$this` has incompatible units or \
        multiple terms", () => {
      expect(() => CSS.px(10).to("em")).toThrow(TypeError);
      expect(() => CSS.px(10).to("deg")).toThrow(TypeError);
      expect(() => CSS.percent(50).to("px")).toThrow(TypeError);
      expect(() => CSS.px(10).add(CSS.em(2)).to("px")).toThrow(TypeError);
      expect(() => CSS.px(10).mul(CSS.px(2)).to("px")).toThrow(TypeError);
    });
  });

  describe(".toSum(...units)", () => {
    it("should simplify and sort terms by unit code point when `units` is \
        empty", () => {
      const expr = new CSSMathSum(
        CSS.em(2),
        CSS.px(10),
        CSS.percent(50),
        CSS.in(1),
      );
      const sum = expr.toSum();

      expect(sum).toBeInstanceOf(CSSMathSum);
      expect(sum.toString()).toBe("calc(2em + 50% + 106px)");
      expect([...sum.values].map((v) => (v as CssUnitValue).unit)).toEqual([
        "em",
        "percent",
        "px",
      ]);
    });

    it("should convert and distribute values across the requested \
        `units`", () => {
      const expr = new CSSMathSum(CSS.in(1), CSS.px(96), CSS.percent(25));
      const sum = expr.toSum("in", "%", "px");

      expect(sum.values).toHaveLength(3);
      expect((sum.values[0] as CssUnitValue).value).toBe(2);
      expect((sum.values[0] as CssUnitValue).unit).toBe("in");
      expect((sum.values[1] as CssUnitValue).value).toBe(25);
      expect((sum.values[1] as CssUnitValue).unit).toBe("percent");
      expect((sum.values[2] as CssUnitValue).value).toBe(0);
      expect((sum.values[2] as CssUnitValue).unit).toBe("px");
    });

    it("should throw `SyntaxError` before `TypeError` when any unit in \
        `units` is invalid", () => {
      expect(() => CSS.px(10).add(CSS.em(2)).toSum("unknown")).toThrow(
        SyntaxError,
      );
      expect(() => CSS.px(10).toSum("px", "")).toThrow(SyntaxError);
    });

    it("should throw `TypeError` when `$this` contains units not covered by \
        `units`", () => {
      expect(() => CSS.px(10).add(CSS.em(2)).toSum("px")).toThrow(TypeError);
      expect(() => CSS.px(10).toSum("deg")).toThrow(TypeError);
      expect(() => CSS.px(10).mul(CSS.px(2)).toSum()).toThrow(TypeError);
    });
  });
});
