import type {
  CssNumericTypeOperationsImpl,
  NumericTypeEntries,
  NumericTypeImpl,
  NumericTypeImplClass,
  NumericUnit,
  NumericUnitMap,
} from "@positron/css-numeric-impl";
import { CssNumericBaseType } from "@positron/css-numeric";
import { isNumberUnit, isPercentUnit } from "@positron/css-numeric-impl";
import {
  CssAngleUnits,
  CssFlexUnits,
  CssFrequencyUnits,
  CssLengthUnits,
  CssResolutionUnits,
  CssTimeUnits,
} from "@positron/css-unit";
import { assertNonNullish, error, never } from "@positron/lang";

import { NON_PERCENT_TYPES } from "./shared/non-percent-types";

/**
 * @public
 */
export abstract class NumericTypeOperations implements CssNumericTypeOperationsImpl {
  protected abstract readonly NumericType: NumericTypeImplClass;

  /**
   * https://www.w3.org/TR/css-typed-om-1/#cssnumericvalue-add-two-types
   *
   * To add two types `type1` and `type2`, perform the following steps:
   *
   * 1. Replace `type1` with a fresh copy of `type1`, and `type2` with a fresh
   *    copy of `type2`. Let `finalType` be a new type with an initially empty
   *    ordered map and an initially null percent hint.
   *
   * 2. If both `type1` and `type2` have non-null percent hints with
   *    different values
   *
   *    - The types can’t be added. Return failure.
   *
   *    If `type1` has a non-null percent hint `hint` and `type2` doesn’t
   *
   *    - Apply the percent hint `hint` to `type2`.
   *
   *    - Vice versa if `type2` has a non-null percent hint and `type1` doesn’t.
   *
   *    Otherwise
   *
   *    - Continue to the next step.
   *
   * 3. If all the entries of `type1` with non-zero values are contained
   *    in `type2` with the same value, and vice-versa
   *
   *    - Copy all of `type1`’s entries to `finalType`, and then copy all
   *      of `type2`’s entries to `finalType` that `finalType` doesn’t already
   *      contain. Set `finalType`’s percent hint to `type1`’s percent hint.
   *      Return `finalType`.
   *
   *    If `type1` and/or `type2` contain "percent" with a non-zero value,
   *    and `type1` and/or `type2` contain a key other than "percent" with
   *    a non-zero value
   *
   *    For each base type other than "percent" `hint`:
   *
   *    1. Provisionally apply the percent hint `hint` to both `type1`
   *       and `type2`.
   *
   *    2. If, afterwards, all the entries of `type1` with non-zero values are
   *       contained in `type2` with the same value, and vice versa, then copy
   *       all of `type1`’s entries to `finalType`, and then copy all of
   *       `type2`’s entries to `finalType` that `finalType` doesn’t already
   *       contain. Set `finalType`’s percent hint to `hint`.
   *       Return `finalType`.
   *
   *    3. Otherwise, revert `type1` and `type2` to their state at the start of
   *       this loop.
   *
   *    If the loop finishes without returning `finalType`, then the types
   *    can’t be added.
   *    Return failure.
   *
   *    Note: You can shortcut this in some cases by just checking the
   *    sum of all the values of `type1` vs `type2`. If the sums are
   *    different, the types can’t be added.
   *
   *    Otherwise
   *
   *    The types can’t be added. Return failure.
   */
  public addNumericTypes(
    type1: NumericTypeImpl,
    ...types: [NumericTypeImpl, ...NumericTypeImpl[]]
  ): NumericTypeImpl {
    const { NumericType } = this;

    // eslint-disable-next-line complexity
    return types.reduce((type1: NumericTypeImpl, type2: NumericTypeImpl) => {
      // `type1` is already a fresh copy that acts as `finalType`
      type2 = type2.copy();

      NumericType.equalizePercentHints(type1, type2);

      if (type1.equals(type2)) {
        return type1;
      }

      if (
        (type1.hasPercent() || type2.hasPercent()) &&
        (type1.hasNonPercent() || type2.hasNonPercent())
      ) {
        for (const hint of NON_PERCENT_TYPES) {
          const temp1 = type1.copy().setPercentHint(hint);
          const temp2 = type2.copy().setPercentHint(hint);

          if (temp1.equals(temp2)) {
            return temp1;
          }
        }
      }

      return never("Incompatible types", TypeError);
    }, type1.copy());
  }

