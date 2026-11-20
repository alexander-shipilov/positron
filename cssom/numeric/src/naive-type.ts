import type { CssNumericTypePercentHint } from "@positron/css-numeric";
import type { Nullish } from "@positron/lang";
import { CssNumericBaseType } from "@positron/css-numeric";
import {
  CssAngleUnits,
  CssFlexUnits,
  CssFrequencyUnits,
  CssLengthUnits,
  CssResolutionUnits,
  CssTimeUnits,
} from "@positron/css-unit";
import { assertNonNullish, error, never } from "@positron/lang";

import type { TypeEntries, TypeEntry } from "./numeric-impl/type";
import type { Unit, UnitMap } from "./numeric-impl/unit";
import { BASE_TYPES } from "./numeric-impl/base-types";
import { NON_PERCENT_TYPES } from "./numeric-impl/non-percent-types";
import { isNumberUnit } from "./numeric-impl/number";
import { isPercentUnit } from "./numeric-impl/percent";
import { toPower } from "./numeric-impl/to-power";

/**
 * https://www.w3.org/TR/css-typed-om-1/#cssnumericvalue-type
 *
 * Each CSSNumericValue has an associated type, which is a map of base types
 * to integers (denoting the exponent of each type, so a <length>2, such as
 * from calc(1px * 1em), is «[ "length" → 2 ]»), and an associated percent
 * hint (indicating that the type actually holds a percentage, but that
 * percentage will eventually resolve to the hinted base type, and so has
 * been replaced with it in the type).
 *
 * The base types are "length", "angle", "time", "frequency", "resolution",
 * "flex", and "percent". The ordering of a type’s entries always matches
 * this base type ordering.
 *
 * The percent hint is either null or a base type other than "percent".
 *
 * @privateRemarks
 *   For optimization purposes {@link NaiveType} is as plain object that
 *   contains all base types, which is `0` by default.
 *
 * @internal
 */
