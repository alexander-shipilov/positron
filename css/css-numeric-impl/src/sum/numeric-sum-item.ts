import type { NumericUnitMap } from "../unit-map/numeric-unit-map";

/**
 * https://www.w3.org/TR/css-typed-om-1/#cssnumericvalue-sum-value
 *
 * A sum value is a list. Each entry in the list is a tuple of a value, which
 * is a number, and a unit map, which is a map of units (strings) to powers
 * (integers).
 *
 * @privateRemarks
 *   For optimization purposes {@link NumericSumItem} is not a tuple.
 *
 *
 * @public
 */
export interface NumericSumItem {
  /**
   * The {@link NumericSumItem.units} property represents a unit map.
   */
  readonly units: NumericUnitMap;

  /**
   * The {@link NumericSumItem.value} property represents a value.
   */
  readonly value: number;
}
