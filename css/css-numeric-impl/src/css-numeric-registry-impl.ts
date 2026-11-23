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
 * The {@link CssNumericRegistryImpl} interface provides access to registered
 * CSS Typed OM constructors and internal slots of `CssNumericValue` objects.
 *
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

  /**
   * The {@link CssNumericRegistryImpl.rectifyNumericValue} method converts a
   * plain number into a `CssUnitValue` or validates a `CssNumericValue`.
   *
   * @param num - A number or `CssNumericValue` instance.
   *
   * @param unit - Optional unit identifier for numeric values (defaults to
   *   `"number"`).
   *
   * @returns A registered `CssNumericValue` instance.
   *
   * @throws `TypeError` If `num` is a foreign `CssNumericValue` or invalid.
   */
  rectifyNumericValue(num: CssNumberish, unit?: string): CssNumericValue;

  /**
   * The {@link CssNumericRegistryImpl.setMathClamp} method initializes the
   * internal slots of a `CssMathClamp` instance.
   *
   * @param $this - The `CssMathClamp` instance being constructed.
   *
   * @param lower - The minimum bound value.
   *
   * @param value - The preferred value.
   *
   * @param upper - The maximum bound value.
   *
   * @throws `TypeError` If arguments have incompatible types.
   */
  setMathClamp(
    $this: CssMathClamp,
    lower: CssNumberish,
    value: CssNumberish,
    upper: CssNumberish,
  ): void;

  /**
   * The {@link CssNumericRegistryImpl.setMathInvert} method initializes the
   * internal slots of a `CssMathInvert` instance.
   *
   * @param $this - The `CssMathInvert` instance being constructed.
   *
   * @param arg - The operand value to invert.
   */
  setMathInvert($this: CssMathInvert, arg: CssNumberish): void;

  /**
   * The {@link CssNumericRegistryImpl.setMathMax} method initializes the
   * internal slots of a `CssMathMax` instance.
   *
   * @param $this - The `CssMathMax` instance being constructed.
   *
   * @param args - Operand values to compare.
   *
   * @throws `SyntaxError` If `args` is empty.
   *
   * @throws `TypeError` If operands have incompatible types.
   */
  setMathMax($this: CssMathMax, args: readonly CssNumberish[]): void;

  /**
   * The {@link CssNumericRegistryImpl.setMathMin} method initializes the
   * internal slots of a `CssMathMin` instance.
   *
   * @param $this - The `CssMathMin` instance being constructed.
   *
   * @param args - Operand values to compare.
   *
   * @throws `SyntaxError` If `args` is empty.
   *
   * @throws `TypeError` If operands have incompatible types.
   */
  setMathMin($this: CssMathMin, args: readonly CssNumberish[]): void;

  /**
   * The {@link CssNumericRegistryImpl.setMathNegate} method initializes the
   * internal slots of a `CssMathNegate` instance.
   *
   * @param $this - The `CssMathNegate` instance being constructed.
   *
   * @param arg - The operand value to negate.
   */
  setMathNegate($this: CssMathNegate, arg: CssNumberish): void;

  /**
   * The {@link CssNumericRegistryImpl.setMathProduct} method initializes the
   * internal slots of a `CssMathProduct` instance.
   *
   * @param $this - The `CssMathProduct` instance being constructed.
   *
   * @param args - Operand values to multiply.
   *
   * @throws `SyntaxError` If `args` is empty.
   *
   * @throws `TypeError` If operands cannot be multiplied.
   */
  setMathProduct($this: CssMathProduct, args: readonly CssNumberish[]): void;

  /**
   * The {@link CssNumericRegistryImpl.setMathSum} method initializes the
   * internal slots of a `CssMathSum` instance.
   *
   * @param $this - The `CssMathSum` instance being constructed.
   *
   * @param args - Operand values to sum.
   *
   * @throws `SyntaxError` If `args` is empty.
   *
   * @throws `TypeError` If operands have incompatible types.
   */
  setMathSum($this: CssMathSum, args: readonly CssNumberish[]): void;

  /**
   * The {@link CssNumericRegistryImpl.setUnitValue} method initializes the
   * internal slots of a `CssUnitValue` instance.
   *
   * @param $this - The `CssUnitValue` instance being constructed.
   *
   * @param value - The finite numeric value.
   *
   * @param unit - The validated {@link NumericUnit} identifier.
   *
   * @throws `TypeError` If `unit` is invalid.
   */
  setUnitValue($this: CssUnitValue, value: Double, unit: NumericUnit): void;
}