export class NaiveType implements Iterable<TypeEntry>, TypeEntries {
  /**
   * https://www.w3.org/TR/css-typed-om-1/#cssnumericvalue-create-a-type
   *
   * To create a type from a string `unit`, follow the appropriate branch of
   * the following:
   *
   * `unit` is "number"
   *
   *     Return «[ ]» (empty map)
   *
   * `unit` is "percent"
   *
   *    Return «[ "percent" → 1 ]»
   *
   * `unit` is a <length> unit
   *
   *    Return «[ "length" → 1 ]»
   *
   * `unit` is an <angle> unit
   *
   *    Return «[ "angle" → 1 ]»
   *
   * `unit` is a <time> unit
   *
   *    Return «[ "time" → 1 ]»
   *
   * `unit` is a <frequency> unit
   *
   *    Return «[ "frequency" → 1 ]»
   *
   * `unit` is a <resolution> unit
   *
   *    Return «[ "resolution" → 1 ]»
   *
   * `unit` is a <flex> unit
   *
   *    Return «[ "flex" → 1 ]»
   *
   * anything else
   *
   *    Return failure.
   *
   * In all cases, the associated percent hint is null.
   */
  public static fromUnit(unit: Unit, power: number = 1): NaiveType {
    switch (true) {
      case isNumberUnit(unit):
        return new NaiveType();
      case isPercentUnit(unit):
        return new NaiveType({ [CssNumericBaseType.percent]: power });
      case CssLengthUnits.has(unit):
        return new NaiveType({ [CssNumericBaseType.length]: power });
      case CssAngleUnits.has(unit):
        return new NaiveType({ [CssNumericBaseType.angle]: power });
      case CssFrequencyUnits.has(unit):
        return new NaiveType({ [CssNumericBaseType.frequency]: power });
      case CssFlexUnits.has(unit):
        return new NaiveType({ [CssNumericBaseType.flex]: power });
      case CssResolutionUnits.has(unit):
        return new NaiveType({ [CssNumericBaseType.resolution]: power });
      case CssTimeUnits.has(unit):
        return new NaiveType({ [CssNumericBaseType.time]: power });
      default:
        return never("Unknown unit", TypeError);
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
  public static fromUnitMap(unitMap: UnitMap): NaiveType {
    let result: NaiveType | null = null;

    for (const [unit, power] of unitMap) {
      const type = NaiveType.fromUnit(unit, power);

      result = result === null ? type : type.mul(result);
    }

    return assertNonNullish(result, () =>
      error("Unable to create a type from an empty unit map", TypeError),
    );
  }

  /**
   * 2. If both `type1` and `type2` have non-null percent hints with
   *    different values, the types can’t be multiplied.
   *    Return failure.
   *
   * 3. If `type1` has a non-null percent hint `hint` and `type2` doesn’t,
   *    apply the percent hint `hint` to `type2`.
   *
   *    Vice versa if `type2` has a non-null percent hint and `type1`
   *    doesn’t.
   */
  protected static equalizePercentHints(type1: NaiveType, type2: NaiveType) {
    const { percentHint: hint1 } = type1;
    const { percentHint: hint2 } = type2;

    if (hint1 !== null && hint2 === null) {
      type2.applyPercentHint(hint1);
    } else if (hint1 === null && hint2 !== null) {
      type1.applyPercentHint(hint2);
    } else if (hint1 !== hint2) {
      never("Incompatible types", TypeError);
    }
  }

  public [CssNumericBaseType.angle] = 0;

  public [CssNumericBaseType.flex] = 0;

  public [CssNumericBaseType.frequency] = 0;

  public [CssNumericBaseType.length] = 0;

  public [CssNumericBaseType.percent] = 0;

  public [CssNumericBaseType.resolution] = 0;

  public [CssNumericBaseType.time] = 0;

  public percentHint: Nullish<CssNumericTypePercentHint>;

  /**
   *
   * @param entries - The entries object.
   *
   * @param percentHint - The percent hint.
   */
  public constructor(
    entries: Readonly<TypeEntries> = {},
    percentHint: Nullish<CssNumericTypePercentHint> = null,
  ) {
    for (const baseType of BASE_TYPES) {
      this[baseType] = toPower(entries[baseType] ?? 0);
    }

    this.percentHint = percentHint;
  }

  /**
   * https://www.w3.org/TR/css-typed-om-1/#cssnumericvalue-add-two-types
   *
   * To add two types `type1` and `type2`, perform the following steps:
   *
   * 1. Replace `type1` with a fresh copy of `type1`, and `type2` with
   *    a fresh copy of `type2`. Let `finalType` be a new type with an
   *    initially empty ordered map and an initially null percent hint.
   *
   * 2. If both `type1` and `type2` have non-null percent hints with
   *    different values
   *
   *       The types can’t be added. Return failure.
   *
   *    If `type1` has a non-null percent hint `hint` and `type2` doesn’t
   *
   *       Apply the percent hint `hint` to `type2`.
   *
   *       Vice versa if `type2` has a non-null percent hint and `type1`
   *       doesn’t.
   *
   *    Otherwise
   *
   *       Continue to the next step.
   *
   *  3. If all the entries of `type1` with non-zero values are contained
   *    in `type2` with the same value, and vice-versa
   *
   *       Copy all of `type1`’s entries to `finalType`, and then copy all
   *       of `type2`’s entries to `finalType` that `finalType` doesn’t
   *       already contain. Set `finalType`’s percent hint to `type1`’s
   *       percent hint. Return `finalType`.
   *
   *    If `type1` and/or `type2` contain "percent" with a non-zero value,
   *    and `type1` and/or `type2` contain a key other than "percent" with
   *    a non-zero value
   *
   *       For each base type other than "percent" `hint`:
   *
   *          1. Provisionally apply the percent hint `hint` to both
   *            `type1` and `type2`.
   *
   *          2. If, afterwards, all the entries of `type1` with non-zero
   *             values are contained in `type2` with the same value, and
   *             vice versa, then copy all of `type1`’s entries
   *             to `finalType`, and then copy all of `type2`’s entries
   *             to `finalType` that `finalType` doesn’t already contain.
   *             Set `finalType`’s percent hint to `hint`.
   *             Return `finalType`.
   *
   *          3. Otherwise, revert `type1` and `type2` to their state at
   *             the start of this loop.
   *
   *       If the loop finishes without returning `finalType`, then the
   *       types can’t be added. Return failure.
   *
   *       Note: You can shortcut this in some cases by just checking the
   *       sum of all the values of `type1` vs `type2`. If the sums are
   *       different, the types can’t be added.
   *
   *   Otherwise
   *
   *     The types can’t be added. Return failure.
   */
  public add(...types: NaiveType[]): NaiveType {
    // eslint-disable-next-line complexity
    return types.reduce((type1: NaiveType, type2: NaiveType) => {
      // `type1` is already a fresh copy that acts as `finalType`
      type2 = type2.copy();

      NaiveType.equalizePercentHints(type1, type2);

      if (type1.equals(type2)) {
        return type1;
      }

      if (
        (type1.hasPercent() || type2.hasPercent()) &&
        (type1.hasNonPercent() || type2.hasNonPercent())
      ) {
        for (const hint of NON_PERCENT_TYPES) {
          const temp1 = type1.copy().applyPercentHint(hint);
          const temp2 = type2.copy().applyPercentHint(hint);

          if (temp1.equals(temp2)) {
            return temp1;
          }
        }
      }

      return never("Incompatible types", TypeError);
    }, this.copy());
  }

  /**
   * The {@link NaiveType.copy} creates a fresh copy of this map.
   *
   * @returns A new instance of {@link NaiveType}.
   */
  public copy(): NaiveType {
    return new NaiveType(this, this.percentHint);
  }

  /**
   * The {@link NaiveType.equals} method compares the passed `type` to  this
   * type for equality.
   */
  public equals(type: NaiveType): boolean {
    return (
      this === type ||
      (this.percentHint === type.percentHint &&
        BASE_TYPES.every((baseType) => this[baseType] === type[baseType]))
    );
  }

  /**
   * The {@link NaiveType.hasNonPercent} method determines whether this map
   * contains at least one non-zero entry that is not a percentage.
   */
  public hasNonPercent(): boolean {
    return NON_PERCENT_TYPES.some((baseType) => this[baseType] !== 0);
  }

  /**
   * The {@link NaiveType.hasPercent} method determines whether this map
   * contains non-zero percentage entry.
   */
  public hasPercent(): boolean {
    return this[CssNumericBaseType.percent] !== 0;
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
  public inv(): NaiveType {
    const entries: TypeEntries = {};

    for (const { baseType, power } of this) {
      entries[baseType] = -power;
    }

    return new NaiveType(entries, this.percentHint);
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
  public mul(...types: NaiveType[]) {
    return types.reduce((type1, type2) => {
      // `type1` is already a fresh copy that acts as `finalType`
      type2 = type2.copy();

      NaiveType.equalizePercentHints(type1, type2);

      for (const { baseType, power } of type2) {
        type1[baseType] = toPower(type1[baseType] + power);
      }

      return type1;
    }, this.copy());
  }

  /**
   * The `[Symbol.iterator]` method returns an iterable iterator object to
   * iterate over entries.
   *
   * @returns An iterable iterator.
   */
  public *[Symbol.iterator](): IterableIterator<TypeEntry> {
    for (const baseType of BASE_TYPES) {
      yield { baseType, power: this[baseType] };
    }
  }

  /**
   * https://www.w3.org/TR/css-typed-om-1/#apply-the-percent-hint
   *
   * To apply the percent hint `hint` to a `type`, perform the following
   * steps:
   *
   * 1. If `type` doesn’t contain `hint`, set `type`[`hint`] to 0.
   *
   * 2. If `type` contains "percent", add `type`["percent"] to `type`[`hint`],
   *    then set `type`["percent"] to 0.
   *
   * 3. Set `type`’s percent hint to `hint`.
   */
  protected applyPercentHint(hint: CssNumericTypePercentHint): this {
    if (this.hasPercent()) {
      this[hint] = toPower(this[hint] + this[CssNumericBaseType.percent]);
      this[CssNumericBaseType.percent] = 0;
    }

    this.percentHint = hint;

    return this;
  }
}
