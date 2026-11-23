import type {
  CssMathVariadic,
  CssNumberish,
  CssNumericType,
  CssNumericValue,
  CssUnitValue,
} from "@positron/css-numeric";
import type {
  CssNumericRegistryImpl,
  CssNumericValueImpl,
} from "@positron/css-numeric-impl";
import type { Instantiable, Nullish } from "@positron/lang";
import { NUMBER_UNIT } from "@positron/css-numeric-impl";
import { never } from "@positron/lang";

import { NumericSegment } from "./numeric-segment";

/**
 * The {@link NumericValue} class implements arithmetic, aggregation, and type
 * inspection operations for {@link @positron/css-numeric#CssNumericValue}
 * instances.
 *
 * @public
 */
export class NumericValue
  extends NumericSegment<CssNumericRegistryImpl>
  implements CssNumericValueImpl
{
  /**
   * The {@link NumericValue.divideNumericValue} method divides `$this` by the
   * supplied `values`.
   *
   * @remarks
   *   See
   *   {@link https://www.w3.org/TR/css-typed-om-1/#dom-cssnumericvalue-div}.
   *
   * @param $this - The dividend numeric value.
   *
   * @param values - The divisor numbers or numeric values.
   *
   * @returns The resulting {@link @positron/css-numeric#CssUnitValue} or
   *   {@link @positron/css-numeric#CssMathProduct}.
   *
   * @throws `TypeError` If an argument has an incompatible or invalid type.
   *
   * @throws `RangeError` If any divisor resolves to `0` or `-0`.
   */
  public divideNumericValue(
    $this: CssNumericValue,
    ...values: CssNumberish[]
  ): CssNumericValue {
    const { impl } = this;

    return this.multiplyNumericValue(
      $this,
      ...values.map((item) =>
        this.invertNumericValue(impl.rectifyNumericValue(item)),
      ),
    );
  }

  /**
   * The {@link NumericValue.getNumericValueType} method returns the public
   * {@link @positron/css-numeric#CssNumericType} representation of `$this`.
   *
   * @remarks
   *   See
   *   {@link https://www.w3.org/TR/css-typed-om-1/#dom-cssnumericvalue-type}.
   *
   * @param $this - The target numeric value.
   *
   * @returns A new {@link @positron/css-numeric#CssNumericType} dictionary
   *   with non-zero exponents.
   */
  public getNumericValueType($this: CssNumericValue): CssNumericType {
    const { type } = this.impl.getInternal($this);

    const result: CssNumericType = {};

    for (const [baseType, power] of type) {
      if (power !== 0) {
        result[baseType] = power;
      }
    }

    if (type.percentHint != null) {
      result.percentHint = type.percentHint;
    }

    return result;
  }

  /**
   * The {@link NumericValue.invertNumericValue} method returns the
   * multiplicative inverse of `$this`.
   *
   * @remarks
   *   See
   *   {@link https://www.w3.org/TR/css-typed-om-1/#cssmath-invert-a-cssnumericvalue}.
   *
   * @param $this - The numeric value to invert.
   *
   * @returns The inverted {@link @positron/css-numeric#CssNumericValue}.
   *
   * @throws `RangeError` If `$this` is a unitless `0` or `-0`.
   */
  public invertNumericValue($this: CssNumericValue): CssNumericValue {
    const { impl } = this;

    if ($this instanceof impl.CSSMathInvert) {
      return impl.getInternal($this).value;
    }

    if ($this instanceof impl.CSSUnitValue) {
      const { unit, value } = impl.getInternal($this);

      if (unit === NUMBER_UNIT) {
        return value === 0
          ? never("Can't divide-by-zero", RangeError)
          : new impl.CSSUnitValue(1 / value, unit);
      }
    }

    return new impl.CSSMathInvert($this);
  }

  /**
   * The {@link NumericValue.maximizeNumericValue} method computes the maximum
   * of `$this` and `nums`.
   *
   * @remarks
   *   See
   *   {@link https://www.w3.org/TR/css-typed-om-1/#dom-cssnumericvalue-max}.
   *
   * @param $this - The first candidate value.
   *
   * @param nums - Additional numbers or numeric values.
   *
   * @returns A collapsed {@link @positron/css-numeric#CssUnitValue} or a
   *   {@link @positron/css-numeric#CssMathMax}.
   *
   * @throws `TypeError` If the candidate types cannot be combined.
   */
  public maximizeNumericValue(
    $this: CssNumericValue,
    ...nums: CssNumberish[]
  ): CssNumericValue {
    const { CSSMathMax } = this.impl;

    const values = this.rectifyMathVariadicArgs(CSSMathMax, $this, nums);

    return this.collapseMathMaxArgs(values) ?? new CSSMathMax(...values);
  }

  /**
   * The {@link NumericValue.minimizeNumericValue} method computes the minimum
   * of `$this` and `nums`.
   *
   * @remarks
   *   See
   *   {@link https://www.w3.org/TR/css-typed-om-1/#dom-cssnumericvalue-min}.
   *
   * @param $this - The first candidate value.
   *
   * @param nums - Additional numbers or numeric values.
   *
   * @returns A collapsed {@link @positron/css-numeric#CssUnitValue} or a
   *   {@link @positron/css-numeric#CssMathMin}.
   *
   * @throws `TypeError` If the candidate types cannot be combined.
   */
  public minimizeNumericValue(
    $this: CssNumericValue,
    ...nums: CssNumberish[]
  ): CssNumericValue {
    const { CSSMathMin } = this.impl;

    const values = this.rectifyMathVariadicArgs(CSSMathMin, $this, nums);

    return this.collapseMathMinArgs(values) ?? new CSSMathMin(...values);
  }

  /**
   * The {@link NumericValue.multiplyNumericValue} method multiplies `$this` by
   * `nums`.
   *
   * @remarks
   *   See
   *   {@link https://www.w3.org/TR/css-typed-om-1/#dom-cssnumericvalue-mul}.
   *
   * @param $this - The multiplicand numeric value.
   *
   * @param nums - Additional numbers or numeric values.
   *
   * @returns A collapsed {@link @positron/css-numeric#CssUnitValue} or a
   *   {@link @positron/css-numeric#CssMathProduct}.
   *
   * @throws `TypeError` If the operand types cannot be multiplied.
   */
  public multiplyNumericValue(
    $this: CssNumericValue,
    ...nums: CssNumberish[]
  ): CssNumericValue {
    const { CSSMathProduct } = this.impl;

    const values = this.rectifyMathVariadicArgs(CSSMathProduct, $this, nums);

    return this.collapseProductArgs(values) ?? new CSSMathProduct(...values);
  }

  /**
   * The {@link NumericValue.negateNumericValue} method returns the additive
   * negation of `$this`.
   *
   * @remarks
   *   See
   *   {@link https://www.w3.org/TR/css-typed-om-1/#cssmath-negate-a-cssnumericvalue}.
   *
   * @param $this - The numeric value to negate.
   *
   * @returns The negated {@link @positron/css-numeric#CssNumericValue}.
   */
  public negateNumericValue($this: CssNumericValue): CssNumericValue {
    const { impl } = this;

    if ($this instanceof impl.CSSMathNegate) {
      return impl.getInternal($this).value;
    }

    if ($this instanceof impl.CSSUnitValue) {
      const { unit, value } = impl.getInternal($this);

      return new impl.CSSUnitValue(-value, unit);
    }

    return new impl.CSSMathNegate($this);
  }

  /**
   * The {@link NumericValue.subtractNumericValue} method subtracts `values`
   * from `$this`.
   *
   * @remarks
   *   See
   *   {@link https://www.w3.org/TR/css-typed-om-1/#dom-cssnumericvalue-sub}.
   *
   * @param $this - The minuend numeric value.
   *
   * @param values - The subtrahend numbers or numeric values.
   *
   * @returns A collapsed {@link @positron/css-numeric#CssUnitValue} or a
   *   {@link @positron/css-numeric#CssMathSum}.
   *
   * @throws `TypeError` If the operand types cannot be combined.
   */
  public subtractNumericValue(
    $this: CssNumericValue,
    ...values: CssNumberish[]
  ): CssNumericValue {
    const { impl } = this;

    return this.summarizeNumericValue(
      $this,
      ...values.map((item) =>
        this.negateNumericValue(impl.rectifyNumericValue(item)),
      ),
    );
  }

  /**
   * The {@link NumericValue.summarizeNumericValue} method adds `nums` to
   * `$this`.
   *
   * @remarks
   *   See
   *   {@link https://www.w3.org/TR/css-typed-om-1/#dom-cssnumericvalue-add}.
   *
   * @param $this - The augend numeric value.
   *
   * @param nums - Additional numbers or numeric values.
   *
   * @returns A collapsed {@link @positron/css-numeric#CssUnitValue} or a
   *   {@link @positron/css-numeric#CssMathSum}.
   *
   * @throws `TypeError` If the operand types cannot be added.
   */
  public summarizeNumericValue(
    $this: CssNumericValue,
    ...nums: CssNumberish[]
  ): CssNumericValue {
    const { impl } = this;
    const values = this.rectifyMathVariadicArgs(impl.CSSMathSum, $this, nums);

    return this.collapseMathAddArgs(values) ?? new impl.CSSMathSum(...values);
  }

  /**
   * The {@link NumericValue.collapseMathAddArgs} method collapses `values`
   * into a single {@link @positron/css-numeric#CssUnitValue} when all items
   * share the same unit.
   *
   * @param values - The rectified operands to sum.
   *
   * @returns A combined {@link @positron/css-numeric#CssUnitValue}, or `null`
   *   if not collapsible.
   */
  protected collapseMathAddArgs(
    values: readonly [CssNumericValue, ...CssNumericValue[]],
  ): Nullish<CssUnitValue> {
    return this.collapseSameUnitArgs(values, (acc, value) => acc + value);
  }

  /**
   * The {@link NumericValue.collapseMathMaxArgs} method collapses `values`
   * into a single {@link @positron/css-numeric#CssUnitValue} when all items
   * share the same unit.
   *
   * @param values - The rectified operands to compare.
   *
   * @returns The maximum {@link @positron/css-numeric#CssUnitValue}, or `null`
   *   if not collapsible.
   */
  protected collapseMathMaxArgs(
    values: readonly [CssNumericValue, ...CssNumericValue[]],
  ): Nullish<CssUnitValue> {
    return this.collapseSameUnitArgs(values, Math.max);
  }

  /**
   * The {@link NumericValue.collapseMathMinArgs} method collapses `values`
   * into a single {@link @positron/css-numeric#CssUnitValue} when all items
   * share the same unit.
   *
   * @param values - The rectified operands to compare.
   *
   * @returns The minimum {@link @positron/css-numeric#CssUnitValue}, or `null`
   *   if not collapsible.
   */
  protected collapseMathMinArgs(
    values: readonly [CssNumericValue, ...CssNumericValue[]],
  ): Nullish<CssUnitValue> {
    return this.collapseSameUnitArgs(values, Math.min);
  }

  /**
   * The {@link NumericValue.collapseProductArgs} method collapses `values`
   * into a single {@link @positron/css-numeric#CssUnitValue} when at most one
   * operand has a unit.
   *
   * @param values - The rectified operands to multiply.
   *
   * @returns The product {@link @positron/css-numeric#CssUnitValue}, or `null`
   *   if not collapsible.
   */
  protected collapseProductArgs(
    values: readonly [CssNumericValue, ...CssNumericValue[]],
  ): Nullish<CssUnitValue> {
    const { impl } = this;
    const { CSSUnitValue } = impl;

    let result = 1;
    let unit = NUMBER_UNIT;

    for (const item of values) {
      if (item instanceof CSSUnitValue) {
        const { unit: itemUnit, value: itemValue } = impl.getInternal(item);

        if (unit === NUMBER_UNIT || itemUnit === NUMBER_UNIT) {
          result *= itemValue;

          if (unit === NUMBER_UNIT) {
            unit = itemUnit;
          }

          continue;
        }
      }

      return null;
    }

    return new CSSUnitValue(result, unit);
  }

  /**
   * The {@link NumericValue.collapseSameUnitArgs} method reduces `values` with
   * `reducer` when every item is a {@link @positron/css-numeric#CssUnitValue}
   * with the same unit.
   *
   * @param values - The rectified operands to reduce.
   *
   * @param reducer - The left-to-right numeric reduction function.
   *
   * @returns The reduced {@link @positron/css-numeric#CssUnitValue}, or `null`
   *   if units differ.
   */
  protected collapseSameUnitArgs(
    values: readonly [CssNumericValue, ...CssNumericValue[]],
    reducer: (acc: number, value: number) => number,
  ): Nullish<CssUnitValue> {
    const { impl } = this;
    const { CSSUnitValue } = impl;

    if (values[0] instanceof CSSUnitValue) {
      let { unit, value: result } = impl.getInternal(values[0]);

      for (let i = 1; i < values.length; i++) {
        const item = values[i];

        if (item instanceof CSSUnitValue) {
          const { unit: itemUnit, value: itemValue } = impl.getInternal(item);

          if (itemUnit === unit) {
            result = reducer(result, itemValue);
            unit = itemUnit;

            continue;
          }
        }

        return null;
      }

      return new CSSUnitValue(result, unit);
    }

    return null;
  }

  /**
   * The {@link NumericValue.rectifyMathVariadicArgs} method flattens `$this`
   * when it matches `MathVariadic` and rectifies all trailing `nums`.
   *
   * @param MathVariadic - The variadic math constructor to unwrap.
   *
   * @param $this - The leading numeric value.
   *
   * @param nums - Additional numberish arguments.
   *
   * @returns A non-empty tuple of rectified
   *   {@link @positron/css-numeric#CssNumericValue} items.
   */
  protected rectifyMathVariadicArgs(
    MathVariadic: Instantiable<CssMathVariadic>,
    $this: CssNumericValue,
    nums: CssNumberish[],
  ): [CssNumericValue, ...CssNumericValue[]] {
    const { impl } = this;
    const args: [CssNumericValue, ...CssNumericValue[]] =
      $this instanceof MathVariadic
        ? [...impl.getInternal($this).values]
        : [$this];

    for (const num of nums) {
      args.push(impl.rectifyNumericValue(num));
    }

    return args;
  }
}
