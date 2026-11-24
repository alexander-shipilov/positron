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
 * The {@link NumericComparer} class implements structural equality comparison
 * for `CssNumericValue` trees.
 *
 * @public
 */
export class NumericComparer
  extends NumericSegment<CssNumericRegistryImpl>
  implements CssNumericComparerImpl
{
  /**
   * {@inheritDoc @positron/css-numeric-impl#CssNumericComparerImpl.areEqualNumericValues}
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
   * {@inheritDoc @positron/css-numeric-impl#CssNumericComparerImpl.equalsNumericValue}
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
   * The {@link NumericComparer.areEqualMathClamps} method compares two
   * `CssMathClamp` values by recursively checking their `lower`, `value`, and
   * `upper` slots.
   *
   * @param value1 - The first `CssMathClamp` instance.
   *
   * @param value2 - The candidate `CssNumericValue` to compare against.
   *
   * @returns `true` if `value2` is a `CssMathClamp` with equal operands;
   *   otherwise, `false`.
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
   * The {@link NumericComparer.areEqualMathUnary} method compares two unary
   * math expressions of the same concrete class.
   *
   * @param MathUnary - The expected unary math constructor.
   *
   * @param value1 - The first unary math expression.
   *
   * @param value2 - The candidate `CssNumericValue` to compare against.
   *
   * @returns `true` if `value2` is an instance of `MathUnary` with an equal
   *   operand; otherwise, `false`.
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
   * The {@link NumericComparer.areEqualMathVariadic} method compares two
   * variadic math expressions of the same concrete class.
   *
   * @param MathVariadic - The expected variadic math constructor.
   *
   * @param value1 - The first variadic math expression.
   *
   * @param value2 - The candidate `CssNumericValue` to compare against.
   *
   * @returns `true` if `value2` is an instance of `MathVariadic` with equal
   *   operands in the same order; otherwise, `false`.
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
   * The {@link NumericComparer.areEqualUnitValues} method compares two
   * `CssUnitValue` instances for identical unit and numeric value slots.
   *
   * @param value1 - The first `CssUnitValue` instance.
   *
   * @param value2 - The candidate `CssNumericValue` to compare against.
   *
   * @returns `true` if `value2` is a `CssUnitValue` with equal `unit` and
   *   `value` slots; otherwise, `false`.
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
