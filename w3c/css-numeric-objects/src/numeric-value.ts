import type { Numberish } from "./numberish";
import type { NumericType } from "./numeric-type";
import type { Unit } from "./unit";
import { MathInvert } from "./math-invert";
import { MathMax } from "./math-max";
import { MathMin } from "./math-min";
import { MathNegate } from "./math-negate";
import { MathProduct } from "./math-product";
import { MathSum } from "./math-sum";
import { rectifyNumberish } from "./rectify-numberish";
import { isUnitNumber, UNIT_NUMBER } from "./unit";
import { UnitValue } from "./unit-value";

export abstract class NumericValue {
  type: NumericType;

  protected constructor(type: NumericType) {
    this.type = type;
  }

  // The add(...values) method, when called on a NumericValue this, must
  // perform the following steps:
  add(...nums: Numberish[]): NumericValue {
    // 1. Replace each `item` of `items` with the result of rectifying a
    // numberish value for the `item`.
    let values = nums.map((item) => rectifyNumberish(item));

    // 2. If `this` is a `MathSum` object, prepend the items in `this`’s
    // [values] internal slot to `values`. Otherwise, prepend `this` to
    // `values`.
    values =
      this instanceof MathSum ? [...this.values, ...values] : [this, ...values];

    // 3. If all of the `items` in `values` are `UnitValue`s and have the same
    // [unit], return a new `UnitValue` whose unit internal slot is set to that
    // `unit`, and value internal slot is set to the sum of the value internal
    // slots of the items in values. This addition must be done "left to right"
    // - if values is « 1, 2, 3, 4 », the result must be (((1 + 2) + 3) + 4).
    // (This detail is necessary to ensure interoperability in the presence of
    // floating-point arithmetic.)
    const [first, ...rest] = values;

    if (
      first instanceof UnitValue &&
      rest.every((item) => first.isSameUnit(item))
    ) {
      return new UnitValue(
        rest.reduce((sum, item) => sum + item.value, first.value),
        first.unit,
      );
    }

    // 4. Let `type` be the result of adding the types of every item in values.
    // If type is failure, throw a TypeError.
    void "'MathSum' performs this check and throws an error";

    // 5. Return a new `MathSum` object whose [values] internal slot is set to
    // `values`.
    return new MathSum(...values);
  }

  // The div(...values) method, when called on a NumericValue this, must
  // perform the following steps:
  div(...nums: Numberish[]): NumericValue {
    // 1. Replace each item of `values` with the result of rectifying a
    // numberish value for the item, then [inverting] the value.
    const values = nums.map((item) => rectifyNumberish(item).inv());

    // 2. Return the result of calling the mul() internal algorithm with `this`
    // and `values`.
    return this.mul(...values);
  }

  equals(value: Numberish): boolean {
    return false;
  }

  // To invert a NumericValue this:
  inv(): NumericValue {
    // 1. If `this` is a `MathInvert` object, return this’s [value] internal
    // slot.
    if (this instanceof MathInvert) {
      return this.value;
    }

    // 2. If `this` is a `UnitValue` object with [unit] internal slot set to
    // "number":
    if (this instanceof UnitValue && this.unit === UNIT_NUMBER) {
      // 2.1. If this’s value internal slot is set to 0 or -0, throw a
      // `RangeError`.
      if (this.value === 0) {
        throw new RangeError("Can't divide-by-zero");
      }

      // 2.2. Else return a new UnitValue with the [unit] internal slot set to
      // "number", and a [value] internal slot set to 1 divided by this’s
      // [value] internal slot.
      return new UnitValue(1 / this.value, UNIT_NUMBER);
    }
    // 3.1. Otherwise, return a new MathInvert object whose [value] internal
    // slot is set to this.
    return new MathInvert(this);
  }

  // The max(...values) method, when called on a NumericValue this, must
  // perform the following steps:
  max(...nums: Numberish[]): NumericValue {
    // 1. Replace each item of `values` with the result of [rectifying a
    // numberish value] for the `item`.
    let values = nums.map((item) => rectifyNumberish(item));

    // 2. If `this` is a `MathMax` object, prepend the items in `this`’s
    // [values] internal slot to `values`. Otherwise, prepend `this` to values.
    values =
      this instanceof MathMax ? [...this.values, ...values] : [this, ...values];

    // 3. If all of the items in values are UnitValues and have the same unit,
    // return a new UnitValue whose unit internal slot is set to that unit,
    // and value internal slot is set to the maximum of the value internal
    // slots of the items in values.
    const [first, ...rest] = values;

    if (
      first instanceof UnitValue &&
      rest.every((item) => first.isSameUnit(item))
    ) {
      return new UnitValue(
        rest.reduce((max, item) => Math.max(max, item.value), first.value),
        first.unit,
      );
    }

    // 4. Let type be the result of adding the types of every item in values. If
    // type is failure, throw a TypeError.
    void "'MathMax' performs this check and throws an error";

    // 5. Return a new MathMax object whose values internal slot is set to
    // values.
    return new MathMax(...values);
  }

