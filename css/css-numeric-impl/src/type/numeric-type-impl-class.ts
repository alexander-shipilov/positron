import type { CssNumericTypePercentHint } from "@positron/css-numeric";
import type { Nullish } from "@positron/lang";

import type { NumericTypeEntries } from "./numeric-type-entries";
import type { NumericTypeImpl } from "./numeric-type-impl";

/**
 * The {@link NumericTypeImplClass} interface represents the constructor and
 * static helpers for {@link NumericTypeImpl} instances.
 *
 * @public
 */
export interface NumericTypeImplClass {
  /**
   * Creates a new {@link NumericTypeImpl} instance from optional base type
   * exponents and an optional percent hint.
   *
   * @param entries - Optional initial base type exponents.
   *
   * @param percentHint - Optional base type hint for percentages.
   */
  new (
    entries?: Readonly<NumericTypeEntries>,
    percentHint?: Nullish<CssNumericTypePercentHint>,
  ): NumericTypeImpl;

  /**
   * Aligns the percent hints of `type1` and `type2` in place when one has a
   * hint and the other does not.
   *
   * @param type1 - The first numeric type to equalize.
   *
   * @param type2 - The second numeric type to equalize.
   *
   * @throws `TypeError` If `type1` and `type2` specify conflicting non-null
   *   percent hints.
   */
  equalizePercentHints(type1: NumericTypeImpl, type2: NumericTypeImpl): void;
}
