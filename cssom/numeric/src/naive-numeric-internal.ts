/* eslint-disable @typescript-eslint/no-meaningless-void-operator */

import type { CssNumberish } from "@positron/css-numeric";
import {
  CssCanonicalUnits,
  CssCompatibleUnits,
  toCanonical,
} from "@positron/css-unit";
import { assertFinite, isNumber, never } from "@positron/lang";

import type { MathClamp, MathClampClass } from "./numeric-impl/math-clamp";
import type { MathInvert, MathInvertClass } from "./numeric-impl/math-invert";
import type { MathMax, MathMaxClass } from "./numeric-impl/math-max";
import type { MathMin, MathMinClass } from "./numeric-impl/math-min";
import type { MathNegate, MathNegateClass } from "./numeric-impl/math-negate";
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
import type {
  NumericValue,
  NumericValueClass,
} from "./numeric-impl/numeric-value";
import type { Sum, SumItem } from "./numeric-impl/sum";
import type { Unit } from "./numeric-impl/unit";
import type { UnitValue, UnitValueClass } from "./numeric-impl/unit-value";
import {
  $lower,
  $unit,
  $upper,
  $value,
  $values,
} from "./numeric-impl/internal";
import { NUMBER_UNIT } from "./numeric-impl/number";
import { UnitMap } from "./numeric-impl/unit";

export abstract class NaiveNumericInternal {
  public abstract readonly MathClamp: MathClampClass;

  public abstract readonly MathInvert: MathInvertClass;

  public abstract readonly MathMax: MathMaxClass;

  public abstract readonly MathMin: MathMinClass;

  public abstract readonly MathNegate: MathNegateClass;

  public abstract readonly MathProduct: MathProductClass;

  public abstract readonly MathSum: MathSumClass;

  public abstract readonly MathUnary: MathUnaryClass;

  public abstract readonly MathValue: MathValueClass;

  public abstract readonly MathVariadic: MathVariadicClass;

  public abstract readonly NumericValue: NumericValueClass;

  public abstract readonly UnitValue: UnitValueClass;

  /**
   * https://www.w3.org/TR/css-typed-om-1/#create-a-sum-value
   *
   * To create a sum value from a CSSNumericValue `this`, the steps differ
   * based on this’s class:
   */
  protected createSumValue($this: NumericValue): Sum {
    switch (true) {
      case $this instanceof this.MathClamp:
        return this.createSumValueFromMathClamp($this);
      case $this instanceof this.MathInvert:
        return this.createSumValueFromMathInvert($this);
      case $this instanceof this.MathMax:
        return this.createSumValueFromMathMax($this);
      case $this instanceof this.MathMin:
        return this.createSumValueFromMathMin($this);
      case $this instanceof this.MathNegate:
        return this.createSumValueFromMathNegate($this);
      case $this instanceof this.MathProduct:
        return this.createSumValueFromMathProduct($this);
      case $this instanceof this.MathSum:
        return this.createSumValueFromMathSum($this);
      case $this instanceof this.UnitValue:
        return this.createSumValueFromUnitValue($this);
      default:
        return never("Unknown value");
    }
  }

  protected createSumValueFromMathClamp($this: MathClamp): Sum {
    return never(void $this);
  }

  /**
   * https://www.w3.org/TR/css-typed-om-1/#create-a-sum-value
   *
   * CSSMathInvert
   *
   * 1. Let `values` be the result of creating a sum value from `this`’s
   *    value internal slot.
   *
   * 2. If `values` is failure, return failure.
   *
   * 3. If the length of `values` is more than one, return failure.
   *
   * 4. Invert (find the reciprocal of) the value of the item in `values`,
   *    and negate the value of each entry in its unit map.
   *
   * 5. Return values.
   */
  protected createSumValueFromMathInvert($this: MathInvert): Sum {
    return never(void $this);
  }

  /**
   * https://www.w3.org/TR/css-typed-om-1/#create-a-sum-value
   *
   * CSSMathMax
   *
   * 1. Let `args` be the result of creating a sum value for each item
   *    in `this`’s values internal slot.
   *
   * 2. If any item of `args` is failure, or has a length greater than
   *    one, return failure.
   *
   * 3. If not all of the unit maps among the items of `args` are
   *    identical, return failure.
   *
   * 4. Return the item of `args` whose sole item has the largest value.
   */
  protected createSumValueFromMathMax($this: MathMax): Sum {
    return never(void $this);
  }

