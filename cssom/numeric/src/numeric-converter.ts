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
 * @public
 */
export class NumericConverter
  extends NumericSegment<CssNumericRegistryImpl>
  implements CssNumericConverterImpl
{
  /**
   * https://www.w3.org/TR/css-typed-om-1/#create-a-sum-value
   *
   * To create a sum value from a CSSNumericValue `this`, the steps differ
   * based on this’s class:
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
  public toMathSum($this: CssNumericValue, ...units: string[]): CssMathSum {
    // eslint-disable-next-line @typescript-eslint/no-meaningless-void-operator
    return never(void [$this, units]);
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
  public toUnitValue($this: CssNumericValue, unit: string): CssUnitValue {
    // eslint-disable-next-line @typescript-eslint/no-meaningless-void-operator
    return never(void [$this, unit]);
  }

  /**
   * The W3C specification does not describe how to convert CSSMathClamp
   * objects to sum value.
   */
  protected createSumValueFromMathClamp($this: CssMathClamp): NumericSum {
    // eslint-disable-next-line @typescript-eslint/no-meaningless-void-operator
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
  protected createSumValueFromMathInvert($this: CssMathInvert): NumericSum {
    // eslint-disable-next-line @typescript-eslint/no-meaningless-void-operator
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
  protected createSumValueFromMathMax($this: CssMathMax): NumericSum {
    // eslint-disable-next-line @typescript-eslint/no-meaningless-void-operator
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
  protected createSumValueFromMathMin($this: CssMathMin): NumericSum {
    // eslint-disable-next-line @typescript-eslint/no-meaningless-void-operator
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
  protected createSumValueFromMathNegate($this: CssMathNegate): NumericSum {
    // eslint-disable-next-line @typescript-eslint/no-meaningless-void-operator
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
  protected createSumValueFromMathProduct($this: CssMathProduct): NumericSum {
    // eslint-disable-next-line @typescript-eslint/no-meaningless-void-operator
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
  protected createSumValueFromMathSum($this: CssMathSum): NumericSum {
    // eslint-disable-next-line @typescript-eslint/no-meaningless-void-operator
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
    pair: [num: number, unit: NumericUnit],
  ): CssUnitValue {
    return new this.impl.CSSUnitValue(pair[0], pair[1]);
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
