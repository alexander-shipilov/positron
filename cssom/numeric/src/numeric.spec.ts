import { describe, expect, it } from "@jest/globals";

import type { CssMathSum } from "@positron/css-numeric";

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
});