  /**
   * https://www.w3.org/TR/css-typed-om-1/#create-a-sum-value
   *
   * CSSMathMin
   *
   * 1. Let `args` be the result of creating a sum value for each item
   *    in `this`’s values internal slot.
   *
   * 2. If any item of `args` is failure, or has a length greater than
   *    one, return failure.
   *
   * 3. If not all of the unit maps among the items of `args` are
   *    identical, return failure.
   *
   * 4. Return the item of `args` whose sole item has the smallest value.
   */
  protected createSumValueFromMathMin($this: MathMin): Sum {
    return never(void $this);
  }

  /**
   * https://www.w3.org/TR/css-typed-om-1/#create-a-sum-value
   *
   * CSSMathNegate
   *
   * 1. Let `values` be the result of creating a sum value from `this`’s
   *    value internal slot.
   *
   * 2. If `values` is failure, return failure.
   *
   * 3. Negate the value of each item of `values`.
   *
   * 4. Return `values`.
   */
  protected createSumValueFromMathNegate($this: MathNegate): Sum {
    return never(void $this);
  }

  /**
   * https://www.w3.org/TR/css-typed-om-1/#create-a-sum-value
   *
   * CSSMathProduct
   *
   * 1. Let `values` initially be the sum value «(1, «[ ]»)». (I.e. what
   *    you’d get from 1.)
   *
   * 2. For each `item` in this’s values internal slot:
   *
   *    1. Let `new values` be the result of creating a sum value
   *       from `item`. Let `temp` initially be an empty list.
   *
   *    2. If `new values` is failure, return failure.
   *
   *    3. For each `item1` in `values`:
   *
   *       1. For each `item2` in `new values`:
   *
   *          1. Let `item` be a tuple with its value set to the product of
   *             the values of `item1` and `item2`, and its unit map set to
   *             the product of the unit maps of `item1` and `item2`, with
   *             all entries with a zero value removed.
   *
   *          2. Append `item` to `temp`.
   *
   *    4. Set `values` to `temp`.
   *
   * 3. Return `values`.
   */
  protected createSumValueFromMathProduct($this: MathProduct): Sum {
    return never(void $this);
  }

  /**
   * https://www.w3.org/TR/css-typed-om-1/#create-a-sum-value
   *
   * CSSMathSum
   *
   * 1. Let `values` initially be an empty list.
   *
   * 2. For each `item` in `this`’s values internal slot:
   *
   *    1. Let `value` be the result of creating a sum value from `item`.
   *       If `value` is failure, return failure.
   *
   *    2. For each `subvalue` of `value`:
   *
   *       1. If `values` already contains an item with the same unit map
   *          as `subvalue`, increment that item’s value by the value
   *          of `subvalue`.
   *
   *       2. Otherwise, append `subvalue` to `values`.
   *
   * 3. Create a type from the unit map of each item of `values`, and add all
   *    the types together. If the result is failure, return failure.
   *
   * 4. Return `values`.
   */
  protected createSumValueFromMathSum($this: MathSum): Sum {
    return never(void $this);
  }

  /**
   * https://www.w3.org/TR/css-typed-om-1/#create-a-sum-value
   *
   * CSSUnitValue
   *
   * 1. Let `unit` be the value of `this`’s unit internal slot, and `value`
   *    be the value of `this`’s value internal slot.
   *
   * 2. If `unit` is a member of a set of compatible units, and is not the
   *    set’s canonical unit, multiply `value` by the conversion ratio
   *    between `unit` and the canonical unit, and change `unit` to the
   *    canonical unit.
   *
   * 3. If `unit` is "number", return «(`value`, «[ ]»)».
   *
   * 4. Otherwise, return «(`value`, «[`unit` → 1]»)».
   */
  protected createSumValueFromUnitValue($this: UnitValue): Sum {
    let { [$unit]: unit, [$value]: value } = $this;

    if (CssCompatibleUnits.has(unit) && !CssCanonicalUnits.has(unit)) {
      [value, unit] = toCanonical(value, unit);
    }

    return unit === NUMBER_UNIT
      ? [{ units: new UnitMap(), value }]
      : [{ units: new UnitMap([[unit, 1]]), value }];
  }

