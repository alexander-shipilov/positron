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
 * @public
 */
export class NumericValue
  extends NumericSegment<CssNumericRegistryImpl>
  implements CssNumericValueImpl
{
  /**
   * https://www.w3.org/TR/css-typed-om-1/#dom-cssnumericvalue-div
   *
   * The div(...values) method, when called on a CSSNumericValue `this`,
   * must perform the following steps:
   
   * 1. Replace each item of `values` with the result of rectifying
   *    a numberish value for the item, then inverting the value.
   
   * 2. Return the result of calling the mul() internal algorithm
   *    with `this` and `values`.
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
   * https://www.w3.org/TR/css-typed-om-1/#dom-cssnumericvalue-type
   *
   * The type() method returns a representation of the type of `this`.
   *
   * When called, it must perform the following steps:
   *
   * 1. Let `result` be a new CSSNumericType.
   *
   * 2. For each `baseType` → `power` in the type of `this`,
   *
   *    1. If `power` is not 0, set `result`[`baseType`] to `power`.
   *
   * 3. If the percent hint of `this` is not null,
   *
   *    1. Set percentHint to the percent hint of `this`.
   *
   * 4. Return `result`.
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
   * https://www.w3.org/TR/css-typed-om-1/#cssmath-invert-a-cssnumericvalue
   *
   * To invert a CSSNumericValue `this`:
   *
   * 1. If `this` is a CSSMathInvert object, return `this`’s value internal
   *    slot.
   *
   * 2. If `this` is a CSSUnitValue object with unit internal slot set to
   *    "number":
   *
   *    1. If `this`’s value internal slot is set to 0 or -0,
   *       throw a RangeError.
   *
   *    2. Else return a new CSSUnitValue with the unit internal slot set
   *       to "number", and a value internal slot set to 1 divided
   *       by `this`’s value internal slot.
   *
   * 3. Otherwise, return a new CSSMathInvert object whose value internal
   *    slot is set to `this`.
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
   * https://www.w3.org/TR/css-typed-om-1/#dom-cssnumericvalue-max
   *
   * The max(...`values`) method, when called on a CSSNumericValue `this`,
   * must perform the following steps:
   *
   * 1. Replace each item of `values` with the result of rectifying a
   *    numberish value for the item.
   *
   * 2. If `this` is a CSSMathMax object, prepend the items in `this`’s
   *    values internal slot to `values`. Otherwise, prepend `this`
   *    to `values`.
   *
   * 3. If all of the items in `values` are CSSUnitValues and have the same
   *    unit, return a new CSSUnitValue whose unit internal slot is set
   *    to `this`’s unit internal slot, and value internal slot is set to the
   *    maximum of the value internal slots of the items in `values`.
   *
   * 4. Let `type` be the result of adding the types of every item
   *    in `values`. If `type` is failure, throw a TypeError.
   *
   * 5. Return a new CSSMathMax object whose values internal slot is set
   *    to `values`.
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
   * https://www.w3.org/TR/css-typed-om-1/#dom-cssnumericvalue-min
   *
   * The min(...values) method, when called on a CSSNumericValue `this`, must
   * perform the following steps:
   *
   * 1. Replace each item of `values` with the result of rectifying a
   *    numberish value for the item.
   *
   * 2. If `this` is a CSSMathMin object, prepend the items in `this`’s
   *    values internal slot to `values`. Otherwise, prepend `this`
   *    to `values`.
   *
   * 3. If all of the items in `values` are CSSUnitValues and have the same
   *    unit, return a new CSSUnitValue whose unit internal slot is set
   *    to `this`’s unit internal slot, and value internal slot is set to the
   *    minimum of the value internal slots of the items in `values`.
   *
   * 4. Let `type` be the result of adding the types of every item
   *    in `values`. If `type` is failure, throw a TypeError.
   *
   * 5. Return a new CSSMathMin object whose values internal slot is set
   *    to `values`.
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
   * https://www.w3.org/TR/css-typed-om-1/#dom-cssnumericvalue-mul
   *
   * The mul(...values) method, when called on a CSSNumericValue `this`,
   * must perform the following steps:
   *
   * 1. Replace each item of `values` with the result of rectifying a
   *    numberish value for the item.
   *
   * 2. If `this` is a CSSMathProduct object, prepend the items in `this`’s
   *    values internal slot to `values`. Otherwise, prepend `this`
   *    to `values`.
   *
   * 3. If all of the items in `values` are CSSUnitValues with unit internal
   *    slot set to "number", return a new CSSUnitValue whose unit internal
   *    slot is set to "number", and value internal slot is set to the
   *    product of the value internal slots of the items in `values`.
   *
   *    This multiplication must be done "left to right" - if `values`
   *    is « 1, 2, 3, 4 », the result must be (((1 × 2) × 3) × 4). (This
   *    detail is necessary to ensure interoperability in the presence of
   *    floating-point arithmetic.)
   *
   * 4. If all of the items in `values` are CSSUnitValues with unit internal
   *    slot set to "number" except one which is set to unit, return a
   *    new CSSUnitValue whose unit internal slot is set to unit, and value
   *    internal slot is set to the product of the value internal slots of
   *    the items in `values`.
   *
   *    This multiplication must be done "left to right" - if `values`
   *    is « 1, 2, 3, 4 », the result must be (((1 × 2) × 3) × 4).
   *
   * 5. Let type be the result of multiplying the types of every item
   *    in `values`. If type is failure, throw a TypeError.
   *
   * 6. Return a new CSSMathProduct object whose values internal slot is
   *    set to `values`.
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
   * https://www.w3.org/TR/css-typed-om-1/#cssmath-negate-a-cssnumericvalue
   *
   * To negate a CSSNumericValue `this`:
   *
   * 1. If `this` is a CSSMathNegate object, return `this`’s value internal
   *    slot.
   *
   * 2. If `this` is a CSSUnitValue object, return a new CSSUnitValue with
   *    the same unit internal slot as `this`, and a value internal slot set
   *    to the negation of `this`’s.
   *
   * 3. Otherwise, return a new CSSMathNegate object whose value internal
   *    slot is set to `this`.
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
   * https://www.w3.org/TR/css-typed-om-1/#dom-cssnumericvalue-sub
   *
   * The sub(...`values`) method, when called on a CSSNumericValue this, must
   * perform the following step
   *
   * 1. Replace each item of `values` with the result of rectifying a
   *    numberish value for the item, then negating the value.
   *
   * 2. Return the result of calling the add() internal algorithm with `this`
   *    and `values`.
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
   * https://www.w3.org/TR/css-typed-om-1/#dom-cssnumericvalue-add
   *
   * The add(...values) method, when called on a CSSNumericValue `this`,
   * must perform the following steps:
   *
   * 1. Replace each item of `values` with the result of rectifying a
   *    numberish value for the item.
   *
   * 2. If `this` is a CSSMathSum object, prepend the items in `this`’s
   *    values internal slot to values. Otherwise, prepend `this`
   *    to `values`.
   *
   * 3. If all of the items in `values` are CSSUnitValues and have the same
   *    unit, return a new CSSUnitValue whose unit internal slot is set to
   *    this’s unit internal slot, and value internal slot is set to the sum
   *    of the value internal slots of the items in `values`. This addition
   *    must be done "left to right" - if values is « 1, 2, 3, 4 »,
   *    the result must be (((1 + 2) + 3) + 4). (This detail is necessary to
   *    ensure interoperability in the presence of floating-point arithmetic.)
   *
   * 4. Let `type` be the result of adding the types of every item in values.
   *    If `type` is failure, throw a TypeError.
   *
   * 5. Return a new CSSMathSum object whose values internal slot is set
   *    to `values`.
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
   * https://www.w3.org/TR/css-typed-om-1/#dom-cssnumericvalue-add
   *
   * 3. If all of the items in `values` are CSSUnitValues and have the same
   *    unit, return a new CSSUnitValue whose unit internal slot is set to
   *    this’s unit internal slot, and value internal slot is set to the sum
   *    of the value internal slots of the items in `values`. This addition
   *    must be done "left to right" - if values is « 1, 2, 3, 4 »,
   *    the result must be (((1 + 2) + 3) + 4). (This detail is necessary to
   *    ensure interoperability in the presence of floating-point arithmetic.)
   */
  protected collapseMathAddArgs(
    values: readonly [CssNumericValue, ...CssNumericValue[]],
  ): Nullish<CssUnitValue> {
    return this.collapseSameUnitArgs(values, (acc, value) => acc + value);
  }

  /**
   * https://www.w3.org/TR/css-typed-om-1/#dom-cssnumericvalue-max
   *
   * 3. If all of the items in `values` are CSSUnitValues and have the same
   *    unit, return a new CSSUnitValue whose unit internal slot is set
   *    to `this`’s unit internal slot, and value internal slot is set to the
   *    maximum of the value internal slots of the items in `values`.
   */
  protected collapseMathMaxArgs(
    values: readonly [CssNumericValue, ...CssNumericValue[]],
  ): Nullish<CssUnitValue> {
    return this.collapseSameUnitArgs(values, Math.max);
  }

  /**
   * https://www.w3.org/TR/css-typed-om-1/#dom-cssnumericvalue-min
   *
   * 3. If all of the items in `values` are CSSUnitValues and have the same
   *    unit, return a new CSSUnitValue whose unit internal slot is set
   *    to `this`’s unit internal slot, and value internal slot is set to the
   *    minimum of the value internal slots of the items in `values`.
   */
  protected collapseMathMinArgs(
    values: readonly [CssNumericValue, ...CssNumericValue[]],
  ): Nullish<CssUnitValue> {
    return this.collapseSameUnitArgs(values, Math.min);
  }

  /**
   * https://www.w3.org/TR/css-typed-om-1/#dom-cssnumericvalue-mul
   *
   * 3. If all of the items in `values` are CSSUnitValues with unit internal
   *    slot set to "number", return a new CSSUnitValue whose unit internal
   *    slot is set to "number", and value internal slot is set to the
   *    product of the value internal slots of the items in `values`.
   *
   *    This multiplication must be done "left to right" - if `values`
   *    is « 1, 2, 3, 4 », the result must be (((1 × 2) × 3) × 4). (This
   *    detail is necessary to ensure interoperability in the presence of
   *    floating-point arithmetic.)
   *
   * 4. If all of the items in `values` are CSSUnitValues with unit internal
   *    slot set to "number" except one which is set to unit, return a
   *    new CSSUnitValue whose unit internal slot is set to unit, and value
   *    internal slot is set to the product of the value internal slots of
   *    the items in `values`.
   *
   *    This multiplication must be done "left to right" - if `values`
   *    is « 1, 2, 3, 4 », the result must be (((1 × 2) × 3) × 4).
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
   * 3. If all of the items in `values` are CSSUnitValues and have the same
   *    unit, return a new CSSUnitValue whose unit internal slot is set
   *    to `this`’s unit internal slot, and value internal slot is set to the
   *    [result] of the value internal slots of the items in `values`.
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
   * 1. Replace each item of `values` with the result of rectifying a
   *    numberish value for the item.
   *
   * 2. If `this` is a CSSMath[Object] object, prepend the items in `this`’s
   *    values internal slot to values. Otherwise, prepend `this` to `values`.
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
