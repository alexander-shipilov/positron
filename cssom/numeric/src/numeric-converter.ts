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
  CssNumericTypeOperationsImpl,
  NumericSum,
  NumericSumItem,
  NumericTypeImpl,
  NumericUnit,
} from "@positron/css-numeric-impl";
import {
  NUMBER_UNIT,
  NumericUnitMap,
  toNumericUnit,
} from "@positron/css-numeric-impl";
import {
  CssCanonicalUnits,
  CssCompatibleRatios,
  CssCompatibleUnits,
  toCanonical,
  toCompatible,
} from "@positron/css-unit";
import {
  assert,
  assertNonNullish,
  assertTrue,
  error,
  isNonEmptyArray,
  never,
} from "@positron/lang";

import { NumericSegment } from "./numeric-segment";

/**
 * The {@link NumericConverter} class implements unit conversion and sum-value
 * reduction algorithms for {@link @positron/css-numeric#CssNumericValue}
 * instances.
 *
 * @public
 */
export class NumericConverter
  extends NumericSegment<CssNumericRegistryImpl & CssNumericTypeOperationsImpl>
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
        return this.createSumValueFromMathMaxMin($this, Math.max);
      case $this instanceof impl.CSSMathMin:
        return this.createSumValueFromMathMaxMin($this, Math.min);
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
    const { CSSMathSum } = this.impl;
    const targetUnits = units.map((unit) => this.parseNumericUnit(unit));

    const values = this.createSumValue($this).map((item) =>
      this.createUnitValueFromSumItem(item),
    );

    if (targetUnits.length === 0) {
      values.sort((a, b) => (a.unit < b.unit ? -1 : a.unit > b.unit ? 1 : 0));

      return new CSSMathSum(...values);
    }

    return new CSSMathSum(...this.collectMathSumValues(values, targetUnits));
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
    const targetUnit = this.parseNumericUnit(unit);
    const item = this.createSumValueItem($this);

    return this.convertUnitValue(
      this.createUnitValueFromSumItem(item),
      targetUnit,
    );
  }

  /**
   * The {@link NumericConverter.areCompatibleUnits} method checks whether two
   * numeric units are identical or share the same canonical unit.
   *
   * @param unit1 - The first numeric unit.
   *
   * @param unit2 - The second numeric unit.
   *
   * @returns `true` if `unit1` and `unit2` can be converted to each other;
   *   otherwise, `false`.
   */
  protected areCompatibleUnits(
    unit1: NumericUnit,
    unit2: NumericUnit,
  ): boolean {
    return (
      unit1 === unit2 ||
      (CssCompatibleUnits.has(unit1) &&
        CssCompatibleUnits.has(unit2) &&
        CssCompatibleRatios[unit1][1] === CssCompatibleRatios[unit2][1])
    );
  }

  /**
   * The {@link NumericConverter.collectMathSumValues} method accumulates
   * `values` into `CssUnitValue` instances matching `targetUnits`.
   *
   * @param values - The materialized canonical unit values from `$this`.
   *
   * @param targetUnits - The ordered list of requested target units.
   *
   * @returns An array of `CssUnitValue` objects corresponding to
   *   `targetUnits`.
   *
   * @throws `TypeError` If any term in `values` is incompatible with all
   *   `targetUnits`.
   */
  protected collectMathSumValues(
    values: readonly CssUnitValue[],
    targetUnits: readonly NumericUnit[],
  ): CssUnitValue[] {
    const { impl } = this;
    const remaining = [...values];
    const result: CssUnitValue[] = [];

    for (const targetUnit of targetUnits) {
      let total = 0;

      for (let i = 0; i < remaining.length;) {
        const current = remaining[i];
        const currentUnit = impl.getInternal(current).unit;

        if (this.areCompatibleUnits(currentUnit, targetUnit)) {
          total += impl.getInternal(
            this.convertUnitValue(current, targetUnit),
          ).value;
          remaining.splice(i, 1);
        } else {
          i++;
        }
      }

      result.push(new impl.CSSUnitValue(total, targetUnit));
    }

    assertTrue(remaining.length === 0, () =>
      error("Cannot convert to requested units", TypeError),
    );

    return result;
  }

  /**
   * The {@link NumericConverter.convertUnitValue} method converts a single
   * `CssUnitValue` into `targetUnit`.
   *
   * @param item - The source `CssUnitValue`.
   *
   * @param targetUnit - The target
   *   {@link @positron/css-numeric-impl#NumericUnit}.
   *
   * @returns A new `CssUnitValue` expressed in `targetUnit`.
   *
   * @throws `TypeError` If `item` cannot be converted to `targetUnit`.
   */
  protected convertUnitValue(
    item: CssUnitValue,
    targetUnit: NumericUnit,
  ): CssUnitValue {
    const { impl } = this;
    const { unit, value } = impl.getInternal(item);

    if (unit === targetUnit) {
      return new impl.CSSUnitValue(value, targetUnit);
    }

    if (this.areCompatibleUnits(unit, targetUnit)) {
      const [canonicalValue] = toCanonical(value, unit);

      return this.createUnitValueFromPair(
        toCompatible(canonicalValue, targetUnit),
      );
    }

    return never("Incompatible units", TypeError);
  }

  /**
   * The {@link NumericConverter.createSumValueFromMathClamp} method converts a
   * {@link @positron/css-numeric#CssMathClamp} node into a
   * {@link @positron/css-numeric-impl#NumericSum} by evaluating
   * `max(lower, min(value, upper))`.
   *
   * @remarks
   *   CSS Typed OM Level 1 does not define a `CSSMathClamp` branch in
   *   {@link https://w3.org}.
   *   Per CSS Values 4 (`clamp(min, val, max) = max(min, min(val, max))`), all
   *   three operands must resolve to single-item sum values with identical
   *   unit maps.
   *
   * @param $this - The clamp expression to convert.
   *
   * @returns A single-item {@link @positron/css-numeric-impl#NumericSum}.
   *
   * @throws `TypeError` If any operand cannot resolve to a single sum item or
   *   if the operands have incompatible unit maps.
   */
  protected createSumValueFromMathClamp($this: CssMathClamp): NumericSum {
    const { lower, upper, value } = this.impl.getInternal($this);

    const lowerItem = this.createSumValueItem(lower);
    const valueItem = this.createSumValueItem(value);
    const upperItem = this.createSumValueItem(upper);

    assertTrue(
      lowerItem.units.equals(valueItem.units) &&
        lowerItem.units.equals(upperItem.units),
      () => error("Cannot create a sum value", TypeError),
    );

    return [
      this.getMaxMinSumItem(
        lowerItem,
        this.getMaxMinSumItem(valueItem, upperItem, Math.min),
        Math.max,
      ),
    ];
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
    const values = this.createSumValue(this.impl.getInternal($this).value);

    assertTrue(values.length === 1 && values[0].value !== 0, () =>
      error("Cannot create sum value", TypeError),
    );

    return [
      {
        units: new NumericUnitMap(
          [...values[0].units].map(([unit, power]) => [unit, -power]),
        ),
        value: 1 / values[0].value,
      },
    ];
  }

  /**
   * The {@link NumericConverter.createSumValueFromMathMaxMin} method creates a
   * sum value from a `CssMathMax` or `CssMathMin` expressions.
   *
   * @remarks
   *   See https://www.w3.org/TR/css-typed-om-1/#create-a-sum-value.
   *
   * @param $this - The `max()` or `min()` expression to convert.
   *
   * @param maxmin - The max/min function: `Math.max()` or `Math.min()`
   *
   * @returns A {@link @positron/css-numeric-impl#NumericSum} containing the
   *   maximum / minimum single-term entry.
   *
   * @throws `TypeError` If operands have multiple terms or mismatched unit
   *   maps.
   */
  protected createSumValueFromMathMaxMin(
    $this: CssMathMax | CssMathMin,
    maxmin: (value1: number, value2: number) => number,
  ): NumericSum {
    return [
      this.impl
        .getInternal($this)
        .values.map((item) => this.createSumValueItem(item))
        .reduce((max, arg) => {
          assertTrue(arg.units.equals(max.units), () =>
            error("Cannot create a sum value", TypeError),
          );

          return this.getMaxMinSumItem(arg, max, maxmin);
        }),
    ];
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
    return this.createSumValue(this.impl.getInternal($this).value).map(
      ({ units, value }) => ({ units, value: -value }),
    ) as [NumericSumItem, ...NumericSumItem[]];
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
    const { values } = this.impl.getInternal($this);

    let result: NumericSumItem[] = [{ units: new NumericUnitMap(), value: 1 }];

    for (const item of values) {
      const nextValues = this.createSumValue(item);
      const temp: NumericSumItem[] = [];

      for (const item1 of result) {
        for (const item2 of nextValues) {
          temp.push({
            units: item1.units.mul(item2.units),
            value: item1.value * item2.value,
          });
        }
      }

      result = temp;
    }

    return isNonEmptyArray(result)
      ? result
      : never("Cannot create a sum value", TypeError);
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
    const { impl } = this;
    const result: NumericSumItem[] = [];

    for (const item of impl.getInternal($this).values) {
      for (const subvalue of this.createSumValue(item)) {
        const index = result.findIndex(({ units }) =>
          units.equals(subvalue.units),
        );

        if (index === -1) {
          result.push(subvalue);
        } else {
          result[index] = {
            units: result[index].units,
            value: result[index].value + subvalue.value,
          };
        }
      }
    }

    if (isNonEmptyArray(result)) {
      impl.addNumericTypes(
        ...(result.map(({ units }) =>
          impl.createNumericTypeFromUnitMap(units),
        ) as [NumericTypeImpl, ...NumericTypeImpl[]]),
      );

      return result;
    }

    return never("Cannot create a sum value", TypeError);
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
   * The {@link NumericConverter.createSumValueItem} method converts `$this`
   * into a {@link @positron/css-numeric-impl#NumericSum} and asserts that it
   * contains a single item.
   *
   * @param $this - The numeric value to convert.
   *
   * @returns The sole {@link @positron/css-numeric-link#NumericSumItem}.
   *
   * @throws `TypeError` If the resulting sum contains more than one item.
   */
  protected createSumValueItem($this: CssNumericValue): NumericSumItem {
    return assert(
      this.createSumValue($this),
      ({ length }) => length === 1,
      () => error("Cannot create a sum value", TypeError),
    )[0];
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

    return never("Cannot create a sum value", TypeError);
  }

  /**
   * The {@link NumericConverter.getMaxMinSumItem} method selects the
   * winning {@link @positron/css-numeric-impl#NumericSumItem} using `maxmin`,
   * propagating `NaN` when present.
   *
   * @param item1 - The candidate sum item.
   *
   * @param item2 - The accumulated sum item.
   *
   * @param maxmin - The comparison function (`Math.max` or `Math.min`).
   *
   * @returns The selected {@link @positron/css-numeric-impl#NumericSumItem}.
   */
  protected getMaxMinSumItem(
    item1: NumericSumItem,
    item2: NumericSumItem,
    maxmin: (value1: number, value2: number) => number,
  ) {
    const { value: value1 } = item1;

    return maxmin(value1, item2.value) === value1 || Number.isNaN(value1)
      ? item1
      : item2;
  }

  /**
   * The {@link NumericConverter.parseNumericUnit} method normalizes a unit
   * string into a {@link @positron/css-numeric-impl#NumericUnit}.
   *
   * @param unitLike - The raw unit identifier or `"%"`.
   *
   * @returns The normalized {@link @positron/css-numeric-impl#NumericUnit}.
   *
   * @throws `SyntaxError` If `unitLike` is not a valid unit identifier.
   */
  protected parseNumericUnit(unitLike: string): NumericUnit {
    return assertNonNullish(toNumericUnit(unitLike), () =>
      error(`Invalid unit: ${unitLike}`, SyntaxError),
    );
  }
}
