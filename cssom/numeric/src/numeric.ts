/* eslint-disable @typescript-eslint/no-meaningless-void-operator */
// noinspection GrazieStyle,GrazieInspection

import type { CssNumberish, CssNumericType } from "@positron/css-numeric";
import { assertType, error, isNonEmptyArray, never } from "@positron/lang";

import type { MathClamp, MathClampClass } from "./numeric-impl/math-clamp";
import type { MathInvertClass } from "./numeric-impl/math-invert";
import type { MathMax, MathMaxClass } from "./numeric-impl/math-max";
import type { MathMin, MathMinClass } from "./numeric-impl/math-min";
import type { MathNegateClass } from "./numeric-impl/math-negate";
import type {
  MathProduct,
  MathProductClass,
} from "./numeric-impl/math-product";
import type { MathSum, MathSumClass } from "./numeric-impl/math-sum";
import type { MathUnary, MathUnaryClass } from "./numeric-impl/math-unary";
import type { MathValueClass } from "./numeric-impl/math-value";
import type {
  MathVariadic,
  MathVariadicClass,
} from "./numeric-impl/math-variadic";
import type { NumericImpl } from "./numeric-impl/numeric-impl";
import type { NumericImplOpts } from "./numeric-impl/numeric-impl-opts";
import type {
  NumericValue,
  NumericValueClass,
} from "./numeric-impl/numeric-value";
import type { SerializerImpl } from "./numeric-impl/serializer";
import type { Unit } from "./numeric-impl/unit";
import type { UnitValue, UnitValueClass } from "./numeric-impl/unit-value";
import {
  $lower,
  $type,
  $unit,
  $upper,
  $value,
  $values,
} from "./numeric-impl/-internal";
import { NUMBER_UNIT } from "./numeric-impl/number";
import { toDouble } from "./numeric-impl/to-double";
import { Type } from "./numeric-impl/type";
import { toUnit } from "./numeric-impl/unit";
import { NumericInternal } from "./numeric-internal";

export class Numeric extends NumericInternal implements NumericImpl {
  public readonly MathClamp: MathClampClass;

  public readonly MathInvert: MathInvertClass;

  public readonly MathMax: MathMaxClass;

  public readonly MathMin: MathMinClass;

  public readonly MathNegate: MathNegateClass;

  public readonly MathProduct: MathProductClass;

  public readonly MathSum: MathSumClass;

  public readonly MathUnary: MathUnaryClass;

  public readonly MathValue: MathValueClass;

  public readonly MathVariadic: MathVariadicClass;

  public readonly NumericValue: NumericValueClass;

  public readonly UnitValue: UnitValueClass;

  protected readonly serializer: SerializerImpl;

