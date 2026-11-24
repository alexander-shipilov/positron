import type { NumericUnitMap } from "../unit-map/numeric-unit-map";

/**
 * The {@link NumericSumItem} interface represents a single term in a
 * {@link NumericSum}, pairing a numeric value with a map of unit exponents.
 *
 * @remarks
 *   See https://www.w3.org/TR/css-typed-om-1/#cssnumericvalue-sum-value.
 *
 * @privateRemarks
 *   For optimization purposes {@link NumericSumItem} is an object rather than
 *   a tuple.
 *
 * @public
 */
export interface NumericSumItem {
  /**
   * The {@link NumericSumItem.units} read-only property returns the unit
   * exponent map for this sum term.
   */
  readonly units: NumericUnitMap;

  /**
   * The {@link NumericSumItem.value} read-only property returns the numeric
   * coefficient of this sum term.
   */
  readonly value: number;
}
