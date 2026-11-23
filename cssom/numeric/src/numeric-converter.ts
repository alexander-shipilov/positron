import type {
  CssMathClamp,
  CssMathInvert,
  CssMathMax,
  CssMathMin,
  CssMathNegate,
  CssMathProduct,
  CssMathSum,
  CssNumericValue,
  CssUnitValue,
} from "@positron/css-numeric";
import type {
  CssNumericConverterImpl,
  CssNumericRegistryImpl,
  NumericSum,
  NumericSumItem,
  NumericUnit,
} from "@positron/css-numeric-impl";
import { NUMBER_UNIT, NumericUnitMap } from "@positron/css-numeric-impl";
import {
  CssCanonicalUnits,
  CssCompatibleUnits,
  toCanonical,
} from "@positron/css-unit";
import { never } from "@positron/lang";

import { NumericSegment } from "./numeric-segment";

/**
 * The {@link NumericConverter} class implements unit conversion and sum-value
 * reduction algorithms for {@link @positron/css-numeric#CssNumericValue}
 * instances.
 *
 * @public
 */
export class NumericConverter
  extends NumericSegment<CssNumericRegistryImpl>
  implements CssNumericConverterImpl
{
  /**
   * The {@link NumericConverter.createSumValue} method converts a
   * {@link @positron/css-numeric#CssNumericValue} into a normalized
   * {@link @positron/css-numeric-impl#NumericSum} list.
   *
   * @remarks
   *   See https://www.w3.org/TR/css-typed-om-1/#create-a-sum-value.
   *
   * @param $this - The numeric value to convert into a sum value.
   *
   * @returns A non-empty {@link @positron/css-numeric-impl#NumericSum} list of
   *   canonicalized terms.
   *
   * @throws `TypeError` If `$this` cannot be expressed as a valid sum value.
   */
  public createSumValue($this: CssNumericValue): NumericSum {
    const { impl } = this;

    switch (true) {
      case $this instanceof impl.CSSMathClamp:
        return this.createSumValueFromMathClamp($this);
      case $this instanceof impl.CSSMathInvert:
        return this.createSumValueFromMathInvert($this);
      case $this instanceof impl.CSSMathMax:
        return this.createSumValueFromMathMax($this);
      case $this instanceof impl.CSSMathMin:
        return this.createSumValueFromMathMin($this);
      case $this instanceof impl.CSSMathNegate:
        return this.createSumValueFromMathNegate($this);
      case $this instanceof impl.CSSMathProduct:
        return this.createSumValueFromMathProduct($this);
      case $this instanceof impl.CSSMathSum:
        return this.createSumValueFromMathSum($this);
      case $this instanceof impl.CSSUnitValue:
        return this.createSumValueFromUnitValue($this);
      default:
        return never("Unknown value");
    }
  }

  /**
   * The {@link NumericConverter.toMathSum} method converts a
   * {@link @positron/css-numeric#CssNumericValue} into a `CssMathSum`
   * expressed in the specified target `units`.
   *
   * @remarks
   *   See https://www.w3.org/TR/css-typed-om-1/#dom-cssnumericvalue-tosum.
   *
   * @param $this - The numeric value to convert.
   *
   * @param units - Target unit identifiers. When empty, simplifies `$this`
   *   into a minimal sum sorted by unit code points.
   *
   * @returns A `CssMathSum` containing converted `CssUnitValue` terms.
   *
   * @throws `SyntaxError` If any unit identifier in `units` is invalid.
   *
   * @throws `TypeError` If `$this` cannot be expressed in the requested
   *   `units`.
   */
  public toMathSum($this: CssNumericValue, ...units: string[]): CssMathSum {
    // eslint-disable-next-line @typescript-eslint/no-meaningless-void-operator
    return never(void [$this, units]);
  }

  /**
   * The {@link NumericConverter.toUnitValue} method converts a
   * {@link @positron/css-numeric#CssNumericValue} into a single `CssUnitValue`
   * with the specified
   * `unit`.
   *
   * @remarks
   *   See https://www.w3.org/TR/css-typed-om-1/#dom-cssnumericvalue-to.
   *
   * @param $this - The numeric value to convert.
   *
   * @param unit - Target unit identifier.
   *
   * @returns A `CssUnitValue` expressed in `unit`.
   *
   * @throws `SyntaxError` If `unit` is not a valid unit identifier.
   *
   * @throws `TypeError` If `$this` cannot be resolved to a single value
   *   compatible with `unit`.
   */
  public toUnitValue($this: CssNumericValue, unit: string): CssUnitValue {
    // eslint-disable-next-line @typescript-eslint/no-meaningless-void-operator
    return never(void [$this, unit]);
  }

  /**
   * The {@link NumericConverter.createSumValueFromMathClamp} method creates a
   * sum value from a `CssMathClamp` expression.
   *
   * @remarks
   *   The W3C specification does not define sum-value conversion for
   *   `CSSMathClamp`.
   *
   * @param $this - The clamp expression to convert.
   *
   * @returns A {@link @positron/css-numeric-impl#NumericSum} representing the
   *   clamp expression.
   *
   * @throws `TypeError` If the clamp expression cannot be converted.
   */
  protected createSumValueFromMathClamp($this: CssMathClamp): NumericSum {
    // eslint-disable-next-line @typescript-eslint/no-meaningless-void-operator
    return never(void $this);
  }

  /**
   * The {@link NumericConverter.createSumValueFromMathInvert} method creates a
   * sum value from a `CssMathInvert` expression.
   *
   * @remarks
   *   See https://www.w3.org/TR/css-typed-om-1/#create-a-sum-value.
   *
   * @param $this - The invert expression to convert.
   *
   * @returns A {@link @positron/css-numeric-impl#NumericSum} with inverted
   *   value and negated unit powers.
   *
   * @throws `TypeError` If the inner sum value has more than one term.
   */
  protected createSumValueFromMathInvert($this: CssMathInvert): NumericSum {
    // eslint-disable-next-line @typescript-eslint/no-meaningless-void-operator
    return never(void $this);
  }

  /**
   * The {@link NumericConverter.createSumValueFromMathMax} method creates a
   * sum
   * value from a `CssMathMax` expression.
   *
   * @remarks
   *   See https://www.w3.org/TR/css-typed-om-1/#create-a-sum-value.
   *
   * @param $this - The `max()` expression to convert.
   *
   * @returns A {@link @positron/css-numeric-impl#NumericSum} containing the
   *   maximum single-term entry.
   *
   * @throws `TypeError` If operands have multiple terms or mismatched unit
   *   maps.
   */
  protected createSumValueFromMathMax($this: CssMathMax): NumericSum {
    // eslint-disable-next-line @typescript-eslint/no-meaningless-void-operator
    return never(void $this);
  }

  /**
   * The {@link NumericConverter.createSumValueFromMathMin} method creates a
   * sum
   * value from a `CssMathMin` expression.
   *
   * @remarks
   *   See https://www.w3.org/TR/css-typed-om-1/#create-a-sum-value.
   *
   * @param $this - The `min()` expression to convert.
   *
   * @returns A {@link @positron/css-numeric-impl#NumericSum} containing the
   *   minimum single-term entry.
   *
   * @throws `TypeError` If operands have multiple terms or mismatched unit
   *   maps.
   */
  protected createSumValueFromMathMin($this: CssMathMin): NumericSum {
    // eslint-disable-next-line @typescript-eslint/no-meaningless-void-operator
    return never(void $this);
  }

  /**
   * The {@link NumericConverter.createSumValueFromMathNegate} method creates a
   * sum value from a `CssMathNegate` expression.
   *
   * @remarks
   *   See https://www.w3.org/TR/css-typed-om-1/#create-a-sum-value.
   *
   * @param $this - The negate expression to convert.
   *
   * @returns A {@link @positron/css-numeric-impl#NumericSum} with negated item
   *   values.
   */
  protected createSumValueFromMathNegate($this: CssMathNegate): NumericSum {
    // eslint-disable-next-line @typescript-eslint/no-meaningless-void-operator
    return never(void $this);
  }

  /**
   * The {@link NumericConverter.createSumValueFromMathProduct} method creates
   * a sum value from a `CssMathProduct` expression.
   *
   * @remarks
   *   See https://www.w3.org/TR/css-typed-om-1/#create-a-sum-value.
   *
   * @param $this - The product expression to convert.
   *
   * @returns A {@link @positron/css-numeric-impl#NumericSum} expanded across
   *   all product operands.
   */
  protected createSumValueFromMathProduct($this: CssMathProduct): NumericSum {
    // eslint-disable-next-line @typescript-eslint/no-meaningless-void-operator
    return never(void $this);
  }

  /**
   * The {@link NumericConverter.createSumValueFromMathSum} method creates a
   * sum
   * value from a `CssMathSum` expression.
   *
   * @remarks
   *   See https://www.w3.org/TR/css-typed-om-1/#create-a-sum-value.
   *
   * @param $this - The sum expression to convert.
   *
   * @returns A {@link @positron/css-numeric-impl#NumericSum} with like unit
   *   maps combined.
   *
   * @throws `TypeError` If the combined terms do not form a valid numeric
   *   type.
   */
  protected createSumValueFromMathSum($this: CssMathSum): NumericSum {
    // eslint-disable-next-line @typescript-eslint/no-meaningless-void-operator
    return never(void $this);
  }

  /**
   * The {@link NumericConverter.createSumValueFromUnitValue} method creates a
   * sum value from a `CssUnitValue` object.
   *
   * @remarks
   *   See https://www.w3.org/TR/css-typed-om-1/#create-a-sum-value.
   *
   * @param $this - The unit value to convert.
   *
   * @returns A single-element {@link @positron/css-numeric-impl#NumericSum}
   *   normalized to its canonical unit when compatible.
   */
  protected createSumValueFromUnitValue($this: CssUnitValue): NumericSum {
    const { impl } = this;
    let { unit, value } = impl.getInternal($this);

    if (CssCompatibleUnits.has(unit) && !CssCanonicalUnits.has(unit)) {
      [value, unit] = toCanonical(value, unit);
    }

    return unit === NUMBER_UNIT
      ? [{ units: new NumericUnitMap(), value }]
      : [{ units: new NumericUnitMap([[unit, 1]]), value }];
  }

  /**
   * The {@link NumericConverter.createUnitValueFromPair} method creates a
   * `CssUnitValue` from a numeric value and unit tuple.
   *
   * @remarks
   *   See
   *   https://www.w3.org/TR/css-typed-om-1/#create-a-cssunitvalue-from-a-pair.
   *
   * @param pair - A tuple `[num, unit]` specifying value and unit identifier.
   *
   * @returns A new `CssUnitValue` instance.
   */
  protected createUnitValueFromPair(
    pair: [num: number, unit: NumericUnit],
  ): CssUnitValue {
    return new this.impl.CSSUnitValue(pair[0], pair[1]);
  }

  /**
   * The {@link NumericConverter.createUnitValueFromSumItem} method creates a
   * `CssUnitValue` from a single
   * {@link @positron/css-numeric-impl#NumericSumItem} .
   *
   * @remarks
   *   See
   *   https://www.w3.org/TR/css-typed-om-1/#create-a-cssunitvalue-from-a-sum-value-item.
   *
   * @param item - The sum item to materialize as a unit value.
   *
   * @returns A new `CssUnitValue` instance.
   *
   * @throws `TypeError` If `item.units` has more than one entry or an
   *   exponent other than `1`.
   */
  protected createUnitValueFromSumItem(item: NumericSumItem): CssUnitValue {
    const { impl } = this;
    const { units, value } = item;

    if (units.size === 0) {
      return new impl.CSSUnitValue(value, NUMBER_UNIT);
    }

    if (units.size === 1) {
      const [unit, power] = [...units][0];

      if (power === 1) {
        return new impl.CSSUnitValue(value, unit);
      }
    }

    return never("TBD", TypeError);
  }
}
