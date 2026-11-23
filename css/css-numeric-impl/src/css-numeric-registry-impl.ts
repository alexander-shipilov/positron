import type {
  CssMathClamp,
  CssMathInvert,
  CssMathMax,
  CssMathMin,
  CssMathNegate,
  CssMathProduct,
  CssMathSum,
  CssMathUnary,
  CssMathVariadic,
  CssNumberish,
  CssNumericClasses,
  CssNumericValue,
  CssUnitValue,
} from "@positron/css-numeric";

import type { MathClampInternal } from "./internal/math-clamp-internal";
import type { MathInvertInternal } from "./internal/math-invert-internal";
import type { MathMaxInternal } from "./internal/math-max-internal";
import type { MathMinInternal } from "./internal/math-min-internal";
import type { MathNegateInternal } from "./internal/math-negate-internal";
import type { MathProductInternal } from "./internal/math-product-internal";
import type { MathSumInternal } from "./internal/math-sum-internal";
import type { MathUnaryInternal } from "./internal/math-unary-internal";
import type { MathVariadicInternal } from "./internal/math-variadic-internal";
import type { NumericValueInternal } from "./internal/numeric-value-internal";
import type { UnitValueInternal } from "./internal/unit-value-internal";
import type { Double } from "./shared/double";
import type { NumericUnit } from "./unit/numeric-unit";

/**
 * @public
 */
export interface CssNumericRegistryImpl extends CssNumericClasses {
  getInternal(value: CssMathClamp): MathClampInternal;
  getInternal(value: CssMathUnary): MathUnaryInternal;
  getInternal(value: CssMathNegate): MathNegateInternal;
  getInternal(value: CssMathInvert): MathInvertInternal;
  getInternal(value: CssMathVariadic): MathVariadicInternal;
  getInternal(value: CssMathMax): MathMaxInternal;
  getInternal(value: CssMathMin): MathMinInternal;
  getInternal(value: CssMathProduct): MathProductInternal;
  getInternal(value: CssMathSum): MathSumInternal;
  getInternal(value: CssUnitValue): UnitValueInternal;
  getInternal(value: CssNumericValue): NumericValueInternal;
  getInternal(value: never): unknown;

  rectifyNumericValue(num: CssNumberish, unit?: string): CssNumericValue;

  setMathClamp(
    $this: CssMathClamp,
    lower: CssNumberish,
    value: CssNumberish,
    upper: CssNumberish,
  ): void;

  setMathInvert($this: CssMathInvert, arg: CssNumberish): void;

  setMathMax($this: CssMathMax, args: readonly CssNumberish[]): void;

  setMathMin($this: CssMathMin, args: readonly CssNumberish[]): void;

  setMathNegate($this: CssMathNegate, arg: CssNumberish): void;

  setMathProduct($this: CssMathProduct, args: readonly CssNumberish[]): void;

  setMathSum($this: CssMathSum, args: readonly CssNumberish[]): void;

  setUnitValue($this: CssUnitValue, value: Double, unit: NumericUnit): void;
}
