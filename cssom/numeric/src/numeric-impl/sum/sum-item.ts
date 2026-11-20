import type { UnitMap } from "../unit";

/**
 * https://www.w3.org/TR/css-typed-om-1/#cssnumericvalue-sum-value
 *
 * A sum value is a list. Each entry in the list is a tuple of a value, which
 * is a number, and a unit map, which is a map of units (strings) to powers
 * (integers).
 *
 * @privateRemarks
 *   For optimization purposes {@link SumItem} is not a tuple.
 *
 *
 * @internal
 */
export interface SumItem {
  /**
   * The {@link SumItem.units} property represents a unit map.
   */
  readonly units: UnitMap;

  /**
   * The {@link SumItem.value} property represents a value.
   */
  readonly value: number;
}
