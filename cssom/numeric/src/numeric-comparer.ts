import type {
  CssMathClamp,
  CssMathUnary,
  CssMathVariadic,
  CssNumberish,
  CssNumericValue,
  CssUnitValue,
} from "@positron/css-numeric";
import type {
  CssNumericComparerImpl,
  CssNumericRegistryImpl,
} from "@positron/css-numeric-impl";
import type { Instantiable } from "@positron/lang";
import { never } from "@positron/lang";

import { NumericSegment } from "./numeric-segment";

/**
 * @public
 */
export class NumericComparer
  extends NumericSegment<CssNumericRegistryImpl>
  implements CssNumericComparerImpl
{
  /**
   * https://www.w3.org/TR/css-typed-om-1/#equal-numeric-value
   *
   * To determine whether two CSSNumericValues `value1` and `value2` are
   * equal numeric values, perform the following steps:
   *
   * 1. If `value1` and `value2` are not members of the same interface,
   *    return false.
   *
   * 2. If `value1` and `value2` are both CSSUnitValues, return true if they
   *    have equal unit and value internal slots, or false otherwise.
   *
   * 3. If `value1` and `value2` are both CSSMathSums, CSSMathProducts,
   *    CSSMathMins, or CSSMathMaxs:
   *
   *    1. If `value1`’s values and `value2`’s values internal slots have
   *       different sizes, return false.
   *
   *    2. If any item in `value1`’s values internal slot is not an equal
   *       numeric value to the item in `value2`’s values internal slot at
   *       the same index, return false.
   *
   *    3. Return true.
   *
   * 4. Assert: `value1` and `value2` are both CSSMathNegates or
   *    CSSMathInverts.
   *
   * 5. Return whether `value1`’s value and `value2`’s value are equal
   *    numeric values.
   */
  public areEqualNumericValues(
    value1: CssNumericValue,
    value2: CssNumericValue,
  ): boolean {
    const { impl } = this;

    switch (true) {
      case value1 instanceof impl.CSSMathClamp:
        return this.areEqualMathClamps(value1, value2);
      case value1 instanceof impl.CSSMathInvert:
        return this.areEqualMathUnary(impl.CSSMathInvert, value1, value2);
      case value1 instanceof impl.CSSMathNegate:
        return this.areEqualMathUnary(impl.CSSMathNegate, value1, value2);
      case value1 instanceof impl.CSSMathMax:
        return this.areEqualMathVariadic(impl.CSSMathMax, value1, value2);
      case value1 instanceof impl.CSSMathMin:
        return this.areEqualMathVariadic(impl.CSSMathMin, value1, value2);
      case value1 instanceof impl.CSSMathProduct:
        return this.areEqualMathVariadic(impl.CSSMathProduct, value1, value2);
      case value1 instanceof impl.CSSMathSum:
        return this.areEqualMathVariadic(impl.CSSMathSum, value1, value2);
      case value1 instanceof impl.CSSUnitValue:
        return this.areEqualUnitValues(value1, value2);
      default:
        return never("Invalid implementation");
    }
  }

  /**
   * https://www.w3.org/TR/css-typed-om-1/#dom-cssnumericvalue-equals
   *
   * The equals(...values) method, when called on a CSSNumericValue `this`,
   * must perform the following steps:
   *
   * 1. Replace each item of `values` with the result of rectifying a
   *    numberish value for the item.
   *
   * 2. For each item in `values`, if the item is not an equal numeric value
   *    to `this`, return false.
   *
   * 3. Return true.
   */
  public equalsNumericValue(
    $this: CssNumericValue,
    ...values: CssNumberish[]
  ): boolean {
    const { impl } = this;

    return values.every((item) =>
      this.areEqualNumericValues($this, impl.rectifyNumericValue(item)),
    );
  }

  /**
   * The W3C specification does not describe how to compare CSSMathClamp
   * objects for equality.
   */
  protected areEqualMathClamps(
    value1: CssMathClamp,
    value2: CssNumericValue,
  ): boolean {
    const { impl } = this;

    if (value2 instanceof impl.CSSMathClamp) {
      const internal1 = impl.getInternal(value1);
      const internal2 = impl.getInternal(value2);

      return (
        this.areEqualNumericValues(internal1.lower, internal2.lower) &&
        this.areEqualNumericValues(internal1.value, internal2.value) &&
        this.areEqualNumericValues(internal1.upper, internal2.upper)
      );
    }

    return false;
  }

  /**
   * https://www.w3.org/TR/css-typed-om-1/#equal-numeric-value
   *
   * 4. Assert: `value1` and `value2` are both CSSMathNegates or
   *    CSSMathInverts.
   *
   * 5. Return whether `value1`’s value and `value2`’s value are equal
   *    numeric values.
   */
  protected areEqualMathUnary(
    MathUnary: Instantiable<CssMathUnary>,
    value1: CssMathUnary,
    value2: CssNumericValue,
  ): boolean {
    if (value2 instanceof MathUnary) {
      const { impl } = this;

      return this.areEqualNumericValues(
        impl.getInternal(value1).value,
        impl.getInternal(value2).value,
      );
    }

    return false;
  }

  /**
   * https://www.w3.org/TR/css-typed-om-1/#equal-numeric-value
   *
   * 3. If `value1` and `value2` are both CSSMathSums, CSSMathProducts,
   *    CSSMathMins, or CSSMathMaxs:
   *
   *    1. If `value1`’s values and `value2`’s values internal slots have
   *       different sizes, return false.
   *
   *    2. If any item in `value1`’s values internal slot is not an equal
   *       numeric value to the item in `value2`’s values internal slot at
   *       the same index, return false.
   */
  protected areEqualMathVariadic(
    MathVariadic: Instantiable<CssMathVariadic>,
    value1: CssMathVariadic,
    value2: CssNumericValue,
  ): boolean {
    if (value2 instanceof MathVariadic) {
      const { impl } = this;
      const { values: values1 } = impl.getInternal(value1);
      const { values: values2 } = impl.getInternal(value2);

      return (
        values1.length === values2.length &&
        values1.every((item, index) =>
          this.areEqualNumericValues(item, values2[index]),
        )
      );
    }

    return false;
  }

  /**
   * https://www.w3.org/TR/css-typed-om-1/#equal-numeric-value
   *
   * 1. If `value1` and `value2` are not members of the same interface,
   *    return false.
   *
   * 2. If `value1` and `value2` are both CSSUnitValues, return true if they
   *    have equal unit and value internal slots, or false otherwise.
   */
  protected areEqualUnitValues(
    value1: CssUnitValue,
    value2: CssNumericValue,
  ): boolean {
    const { impl } = this;

    if (value2 instanceof impl.CSSUnitValue) {
      const internal1 = impl.getInternal(value1);
      const internal2 = impl.getInternal(value2);

      return (
        internal1.unit === internal2.unit && internal1.value === internal2.value
      );
    }

    return false;
  }
}