  /**
   * https://www.w3.org/TR/css-typed-om-1/#cssnumericvalue-create-a-type
   *
   * To create a type from a string `unit`, follow the appropriate branch of
   * the following:
   *
   * `unit` is "number"
   *     Return «[ ]» (empty map)
   *
   * `unit` is "percent"
   *    Return «[ "percent" → 1 ]»
   *
   * `unit` is a <length> unit
   *    Return «[ "length" → 1 ]»
   *
   * `unit` is an <angle> unit
   *    Return «[ "angle" → 1 ]»
   *
   * `unit` is a <time> unit
   *    Return «[ "time" → 1 ]»
   *
   * `unit` is a <frequency> unit
   *    Return «[ "frequency" → 1 ]»
   *
   * `unit` is a <resolution> unit
   *    Return «[ "resolution" → 1 ]»
   *
   * `unit` is a <flex> unit
   *    Return «[ "flex" → 1 ]»
   *
   * anything else
   *    Return failure.
   *
   * In all cases, the associated percent hint is null.
   */
  public createNumericTypeFromUnit(
    unit: NumericUnit,
    power?: number,
  ): NumericTypeImpl {
    const { NumericType } = this;

    switch (true) {
      case isNumberUnit(unit):
        return new NumericType();
      case isPercentUnit(unit):
        return new NumericType({ [CssNumericBaseType.percent]: power });
      case CssLengthUnits.has(unit):
        return new NumericType({ [CssNumericBaseType.length]: power });
      case CssAngleUnits.has(unit):
        return new NumericType({ [CssNumericBaseType.angle]: power });
      case CssFrequencyUnits.has(unit):
        return new NumericType({ [CssNumericBaseType.frequency]: power });
      case CssFlexUnits.has(unit):
        return new NumericType({ [CssNumericBaseType.flex]: power });
      case CssResolutionUnits.has(unit):
        return new NumericType({ [CssNumericBaseType.resolution]: power });
      case CssTimeUnits.has(unit):
        return new NumericType({ [CssNumericBaseType.time]: power });
      default:
        return never("Invalid unit", TypeError);
    }
  }

  /**
   * https://www.w3.org/TR/css-typed-om-1/#create-a-type-from-a-unit-map
   *
   * To create a type from a unit map `unit map`:
   *
   * 1. Let `types` be an initially empty list.
   *
   * 2. For each `unit` → `power` in `unit map`:
   *
   *    1. Let `type` be the result of creating a type from `unit`.
   *
   *    2. Set `type`’s sole value to `power`.
   *
   *    3. Append `type` to `types`.
   *
   * 3. Return the result of multiplying all the items of `types`.
   */
  public createNumericTypeFromUnitMap(
    unitMap: NumericUnitMap,
  ): NumericTypeImpl {
    let result: NumericTypeImpl | null = null;

    for (const [unit, power] of unitMap) {
      const type = this.createNumericTypeFromUnit(unit, power);

      result = result === null ? type : this.multiplyNumericTypes(result, type);
    }

    return assertNonNullish(result, () =>
      error("Unable to create a type from an empty unit map", TypeError),
    );
  }

  /**
   * https://www.w3.org/TR/css-typed-om-1/#cssnumericvalue-invert-a-type
   *
   * To invert a type `type`, perform the following steps:
   *
   * 1. Let `result` be a new type with an initially empty ordered map and a
   *    percent hint matching that of `type`.
   *
   * 2. For each `unit` → `exponent` of type,
   *    set `result`[`unit`] to (-1 * `exponent`).
   *
   * 3. Return `result`.
   */
  public invertNumericType(type: NumericTypeImpl): NumericTypeImpl {
    const entries: NumericTypeEntries = {};

    for (const [baseType, power] of type) {
      entries[baseType] = -power;
    }

    return new this.NumericType(entries, type.percentHint);
  }

  /**
   * https://www.w3.org/TR/css-typed-om-1/#cssnumericvalue-multiply-two-types
   *
   * To multiply two types `type1` and `type2`, perform the following steps:
   *
   * 1. Replace `type1` with a fresh copy of `type1`, and `type2` with a
   *    fresh copy of `type2`. Let `finalType` be a new type with an
   *    initially empty ordered map and an initially null percent hint.
   *
   * 2. If both `type1` and `type2` have non-null percent hints with
   *    different values, the types can’t be multiplied.
   *    Return failure.
   *
   * 3. If `type1` has a non-null percent hint `hint` and `type2` doesn’t,
   *    apply the percent hint `hint` to `type2`.
   *
   *    Vice versa if `type2` has a non-null percent hint and `type1`
   *    doesn’t.
   *
   * 4. Copy all of `type1`’s entries to `finalType`, then for
   *    each `baseType` → `power` of `type2`:
   *
   *       1. If `finalType`[`baseType`] exists, increment its value
   *          by `power`.
   *
   *       2. Otherwise, set `finalType`[`baseType`] to `power`.
   *
   *    Set `finalType`’s percent hint to `type1`’s percent hint.
   *
   * 5. Return `finalType`.
   */
  public multiplyNumericTypes(
    type: NumericTypeImpl,
    ...types: [NumericTypeImpl, ...NumericTypeImpl[]]
  ): NumericTypeImpl {
    const { NumericType } = this;

    return types.reduce((type1, type2) => {
      // `type1` is already a fresh copy that acts as `finalType`
      type2 = type2.copy();

      NumericType.equalizePercentHints(type1, type2);

      for (const [baseType, power] of type2) {
        type1.set(baseType, type1[baseType] + power);
      }

      return type1;
    }, type.copy());
  }
}