  /**
   * https://www.w3.org/TR/css-typed-om-1/#create-a-cssunitvalue-from-a-pair
   *
   * To create a CSSUnitValue from a pair (`num`, `unit`), return a new
   * CSSUnitValue object with its value internal slot set to `num`, and its
   * unit internal slot set to `unit`.
   *
   * Note: This is a spec-internal algorithm, meant simply to make it easier
   * to create unit values in algorithms when needed.
   */
  protected createUnitValueFromPair(
    pair: [num: number, unit: Unit],
  ): UnitValue {
    return new this.UnitValue(pair[0], pair[1]);
  }

  /**
   * https://www.w3.org/TR/css-typed-om-1/#create-a-cssunitvalue-from-a-sum-value-item
   *
   * When asked to create a CSSUnitValue from a sum value item `item`,
   * perform the following steps:
   *
   * 1. If `item` has more than one entry in its unit map, return failure.
   *
   * 2. If `item` has no entries in its unit map, return a new CSSUnitValue
   *    whose unit internal slot is set to "number", and whose value internal
   *    slot is set to `item`’s value.
   *
   * 3. Otherwise, `item` has a single entry in its unit map.
   *    If that entry’s value is anything other than 1, return failure.
   *
   * 4. Otherwise, return a new CSSUnitValue whose unit internal slot is set
   *    to that entry’s key, and whose value internal slot is set to `item`’s
   *    value.
   */
  protected createUnitValueFromSumItem(item: SumItem): UnitValue {
    const { units, value } = item;

    if (units.size === 0) {
      return new this.UnitValue(value, NUMBER_UNIT);
    }

    if (units.size === 1) {
      const [unit, power] = [...units][0];

      if (power === 1) {
        return new this.UnitValue(value, unit);
      }
    }

    return never("TBD", TypeError);
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
  protected inv($this: NumericValue): NumericValue {
    const { MathInvert, UnitValue } = this;

    return $this instanceof MathInvert
      ? $this[$value]
      : $this instanceof UnitValue && $this[$unit] === NUMBER_UNIT
        ? new UnitValue(
            assertFinite(1 / $this[$value], "Can't divide-by-zero", RangeError),
            $this[$unit],
          )
        : new MathInvert($this);
  }

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
  protected isEqual($this: NumericValue, value: NumericValue): boolean {
    switch (true) {
      case $this instanceof this.MathClamp:
        return this.isEqualMathClamp($this, value);
      case $this instanceof this.MathInvert:
        return this.isEqualMathInvert($this, value);
      case $this instanceof this.MathMax:
        return this.isEqualMathMax($this, value);
      case $this instanceof this.MathMin:
        return this.isEqualMathMin($this, value);
      case $this instanceof this.MathNegate:
        return this.isEqualMathNegate($this, value);
      case $this instanceof this.MathProduct:
        return this.isEqualMathProduct($this, value);
      case $this instanceof this.MathSum:
        return this.isEqualMathSum($this, value);
      case $this instanceof this.UnitValue:
        return this.isEqualUnitValue($this, value);
      default:
        return never("Unknown value");
    }
  }

  /**
   * The W3C specification does not describe how to compare CSSMathClamp
   * objects for equality.
   */
  protected isEqualMathClamp($this: MathClamp, value: NumericValue): boolean {
    return (
      value instanceof this.MathClamp &&
      this.isEqual($this[$lower], value[$lower]) &&
      this.isEqual($this[$upper], value[$upper]) &&
      this.isEqual($this[$value], value[$value])
    );
  }

  /**
   * https://www.w3.org/TR/css-typed-om-1/#equal-numeric-value
   *
   * 1. If `value1` and `value2` are not members of the same interface,
   *    return false.
   *
   * 4. Assert: `value1` and `value2` are both CSSMathNegates or
   *    CSSMathInverts.
   *
   * 5. Return whether `value1`’s value and `value2`’s value are equal
   *    numeric values.
   */
  protected isEqualMathInvert($this: MathInvert, value: NumericValue): boolean {
    return (
      value instanceof this.MathInvert && this.isEqualMathUnary($this, value)
    );
  }

  /**
   * https://www.w3.org/TR/css-typed-om-1/#equal-numeric-value
   *
   * 1. If `value1` and `value2` are not members of the same interface,
   *    return false.
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
   */
  protected isEqualMathMax($this: MathMax, value: NumericValue): boolean {
    return (
      value instanceof this.MathMax && this.isEqualMathVariadic($this, value)
    );
  }

  /**
   * https://www.w3.org/TR/css-typed-om-1/#equal-numeric-value
   *
   * 1. If `value1` and `value2` are not members of the same interface,
   *    return false.
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
   */
  protected isEqualMathMin($this: MathMin, value: NumericValue): boolean {
    return (
      value instanceof this.MathMin && this.isEqualMathVariadic($this, value)
    );
  }

  /**
   * https://www.w3.org/TR/css-typed-om-1/#equal-numeric-value
   *
   * 1. If `value1` and `value2` are not members of the same interface,
   *    return false.
   *
   * 4. Assert: `value1` and `value2` are both CSSMathNegates or
   *    CSSMathInverts.
   *
   * 5. Return whether `value1`’s value and `value2`’s value are equal
   *    numeric values.
   */
  protected isEqualMathNegate($this: MathNegate, value: NumericValue): boolean {
    return (
      value instanceof this.MathNegate && this.isEqualMathUnary($this, value)
    );
  }

  /**
   * https://www.w3.org/TR/css-typed-om-1/#equal-numeric-value
   *
   * 1. If `value1` and `value2` are not members of the same interface,
   *    return false.
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
   */
  protected isEqualMathProduct(
    $this: MathProduct,
    value: NumericValue,
  ): boolean {
    return (
      value instanceof this.MathProduct &&
      this.isEqualMathVariadic($this, value)
    );
  }

  /**
   * https://www.w3.org/TR/css-typed-om-1/#equal-numeric-value
   *
   * 1. If `value1` and `value2` are not members of the same interface,
   *    return false.
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
   */
  protected isEqualMathSum($this: MathSum, value: NumericValue): boolean {
    return (
      value instanceof this.MathSum && this.isEqualMathVariadic($this, value)
    );
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
  protected isEqualMathUnary($this: MathUnary, value: MathUnary): boolean {
    return this.isEqual($this[$value], value[$value]);
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
  protected isEqualMathVariadic(
    $this: MathVariadic,
    value: MathVariadic,
  ): boolean {
    const { [$values]: values } = value;

    return (
      $this[$values].length === values.length &&
      $this[$values].every((item, index) => this.isEqual(item, values[index]))
    );
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
  protected isEqualUnitValue($this: UnitValue, value: NumericValue): boolean {
    return (
      value instanceof this.UnitValue &&
      $this[$unit] === value[$unit] &&
      $this[$value] === value[$value]
    );
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
  protected neg($this: NumericValue): NumericValue {
    return $this instanceof this.MathNegate
      ? $this[$value]
      : $this instanceof this.UnitValue
        ? new this.UnitValue(-$this[$value], $this[$unit])
        : new this.MathNegate($this);
  }

  /**
   * https://www.w3.org/TR/css-typed-om-1/#rectify-a-numberish-value
   *
   * To rectify a numberish value `num`, optionally to a given unit `unit`
   * (defaulting to "number"), perform the following steps:
   *
   * 1. If `num` is a CSSNumericValue, return `num`.
   *
   * 2. If `num` is a double, return a new CSSUnitValue with its value
   *    internal slot set to `num` and its unit internal slot set to `unit`.
   */
  protected rectify(
    num: CssNumberish,
    unit: string = NUMBER_UNIT,
  ): NumericValue {
    return num instanceof this.NumericValue
      ? num
      : isNumber(num)
        ? new this.UnitValue(num, unit)
        : never("Invalid implementation", TypeError);
  }
}