  public constructor(opts: NumericImplOpts) {
    super();

    this.MathClamp = opts.MathClamp(this);
    this.MathInvert = opts.MathInvert(this);
    this.MathMax = opts.MathMax(this);
    this.MathMin = opts.MathMin(this);
    this.MathNegate = opts.MathNegate(this);
    this.MathProduct = opts.MathProduct(this);
    this.MathSum = opts.MathSum(this);
    this.MathUnary = opts.MathUnary(this);
    this.MathValue = opts.MathValue(this);
    this.MathVariadic = opts.MathVariadic(this);
    this.NumericValue = opts.NumericValue(this);
    this.UnitValue = opts.UnitValue(this);

    this.serializer = new opts.Serializer(this);
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
  public add($this: NumericValue, ...nums: CssNumberish[]): NumericValue {
    const { MathSum, UnitValue } = this;

    const values = [
      ...($this instanceof MathSum ? $this[$values] : [$this]),
      ...nums.map((num) => this.rectify(num)),
    ];

    if (this.areSameUnitValues(values)) {
      return new UnitValue(
        values.reduce((max, item) => max + item[$value], 0),
        values[0][$unit],
      );
    }

    return new MathSum(...values);
  }

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
  public div($this: NumericValue, ...values: CssNumberish[]): NumericValue {
    return this.mul(
      $this,
      ...values.map((item) => this.inv(this.rectify(item))),
    );
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
  public equals($this: NumericValue, ...values: CssNumberish[]): boolean {
    return values.every((item) => this.isEqual($this, this.rectify(item)));
  }

  /**
   * https://www.w3.org/TR/css-typed-om-1/#dom-cssmathclamp-cssmathclamp
   *
   * The CSSMathClamp(`lower`, `value`, `upper`) constructor must, when
   * called, perform the following steps:
   *
   * 1. Replace `lower`, `value`, and `upper` with the result of rectifying a
   *    numberish value for each.
   *
   * 2. Let `type` be the result of adding the types of `lower`, `value`,
   *    and `upper`. If `type` is failure, throw a TypeError.
   *
   * 3. Return a new CSSMathClamp whose lower, value, and upper internal
   *    slots are set to `lower`, `value`, and `upper`, respectively.
   */
  public initMathClamp(
    $this: MathClamp,
    lower: CssNumberish,
    value: CssNumberish,
    upper: CssNumberish,
  ): void {
    $this[$lower] = this.rectify(lower);
    $this[$value] = this.rectify(value);
    $this[$upper] = this.rectify(upper);

    $this[$type] = $this[$lower][$type].add(
      $this[$value][$type],
      $this[$upper][$type],
    );
  }

  /**
   * https://www.w3.org/TR/css-typed-om-1/#dom-cssmathsum-cssmathsum
   *
   * The CSSMathSum(...`args`) constructor must, when called, perform the
   * following steps:
   *
   * 1. Replace each item of `args` with the result of rectifying a numberish
   *    value for the item.
   *
   * 2. If `args` is empty, throw a SyntaxError.
   *
   * 3. Let `type` be the result of adding the types of all the items
   *    of `args`. If `type` is failure, throw a TypeError.
   *
   * 4. Return a new CSSMathSum whose values internal slot is set to `args`.
   *
   * https://www.w3.org/TR/css-typed-om-1/#dom-cssmathmax-cssmathmax
   *
   * The CSSMathMin(...`args`) and CSSMathMax(...`args`) constructors are
   * defined identically to the above, except that in the last step they
   * return a new CSSMathMin or CSSMathMax object, respectively.
   */
  public initMathMax($this: MathMax): void {
    const [first, ...rest] = $this[$values];

    $this[$type] = first[$type].add(...rest.map((item) => item[$type]));
  }

  /**
   * https://www.w3.org/TR/css-typed-om-1/#dom-cssmathsum-cssmathsum
   *
   * The CSSMathSum(...`args`) constructor must, when called, perform the
   * following steps:
   *
   * 1. Replace each item of `args` with the result of rectifying a numberish
   *    value for the item.
   *
   * 2. If `args` is empty, throw a SyntaxError.
   *
   * 3. Let `type` be the result of adding the types of all the items
   *    of `args`. If `type` is failure, throw a TypeError.
   *
   * 4. Return a new CSSMathSum whose values internal slot is set to `args`.
   *
   * https://www.w3.org/TR/css-typed-om-1/#dom-cssmathmin-cssmathmin
   *
   * The CSSMathMin(...`args`) and CSSMathMax(...`args`) constructors are
   * defined identically to the above, except that in the last step they
   * return a new CSSMathMin or CSSMathMax object, respectively.
   */
  public initMathMin($this: MathMin): void {
    const [first, ...rest] = $this[$values];

    $this[$type] = first[$type].add(...rest.map((item) => item[$type]));
  }

  /**
   * https://www.w3.org/TR/css-typed-om-1/#dom-cssmathsum-cssmathsum
   *
   * The CSSMathSum(...`args`) constructor must, when called, perform the
   * following steps:
   *
   * 1. Replace each item of `args` with the result of rectifying a numberish
   *    value for the item.
   *
   * 2. If `args` is empty, throw a SyntaxError.
   *
   * 3. Let `type` be the result of adding the types of all the items
   *    of `args`. If `type` is failure, throw a TypeError.
   *
   * 4. Return a new CSSMathSum whose values internal slot is set to `args`.
   *
   * https://www.w3.org/TR/css-typed-om-1/#dom-cssmathproduct-cssmathproduct
   *
   * The CSSMathProduct(...`args`) constructor is defined identically to the
   * above, except that in step 3 it multiplies the types instead of adding,
   * and in the last step it returns a CSSMathProduct.
   */
  public initMathProduct($this: MathProduct): void {
    const [first, ...rest] = $this[$values];

    $this[$type] = first[$type].mul(...rest.map((item) => item[$type]));
  }

  /**
   * https://www.w3.org/TR/css-typed-om-1/#dom-cssmathsum-cssmathsum
   *
   * The CSSMathSum(...`args`) constructor must, when called, perform the
   * following steps:
   *
   * 1. Replace each item of `args` with the result of rectifying a numberish
   *    value for the item.
   *
   * 2. If `args` is empty, throw a SyntaxError.
   *
   * 3. Let `type` be the result of adding the types of all the items
   *    of `args`. If `type` is failure, throw a TypeError.
   *
   * 4. Return a new CSSMathSum whose values internal slot is set to `args`.
   */
  public initMathSum($this: MathSum): void {
    const [first, ...rest] = $this[$values];

    $this[$type] = first[$type].add(...rest.map((item) => item[$type]));
  }

  /**
   * https://www.w3.org/TR/css-typed-om-1/#dom-cssmathnegate-cssmathnegate
   * https://www.w3.org/TR/css-typed-om-1/#dom-cssmathinvert-cssmathinvert
   *
   * 1. Replace arg with the result of rectifying a numberish value for arg.
   *
   * 2. Return a new CSSMathNegate whose value internal slot is set to arg.
   */
  public initMathUnary($this: MathUnary, arg: CssNumberish): void {
    $this[$value] = this.rectify(arg);
    $this[$type] = $this[$value][$type];
  }

  /**
   * https://www.w3.org/TR/css-typed-om-1/#dom-cssmathsum-cssmathsum
   *
   * 1. Replace each item of `args` with the result of rectifying a numberish
   *    value for the item.
   *
   * 2. If `args` is empty, throw a SyntaxError.
   */
  public initMathVariadic($this: MathVariadic, ...args: CssNumberish[]): void {
    $this[$values] = assertType(
      args.map((item) => this.rectify(item)),
      isNonEmptyArray,
      () => error("Arguments can't be empty", SyntaxError),
    );
  }

  /**
   * https://www.w3.org/TR/css-typed-om-1/#dom-cssunitvalue-cssunitvalue
   *
   * The CSSUnitValue(value, unit) constructor must, when called, perform the
   * following steps:
   *
   * 1. If creating a type from `unit` returns failure, throw a TypeError and
   *    abort this algorithm.
   *
   * 2. Return a new CSSUnitValue with its value internal slot set to `value`
   *    and its unit set to `unit`.
   */
  public initUnitValue($this: UnitValue, value: number, unit: string): void {
    $this[$value] = toDouble(value);
    $this[$unit] = toUnit(unit);
    $this[$type] = Type.fromUnit($this[$unit]);
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
  public max($this: NumericValue, ...nums: CssNumberish[]): NumericValue {
    const { MathMax, UnitValue } = this;

    const values = [
      ...($this instanceof MathMax ? $this[$values] : [$this]),
      ...nums.map((num) => this.rectify(num)),
    ];

    if (this.areSameUnitValues(values)) {
      return new UnitValue(
        values.reduce((max, item) => Math.max(max, item[$value]), -Infinity),
        values[0][$unit],
      );
    }

    return new MathMax(...values);
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
  public min($this: NumericValue, ...nums: CssNumberish[]): NumericValue {
    const { MathMin, UnitValue } = this;

    const values = [
      ...($this instanceof MathMin ? $this[$values] : [$this]),
      ...nums.map((num) => this.rectify(num)),
    ];

    if (this.areSameUnitValues(values)) {
      return new UnitValue(
        values.reduce((max, item) => Math.min(max, item[$value]), Infinity),
        values[0][$unit],
      );
    }

    return new MathMin(...values);
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
  // eslint-disable-next-line complexity
  public mul($this: NumericValue, ...nums: CssNumberish[]): NumericValue {
    const { MathProduct, UnitValue } = this;

    const values = [
      ...($this instanceof MathProduct ? $this[$values] : [$this]),
      ...nums.map((num) => this.rectify(num)),
    ];

    let entry: [number, Unit] | null = [1, NUMBER_UNIT];

    for (const value of values) {
      if (entry == null) {
        break;
      }

      entry =
        value instanceof UnitValue
          ? value[$unit] === NUMBER_UNIT
            ? [entry[0] * value[$value], entry[1]]
            : entry[1] === NUMBER_UNIT
              ? [entry[0] * value[$value], value[$unit]]
              : null
          : null;
    }

    return entry ? new UnitValue(...entry) : new MathProduct(...values);
  }

  /**
   * https://www.w3.org/TR/css-typed-om-1/#dom-cssnumericvalue-parse
   *
   * The parse(`cssText`) method, when called, must perform the following
   * steps:
   *
   * 1. Parse a component value from `cssText` and let `result` be the
   *    result. If `result` is a syntax error, throw a SyntaxError and
   *    abort this algorithm.
   *
   * 2. If `result` is not a <number-token>, <percentage-token>,
   *    <dimension-token>, or a math function, throw a SyntaxError and abort
   *    this algorithm.
   *
   * 3. If `result` is a <dimension-token> and creating a type
   *    from `result`’s unit returns failure, throw a SyntaxError and
   *    abort this algorithm.
   *
   * 4. Reify a numeric value `result`, and return the `result`.
   */
  public parse(textCss: string): NumericValue {
    return never(void [textCss]);
  }

  /**
   * https://www.w3.org/TR/css-typed-om-1/#numericvalue-serialization
   */
  public serialize($this: NumericValue): string {
    return this.serializer.serialize($this);
  }

  public setUnitValue($this: UnitValue, value: number): void {
    $this[$value] = toDouble(value);
  }

  /**
   * https://www.w3.org/TR/css-typed-om-1/#dom-cssnumericvalue-sub
   *
   * The sub(...`values`) method, when called on a CSSNumericValue `this`,
   * must perform the following steps:
   *
   * 1. Replace each item of `values` with the result of rectifying a
   *    numberish value for the item, then negating the value.
   *
   * 2. Return the result of calling the add() internal algorithm with `this`
   *    and `values`.
   */
  public sub($this: NumericValue, ...values: CssNumberish[]): NumericValue {
    return this.add(
      $this,
      ...values.map((item) => this.neg(this.rectify(item))),
    );
  }

  /**
   * https://www.w3.org/TR/css-typed-om-1/#dom-cssnumericvalue-to
   *
   * The to(`unit`) method converts an existing CSSNumericValue `this` into
   * another one with the specified `unit`, if possible. When called, it must
   * perform the following steps:
   *
   * 1. Let `type` be the result of creating a type from `unit`.
   *    If `type` is failure, throw a SyntaxError.
   *
   * 2. Let `sum` be the result of creating a sum value from `this`.
   *    If `sum` is failure, throw a TypeError.
   *
   * 3. If `sum` has more than one item, throw a TypeError.
   *    Otherwise, let `item` be the result of creating a CSSUnitValue from
   *    the sole item in `sum`, then converting it to `unit`.
   *    If `item` is failure, throw a TypeError.
   *
   * 4. Return `item`.
   */
  public to($this: NumericValue, unit: string): UnitValue {
    return never(void [$this, unit]);
  }

  /**
   * https://www.w3.org/TR/css-typed-om-1/#dom-cssnumericvalue-tosum
   *
   * The toSum(...units) method converts an existing CSSNumericValue `this`
   * into a CSSMathSum of only CSSUnitValues with the specified `units`, if
   * possible. (It’s like to(), but allows the result to have multiple units
   * in it.) If called without any units, it just simplifies `this` into a
   * minimal sum of CSSUnitValues.
   *
   * When called, it must perform the following steps:
   *
   * 1. For each `unit` in `units`, if the result of creating a type
   *    from `unit` is failure, throw a SyntaxError.
   *
   * 2. Let `sum` be the result of creating a sum value from `this`.
   *    If `sum` is failure, throw a TypeError.
   *
   * 3. Let `values` be the result of creating a CSSUnitValue for each
   *    item in `sum`. If any item of `values` is failure, throw a TypeError.
   *
   * 4. If `units` is empty, sort `values` in code point order according to
   *    the unit internal slot of its items, then return a new CSSMathSum
   *    object whose values internal slot is set to `values`.
   *
   * 5. Otherwise, let `result` initially be an empty list. For each `unit`
   *    in `units`:
   *
   *    1. Let `temp` initially be a new CSSUnitValue whose unit internal
   *       slot is set to `unit` and whose value internal slot is set to 0.
   *
   *    2. For each `value` in `values`:
   *
   *       1. Let `value unit` be `value`’s unit internal slot.
   *
   *       2. If `value unit` is a compatible unit with `unit`, then:
   *
   *          1. Convert `value` to `unit`.
   *
   *          2. Increment `temp`’s value internal slot by the value
   *             of `value`’s value internal slot.
   *
   *          3. Remove `value` from `values`.
   *
   *    3. Append `temp` to `result`.
   *
   * 6. If `values` is not empty, throw a TypeError.
   *    Note: `this` had units that you didn’t ask for.
   *
   * 7. Return a new CSSMathSum object whose values internal slot is set
   *    to `result`.
   */
  public toSum($this: NumericValue, ...units: string[]): MathSum {
    return never(void [$this, units]);
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
  public type($this: NumericValue): CssNumericType {
    const { [$type]: type } = $this;
    const result: CssNumericType = {};

    for (const { baseType, power } of type) {
      if (power !== 0) {
        result[baseType] = power;
      }
    }

    if (type.percentHint != null) {
      result.percentHint = type.percentHint;
    }

    return result;
  }

  protected areSameUnitValues(
    values: NumericValue[],
  ): values is [UnitValue, ...UnitValue[]] {
    const first = values[0];

    return (
      first instanceof this.UnitValue &&
      this.areUnitValuesOf(values, first[$unit])
    );
  }

  protected areUnitValuesOf(
    values: NumericValue[],
    unit: Unit,
  ): values is UnitValue[] {
    const { UnitValue } = this;

    return values.every(
      (item) => item instanceof UnitValue && item[$unit] === unit,
    );
  }
}
