import type { CssNumericTypePercentHint } from "@positron/css-numeric";
import type {
  NumericTypeEntries,
  NumericTypeImpl,
} from "@positron/css-numeric-impl";
import type { Nullish } from "@positron/lang";
import { CssNumericBaseType } from "@positron/css-numeric";
import { toPower } from "@positron/css-numeric-impl";
import { never } from "@positron/lang";

import { BASE_TYPES } from "./shared/base-types";
import { NON_PERCENT_TYPES } from "./shared/non-percent-types";

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
 *   For optimization purposes {@link NumericType} is as plain object that
 *   contains all base types, which is `0` by default.
 *
 * @public
 */
export class NumericType implements NumericTypeImpl {
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
  public static equalizePercentHints(type1: NumericType, type2: NumericType) {
    const { percentHint: hint1 } = type1;
    const { percentHint: hint2 } = type2;

    if (hint1 !== null && hint2 === null) {
      type2.setPercentHint(hint1);
    } else if (hint1 === null && hint2 !== null) {
      type1.setPercentHint(hint2);
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
    entries: Readonly<NumericTypeEntries> = {},
    percentHint: Nullish<CssNumericTypePercentHint> = null,
  ) {
    for (const baseType of BASE_TYPES) {
      this[baseType] = toPower(entries[baseType] ?? 0);
    }

    this.percentHint = percentHint;
  }

  /**
   * The {@link NumericType.copy} creates a fresh copy of this map.
   *
   * @returns A new instance of {@link NumericType}.
   */
  public copy(): NumericType {
    return new NumericType(this, this.percentHint);
  }

  /**
   * The {@link NumericType.equals} method compares the passed `type` to  this
   * type for equality.
   */
  public equals(type: NumericType): boolean {
    return (
      this === type ||
      (this.percentHint === type.percentHint &&
        BASE_TYPES.every((baseType) => this[baseType] === type[baseType]))
    );
  }

  /**
   * The {@link NumericType.hasNonPercent} method determines whether this map
   * contains at least one non-zero entry that is not a percentage.
   */
  public hasNonPercent(): boolean {
    return NON_PERCENT_TYPES.some((baseType) => this[baseType] !== 0);
  }

  /**
   * The {@link NumericType.hasPercent} method determines whether this map
   * contains non-zero percentage entry.
   */
  public hasPercent(): boolean {
    return this[CssNumericBaseType.percent] !== 0;
  }

  public set(baseType: CssNumericBaseType, power: number): this {
    this[baseType] = toPower(power);

    return this;
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
  public setPercentHint(hint: CssNumericTypePercentHint): this {
    if (this.hasPercent()) {
      this[hint] = toPower(this[hint] + this[CssNumericBaseType.percent]);
      this[CssNumericBaseType.percent] = 0;
    }

    this.percentHint = hint;

    return this;
  }

  /**
   * The `[Symbol.iterator]` method returns an iterable iterator object to
   * iterate over entries.
   *
   * @returns An iterable iterator.
   */
  public *[Symbol.iterator](): IterableIterator<[CssNumericBaseType, number]> {
    for (const baseType of BASE_TYPES) {
      yield [baseType, this[baseType]];
    }
  }
}
