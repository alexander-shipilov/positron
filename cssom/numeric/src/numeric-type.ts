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
 * The {@link NumericType} class represents a mutable CSS Typed OM numeric
 * type map storing integer exponents for each base type and an optional
 * percent hint.
 *
 * @remarks
 *   See https://www.w3.org/TR/css-typed-om-1/#cssnumericvalue-type.
 *
 * @privateRemarks
 *   For optimization purposes {@link NumericType} is stored as a plain object
 *   containing all base types initialized to `0` by default.
 *
 * @public
 */
export class NumericType implements NumericTypeImpl {
  /**
   * The {@link NumericType.equalizePercentHints} method aligns the percent
   * hints of `type1` and `type2` in place when one type carries a hint and the
   * other does not.
   *
   * @param type1 - The first numeric type to equalize.
   *
   * @param type2 - The second numeric type to equalize.
   *
   * @throws `TypeError` If both types have different non-null percent hints.
   */
  public static equalizePercentHints(
    type1: NumericType,
    type2: NumericType,
  ): void {
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

  /**
   * The {@link NumericType.angle} property holds the integer exponent of the
   * `<angle>` base type.
   */
  public [CssNumericBaseType.angle] = 0;

  /**
   * The {@link NumericType.flex} property holds the integer exponent of the
   * `<flex>` base type.
   */
  public [CssNumericBaseType.flex] = 0;

  /**
   * The {@link NumericType.frequency} property holds the integer exponent of
   * the `<frequency>` base type.
   */
  public [CssNumericBaseType.frequency] = 0;

  /**
   * The {@link NumericType.length} property holds the integer exponent of the
   * `<length>` base type.
   */
  public [CssNumericBaseType.length] = 0;

  /**
   * The {@link NumericType.percent} property holds the integer exponent of
   * the `<percentage>` base type.
   */
  public [CssNumericBaseType.percent] = 0;

  /**
   * The {@link NumericType.resolution} property holds the integer exponent of
   * the `<resolution>` base type.
   */
  public [CssNumericBaseType.resolution] = 0;

  /**
   * The {@link NumericType.time} property holds the integer exponent of the
   * `<time>` base type.
   */
  public [CssNumericBaseType.time] = 0;

  /**
   * The {@link NumericType.percentHint} property holds the hinted base type
   * to which percentages resolve, or `null` if unhinted.
   */
  public percentHint: Nullish<CssNumericTypePercentHint>;

  /**
   * The {@link NumericType} constructor creates a new numeric type from
   * optional base type entries and a percent hint.
   *
   * @param entries - The initial base type exponents.
   *
   * @param percentHint - The initial percent hint, defaulting to `null`.
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
   * {@inheritDoc @positron/css-numeric-impl#NumericTypeImpl.copy}
   */
  public copy(): NumericType {
    return new NumericType(this, this.percentHint);
  }

  /**
   * {@inheritDoc @positron/css-numeric-impl#NumericTypeImpl.equals}
   */
  public equals(type: NumericType): boolean {
    return (
      this === type ||
      (this.percentHint === type.percentHint &&
        BASE_TYPES.every((baseType) => this[baseType] === type[baseType]))
    );
  }

  /**
   * {@inheritDoc @positron/css-numeric-impl#NumericTypeImpl.hasNonPercent}
   */
  public hasNonPercent(): boolean {
    return NON_PERCENT_TYPES.some((baseType) => this[baseType] !== 0);
  }

  /**
   * {@inheritDoc @positron/css-numeric-impl#NumericTypeImpl.hasPercent}
   */
  public hasPercent(): boolean {
    return this[CssNumericBaseType.percent] !== 0;
  }

  /**
   * {@inheritDoc @positron/css-numeric-impl#NumericTypeImpl.set}
   */
  public set(baseType: CssNumericBaseType, power: number): this {
    this[baseType] = toPower(power);

    return this;
  }

  /**
   * {@inheritDoc @positron/css-numeric-impl#NumericTypeImpl.setPercentHint}
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
   * The `NumericType[Symbol.iterator]` method yields `[baseType, power]`
   * pairs in canonical base type order.
   *
   * @returns An iterable iterator over the base type entries.
   */
  public *[Symbol.iterator](): IterableIterator<[CssNumericBaseType, number]> {
    for (const baseType of BASE_TYPES) {
      yield [baseType, this[baseType]];
    }
  }
}