  // The min(...values) method, when called on a NumericValue this, must
  // perform the following steps:
  min(...nums: Numberish[]): NumericValue {
    // 1. Replace each item of `values` with the result of [rectifying a
    // numberish value] for the `item`.
    let values = nums.map((item) => rectifyNumberish(item));

    // 2. If `this` is a `MathMin` object, prepend the items in `this`’s
    // [values] internal slot to `values`. Otherwise, prepend `this` to values.
    values =
      this instanceof MathMin ? [...this.values, ...values] : [this, ...values];

    // 3. If all of the items in values are UnitValues and have the same unit,
    // return a new UnitValue whose unit internal slot is set to that unit,
    // and value internal slot is set to the minimum of the value internal
    // slots of the items in values.
    const [first, ...rest] = values;

    if (
      first instanceof UnitValue &&
      rest.every((item) => first.isSameUnit(item))
    ) {
      return new UnitValue(
        rest.reduce((min, item) => Math.min(min, item.value), first.value),
        first.unit,
      );
    }

    // 4. Let type be the result of adding the types of every item in values. If
    // type is failure, throw a TypeError.
    void "'MathMin' performs this check and throws an error";

    // 5. Return a new MathMin object whose values internal slot is set to
    // values.
    return new MathMin(...values);
  }

  // The mul(...values) method, when called on a NumericValue this, must
  // perform the following steps:
  mul(...nums: Numberish[]): NumericValue {
    // 1. Replace each item of values with the result of rectifying a numberish
    // value for the item.
    let values = nums.map((item) => rectifyNumberish(item));

    // 2. If this is a `MathProduct` object, prepend the items in this’s
    // [values] internal slot to `values`. Otherwise, prepend `this` to
    // `values`.
    values =
      this instanceof MathProduct
        ? [...this.values, ...values]
        : [this, ...values];

    if (values.every((item) => item instanceof UnitValue)) {
      const [first, ...rest] = values;

      // 3. If all of the items in values are `UnitValues` with [unit] internal
      // slot set to "number", return a new `UnitValue` whose [unit] internal
      // slot is set to "number", and [value] internal slot is set to the
      // product of the [value] internal slots of the items in `values`.  This
      // multiplication must be done "left to right" - if values is « 1, 2, 3,
      // 4 », the result must be (((1 × 2) × 3) × 4). (This detail is necessary
      // to ensure interoperability in the presence of floating-point
      // arithmetic.)
      if (
        isUnitNumber(first.unit) &&
        rest.every((item) => first.isSameUnit(item))
      ) {
        return new UnitValue(
          rest.reduce((result, item) => result * item.value, first.value),
          first.unit,
        );
      } else {
        // 4. If all of the items in values are `UnitValues` with [unit]
        // internal slot set to "number" except one which is set to `unit`,
        // return a new `UnitValue` whose [unit] internal slot is set to
        // `unit`, and value internal slot is set to the product of the [value]
        // internal slots of the items in `values`. This multiplication must be
        // done "left to right" - if values is « 1, 2, 3, 4 », the result must
        // be (((1 × 2) × 3) × 4).
        const notNumbers = values.filter((item) => !isUnitNumber(item.unit));

        if (notNumbers.length === 1) {
          return new UnitValue(
            rest.reduce((result, item) => result * item.value, first.value),
            notNumbers[0].unit,
          );
        }
      }
    }

    // 5. Let `type` be the result of multiplying the types of every item in
    // `values`. If type is failure, throw a `TypeError`.
    void "'MathProduct' performs this check and throws an error";

    // 6. Return a new `MathProduct` object whose values internal slot is set
    // to values.
    return new MathProduct(...values);
  }

  // To negate a NumericValue this:
  neg(): NumericValue {
    // 1. If this is a MathNegate object, return this’s value internal slot.
    if (this instanceof MathNegate) {
      return this.value;
    }

    // 2. If this is a UnitValue object, return a new UnitValue with the
    // same unit internal slot as this, and a value internal slot set to the
    // negation of this’s.
    if (this instanceof UnitValue) {
      return new UnitValue(-this.value, this.unit);
    }

    // 3. Otherwise, return a new `MathNegate` object whose value internal
    // slot is set to `this`.
    return new MathNegate(this);
  }

  abstract serialize(nested: boolean, parenLess: boolean): string;

  // The sub(...values) method, when called on a NumericValue this, must
  // perform the following steps:
  sub(...nums: Numberish[]): NumericValue {
    // 1. Replace each item of values with the result of rectifying a numberish
    // value for the item, then negating the value.
    const values = nums.map((item) => rectifyNumberish(item).neg());

    // 2. Return the result of calling the add() internal algorithm with this
    // and values.
    return this.add(...values);
  }

  to(unit: string): UnitValue {
    return new UnitValue(1, UNIT_NUMBER);
  }

  toString(): string {
    return "";
  }

  toSum(...units: Unit[]): MathSum {
    return new MathSum();
  }
}
